import { FaPlaneSlash, FaVest } from "react-icons/fa"
import { TbReportMoney } from "react-icons/tb"
import { RiPlanetLine } from "react-icons/ri"
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
export default function Explore() {
    return (
        <div>
            <div className="max-w-[1320px] mx-auto bg-[url('/bg-shape-04.png')] bg-green bg-no-repeat bg-cover rounded-[10px] relative z-10 lg:mb-0 -mb-24">
                <div className="lg:p-16 py-8 px-4 lg:flex justify-between items-center">
                    <div className="flex items-center gap-4 lg:mb-0 mb-4">

                        <RiPlanetLine size={50} color="white" />
                        <span className="text-white">
                            <p className="text-sm">QUISEQUE VEL ORTOR</p>
                            <h4 className="lg:text-4xl text-2xl font-bold">Ready to adventure and enjoy natural</h4>
                        </span>
                    </div>
                    <button className="bg-white rounded-lg text-lg shadow py-4 px-6 font-bold">Explore More</button>
                </div>
            </div>
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
        </div>

    )
}