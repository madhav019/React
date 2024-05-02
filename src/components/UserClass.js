import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };

    console.log("Constuctor Called");
  }

  async fetchData() {
    const res = await fetch("https://api.github.com/users/madhav019");
    const data = await res.json();
    this.setState({
      userInfo: data,
    });
  }

  componentDidMount() {
    this.fetchData();
    console.log("Component Did Mount called");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const {
      userInfo: { login, created_at },
    } = this.state;

    console.log("Render called");

    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Created: {created_at}</h3>
        <h4>Contact: @madhav019</h4>
      </div>
    );
  }
}

export default UserClass;
