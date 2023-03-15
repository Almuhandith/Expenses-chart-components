import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-between items-end pt-5">
            <div>
                <h1 className="text-lg font-normal text-gray-400">Total this month</h1>
                <p className="text-5xl font-bold">$478.33</p>
            </div>
            <div className="text-right">
                <p className="font-bold">2.4%</p>
                <p className="text-gray-400">from last month</p>
            </div>
        </div>
    );
}

export default Footer;