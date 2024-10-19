// import React, { useState, useMemo, useEffect } from 'react';
// import axios from 'axios';
// import { BsSortAlphaDown } from "react-icons/bs";
// import { RiPlanetLine } from "react-icons/ri";
// import CardSlider from "./CardSlider";
// import Sidebar from "./Sidebar";
// // import { useState } from "react";
// import ReactPaginate from 'react-paginate';
// import { Tours } from "./Tour"



// export default function Tour1() {
//     const [sortAsc, setSortAsc] = useState(true)
//     const [sortCriterion, setSortCriterion] = useState('name')
//     const [currentPage, setcurrentPage] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const itemsPerPage = 6;

  
//     const [tourData, setPackages] = useState([])
//     useEffect(() => {
//         const fetchPackages = async () => {
//             try {
//                 const token = localStorage.getItem('user');

//                 const response = await axios.get('http://127.0.0.1:8000/api/packages/', {
//                     // headers: {
//                     //     Authorization: `Bearer ${token}`,
//                     // }
//                 });
//                 setPackages(response.data);
//                 console.log(response.data);
//             } catch (err) {
//                 setError(err.message);
//                 // setModalVisible(true);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPackages();
//     }, []);
//     const handleSortChange = (event) => {
//         setSortCriterion(event.target.value)
//         setSortAsc(true);
//     }

//     const sortData = (data) => {
//         if (sortCriterion === 'name') {
//           // Sort alphabetically by tour name
//           return data.sort((a, b) => {
//             if (sortAsc) {
//               return a.name.localeCompare(b.name);
//             } else {
//               return b.name.localeCompare(a.name);
//             }
//           });
//         } else if (sortCriterion === 'price') {
//           // Sort by price (numerical comparison)
//           return data.sort((a, b) => {
//             if (sortAsc) {
//               return a.price - b.price;
//             } else {
//               return b.price - a.price;
//             }
//           });
//         } else if (sortCriterion === 'rating') {
//           // Sort by rating (numerical comparison)
//           return data.sort((a, b) => {
//             if (sortAsc) {
//               return a.rating - b.rating;
//             } else {
//               return b.rating - a.rating;
//             }
//           });
//         }
//         return data; // Return data as-is if no matching criterion
//       };
      

//     const sortedData = sortData([...tourData]);
//     const offset = currentPage * itemsPerPage;
//     const currentPageData = sortedData.slice(offset, offset + itemsPerPage);
//     const pageCount = Math.ceil(tourData.length / itemsPerPage);

//     const handlePageClick = (data) => { setcurrentPage(data.selected); };

//     return (
//         <div>
//             <section className="relative bg-black lg:h-[380px]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
//                 <img src="/slider-1.jpg" alt="" className="absolute h-full w-full object-cover" />
//                 <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1380px] px-6 lg:pt-0 pt-16 mx-auto">
//                     <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">Explore The World</span>
//                     <p className=" text-white text-center text-2xl my-2 ">People don't take,Trips take people</p>
//                 </div>
//             </section>
//             <CardSlider />
//             <section className="lg:flex gap-8 max-w-[1320px] mx-auto my-24 px-3">
//                 <Sidebar />

//                 <div className="lg:2/3">
//                     <div className="flex lg:flex-row flex-col justify-between py-4 pb-2 text-[#82828A]">
//                         <span className="flex gap-2">
//                             <strong>{tourData.length}</strong> Tours
//                         </span>
//                         <span className="flex gap-2">
//                             <span className="flex gap-2 items-center">
//                                 Sort By <BsSortAlphaDown className="cursor-pointer" onClick={() => setSortAsc(!sortAsc)} />
//                             </span>
//                             <select value={sortCriterion} onChange={handleSortChange} className="w-32 cursor-pointer outline-none border rounded-sm">
//                                 <option value="name">Title</option>
//                                 <option value="price">Price</option>
//                                 <option value="rating">Rating</option>
//                             </select>

//                         </span>
//                     </div>

//                     <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//                         {currentPageData?.map((item, index) => (
//                             <Tours key={index} id={item.id} image={item.image} name={item.name} rating={item.rating} price={item.price} />
//                         ))}
//                     </div>
//                     <ReactPaginate
//                         previousClassName="hidden"
//                         nextLabel={"Next >>"}
//                         nextClassName="border-2 rounded-[4px] px-4 h-10 flex items-center hover:border-green"
//                         breakLabel="..."
//                         pageCount={pageCount}
//                         marginPagesDisplayed={2}
//                         pageRangeDisplayed={5}
//                         onPageChange={handlePageClick}
//                         containerClassName="flex items-center gap-3 pt-8"
//                         pageLinkClassName="h-10 flex items-center px-4 rounded-[4px] border-2 hover:border-green"
//                         activeLinkClassName="border-2 border-green rounded-[4px]"
//                     />
//                 </div>
//             </section>
//             <div className="bg-[url('/bg-shape-04.png')] bg-green bg-no-repeat bg-cover relative z-10 lg:mb-0 -mb-24">
//                 <div className="lg:py-16 py-8 lg:px-3 px-4 lg:flex justify-between items-center max-w-[1320px] mx-auto">
//                     <div className="flex items-center gap-4 lg:mb-0 mb-4">
//                         <RiPlanetLine color="white" size={64} />
//                         <span className="text-white">
//                             <p className="text-sm">QUISEQUE VEL ORTOR</p>
//                             <h4 className="lg:text-4xl text-2xl font-bold">
//                                 Ready to adventure and enjoy natural
//                             </h4>
//                         </span>
//                     </div>
//                     <button className="bg-white rounded-lg text-lg shadow py-4 px-8 font-bold">
//                         Explore More
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsSortAlphaDown } from "react-icons/bs";
import { RiPlanetLine } from "react-icons/ri";
import CardSlider from "./CardSlider";
import Sidebar from "./Sidebar";
import ReactPaginate from 'react-paginate';
import { Tours } from "./Tour";

