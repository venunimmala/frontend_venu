
// src/components/Edit.js
import React from 'react';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Sucessful " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={this.handleSubmit}>
            <div className="formpadding">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>port</span>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>protocol</span>
                <select>
                  <option value="volvo">HTTP</option>
                  <option value="saab">HTTPS</option>
                </select>
              </label>
            </div>
            <div className="modal-footer">
              <input type="submit" value="Ok" />
              <input type="submit" value="cancel" />
            </div>
          </form>

        </div>
      </div>
    );
  }
}

