import React from "react";
import "../stylesheets/Contact.css";
import { Form, textArea } from "react-bootstrap";
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        id="contactForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mjvplrjl"
        method="POST"
      >
        <label>Name:</label>
        <input id="formNameInput" type="text" name="Name" />
        <label>Email:</label>
        <input id="formEmailInput" type="email" name="email" />
        <label>Message:</label>

        <textarea
          id="formMessageInput"
          type="textarea"
          name="message"
        ></textarea>

        <br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
