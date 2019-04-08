import PropTypes from "prop-types"
import React from "react"
import Hero from "./hero"


const Header = ({ siteTitle }) => (
  <header>
    <Hero siteTitle={siteTitle}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