export default function Tour1() {
    const [sortAsc, setSortAsc] = useState(true);
    const [sortCriterion, setSortCriterion] = useState('name');
    const [currentPage, setcurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 6;
    const [tourData, setPackages] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // Fetch tour packages
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/packages/');
                setPackages(response.data);
                setFilteredData(response.data); // Set initially filtered data
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    // Sorting logic
    const handleSortChange = (event) => {
        setSortCriterion(event.target.value);
        setSortAsc(true);
    };

    const sortData = (data) => {
        if (sortCriterion === 'name') {
            return data.sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        } else if (sortCriterion === 'price') {
            return data.sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);
        } else if (sortCriterion === 'rating') {
            return data.sort((a, b) => sortAsc ? a.rating - b.rating : b.rating - a.rating);
        }
        return data;
    };

    const sortedData = sortData([...filteredData]);
    const offset = currentPage * itemsPerPage;
    const currentPageData = sortedData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageClick = (data) => { setcurrentPage(data.selected); };

    // Function to filter tours based on price range received from Sidebar
    const handlePriceFilter = (priceRange) => {
        const filtered = tourData.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);
        setFilteredData(filtered);
    };

    return (
        <div>
            <section className="relative bg-black lg:h-[380px]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
                <img src="/slider-1.jpg" alt="" className="absolute h-full w-full object-cover" />
                <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1380px] px-6 lg:pt-0 pt-16 mx-auto">
                    <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">Explore The World</span>
                    <p className=" text-white text-center text-2xl my-2 ">People don't take, Trips take people</p>
                </div>
            </section>
            <CardSlider />
            <section className="lg:flex gap-8 max-w-[1320px] mx-auto my-24 px-3">
                {/* Pass the price filter function to Sidebar */}
                <Sidebar onPriceFilter={handlePriceFilter} />

                <div className="lg:2/3">
                    <div className="flex lg:flex-row flex-col justify-between py-4 pb-2 text-[#82828A]">
                        <span className="flex gap-2">
                            <strong>{filteredData.length}</strong> Tours
                        </span>
                        <span className="flex gap-2">
                            <span className="flex gap-2 items-center">
                                Sort By <BsSortAlphaDown className="cursor-pointer" onClick={() => setSortAsc(!sortAsc)} />
                            </span>
                            <select value={sortCriterion} onChange={handleSortChange} className="w-32 cursor-pointer outline-none border rounded-sm">
                                <option value="name">Title</option>
                                <option value="price">Price</option>
                                <option value="rating">Rating</option>
                            </select>
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        {currentPageData?.map((item, index) => (
                            <Tours key={index} id={item.id} image={item.image} name={item.name} rating={item.rating} price={item.price} />
                        ))}
                    </div>
                    <ReactPaginate
                        previousClassName="hidden"
                        nextLabel={"Next >>"}
                        nextClassName="border-2 rounded-[4px] px-4 h-10 flex items-center hover:border-green"
                        breakLabel="..."
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="flex items-center gap-3 pt-8"
                        pageLinkClassName="h-10 flex items-center px-4 rounded-[4px] border-2 hover:border-green"
                        activeLinkClassName="border-2 border-green rounded-[4px]"
                    />
                </div>
            </section>
            <div className="bg-[url('/bg-shape-04.png')] bg-green bg-no-repeat bg-cover relative z-10 lg:mb-0 -mb-24">
                <div className="lg:py-16 py-8 lg:px-3 px-4 lg:flex justify-between items-center max-w-[1320px] mx-auto">
                    <div className="flex items-center gap-4 lg:mb-0 mb-4">
                        <RiPlanetLine color="white" size={64} />
                        <span className="text-white">
                            <p className="text-sm">QUISEQUE VEL ORTOR</p>
                            <h4 className="lg:text-4xl text-2xl font-bold">
                                Ready to adventure and enjoy natural
                            </h4>
                        </span>
                    </div>
                    <button className="bg-white rounded-lg text-lg shadow py-4 px-8 font-bold">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
}
