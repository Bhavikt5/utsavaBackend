import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscriber } from "../../actions/newsletterAction";

import "./Newsletter.css";

const Newsletter = () => {
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.newSubscriber);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createSubscriber = (e) => {
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);

    dispatch(subscriber(myForm));
  };

  useEffect(() => {
    if (success) {
      alert("Thankyou for Subscribing");
    }
  }, [dispatch, success]);

  return (
    <Fragment>
      <div className="newsletter">
        <h3>Subscribe to Get Latest Update</h3>
        <form onSubmit={createSubscriber}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="Btn">
            Subscribe
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Newsletter;
