import React, {Component} from "react"
import {connect} from "react-redux"
import {sumBy} from "lodash"
import {formatPrice} from "../assets/help-functions";
import * as CartSelector from "../selectors/CartSelectors"
import * as CartActions from "../reducers/cartReducer"

type Props = {
    cart: Object[],
    cartSize: number,
    totalCost: number
}

class MenuComponent extends Component {
    props: Props;

    getTotalCost = () => {
        return formatPrice(this.props.totalCost);
    }
    
    render() {

        console.log("CART:  ", this.props.cart);
        return (
            <div>
                <img alt="shopping cart logo" height="15" width="15" src="https://image.flaticon.com/icons/png/128/25/25619.png"/> 
                 Varukorg ({this.props.cartSize})
                <br/>
                {this.getTotalCost()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartSize: CartSelector.getCartSize(state),
    cart: CartSelector.getShoppingCart(state),
    totalCost: CartSelector.getCost(state)
});

const mapDispatchToProps = {
    getCart: CartActions.requestShoppingCart
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);