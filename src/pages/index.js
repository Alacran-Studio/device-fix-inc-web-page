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
      This is an intro paragraph. Look at the company Instagram to really tell a good story.
    </p>

    <div className={styles.bioContainer}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={220}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p className={styles.bioCopy}>This is the bio of someone. This is more details, and we should probably get these details from somewhere and agree on the copy and what it's going to say. But it will probably be something fancy and regal and simple and nice. Their picture should also be in an oval.</p>
    </div>

    <div className={styles.bioContainer}>
      <p className={styles.bioCopy}>This is the bio of someone else. This is more details, and we should probably get these details from somewhere and agree on the copy and what it's going to say. But it will probably be something fancy and regal and simple and nice. Their picture should also be in an oval.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={220}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>

    <hr />

    <div>
      <p>
        P: (312) 965-4899
        <br />
        1419 W 18th Street
        <br />
        Chicago, IL 60608
      </p>
      <h2>Hours of Operation</h2>
      <p>
        11AM-6PM Monday thru Friday
        <br />
        12-5PM Saturday
        <br />
        Closed on Sundays
      </p>
    </div>

    <hr />

    <div>
      <h1>Gallery</h1>

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={120}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={121}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={122}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={123}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>

    <hr />

    <div>
      <p>Thank you for your support!</p>
      <p>Make sure to follow us on Instagram <span>-insert Instagram icon here-</span></p>
    </div>

  </Layout>
)

export default IndexPage
