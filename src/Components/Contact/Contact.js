import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      ` My Name is ${data.name},My Phone Number is ${data.phone} and  Email Id is ${data.email},Here is What I want to Say ${data.msg} `
    );
  };
  return (
    <>
      <div className="my-4">
        <h1 className="contact_header text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName:
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="name"
                  value={data.name}
                  onChange={InputEvent}
                  name="name"
                  placeholder="Enter Your FullName"
                />
              </div>
              <div className="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number:
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="mb-2">
                <label for="FormControlInput" class="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-2">
                <label for="Textarea" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="Textarea"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-10">
                <button className="btn btn-warning" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
