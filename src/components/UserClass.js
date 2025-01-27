import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/user/Default-st");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({ userInfo: jsonData });
  }
  render() {
    const { name, location, avatar_url } = this?.state?.userInfo;

    return (
      <div className="user-card">
        <h2>Name - {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : satya@gmail.com</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
