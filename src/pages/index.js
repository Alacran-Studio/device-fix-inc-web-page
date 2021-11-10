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
      <div className={styles.border} style={{ paddingTop: "20px" }}>
        <StaticImage
          src="../images/regal-bottom-left.png"
          width={100}
          style={{ transform: "scaleY(-1)" }}
        />
        <StaticImage
          src="../images/regal-bottom-left.png"
          width={100}
          style={{ transform: "scale(-1, -1)" }}
        />
      </div>
      <h1 className={styles.welcomeBannerTitle}>Device Fix Inc.</h1>
      <StaticImage
        src="../images/community.png"
        width={600}
        quality={95}
        placeholder="blurred"
        layout="constrained"
        formats={["auto", "webp", "avif"]}
        alt="The Pilsen community outside of Device Fix Inc."
        style={{ marginBottom: `1.45rem` }}
      />
      <h2 className={styles.welcomeBannerSubtitle}>COMMUNITY MATTERS</h2>
      <div className={styles.border} style={{ paddingBottom: "20px" }}>
        <StaticImage src="../images/regal-bottom-left.png" width={100} />
        <StaticImage
          src="../images/regal-bottom-left.png"
          width={100}
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
    </div>

    <div className={styles.introCopy}>
      <p>
        Since 2009, we’ve been in the cell phone industry. During this time, we
        saw the void in our neighborhoods when it came to servicing defective
        phones, tablets, and game consoles. Insurance companies can have
        outrageous policies, mandates, and expensive prices.
      </p>
      <p>
        Fast forward a couple of years and we’ve decided to open Device Fix in
        order to be a resource for our community.
      </p>
      <p>We offer more than cell phone fixing, we are a one stop shop.</p>
    </div>

    <hr className={styles.white}></hr>

    <div className={styles.centering}>
      <div>
        <h1 className={styles.subtitle}>Our Services</h1>
        <ul className={styles.noBullets}>
          <li>Screen Repair</li>
          <li>Back Glass</li>
          <li>Water Damage Devices</li>
          <li>Game Consoles</li>
          <li>Tablets</li>
        </ul>
      </div>
    </div>

    <hr className={styles.gold}></hr>

    <div>
      <h1 className={styles.goldSubsectionTitle}>Who We Are</h1>
      <div className={styles.flexContainer}>
        <StaticImage
          src="../images/gerardo-and-manuel.png"
          width={320}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{
            marginBottom: `1.45rem`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        />

        <div className={styles.bioCopy}>
          <div>
            <h2 className={styles.subtitle}>
              Meet Gerardo
              <span className={styles.instagramIcon}>
                <a
                  href="https://www.instagram.com/titothedancer/"
                  target="blank"
                >
                  <StaticImage
                    src="../images/instagram-icon.png"
                    width={24}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Instagram icon"
                  />
                </a>
              </span>
            </h2>
            <p>
              His passion comes from teaching youth with coordinated dance.
              Growing up in the SouthEast of Chicago, his passion for technology
              started when he was young. His daily drive comes from his lovely
              family and his newborn son.
            </p>
            <p>
              His flourishing growth has now made him a proud owner of Device
              Fix.
            </p>
          </div>

          <div>
            <h2 className={styles.subtitle}>
              Meet Miguel
              <span className={styles.instagramIcon}>
                <a href="https://www.instagram.com/migtowers/" target="blank">
                  <StaticImage
                    src="../images/instagram-icon.png"
                    width={24}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Instagram icon"
                  />
                </a>
              </span>
            </h2>
            <p>
              His mission in business has always been to grow and help others
              grow in order to be successful in business; it’s a “one hand helps
              the other” approach. He believes in community and youth resource
              investment as it has always paid dividends in the success of his
              businesses. He’s part owner in Device Fix.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr className={styles.white}></hr>

    <div className={styles.flexContainer}>
      <div>
        <h2 className={styles.subtitle}>Contact Us</h2>
        <p>
          P: (312) 965-4899
          <br />
          1419 W 18th Street
          <br />
          Chicago, IL 60608
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Hours of Operation</h2>
        <p>
          11AM-6PM Monday thru Friday
          <br />
          12-5PM Saturday
          <br />
          Closed on Sundays
        </p>
      </div>
    </div>

    <hr className={styles.gold}></hr>

    <div>
      <h1 className={styles.goldSubsectionTitle}>Gallery</h1>
      <div className={styles.flexContainer}>
        <StaticImage
          className={styles.galleryImage}
          src="../images/phone-case.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/phone-cases.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/microchip-2.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/soldering.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/mario-and-yoshi.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/super-nintendo-controller.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/ps4-controller.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/open-phone.jpg"
          width={380}
          height={232}
          placeholder="blurred"
          layout="constrained"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />
      </div>
    </div>

    <hr className={styles.gold}></hr>

    <div className={styles.centering}>
      <p>
        Thank you for your support and we look forward to meeting you and
        servicing your needs.
      </p>
      <p>
        Follow us on Instagram
        <span className={styles.instagramIcon}>
          <a href="https://www.instagram.com/devicefixinc/" target="blank">
            <StaticImage
              src="../images/instagram-icon.png"
              width={24}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Instagram icon"
            />
          </a>
        </span>
      </p>
    </div>
  </Layout>
)

export default IndexPage
