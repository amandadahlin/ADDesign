import React, {Component} from "react";
import "./Checkout.css";

const InvoiceComponent = () => (
    <div className="payment-option">
        Faktura
    </div>
)

const SwishComponent = () => (
    <div className="payment-option">
        SWISH
    </div>
)

class Checkout extends Component {
    
    render() {
        return (
            <div className="payment-container">
                <SwishComponent />
                <InvoiceComponent />
            </div>
        );
    }
}

export default Checkout;