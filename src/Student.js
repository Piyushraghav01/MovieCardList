import React from "react";

class Student extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>Hello, {this.props.name}</h1>
        <p>this is {this.props.marks}</p>
      </>
    );
  }
}

export default Student;
