import React from "react"
import Nav from "./nav"
import Image from "../components/image"

const Hero = class extends React.Component {
  constructor(props) {
    super(props)

    this.siteTitle = props.siteTitle;
  }

  render() {
    return (
      <section className="hero is-primary is-bold">
        <div className="hero-head">
          <Nav siteTitle={this.siteTitle}/>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="title">Hi! I'm Rachael.</h2>
                <h3 className="subtitle">I'm a software engineer, UI/UX designer, and artist. I'm passionate about healthcare and building community.</h3>
              </div>
              <div className="column" style={{ maxWidth: `410px`, marginBottom: `1.45rem` }}>
                <Image />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
