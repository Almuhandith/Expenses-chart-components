import React from "react";

export const Footer = () => {
    return (
        <div className="flex justify-between items-end pt-7 border-t-2 border-gray-200">
            <div>
                <h1 className="font-normal text-gray-400">Total this month</h1>
                <p className="lg:text-5xl text-3xl font-bold">$478.33</p>
            </div>
            <div className="text-right">
                <p className="font-bold">2.4%</p>
                <p className="text-gray-400">from last month</p>
            </div>
        </div>
    );
}

export default Footer;