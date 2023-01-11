
import pic1 from '../assets/img/pic1.jpg'
import pic2 from '../assets/img/pic2.jpg'
import pic3 from '../assets/img/pic3.jpg'
import pic4 from '../assets/img/pic4.jpg'
import pic5 from '../assets/img/pic5.jpg'
import pic6 from '../assets/img/pic6.jpg'

export function Home() {

    return <section className="home full">
        <h1 className='home-h1'>Welcome to Mister Toy</h1>

        <div className='main-layout image-container'>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
            <img src={pic6} alt="" />
        </div>


    </section>
}