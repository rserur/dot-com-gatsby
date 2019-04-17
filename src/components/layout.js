/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "../styles/all.scss"
import Hero from "./hero"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="has-background-primary">
        <Hero
          siteTitle={data.site.siteMetadata.title}
        />
        <main>{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


// <footer>
//   <div className="container">
//     © {new Date().getFullYear()}, Built with
//     {` `}
//     <a href="https://www.gatsbyjs.org">Gatsby</a>
//   </div>
// </footer>
