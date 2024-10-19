import { FaPlaneSlash, FaVest } from "react-icons/fa"
import { TbReportMoney } from "react-icons/tb"
import { RiPlanetLine } from "react-icons/ri"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaUser, FaComment } from 'react-icons/fa';
import Header from "../components/Header"
import Footer from "../components/Footer"
const why_us = [
    {
        text: "Safety first always",
        icons: <FaVest size={60} />
    },
    {
        text: "Low price and friendly",
        icons: <TbReportMoney size={60} />
    },
    {
        text: "Low price and ",
        icons: <FaPlaneSlash size={60} />
    },

]
const Blogs = ({ title, text, image }) => {
    return (
        <div className='max-w-sm rounded-lg overflow-hidden shadow-lg p-4 '>
            {image && (
                <div className='relative h-64 mb-12'>
                    <div className='overflow-hidden rounded-lg relative h-full'>
                        <img src={image} alt="" className='w-full rounded-lg absolute h-full hoverImg' />
                    </div>
                    <div className='bg-orange text-white px-8 py-1 w-fit absolute -bottom-4 left-4 z-10 -rotate-[10deg]'>{title}</div>
                </div>
            )}
            <div className='flex items-center text-gray-600 text-sm mb-2'>
                <span className='mr-2 flex items-center gap-2'>
                    <FaUser className='text-green' />Admin
                </span>
                <span className="flex items-center gap-2">
                    <FaComment className="text-green" />0 Comments
                </span>
            </div>
            <div className='font-bold text-2xl mb-2 hover:text-green'>{text}</div>
        </div>
    )
}
const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000,
        },
        items: 5,
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 5,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464,
        },
        items: 3,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0,
        },
        items: 1,
    }
};

const About = () => {
    return (<>
        <Header />
        <div className="lg:flex lg:-mt-20">
            <img src="/bg-04.jpg" alt="" className="lg:w-1/2 w-full lg:h-auto h-[350px] object-cover " />
            <div className="lg:w-1/2 bg-[url('/bg-shape-07.png')] bg-no-repeat bg-cover lg:p-20 lg:pt-44 pr-4 py-20 px-3 bg-[#F3F8F6]">
                <div className="flex-col flex">
                    <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                        <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                        <h6 className="text-green relative font-semibold">
                            Why choose us
                        </h6>
                    </div>
                    <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">
                        Great oppurtunity for adventure and travel
                    </h3>
                </div>
                <div className="flex flex-col gap-4 pt-8">
                    {why_us.map((item) => {
                        return (
                            <div key={item.text} className="flex items-center gap-4">
                                <span className="bg-green rounded-md p-4 text-white">
                                    {item.icons}
                                </span>
                                <span className="lg:w-2/3">
                                    <p className="font-bold text-xl pb-2 ">{item.text}</p>
                                    <p className="text-gray-400"> Aenean placerat ut lacus nec pulvinar,Donec eu,ante at</p>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <section className="max-w-[1320px] mx-auto py-24 px-3 ">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                        <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                        <h6 className="text-green relative font-semibold">
                            Recent news feed
                        </h6>
                    </div>
                    <h3 className="lg:text-5xl text-3xl font-bold pb-8 lg:w-2/3 py-4">Latest news & articles from the blog</h3>
                </div>
                <button className="lg:block hidden bg-green text-white rounded-lg text-lg shadow py-4 px-8 font-bold">View More</button>
            </div>
            <div>
                <div className="flex flex-wrap justify-between items-center">
                    <Blogs text="Things to see and do when visiting Japan" title="Adventure" image="/blog-01-500x360.jpg" />
                    <Blogs text="A place where start new life with adventure travel" title="City Tours" image="/blog-02-500x360.jpg" />
                    <div className='flex flex-col'>
                        <Blogs text="Journeys are best measured with friends" />
                        <Blogs text="Travel the most beautiful places in the world" />
                        <Blogs text="Top 10 destinations and adventure trtavel trips" />
                    </div>
                </div>
            </div>
        </section>
        <div className='relative top-20'>
            <Carousel responsive={responsive} infinite autoPlay={true} itemClass='px-4'>
                <div className='h-[298px] relative overflow-hidden'>
                    <img src="/tour-2-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                </div>
                <div className='h-[298px] relative overflow-hidden'>
                    <img src="/tour-5-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                </div>
                <div className='h-[298px] relative overflow-hidden'>
                    <img src="/tour-11-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                </div>
                <div className='h-[298px] relative overflow-hidden'>
                    <img src="/tour-3-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                </div>
                <div className='h-[298px] relative overflow-hidden'>
                    <img src="/tour-10-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                </div>
            </Carousel>
        </div>
        <Footer />

    </>
    );
};

export default About;