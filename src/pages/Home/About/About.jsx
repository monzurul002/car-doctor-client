import img1 from '../../../assets/images//about_us/person.jpg'
import img2 from '../../../assets/images//about_us/parts.jpg'
const About = () => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={img1} className=" w-3/4  rounded-lg shadow-2xl" />
                    <img src={img2} className=" w-1/2 border-8 border-white  absolute right-5 top-1/2 rounded-lg shadow-2xl" />

                </div>
                <div className='w-1/2'>
                    <h2 className="text-xl text-bold text-red-400">About Us</h2>
                    <h1 className="text-5xl font-bold">We are experienced In this Field for many years.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;