import logoFooter from '../../assets/logoFooter.png'

function Footer() {
      return (
            <>
                  <footer className="footer">
                        <div className="__logo">
                              <img src={logoFooter} alt="logo" />
                        </div>
                        <div className="__p">
                              <p>© 2020 Kaza. All rights reserved</p>
                        </div>
                  </footer>
            </>
      )
}

export default Footer
