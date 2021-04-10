import React from "react"
import * as styles from "./Container.module.css"
import { Link, useStaticQuery, graphql } from "gatsby"

const LinkPage = ({ to, page }) => (
  <li className={styles.list}>
    <Link to={to}>{page}</Link>
  </li>
)

const Container = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <div className={styles.navigation}>
        <div>
          <h3 className={styles.header}>Gatsby Blog</h3>
        </div>
        <ul className={styles.ul}>
          <LinkPage to="/" page="HOME" />
          <LinkPage to="/about" page="ABOUT" />
          <LinkPage to="/contact" page="CONTACT" />
        </ul>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Container
