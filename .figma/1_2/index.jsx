import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <div className={styles.container2}>
          <img src="../image/mnwu9n4r-kl2w04w.svg" className={styles.container} />
        </div>
        <div className={styles.heading2}>
          <p className={styles.text}>Quiénes Somos</p>
        </div>
      </div>
      <div className={styles.container3}>
        <p className={styles.bUlbitexperience}>BULBIT EXPERIENCE</p>
        <p className={styles.nuestraHistoria}>Nuestra Historia</p>
      </div>
      <div className={styles.introduction}>
        <div className={styles.heading1}>
          <p className={styles.text2}>
            Raíces Tradicionales,
            <br />
            Visión Moderna
          </p>
        </div>
        <div className={styles.container4}>
          <p className={styles.text3}>
            En Bulbit, honramos las recetas
            <br />
            centenarias del BBQ coreano,
            <br />
            fusionándolas con un enfoque
            <br />
            contemporáneo que celebra los
            <br />
            ingredientes más frescos y técnicas
            <br />
            innovadoras.
          </p>
        </div>
      </div>
      <div className={styles.featureSectionFreshI}>
        <div className={styles.container6}>
          <div className={styles.overlayShadow}>
            <img
              src="../image/mnwu9n4v-uootlu2.png"
              className={styles.freshVegetablesAndPr}
            />
          </div>
          <div className={styles.container5}>
            <p className={styles.ingredientesConAlma}>Ingredientes con Alma</p>
            <p className={styles.seleccionamosCuidado}>
              Seleccionamos cuidadosamente cada vegetal de
              <br />
              granjas locales y carnes premium, asegurando
              <br />
              que cada bocado capture la esencia vibrante de
              <br />
              Seúl.
            </p>
          </div>
        </div>
        <div className={styles.container6}>
          <div className={styles.overlayShadow}>
            <img
              src="../image/mnwu9n4v-c03zqu6.png"
              className={styles.freshVegetablesAndPr}
            />
          </div>
          <div className={styles.container5}>
            <p className={styles.ingredientesConAlma}>El Arte del Fuego</p>
            <p className={styles.seleccionamosCuidado}>
              Nuestra técnica de asado al carbón respeta los
              <br />
              tiempos de cocción tradicionales, logrando esa
              <br />
              textura y sabor ahumado inconfundible que nos
              <br />
              define.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container13}>
        <div className={styles.autoWrapper}>
          <div className={styles.container8}>
            <img src="../image/mnwu9n4r-kzjgkt8.svg" className={styles.icon} />
            <p className={styles.heading4TradiciN}>Tradición</p>
            <div className={styles.container7}>
              <p className={styles.text4}>
                Recetas heredadas por
                <br />
                generaciones.
              </p>
            </div>
          </div>
          <div className={styles.container10}>
            <img src="../image/mnwu9n4r-shbr2em.svg" className={styles.icon2} />
            <p className={styles.heading4TradiciN}>Pasión</p>
            <div className={styles.container9}>
              <p className={styles.text5}>
                Amor en cada
                <br />
                preparación.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.autoWrapper2}>
          <div className={styles.container12}>
            <img src="../image/mnwu9n4r-fiy54jg.svg" className={styles.icon3} />
            <p className={styles.heading4TradiciN}>Innovación</p>
            <div className={styles.container11}>
              <p className={styles.text6}>
                Experiencias culinarias
                <br />
                únicas.
              </p>
            </div>
          </div>
          <div className={styles.paragraph}>
            <img src="../image/mnwu9n4r-9lxvptw.svg" className={styles.icon4} />
            <p className={styles.heading4TradiciN}>Comunidad</p>
            <p className={styles.text7}>Un lugar para compartir.</p>
          </div>
        </div>
      </div>
      <div className={styles.footerSpacer}>
        <div className={styles.bottomNavigationBar}>
          <div className={styles.bottomNavigationBarS}>
            <div className={styles.link}>
              <img
                src="../image/mnwu9n4r-rpe7ht6.svg"
                className={styles.container14}
              />
              <p className={styles.text8}>Inicio</p>
            </div>
            <div className={styles.link2}>
              <img
                src="../image/mnwu9n4r-q0ji8df.svg"
                className={styles.container15}
              />
              <p className={styles.text8}>Menú</p>
            </div>
            <div className={styles.link3}>
              <img
                src="../image/mnwu9n4r-hctkpwy.svg"
                className={styles.container16}
              />
              <p className={styles.text9}>Nosotros</p>
            </div>
            <div className={styles.link4}>
              <img
                src="../image/mnwu9n4r-pqkrh10.svg"
                className={styles.container17}
              />
              <p className={styles.text8}>Reserva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
