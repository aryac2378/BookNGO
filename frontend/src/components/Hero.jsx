import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { FaBiking, FaPeopleCarry, FaPlaneSlash, FaUsers } from "react-icons/fa";
import { RiPlanetLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdArrowForward, IoMdOptions } from "react-icons/io";
import { TbBeach } from "react-icons/tb";
import { LiaWarehouseSolid } from "react-icons/lia";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5"

const type = [
    { title: "Adventure", icon: <FaPlaneSlash /> },
    { title: "Discovery", icon: <RiPlanetLine /> },
    { title: "Mountain Biking", icon: <FaBiking /> },
    { title: "Beach", icon: <TbBeach /> },
    { title: "Adventure", icon: <LiaWarehouseSolid /> },
    { title: "Discovery", icon: <RiPlanetLine /> },
];

const responsives = {
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
const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000,
        },
        items: 4,
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 4,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464,
        },
        items: 2,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0,
        },
        items: 1,
    }
};

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = (_, state) => {
        setCurrentSlide(state.currentSlide)
    }

    const Explore = ({ image, country }) => {
        return (
            <div className="relative group overflow-hidden rounded-[10px] shadow-lg">
                <img src={image} alt={country} className="w-full h-[350px] object-cover rounded-[10px] transition-transform duration-700 ease-in-out group-hover:scale-125" />
                <span className="bg-orange rounded-lg px-5 text-white text-xs absolute top-5 right-5 uppercase font-bold leading-8 whitespace-pre">3 Tours</span>
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-5 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-opacity-100">
                    <p className="text-green text-xl font-bold text-center flex flex-col">Travel to <span className="text-white text-2xl text-center group-hover:text-white-800">{country}</span></p>
                    <div className="absolute -top-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button className="bg-orange text-white p-2 rounded-full">
                            <IoArrowForward className="text-xl"></IoArrowForward>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <section className="relative bg-black lg:h-[90vh]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
                <img src="/slider-1.jpg" alt="" className="absolute h-full w-full object-cover" />
                <div className="flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-0 pt-16 mx-auto">
                    <span className="lg:text-5xl text-3xl text-white text-center font-bold relative">
                        Where Would You Like To Go?
                        <div className="bg-orange text-white text-lg -left-8 px-8 py-1 w-fit absolute -top-8 z-10 -rotate-[10deg]">
                            Let's Explore
                        </div>
                    </span>
                    <p className="text-white text-center text-2xl my-8">
                        Checkout Beautiful Places Around The World.
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-lg lg:flex items-center justify-between w-full">
                        <div className="flex items-center w-full lg:py-2 pr-4 mr-4">
                            <MdOutlineParagliding className="text-green text-3xl mr-2" />
                            <div className="flex flex-col w-full">
                                <p className="text-gray-600 text-sm">
                                    Location
                                </p>
                                <select className="focus:outline-none">
                                    <option value="">Locations</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:py-2 pr-4 mr-4">
                            <FaPeopleCarry className="text-green text-3xl mr-2" />
                            <div className="flex flex-col w-full">
                                <p className="text-gray-600 text-sm">
                                    Type
                                </p>
                                <select className="focus:outline-none">
                                    <option value="">Booking Type</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:py-2 pr-4 mr-4">
                            <AiOutlineCalendar className="text-green text-3xl mr-2" />
                            <div className="flex flex-col w-full">
                                <p className="text-gray-600 text-sm">
                                    Date from
                                </p>
                                <input type="date" className="focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:py-2 pr-4 mr-4">
                            <FaUsers className="text-green text-3xl mr-2" />
                            <div className="flex flex-col w-full">
                                <p className="text-gray-600 text-sm">
                                    Guests
                                </p>
                                <input type="number" min={0} className="focus:outline-none w-16" />
                            </div>
                        </div>
                        <div className="flex items-center mr-4 lg:mt-0 mt-4">
                            <IoMdOptions className="lg:block hidden text-green text-3xl mr-2 " />
                            <button className="bg-green text-white flex items-center justify-center gap-4 px-4 py-3 outline-none border-none rounded-lg font-semibold text-sm w-full">
                                <MdSearch size={20} /> SEARCH
                            </button>
                        </div>
                    </div>
                    <img src="/line-arrow.png" alt="" className="lg:block hidden my-4 -ml-96 " />
                    <p className="text-white font-semibold lg:text-3xl text-xl lg:py-0 py-8">Or browse the selected type</p>
                </div>
            </section>

            <section className="bg-[#F3F8F6] bg-[url('/bg-shape-01.png')] bg-no-repeat align-middle">
                <div className="relative z-10 max-w-[1320px] px-6 mx-auto -mt-16">
                    <Carousel
                        responsive={responsives}
                        infinite
                        afterChange={handleAfterChange}
                        autoPlay={true}
                        itemClass="px-2"
                    // afterChange={(previousSlide, { currentSlide }) => setCurrentSlide(currentSlide)}
                    >
                        {type.map((item, index) => (
                            <div key={index} className="group">
                                <div className={`cursor-pointer p-8 rounded-lg flex flex-col justify-center items-start gap-4 
                                    ${currentSlide % type.length === index ?
                                        'bg-green text-white' :
                                        'bg-white text-green group-hover:bg-green group-hover:text-white'}`}>

                                    <p className={`font-bold text-lg  
                                        ${currentSlide % type.length === index ?
                                            'text-white' :
                                            'text-green group-hover:text-white'}`}>
                                        {item.title}
                                    </p>

                                    <span className={`text-7xl  
                                        ${currentSlide % type.length === index ?
                                            'text-white' :
                                            'text-green group-hover:text-white'}`}>
                                        {item.icon}
                                    </span>

                                    <p className={`${currentSlide % type.length === index ?
                                        'text-white' :
                                        'text-green group-hover:text-white'}`}>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="max-w-[1320px] mx-auto pt-24">
                    <div className="py-16">
                        <div className="flex flex-col items-center">
                            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                                <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                                <h6 className="text-green relative font-semibold">Popular activities</h6>
                            </div>
                            <h3 className="lg:text-5xl text-3xl text-center font-bold pb-8 py-4">Explore Real Adventure</h3>
                        </div>

                        <div className="relative z-10 px-6 py-8">
                            <Carousel
                                responsive={responsive}
                                infinite
                                autoPlay={true}
                                itemClass="px-2 pb-6"
                            >
                                <Explore country="United Kingdom" image="/image-01.jpg" />
                                <Explore country="France" image="/image-02.jpg" />
                                <Explore country="Singapore" image="/image-03.jpg" />
                                <Explore country="Thailand" image="/image-04.jpg" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
