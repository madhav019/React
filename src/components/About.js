import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="body">
        <h1>About</h1>
        <h2>This is Food Ordering App</h2>
        <User name="Child 1" />
      </div>
    );
  }
}

export default About;
