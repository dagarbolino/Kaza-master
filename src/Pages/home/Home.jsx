import MainHome from '../../sass/libs/scenes/home/components/main/MainHome'
import Footer from '../../sass/libs/scenes/footer/components/Footer'
import Banner from '../../sass/libs/scenes/home/components/banner/BannerHome'
import NavBar from '../../sass/libs/scenes/navBar/components/NavBar'



export default function Home() {
        return (
                <>
                        <NavBar />
                        <Banner />
                        <MainHome />
                        <Footer />
                </>
        )
}


