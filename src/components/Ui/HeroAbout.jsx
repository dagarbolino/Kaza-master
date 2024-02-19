import Banner from '../Ui/Banner'

const image = "../../assets/banner1.png";


const HeroAbout = () => {
  return (
    <>
      <div className="hero">

        <Banner imageUrl={image} title="Titre Banner About" />
      </div>
    </>
  )
}

export default HeroAbout
