import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Header = ({ siteTitle }) => (
  <header>
      <h1>{siteTitle}</h1>
      <ul>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/posts/">Posts</Link></li>
        <li><Link to="/engineering/">Engineering</Link></li>
        <li><Link to="/design/">Design</Link></li>
        <li><Link to="/art/">Art</Link></li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
