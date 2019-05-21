import React, { Component } from "react";

//stateless functional components
// Navbar is stateless so it can also be defined as an arrow fucntion taking "props" as argument
// const Navbar = props => {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//       <a className="navbar-brand" href="#">
//         Navbar
//         <span className="badge badge-pill badge-secondary m-2">
//           {props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// };

// export default Navbar;

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Cart
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
