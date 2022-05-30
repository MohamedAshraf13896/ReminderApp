import "./App.css";
import React, { Component } from "react";
import moment from "moment";
import {
  add_reminder,
  remove_reminder,
  clear_reminder,
} from "./Actions/actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    text: "",
    datee: new Date(),
  };
  render_reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((item) => {
          console.log(item.datee);
          return (
            <li className="list-group-item mb-3" key={item.id}>
              <div>{item.text}</div>
              <div>
                {moment(new Date(item.datee)).fromNow()}
                <span
                  className="remove btn  btn-danger"
                  onClick={() => this.props.remove_reminder(item.id)}
                >
                  x
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div className="app container">
        <img src="https://media.istockphoto.com/photos/notification-bell-icon-and-blue-speech-bubble-picture-id1318996384?b=1&k=20&m=1318996384&s=170667a&w=0&h=gMk0kzVEDPS6Vkk8-3Qi7j0QmSBigUgn7EzmwD1vD4U="></img>
        <div className="reminder-title text-center">
          <h2>What Should U Do ?</h2>
        </div>
        <input
          onChange={(e) => this.setState({ text: e.target.value })}
          className="form-control mb-2"
          type="text"
          value={this.state.text}
          placeholder="Enter What U think About ... ?"
        />
        <input
          onChange={(e) => this.setState({ datee: e.target.value })}
          className="form-control mb-2"
          type="datetime-local"
          value={this.state.datee}
        />
        <button
          onClick={() => {
            this.props.add_reminder(this.state.text, this.state.datee);
            this.setState({ text: " ", datee: " " });
          }}
          className="btn btn-primary d-block w-100 mb-2"
        >
          Add Reminder
        </button>
        {this.render_reminders()}

        <button
          onClick={() => this.props.clear_reminder()}
          className="btn btn-danger d-block w-100"
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    reminders: state,
  };
}
export default connect(mapStateToProps, {
  add_reminder,
  remove_reminder,
  clear_reminder,
})(App);
