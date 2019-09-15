import React, { Component } from "react";
import { navigate } from "gatsby-link";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // eslint-disable-next-line
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      // eslint-disable-next-line
      .catch(error => alert(error));
  };

  render() {
    const { title, subtitle, meta_title, meta_description } = this.props;
    return (
      <div>
        <Helmet>
          <title>{meta_title}</title>
          <meta name="description" content={meta_description} />
        </Helmet>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="section">
                    <h1 className="title">{title}</h1>
                    <h2 className="subtitle">{subtitle}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
          <div className="intro">
            <h2>Tell us about your project</h2>
            <p>Let us know a little bit more about your project using the form below. Don't worry if you can't fill in all the gaps, one of our consultants will be in touch to discuss your requirements further</p>
          </div>
          <hr/>
            <form
              name="contact"
              method="post"
              action="/contact/success"
              encType="application/x-www-form-urlencoded"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="step-section-content">
                <label className="step-section-title">About You</label>
                <p>Let us know who we are dealing with</p>
              </div>
              <div className="columns is-multiline">
                <div className="column is-6">
                  <div className="field">
                    <label className="label">Name *</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="field">
                    <label className="label">Company Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Company Name"
                        name="company"
                        id="company"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="field">
                    <label className="label">Email Address *</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="field">
                    <label className="label">Phone Number</label>
                    <div className="control">
                      <input
                        className="input"
                        type="phone"
                        placeholder="Number"
                        name="phone"
                        id="phone"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-section">
                <div className="step-section-content">
                  <label className="step-section-title">Project Status</label>
                  <p>Let us know if you’re just starting out on a new project, or already have something in place</p>
                </div>
                <div className="form-group has-checkbox">
                  <label className="radio">
                    <div className="radio-visual checked">
                      <input id="project_status_new" className="form-radio" type="radio" name="project_status" value="new" />
                    </div>
                  </label>
                  <label for="project_status_new">I’m looking to discuss a brand new project</label>
                </div>
                <div className="form-group has-checkbox">
                  <label className="radio">
                    <div className="radio-visual">
                      <input id="project_status_existing" className="form-radio" type="radio" name="project_status" value="existing" />
                    </div>
                  </label>
                  <label for="project_status_existing">I’m looking for a new team to help with an existing project</label>
                </div>
              </div>

              <div className="step-section">
                  <div className="step-section-content"><label className="step-section-title">What does your project consist of?</label>
                      <p>Check the boxes below next to the elements where you require assistance. Check all that apply.</p>
                  </div>
                  <div className="form-group has-checkbox"><label className="checkbox">
                          <div className="checkbox-visual"><input className="form-checkbox" id="project_consists_of_web" type="checkbox" name="project_consists_of" value="web" /></div>
                      </label><label for="project_consists_of_web">Website or web platform</label></div>
                  <div className="form-group has-checkbox"><label className="checkbox">
                          <div className="checkbox-visual"><input className="form-checkbox" id="project_consists_of_app" type="checkbox" name="project_consists_of" value="app" /></div>
                      </label><label for="project_consists_of_app">Mobile application</label></div>
                  <div className="form-group has-checkbox"><label className="checkbox">
                          <div className="checkbox-visual"><input className="form-checkbox" id="project_consists_of_infrastructure" type="checkbox" name="project_consists_of" value="infrastructure" /></div>
                      </label><label for="project_consists_of_infrastructure">Infrastructure (servers, hosting, domains)</label></div>
                  <div className="form-group has-checkbox"><label className="checkbox">
                          <div className="checkbox-visual"><input className="form-checkbox" id="project_consists_of_other" type="checkbox" name="project_consists_of" value="other" /></div>
                      </label><label for="project_consists_of_other">Other</label></div>
              </div>

              <div className="field">
                <label className="label">Message *</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Say Hello!"
                    name="message"
                    id="message"
                    rows="6"
                    onChange={this.handleChange}
                  />
              </div>
              </div>
              <div className="field is-grouped is-pulled-right">
                <div className="control">
                  <button
                    className="button is-primary"
                    type="submit"
                    disabled={
                      !this.state.name ||
                      !this.state.email ||
                      !this.state.company ||
                      !this.state.message
                    }
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
};

export default ContactPageTemplate;
