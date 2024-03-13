import ImgBanner1 from '../../../assets/images/banner1.png'
import Banner from '../../../utils/banner/BannerFunction'


const BannerHome = () => {
      return (
            <>
                  <Banner
                        title="Chez vous, partout et ailleurs"
                        imageUrl={ImgBanner1}
                  />
            </>
      )
}

export default BannerHome
