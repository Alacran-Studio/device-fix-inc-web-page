import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../style/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className={styles.welcomeBannerContainer}>
      <div className={styles.border}>
        <StaticImage
          src="../images/regal-border.png"
          width={100}
          style={{ transform: "scaleY(-1)" }}
        />
        <StaticImage src="../images/regal-border.png" width={100} />
      </div>
      <div>
        <div>
          <StaticImage
            src="../images/device-fix-logo.png"
            width={350}
            quality={95}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            alt="Device Fix Inc. Logo"
          />
        </div>

        <StaticImage
          src="../images/community.JPG"
          width={600}
          quality={95}
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          alt="The Pilsen community outside of Device Fix Inc."
          style={{ marginBottom: `1.45rem` }}
        />
        <h2 className={styles.welcomeBannerSubtitle}>COMMUNITY MATTERS</h2>
      </div>
      <div className={styles.border}>
        <StaticImage
          src="../images/regal-border.png"
          width={100}
          style={{ transform: "scale(-1, -1)" }}
        />
        <StaticImage
          src="../images/regal-border.png"
          style={{ transform: "scaleX(-1)" }}
          width={100}
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
          <li>Tablets & More</li>
        </ul>
      </div>
    </div>

    <hr className={styles.gold}></hr>

    <div>
      <h1 className={styles.goldSubsectionTitle}>Who We Are</h1>
      <div className={styles.flexContainerSpaceBetween}>
        <StaticImage
          src="../images/tito-and-miguel.png"
          width={420}
          placeholder="blurred"
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
              family and his newborn daughter.
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

    <div className={styles.flexContainerSpaceEvenly}>
      <div>
        <h2 className={styles.subtitle}>Contact Us</h2>
        <p>
          P:{" "}
          <a className={styles.whiteText} href="tel:+1-312-965-4899">
            (312) 965-4899
          </a>
          <br />
          <a
            className={styles.whiteText}
            href="https://goo.gl/maps/iRrxgK8uZQqEkVwH9"
          >
            1419 W 18th Street Chicago, IL
          </a>
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Hours of Operation</h2>
        <p>
          10am-6pm Monday thru Saturday
          <br />
          Closed on Sundays
        </p>
      </div>
    </div>

    <hr className={styles.gold}></hr>

    <div>
      <h1 className={styles.goldSubsectionTitle}>Gallery</h1>
      <div className={styles.flexContainerSpaceBetween}>
        <StaticImage
          className={styles.galleryImage}
          src="../images/storefront.JPG"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/gerardo-headshot.png"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/iphone-parlor-22.JPG"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/iphones.JPG"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/tabletop.JPG"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/iphone-parlor-16.JPG"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/iphone-parlor-10.JPG"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />

        <StaticImage
          className={styles.galleryImage}
          src="../images/switch-repair.JPG"
          width={420}
          height={320}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />
      </div>
    </div>

    <hr className={styles.gold}></hr>

    <div className={styles.centering}>
      <h1 className={styles.subtitle}>Check Out Our Ebay Store</h1>
      <p> For deals and more, visit our store on Ebay! </p>
      <p>
        <a
          className={styles.button}
          href="https://www.ebay.com/str/devicefix1419"
        >
          Visit Our Ebay Store
        </a>
      </p>

      <hr className={styles.gold}></hr>

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
