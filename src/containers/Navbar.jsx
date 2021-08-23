import {useState} from "react";
import DropDownItem from "../components/DropDownItem";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-green-400 to-green-600">
            <div className="flex flex-col lg:flex-row text-white lg:items-center">
                <div className="flex justify-between items-center border-b-2 border-green-400 lg:border-b-0">
                    <div className="min-w-max py-6 px-4">
                        <a href="#" className="font-semibold text-3xl font-sans hover:text-green-200">Santri Sehat</a>
                    </div>
                    <div className="lg:hidden px-4">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className={!isOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                <path className={isOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:justify-end lg:flex-row w-full`}>
                    <DropDownItem name="Beranda" routeTo="#"/>
                    <DropDownItem name="Pengaduan" routeTo="#"/>
                    <DropDownItem name="Pengaturan" routeTo="#"/>
                    <DropDownItem name="Tentang" routeTo="#"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
