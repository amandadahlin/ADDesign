import React, {Component} from "react";
import { connect } from 'react-redux';
import './Painting.css'
import Modal from "./Modal";
import * as CartReducerActions from '../reducers/cartReducer'
import * as CartSelectors from "../selectors/CartSelectors"
import {formatPrice} from "../assets/help-functions"
import { isInCart } from "../selectors/CartSelectors";

type OwnProps = {
    id: number,
    price: number,
    image: string,
    height: number,
    width: number,
    name: string,
    description: string
}

type Props = {
    cart: Object[],
    addProduct: Function,
    removeProduct: Function,
    onClick: Function,
    isInCart: boolean
} & OwnProps;

type State = {
    reserved: boolean,
    showModal: boolean
}

class Painting extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            reserved: props.isInCart,
            showModal: false
        };
        this.addPaintingToCart = this.addPaintingToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.openReadMoreModal = this.openReadMoreModal.bind(this);
        this.closeReadMoreModal = this.closeReadMoreModal.bind(this);
        this.getReadMoreContent = this.getReadMoreContent.bind(this);
    }
    
    addPaintingToCart() {
        if (!this.props.id) return;
        this.props.addProduct(this.props);
        this.setState({
            reserved: true
        })
    }

    removeFromCart() {
        this.props.removeProduct(this.props);
        this.setState({
            reserved: false
        })
    }

    openReadMoreModal() {
        this.setState({showModal: true});
    }

    closeReadMoreModal() {
        this.setState({showModal: false});
    }

    getReadMoreContent() {
        const painting = {
            width: this.props.width / 2,
            height: this.props.height / 2,
            backgroundImage: `url(${this.props.image})`,
            // width: '50%',
            backgroundSize: 'cover',
            display: 'flex',
            adjustContent: 'center',
            minHeight: '300px',
            minWidth: '250px'
        }

        const modalBody = {
            display: 'flex',
            flexDirection: 'row'
        }

        const half = {
            width: '50%',
            paddingLeft: '10px',
            display: 'flex',
            flexDirection: 'column',
            adjustContent: 'center'
        }

        return (
            <div style={modalBody}>
                <div style={painting} />
                <div style={half}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                    <p>Mått:</p>
                    <p>
                        Höjd: {this.props.height} cm<br/>
                        Bredd: {this.props.width} cm
                    </p>
                </div>
            </div>
        );
    }

    render() {
        const divStyle = {
            backgroundImage: `url(${this.props.image})`
        }

        return (
            <div className="root">
                {this.state.showModal && <Modal onClose={this.closeReadMoreModal}>{this.getReadMoreContent()}</Modal>}
                <div className="item" style={divStyle}>
                    <div className="overlay"></div>
                    {this.state.reserved 
                        ?
                            <div className="overlay2">
                                <button
                                    className="inCart"
                                    onClick={this.removeFromCart}
                                >
                                    Ta bort från varukorgen
                                </button>
                            </div>
                        :
                        <button 
                            className="button" 
                            onClick={this.addPaintingToCart}
                            disabled={this.state.reserved}
                        >
                            "Lägg i varukorgen"
                        </button>
                    }
                </div>
                <p className="price">{this.props.price} SEK</p>
                <button 
                    className="add" 
                    onClick={this.openReadMoreModal}
                >
                    Mer information
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    cart: CartSelectors.getShoppingCart(state),
    isInCart: CartSelectors.isInCart(state, props.id)
});

const mapDispatchToProps = {
    addProduct: CartReducerActions.addToCart,
    removeProduct: CartReducerActions.removeFromCart,
    openReadMoreModal: CartReducerActions.openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Painting);