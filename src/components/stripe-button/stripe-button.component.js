import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { publishableKey } from "./stripe-publish-key.config";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="e-comerce"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
