import React from 'react'

export default function Checkout(props) {
  return (
    <div className='checkout-steps'>
        <div className={props.steps1 ? "active" : ""}>SignIn</div>
        <div className={props.steps2 ? "active" : ""}>Shipping</div>
        <div className={props.steps3 ? "active" : ""}>Payment</div>
        <div className={props.steps4 ? "active" : ""}>Place Order</div>
    </div>
  )
}
