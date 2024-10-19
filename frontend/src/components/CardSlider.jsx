import { RiPlanetLine } from 'react-icons/ri';
import { LiaWarehouseSolid } from "react-icons/lia";
import { TbBeach } from "react-icons/tb";
import { FaPlaneSlash, FaBiking } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';

const type = [
  { title: "Adventure", icon: <FaPlaneSlash /> },
  { title: "Disovery", icon: <RiPlanetLine /> },
  { title: "Mountain Biking", icon: <FaBiking /> },
  { title: "Beach", icon: <TbBeach /> },
  { title: "Adventure", icon: <LiaWarehouseSolid /> },
  { title: "Disovery", icon: <RiPlanetLine /> },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleAfterChange = (_, state) => {
    setCurrentSlide(state.currentSlide)
  }
  return (
    <div className="relative z-10 max-w-[1320px] mx-auto -mt-16">
      <Carousel responsive={responsive} infinite autoPlay arrows itemClass="px-2" afterChange={handleAfterChange}>
        {type.map((item, index) => (
          <div key={index} className="group">

            <div className={`cursor-pointer p-8 rounded-lg flex flex-col justify-center items-start gap-4 ${currentSlide % type.length === index ? "bg-green text-white " : "bg-white text-green group-hover:bg-green group-hover:text-white"
              }`}>

              <p className={`font-bold text-lg ${currentSlide % type.length === index ? "text-white " : " text-green group-hover:text-white"
                }`}>
                {item.title}
              </p>

              <span className={`text-7xl ${currentSlide % type.length === index ? "text-white " : " text-green group-hover:text-white"
                }`}>
                {item.icon}
              </span>

              <p className={` ${currentSlide % type.length === index ? "text-white " : " text-green group-hover:text-white"
                }`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, magnam!</p>
            </div>
          </div>
        )
        )
        }
      </Carousel>
    </div>

  )
}