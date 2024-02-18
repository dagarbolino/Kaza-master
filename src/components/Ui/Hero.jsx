const img = require('../../assets/banner1.png')

const Hero = () => {
      return (
            <>
                  <div className="hero">
                        <div className="hero__content">
                              <h1
                                    className="hero__title"
                              >
                                    Chez vous, partout et ailleurs
                              </h1>
                              <img
                                    src={img}
                                    alt="img : le produit sélectionné"
                              />
                        </div>
                  </div>
            </>
      )
}

export default Hero
