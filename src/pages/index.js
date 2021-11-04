import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../style/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className={styles.welcomeBannerContainer}>
      <h1 className={styles.welcomeBannerTitle}>Device Repair Shop</h1>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <h2 className={styles.welcomeBannerSubtitle}>COMMUNITY MATTERS</h2>
    </div>

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
