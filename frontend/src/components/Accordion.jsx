import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IoChevronBackCircle, IoChevronDownCircle } from 'react-icons/io5';

const items1 = [
    {
        title: "How much price about Tours and Travels",
        content: "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl sit placerat neque amet sapien semper tempus.",
    },
    {
        title: "We're giving all the best services to you",
        content: "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl sit placerat neque amet sapien semper tempus.",
    },
    {
        title: "Best Experience Travel Agency",
        content: "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl sit placerat neque amet sapien semper tempus.",
    }
];

export default function Accordion() {
    return (
        <div className="w-full">
            {items1.map((item, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <>
                            <DisclosureButton className={`w-full text-left bg-white rounded-sm p-4 flex items-center justify-between ${open ? 'border border-green' : 'border mb-4'}`}>
                                <span className='font-bold text-lg'>{item.title}</span>
                                {open ? (<IoChevronDownCircle className='w-5 h-5 text-green' />) : (<IoChevronBackCircle className='w-5 h-5 text-gray-500' />)}
                            </DisclosureButton>
                            <DisclosurePanel key={index} className="bg-white p-4 border border-green rounded-sm mb-2">
                                <p className='text-gray-600'>{item.content}</p>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}
