import React from "react"
import { Link } from "gatsby"


const Nav = class extends React.Component {
  constructor(props) {
    super(props);
    this.siteTitle = props.siteTitle;
    this.state = {
      active: false,
      navBarActiveClass: ""
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Home">
              {this.siteTitle}
            </Link>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/about/">About</Link>
            <Link className="navbar-item" to="/engineering/">Engineering</Link>
            <Link className="navbar-item" to="/design/">Design</Link>
            <Link className="navbar-item" to="/art/">Art</Link>
          </div>
        </div>
      </nav>
    )
  }

}

export default Nav
