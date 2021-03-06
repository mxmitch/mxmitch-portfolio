import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container padding-offset">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <div style={{textAlign: "center"}}>
            <h4>Like what you see? Let's have a chat.</h4>
            <p>I can be contacted at <a href="mailto:mklum88@gmail.com">mklum88@gmail.com</a> or through the form below.</p>
          </div>
          <form
            action={`https://formspree.io/${this.props.data}`}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
