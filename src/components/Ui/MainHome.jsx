const img = require('../../assets/banner1.png')

const Main = () => {
      return (
            <>
                  {/* <div avec une image et son titre */}
                  <div className="mainHome">
                        <figure className="mainHome__figure">
                              <div className="mainHome__figure__item">
                                    <img
                                          src={img}
                                          alt="img : le produit sélectionné"
                                    />
                                    <figcaption>
                                          <h1>Le titre</h1>
                                    </figcaption>
                              </div>
                        </figure>

                        <figure className="mainHome__figure">
                              <div className="mainHome__figure__item">
                                    <img
                                          src={img}
                                          alt="img : le produit sélectionné"
                                    />
                                    <figcaption>
                                          <h1>Le titre</h1>
                                    </figcaption>
                              </div>
                        </figure>
                        <figure className="mainHome__figure">
                              <div className="mainHome__figure__item">
                                    <img
                                          src={img}
                                          alt="img : le produit sélectionné"
                                    />
                                    <figcaption>
                                          <h1>Le titre</h1>
                                    </figcaption>
                              </div>
                        </figure>
                        <figure className="mainHome__figure">
                              <div className="mainHome__figure__item">
                                    <img
                                          src={img}
                                          alt="img : le produit sélectionné"
                                    />
                                    <figcaption>
                                          <h1>Le titre</h1>
                                    </figcaption>
                              </div>
                        </figure>
                  </div>
            </>
      )
}

export default Main
