import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>This is namaste React webseries</h2>
      {/* <User name="Satya (function)" /> */}
      <UserClass name="Satya (class)" location="Pune (class)" />
    </div>
  );
};

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About us</h1>
        <h2>This is namaste React webseries</h2>
        {/* <User name="Satya (function)" /> */}
        <UserClass name="Satya (class)" location="Pune (class)" />
      </div>
    );
  }
}
export default About;
