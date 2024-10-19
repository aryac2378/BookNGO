import { useState } from "react";
import ReactSlider from 'react-slider';

export default function Sidebar({ onPriceFilter }) {
    const [value, setValue] = useState([5000, 50000]); // State for price range

    // Function to trigger filtering based on price range
    const handleSearch = () => {
        onPriceFilter(value);
    };

    return (
        <div className="flex flex-col gap-8 lg:w-1/3">
            <div className="p-4 w-full bg-white shadow-lg rounded-lg">
                <div className="mb-4 flex items-start border-b py-4">
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Price</h3>
                        <div className="flex justify-between mb-3">
                            <div className="bg-green text-white px-2 rounded">₹{value[0]}</div>
                            <div className="bg-green text-white px-2 rounded">₹{value[1]}</div>
                        </div>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="thumb"
                            trackClassName="track"
                            min={5000}
                            max={50000}
                            value={value}
                            onChange={(value) => setValue(value)} // Update the slider value
                            ariaLabel={["Lower thumb", "Upper thumb"]}
                            renderTrack={(props, state) => {
                                const { index } = state;
                                const { key, ...restProps } = props;
                                const trackStyle = index === 1 ? { backgroundColor: '#63ab45' } : { backgroundColor: '#999' };
                                return (
                                    <div key={key} {...restProps} style={{ ...restProps.style, ...trackStyle }} />
                                );
                            }}
                            renderThumb={(props, state) => {
                                const { key, ...restProps } = props;
                                return(
                                    <div key={key} {...restProps} style={{ ...restProps.style, backgroundColor: '#63ab45', borderRadius: '50%', width: '20px', height: '20px' }} />
                                );
                            }}
                        />
                    </div>
                </div>
                <button className="bg-green text-white py-2 px-4 rounded w-full" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
}
