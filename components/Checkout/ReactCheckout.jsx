import * as React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class Payment extends React.PureComponent {
//   onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={token => {
            console.log(token)
        }}
        stripeKey={process.env.STRIPE_PUBLIC_KEY}
      />
    )
  }
}