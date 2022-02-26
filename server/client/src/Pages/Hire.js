import React, { Component } from "react";
import Projects from "../Components/Projects";
import "../css/hire.css";
const API_URL = '/form'
class Hire extends Component {
  constructor(props) {
    super(props);
    window.scroll(0, 0);
    document.title = 'Hire | Vishvesh Trivedi'
    this.state = {
      data: {
        name: "",
        email: "",
        requirements: {
          ecommerce: false,
          portfolio: false,
          blog: false,
          other: false,
        },
        additionals: "",
      }
    };
  }
  handleToggle = (e) => {
    let status = e.target.checked;
    this.setState((prevState) => ({
      data : {...prevState.data, requirements: {...prevState.data.requirements, [e.target.name] : status}}
    }));
  }
  handleInputChange = (e) => {
    this.setState((prevState) => ({
      data : {...prevState.data, [e.target.name] : e.target.value}
    }));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_URL, {
     method : 'POST',
     headers : {
       'Content-Type' : 'application/json',
     },
     body : JSON.stringify(this.state.data)
    })
    .then(res => res.json())
    .then(data => this.postSubmit(data.message))
    .catch(err => console.log(err));
  }
  postSubmit = (message) => {
    alert(message);
    this.setState({data: {
      name: "",
      email: "",
      requirements: {
        ecommerce: false,
        portfolio: false,
        blog: false,
        other: false,
      },
      additionals: "",
    }})
  }
  render() {
    return (
      <div id="hire">
        <div className="quotation-form">
          <div className="quotation-form-left">
            <h1>Do you want to get your own website made?</h1>
            <h2>Or even the UI/UX of your application?</h2>
            <h4>
              Send your requirements through this form and request for a price
              quotation. Or else, feel free to connect with me on LinkedIn{" "}
              <br /> (unless you’re named Rishika.)
            </h4>
          </div>
          <div className="quotation-form-right">
            <div className="form-title">
              <h1>Get in touch!</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-block-1">
              <label htmlFor="full-name">
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="Full Name"
                  value={this.state.data.name}
                  onChange={this.handleInputChange}
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={this.state.data.email}
                  onChange={this.handleInputChange}
                />
              </label>
              </div>
              <div className="requirement-type-block">
                <div className="item">
                  <input
                    type="checkbox"
                    checked={this.state.data.requirements.ecommerce}
                    name="ecommerce"
                    onChange={this.handleToggle}
                  />
                  E-commerce Website
                </div>
                <div className="item">
                  <input
                    type="checkbox"
                    checked={this.state.data.requirements.portfolio}
                    name="portfolio"
                    onChange={this.handleToggle}
                  />
                  Portfolio Website
                </div>
                <div className="item">
                  <input
                    type="checkbox"
                    checked={this.state.data.requirements.blog}
                    name="blog"
                    onChange={this.handleToggle}
                  />
                  Static Business Website
                </div>
                <div className="item">
                  <input
                    type="checkbox"
                    checked={this.state.data.requirements.other}
                    name="other"
                    onChange={this.handleToggle}
                  />
                  Other
                </div>
              </div>
              <label htmlFor="add-req">
                <textarea
                  name="additionals"
                  id="add-req"
                  placeholder="Additional Requirements (if any)"
                  value={this.state.data.additionals}
                  onChange={this.handleInputChange}
                />
              </label>
              <input type="submit" value="Request Quotation"/>
            </form>
          </div>
        </div>
        <div className="projects">
          <h1 className="projects-title">Recent Work</h1>
          <Projects/>
        </div>
      </div>
    );
  }
}

export default Hire;
