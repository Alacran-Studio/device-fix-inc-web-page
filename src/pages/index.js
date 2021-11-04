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
        src="../images/repair-shop.jpg"
        width={600}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <h2 className={styles.welcomeBannerSubtitle}>COMMUNITY MATTERS</h2>
    </div>

    <p>
      This is an intro paragraph. Look at the company Instagram to really tell a
      good story.
    </p>

    <div className={styles.bioContainer}>
      <StaticImage
        src="../images/man-2.jpg"
        width={220}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p className={styles.bioCopy}>
        This is the bio of someone. This is more details, and we should probably
        get these details from somewhere and agree on the copy and what it's
        going to say. But it will probably be something fancy and regal and
        simple and nice. Their picture should also be in an oval.
      </p>
    </div>

    <div className={styles.bioContainer}>
      <p className={styles.bioCopy}>
        This is the bio of someone else. This is more details, and we should
        probably get these details from somewhere and agree on the copy and what
        it's going to say. But it will probably be something fancy and regal and
        simple and nice. Their picture should also be in an oval.
      </p>
      <StaticImage
        src="../images/man-1.jpg"
        width={360}
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
      <h2 className={styles.subtitle}>Hours of Operation</h2>
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
      <h1 className={styles.welcomeBannerTitle}>Gallery</h1>

      <StaticImage
        src="../images/phone-case.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/phone-cases.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/microchip-2.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/soldering.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/mario-and-yoshi.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/super-nintendo-controller.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/ps4-controller.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        src="../images/open-phone.jpg"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>

    <hr />

    <div>
      <p>Thank you for your support!</p>
      <p>
        Make sure to follow us on Instagram{" "}
        <StaticImage
          src="../images/instagram-icon.png"
          width={60}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <span>-insert Instagram icon here-</span>
      </p>
    </div>
  </Layout>
)

export default IndexPage
