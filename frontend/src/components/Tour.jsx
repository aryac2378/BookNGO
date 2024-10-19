import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { BsPlay } from "react-icons/bs";
import Accordion from "./Accordion";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { CiCamera, CiHeart } from "react-icons/ci";
import { 
    MdArrowRightAlt,
    MdLocationPin,
    MdPeopleOutline,
    MdStar,
} from 'react-icons/md';
import { IoVideocamOutline } from "react-icons/io5";
import { LiaDollarSignSolid, LiaRupeeSignSolid } from "react-icons/lia";
import { WiTime3 } from 'react-icons/wi';

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

export const Tours = ({id, image, name, rating=5,price=59}) => {
    return (
        <div>
            <div className="relative overflow-hidden rounded-t-lg">
                <img src={image} alt="" className="rounded-t-lg hoverImg w-full h-[360px]" />
                <div className="absolute flex justify-between top-4 left-4 right-4">
                    <p className="bg-[#14B0C3] rounded-md px-4 py-1 text-white text-sm">FEATURED</p>
                    <button className="bg-[#00000066] p-1 rounded-md">
                        <CiHeart className="text-white text-xl" />
                    </button>
                </div>
            </div>
            <div className="border bg-white border-[#ebe6de] rounded-lg relative -top-8">
                <div className="absolute w-full h-5 bg-white rounded-t-[20px] "></div>
                <div className="px-6">
                    <div className="flex items-center gap-4 justify-between relative pt-4">
                        <span className="flex justify-center">
                            <Rating rating={rating}/>
                        </span>
                        <span className="flex gap-2 shadow px-4 py-1 absolute -top-4 right-0 z-10 bg-white rounded-lg">
                            <div className="relative">
                                <CiCamera size={24} />
                                <button className="bg-green text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute -top-1 -right-1">5</button>
                            </div>
                            <IoVideocamOutline size={24} />
                        </span>
                    </div>
                    <h4 className="text-xl font-semibold py-2 hover:text-green">{name}</h4>
                    <span className="flex items-center gap-2">
                        <MdLocationPin className="text-green text-xl" />
                        <p className="text-[#757783] text-md">Main Street, Brooklyn, NY</p>
                    </span>
                    <span className="text-[#757783] flex py-4 gap-2">
                        <LiaRupeeSignSolid className="text-green text-xl" /> From
                        <p className="text-green">₹{price}.00</p>
                    </span>
                    <div className="flex justify-between border-t py-2">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                                <WiTime3 className="text-green" />10 days
                            </span>
                            <span className="flex items-center gap-1">
                                <MdPeopleOutline className="text-green" />50
                            </span>
                        </div>
                        <Link to={`/package/${id}`}  className="flex items-center gap-2 text-md">Explore <MdArrowRightAlt /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tour() {
    return (
        <div>
            <section>
                <div className="max-w-[1320px] mx-auto lg:-mt-20 mb-10 flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg">
                    <div className="w-full relative lg:w-1/2 lg:mt-0 -mt-24 z-10 lg:px-0 px-3">
                        <img src="/tour-2-550x590.jpg" alt="" className="w-full h-64 lg:h-full rounded-l-md object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-green animate-pulse text-white rounded-full p-8">
                                <BsPlay size={30} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 py-24 lg:px-12 px-3">
                        <div className="relative w-fit py-2 flex items-center justify-start">
                            <h6 className="bg-[#63AB4526] text-green w-full rounded-md px-5 py-2 font-bold">Availability</h6>
                        </div>
                        <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">Enjoy Real Adventure</h3>
                        <Accordion />
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12" data-aos="Fade-down">
                <div className="w-full py-24 lg:px-12 px-3">
                    <div className="relative w-fit mx-auto py-2 flex items-center justify-center">
                        <h6 className="bg-[#63AB4526] text-green w-full rounded-md px-5 py-2 font-bold">Featured Tour</h6>
                    </div>
                    <h3 className="lg:text-5xl lg:w-1/2 mx-auto text-3xl font-bold pb-8 py-4 text-center">Amazing tour places around the world.</h3>
                </div>
                <div>
                    <Carousel responsive={responsive} infinite autoplay={true} itemClass="px-2 pb-4">
                        <Tours image="/tour-8-500x360.jpg" name="Discovery Island Kayak Tour" />
                        <Tours image="/tour-6-500x360.jpg" name="Beautiful Floating Villa" />
                        <Tours image="/tour-2-500x360.jpg" name="Yucatan Peninsula & Caribbean" />
                        <Tours image="/tour-9-500x360.jpg" name="Java & Bali One Life Adventures" />
                        <Tours image="/tour-1-500x360.jpg" name="Boathouse Neighborhood" />
                    </Carousel>
                </div>
            </section>
        </div>
    );
}

export default Tour;
