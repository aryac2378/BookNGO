import React from 'react';
import { BsSendCheck, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const SocialButton = ({ Icon }) => (
    <button className="rounded-full p-3 hover:bg-white hover:text-black bg-[#262D28] transition-colors duration-300">
        <Icon size={14} />
    </button>
);

const ContactItem = ({ Icon, title, content }) => (
    <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-[#262D28] rounded-full w-fit justify-center p-4 hover:text-green transition-colors duration-300">
            <Icon className="text-green" size={20} />
        </button>
        <span>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="font-semibold">{content}</p>
        </span>
    </div>
);

const SupportCard = ({ icon, text, buttonColor }) => (
    <div className="flex justify-between items-center bg-[#262D28] p-6 rounded-lg mb-8 lg:mb-0">
        <span className="flex gap-4 items-center">
            <img src={icon} alt="" className="w-16 h-16" />
            <p className="text-white">{text}</p>
        </span>
        <button className={`bg-${buttonColor} rounded-full text-white w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-300`}>
            <GoArrowUpRight size={20} />
        </button>
    </div>
);

export default function Footer() {
    return (
        <footer className="bg-[#1D231F] pt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16">
                    <SupportCard
                        icon="/icon-headphone.png"
                        text="Need any support for tour & travels?"
                        buttonColor="green"
                    />
                    <SupportCard
                        icon="/icon-travel.png"
                        text="Ready to Get Started With Vacations!"
                        buttonColor="orange"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
                    <div>
                        <img src="/logo-white.png" alt="Logo" className="w-32 mb-4" />
                        <p className="text-gray-400 mb-6">
                            To take a trivial example which us ever undertakes laborious physical exercise except to obtain some advantage from it.
                        </p>
                        <div className="flex items-center gap-3">
                            {[BsTwitter, FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
                                <SocialButton key={index} Icon={Icon} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h6 className="text-white text-xl font-bold mb-6">Pages</h6>
                        <ul className="space-y-3">
                            {["About Us", "Community Blog", "Work with us", "Privacy Policy", "Contact Us"].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-green transition-colors duration-300">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className='flex flex-shrink gap-2'>
                            <h6 className="text-white text-xl font-bold mb-6">Newsletter</h6>
                            <div className='mt-4'>
                                <img src="arrow.png" alt="" width={20}/>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter to get our latest updates & news.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white rounded-lg px-4 py-3 w-full outline-none"
                            />
                            <button className="absolute right-0 top-0 bg-green text-white h-full px-4 rounded-r-lg hover:bg-opacity-90 transition-colors duration-300">
                                <BsSendCheck size={20} />
                            </button>
                        </div>
                        <label className="flex items-center mt-3 text-gray-400">
                            <input type="checkbox" className="mr-2" />
                            I agree to all terms and policies
                        </label>
                    </div>

                    <div>
                        <h6 className="text-white text-xl font-bold mb-6">Contact</h6>
                        <div className="space-y-4">
                            <ContactItem Icon={MdPhone} title="Drop a Line" content="+00 (123) 456 889" />
                            <ContactItem Icon={MdOutlineMailOutline} title="Email Address" content="contact@example.com" />
                            <ContactItem Icon={MdOutlineLocationOn} title="Visit office" content="583 Main Street, NY, USA" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-gray-400 py-4 text-center text-sm">
                © 2024 Copyrights by BookNGo. All Rights Reserved
            </div>
        </footer>
    );
}