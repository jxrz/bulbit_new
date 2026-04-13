import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.bulbitUbicaciNyConta}>
      <div className={styles.headerNavigation}>
        <div className={styles.button}>
          <img src="../image/mnwu9n0u-msluvyc.svg" className={styles.container} />
        </div>
        <div className={styles.heading2}>
          <p className={styles.text}>Contact Bulbit</p>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.bottomNavigationBar}>
          <div className={styles.link}>
            <div className={styles.container3}>
              <img
                src="../image/mnwu9n0u-bkjfv4h.svg"
                className={styles.container2}
              />
            </div>
            <p className={styles.text2}>Home</p>
          </div>
          <div className={styles.link2}>
            <div className={styles.container5}>
              <img
                src="../image/mnwu9n0u-e8pb9kn.svg"
                className={styles.container4}
              />
            </div>
            <p className={styles.text2}>Services</p>
          </div>
          <div className={styles.link3}>
            <div className={styles.container7}>
              <img
                src="../image/mnwu9n0u-2azdfb1.svg"
                className={styles.container6}
              />
            </div>
            <p className={styles.text3}>Contact</p>
          </div>
          <div className={styles.link4}>
            <div className={styles.container8}>
              <img
                src="../image/mnwu9n0u-nzqeslh.svg"
                className={styles.container}
              />
            </div>
            <p className={styles.text2}>Profile</p>
          </div>
        </div>
        <div className={styles.interactiveMapPlaceh}>
          <div className={styles.overlay}>
            <div className={styles.mapPinOverlay}>
              <img
                src="../image/mnwu9n0u-yk3fz9p.svg"
                className={styles.background}
              />
              <div className={styles.margin}>
                <div className={styles.backgroundBorder}>
                  <div className={styles.overlayShadow}>
                    <p className={styles.text4}>Bulbit HQ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.directionsButton}>
              <div className={styles.directionsButtonShad}>
                <img
                  src="../image/mnwu9n0u-r78ngk5.svg"
                  className={styles.container9}
                />
                <p className={styles.text5}>Directions</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactInfoCards}>
          <div className={styles.backgroundBorderShad}>
            <div className={styles.overlay2}>
              <img
                src="../image/mnwu9n0u-9b40uhb.svg"
                className={styles.container10}
              />
            </div>
            <div className={styles.container11}>
              <p className={styles.text6}>OUR OFFICE</p>
              <p className={styles.text7}>
                123 Bulbit Street, Tech City, TC
                <br />
                56789
              </p>
            </div>
          </div>
          <div className={styles.backgroundBorderShad2}>
            <div className={styles.overlay2}>
              <img
                src="../image/mnwu9n0u-fkl2wix.svg"
                className={styles.container10}
              />
            </div>
            <div className={styles.container12}>
              <p className={styles.text6}>PHONE</p>
              <p className={styles.text8}>+1 (555) 000-BULB</p>
            </div>
          </div>
        </div>
        <div className={styles.contactForm}>
          <p className={styles.sendUsAMessage}>Send us a message</p>
          <p className={styles.weLlGetBackToYouWith}>
            We'll get back to you within 24 hours.
          </p>
          <div className={styles.form}>
            <div className={styles.container14}>
              <p className={styles.fUllname}>FULL NAME</p>
              <div className={styles.container13}>
                <p className={styles.johnDoe}>John Doe</p>
              </div>
            </div>
            <div className={styles.container14}>
              <p className={styles.fUllname}>EMAIL ADDRESS</p>
              <div className={styles.container13}>
                <p className={styles.johnDoe}>john@example.com</p>
              </div>
            </div>
            <div className={styles.container16}>
              <p className={styles.fUllname}>MESSAGE</p>
              <div className={styles.container15}>
                <p className={styles.howCanWeHelp}>How can we help?</p>
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.buttonShadow}>
                <p className={styles.text9}>Send Message</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialMediaIcons}>
          <p className={styles.text10}>Follow us on social media</p>
          <div className={styles.container19}>
            <div className={styles.link5}>
              <img
                src="../image/mnwu9n0u-l4mgyd8.svg"
                className={styles.container4}
              />
            </div>
            <div className={styles.link6}>
              <img
                src="../image/mnwu9n0u-ewgg9ka.svg"
                className={styles.container17}
              />
            </div>
            <div className={styles.link5}>
              <img
                src="../image/mnwu9n0u-bxckhrn.svg"
                className={styles.container4}
              />
            </div>
            <div className={styles.link7}>
              <img
                src="../image/mnwu9n0u-mi98mqs.svg"
                className={styles.container18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
