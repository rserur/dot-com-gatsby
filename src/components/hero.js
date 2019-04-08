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
      <section class="hero is-primary is-bold">
        <div class="hero-head">
          <Nav siteTitle={this.siteTitle}/>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column">
                <h2 class="title">Hi! I'm Rachael.</h2>
                <h3 class="subtitle">I'm a software engineer, UI/UX designer, and artist. I'm passionate about healthcare and building community.</h3>
              </div>
              <div class="column" style={{ maxWidth: `410px`, marginBottom: `1.45rem` }}>
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
