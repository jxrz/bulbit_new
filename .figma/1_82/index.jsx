import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.container13}>
      <div className={styles.bottomNavigationBar}>
        <div className={styles.link}>
          <img src="../image/mnwu9n1b-rtqb23y.svg" className={styles.container} />
          <p className={styles.text}>Inicio</p>
        </div>
        <div className={styles.link2}>
          <img src="../image/mnwu9n1b-hyi1kj5.svg" className={styles.container2} />
          <p className={styles.text2}>Carta</p>
        </div>
        <div className={styles.link3}>
          <img src="../image/mnwu9n1b-5zo165j.svg" className={styles.container3} />
          <p className={styles.text2}>Reservas</p>
        </div>
        <div className={styles.link4}>
          <img src="../image/mnwu9n1b-1zr8l2e.svg" className={styles.container4} />
          <p className={styles.text2}>Perfil</p>
        </div>
      </div>
      <div className={styles.headerLogoSection}>
        <div className={styles.container5}>
          <img src="../image/mnwu9n1e-rjy6gu5.png" className={styles.bulbitLogo} />
        </div>
        <p className={styles.text3}>Bulbit</p>
        <div className={styles.button}>
          <img src="../image/mnwu9n1b-crglwmn.svg" className={styles.container6} />
        </div>
      </div>
      <div className={styles.mainHeroSection}>
        <div className={styles.container7}>
          <div className={styles.overlay}>
            <p className={styles.text4}>AUTÉNTICO K-BBQ</p>
          </div>
          <p className={styles.saborCoreanoTradicio}>
            Sabor Coreano
            <br />
            Tradicional con un
            <br />
            Toque Moderno
          </p>
          <p className={styles.viveLaExperienciaCul}>
            Vive la experiencia culinaria definitiva en el
            <br />
            corazón de la ciudad.
          </p>
        </div>
        <div className={styles.mainCtaButton}>
          <div className={styles.margin}>
            <img
              src="../image/mnwu9n1b-84a6twh.svg"
              className={styles.container8}
            />
          </div>
          <p className={styles.text5}>Ver la Carta</p>
        </div>
        <div className={styles.featuredSpecialsSect}>
          <div className={styles.container9}>
            <p className={styles.text6}>Platos Especiales</p>
            <p className={styles.text7}>Ver todos</p>
          </div>
          <div className={styles.container11}>
            <div className={styles.special1}>
              <div className={styles.overlayShadow}>
                <img
                  src="../image/mnwu9n1e-hzhvy5v.png"
                  className={styles.galbiPremium}
                />
              </div>
              <div className={styles.container10}>
                <p className={styles.galbiPremium2}>Galbi Premium</p>
                <p className={styles.costillaMarinada}>Costilla marinada</p>
                <p className={styles.a2450}>$24.50</p>
              </div>
            </div>
            <div className={styles.special1}>
              <div className={styles.overlayShadow}>
                <img
                  src="../image/mnwu9n1e-s7qme4z.png"
                  className={styles.galbiPremium}
                />
              </div>
              <div className={styles.container10}>
                <p className={styles.galbiPremium2}>Bibimbap Mixto</p>
                <p className={styles.costillaMarinada}>Arroz y vegetales</p>
                <p className={styles.a2450}>$18.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionReservationPr}>
          <div className={styles.container12}>
            <p className={styles.text8}>¿Vienes en grupo?</p>
            <p className={styles.text9}>Reserva tu mesa ahora</p>
          </div>
          <div className={styles.button2}>
            <img
              src="../image/mnwu9n1c-pz2x7qf.svg"
              className={styles.container3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
