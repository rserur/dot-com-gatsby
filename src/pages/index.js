import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
