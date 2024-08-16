import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4">
            <div className="flex items-center justify-center">
                <p data-testid="copyright-text" className="text-white">&copy; Jewel Garden - All Right Reserved</p>
                {/*<div>*/}
                {/*    <img src="assets/images/methods.png" alt="methods" className="h-5"/>*/}
                {/*</div>*/}
            </div>
        </footer>
    )
};

export default Footer;