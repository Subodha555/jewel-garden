import { useState, useRef, useEffect } from 'react';
import {dropdownOptionType} from "../utils/utils";

type dropdownProps = {
    options: dropdownOptionType[];
    onSelect: (option: dropdownOptionType) => void
}

const Dropdown = ({options, onSelect}: dropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState("Please Select");
    const dropdownRef = useRef(null);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: DocumentEventMap["mousedown"]) => {
            const target = event.target as HTMLElement;
            if (dropdownRef.current && target.role !== "menuitem") {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onSelectItem = (option: dropdownOptionType) => {
        toggleDropdown();
        setSelectedLabel(option.label);
        onSelect(option)
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={toggleDropdown}
                >
                    {selectedLabel}
                    {isOpen && (<svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414 3.707 11.707a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z"
                            clipRule="evenodd"
                        />
                    </svg>)}
                </button>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option)=>(
                            <div key={option.id} onClick={()=>onSelectItem(option)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
