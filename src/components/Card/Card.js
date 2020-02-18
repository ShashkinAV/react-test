import React from 'react';

const Card = (props) => {
    return (
        <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Free</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">$ {props.price} <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{props.users} users included</li>
          <li>{props.useStorage} of storage</li>
          <li>{props.useEmail}</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
      </div>
    </div>
    );
}

export default Card;