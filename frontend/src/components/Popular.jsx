import { IoCheckmarkCircle } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const categories = [
    { text: "Family Camping", tilt: "-rotate-6" },
    { text: "Wild Camping", tilt: "rotate-6" },
    { text: "Fishing", tilt: "-rotate-6" },
    { text: "Mountain Biking", tilt: "rotate-6" },
    { text: "Luxury Cabin", tilt: "-rotate-6" },
    { text: "Couple Camping", tilt: "rotate-6" },
];

export default function Popular() {
    const Section = ({ title, text, children, image, reverse }) => {
        return (
            <div className="max-w-[1440px] mx-auto mt-16 px-4 md:px-12">
                <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8`}>
                    <div className="w-full md:w-1/2">
                        <h6 className="text-green bg-[#ecf5e8] w-fit rounded-md px-5 py-2 font-bold">
                            {title}
                        </h6>
                        <h3 className="text-3xl md:text-5xl font-bold pb-8 leading-tight">
                            {text}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Sit amet consectetur velit integer tincidunt sceleries nodalesry
                            volutpat neque fermentum malesuada sceleris quecy massa lacus
                            ultrices eget leo cras odio blandit rhoncus eues feugiat.
                        </p>
                        {children}
                    </div>
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <img src={image} alt="" className="rounded-t-[300px] w-full max-w-full" />
                    </div>
                </div>
            </div>
        );
    };

    const Card = ({ text, tilt }) => {
        return (
            <div className={`flex items-center w-fit gap-2 p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-2xl ${tilt}`}>
                <IoCheckmarkCircle className="text-xl text-orange" />
                <span className="font-bold text-gray-800">{text}</span>
            </div>
        );
    };

    const ProgressBar = ({ value, text }) => {
        return (
            <div className="flex flex-col items-center">
                <div className="w-28">
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        styles={buildStyles({
                            pathColor: "#63AB45",
                            textColor: "#000",
                            trailColor: "#D6D6D6",
                            backgroundColor: "#F8F8F8",
                        })}
                    />
                </div>
                <p className="font-bold mt-2">{text}</p>
            </div>
        );
    };

    return (
        <div>
            <Section image="/image-15.jpg" text="We are the most funning company about travel and adventure" title="Welcome to BookNGo">
                <div className="flex flex-wrap gap-4">
                    {categories.map((category, index) => (
                        <div key={category.text} className=" sm:w-1/2 md:w-1/3">
                            <Card text={category.text} tilt={category.tilt} />
                        </div>
                    ))}
                </div>
            </Section>
            <Section image="/image-07.jpg" text="Great opportunity for adventure & travels" title="Who we Are" reverse>
                <div className="flex justify-center items-center bg-gray-100 my-12">
                    <div className="bg-white rounded-lg p-8 shadow-2xl flex lg:flex-row flex-col items-center gap-16 w-full justify-center">
                        <ProgressBar value={50} text="Satisfied Clients" />
                        <ProgressBar value={50} text="Success Rate" />
                    </div>
                </div>
            </Section>
        </div>
    );
}
