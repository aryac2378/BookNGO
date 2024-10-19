import { BsTrainLightrailFront } from "react-icons/bs";
import { FaBusAlt, FaBiking } from "react-icons/fa";
import { LiaWarehouseSolid } from "react-icons/lia";
import { GiWoodenPier } from "react-icons/gi";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { IoArrowForward } from "react-icons/io5";
import { useState } from "react";

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

const offers = [
    {
        icon: <LiaWarehouseSolid />,
        image: '/image-01.jpg',
        text: 'Tent Camping',
    },
    {
        icon: <BsTrainLightrailFront />,
        image: '/image-02.jpg',
        text: 'Glamping Cabin',
    },
    {
        icon: <FaBusAlt />,
        image: '/image-19.jpg',
        text: 'RV Caravan Trailers',
    },
    {
        icon: <GiWoodenPier />,
        image: '/tour-11-500x360.jpg',
        text: 'Adventure and Climbing',
    },
    {
        icon: <FaBiking />,
        image: '/tour-2-500x360.jpg',
        text: 'Mountain Climbing',
    },
];

export default function Offers() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="bg-[url('/bg-02.jpg')] pb-24">
            <div className="max-w-[1320px] mx-auto py-24">
                <div className="flex flex-col items-center">
                    <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                        <h6 className="bg-[#63AB4577] text-orange w-fit rounded-md px-5 py-2 font-bold">What we are offering</h6>
                    </div>
                    <h3 className="lg:text-5xl text-3xl font-bold pb-8 text-white lg:w-4/5 text-center py-4">
                        Feel real adventure and very close to nature
                    </h3>
                </div>
                <div className="relative z-10 px-6 py-8">
                    <Carousel responsive={responsive} autoPlay={true} itemClass="pb-6 px-2">
                        {offers.map((offer, index) => (
                            <div key={offer.image} className="relative group h-80 rounded-lg p-8"
                                style={{
                                    backgroundImage: hoveredIndex === index ?
                                        `url(${offer.image})` :
                                        'none',
                                    backgroundColor: hoveredIndex === index ? "transparent" : "black",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}>
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 bg-black opacity-50 rounded-[10px]"></div>
                                )}
                                <div className="relative py-8 rounded-lg">
                                    <span className={`text-7xl ${hoveredIndex === index ? 'text-green' : 'text-orange'}`}>
                                        {offer.icon}
                                    </span>
                                    <p className="text-white text-xl font-bold py-4">{offer.text}</p>
                                    <p className="text-[#d3d3d3] leading-7">Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="absolute -bottom-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <button className="bg-green text-white p-2 rounded-full">
                                        <IoArrowForward className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
