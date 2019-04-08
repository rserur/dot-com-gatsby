import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>I'm a software engineer, UI/UX designer, and artist. I'm passionate about healthcare and building community.</p>
  </Layout>
)

export default IndexPage
