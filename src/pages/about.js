import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Container from "../components/Container/Container"

const About = () => (
  <div>
    <Header text="About Page" />
    <Container>
      <p>Gatsby!!</p>
      <Link to="/contact">Contact</Link>
    </Container>
  </div>
)

export default About
