import React from "react";
import logo from '../../assets/images/logo.png';

// NavBar component
const NavBar = () => {
    return (
        <div>
            {/* Top Bar */}
            <div className="bg-black h-8 flex items-center justify-center">
                <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none">Welcome All</h3>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center justify-between p-4 h-8">
                <DisplayLogo />
                <StartingNav />
            </div>

            {/* Additional Information */}
            <Div />
        </div>
    );
};

// DisplayLogo component
const DisplayLogo = () => {
    return (
        <div className="flex items-center">
            <img className="h-10 w-10" src={logo} alt="Logo" />
        </div>
    );
};

// StartingNav component
const StartingNav = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Logout Button */}
            <button className="font-inter text-base font-medium tracking-normal leading-none text-center mr-4 h-10 w-10">
                Logout
            </button>

            {/* Wish List */}
            <div className="flex items-center space-x-2 h-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#000"
                    className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                </svg>
                <p className="font-inter text-base font-medium tracking-normal leading-none text-center">
                    Wish List
                </p>
            </div>

            {/* Shopping Bag */}
            <div className="flex flex-row items-center cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#000"
                    className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                </svg>
                <p className="font-inter text-base font-medium tracking-normal leading-none text-center">
                    Shopping Bug
                </p>
            </div>
        </div>
    );
};

// Div component
const Div = () => {
    return (
        <div className="bg-black p-4 w-full flex items-center justify-center mx-auto h-12">
            {/* Discount Information */}
            <div className="bg-black p-4">
                <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">50% OFF</div>
            </div>

            {/* Free Shipping Information */}
            <div className="bg-black p-4">
                <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">Free shipping and returns</div>
            </div>

            {/* Payment Method Information */}
            <div className="bg-black p-4">
                <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">Different payment method</div>
            </div>
        </div>
    );
};

export default NavBar;
