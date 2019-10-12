import React, {Component} from "react";
import { connect } from "react-redux"
import {map, isEmpty} from "lodash"
import Checkout from "./Checkout"
import { Route, Link } from 'react-router-dom'
import * as CartReducerActions from '../reducers/cartReducer'
import * as CartSelectors from "../selectors/CartSelectors"
import {formatPrice} from "../assets/help-functions"
import './Cart.css'

type Props = {
    cart: Object[],
    getShoppingCart: Function,
    removeProduct: Function,
    totalCost: number
}

type State = {
    storedCart: Object[]
}

class Cart extends Component<Props, State> {
    props: Props;

    constructor(props: Props) {
        super(props);

        this.state = {
            storedCart: localStorage.getItem("cart")
        }

        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        console.log("STORED CART:   ", this.state.storedCart);
    }

    goToCheckout() {
        <Route exact path="/" component={Checkout} />
    }

    removeItem(product) {
        const {removeProduct} = this.props;
        this.props.removeProduct(product);
    }

    mergeCart(stored, cart) {       
        return cart.concat(stored);  

     }

    render() {
        const {cart} = this.props;

        const table = map(cart, (product, index) => (
                <div className="preview" key={product.name + index }>
                    <div className="thumbnail" style={{backgroundImage: `url(${product.image})`}}/>
                    <div className="info">
                        <h2>{product.name}:</h2>
                        <p>{formatPrice(product.price)}</p>
                    </div>
                    <div className="removeProduct">
                        <button onClick={() => this.removeItem(product)}>Ta bort från varukorg</button>
                    </div>
                </div>
            )
        );

        const content = isEmpty(table) ? <p>Inga varor i korgen</p> : table;

        return (
            <div className="body">
                <h1 className="header">Varukorg</h1>
                <hr />
                <div>
                    {content}
                </div>
                <div className="summary">
                    <div>Totalt pris: {formatPrice(this.props.totalCost)}</div>
                    <Link to="/checkout">Till kassan</Link>
                </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: CartSelectors.getShoppingCart(state),
    totalCost: CartSelectors.getCost(state)
});

const mapDispatchToProps = {
    getShoppingCart: CartReducerActions.requestShoppingCart,
    removeProduct: CartReducerActions.removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);