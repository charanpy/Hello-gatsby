import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Container from "../components/Container/Container"

const About = ({
  site: {
    metaData: { title },
  },
}) => {
  return (
    <Container>
      <Header text="About Page" />
      <p>{title}!!</p>
      <p>About page</p>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
