import {useState} from "react";
import {useSelector} from "react-redux";
import logo from "/imgs/app-logo.jpg"
// import "../css/Header.css";
import Avatar from "./Avatar";
import Toolbar from '@mui/material/Toolbar';
import jewelLady from '/imgs/jewel-lady-3.jpg';
import Home from "../views/Home";
import Buy from "../views/Buy";
import Orders from "../views/Orders";
import AccountSettings from "../views/AccountSettings";
import {privateRoutes} from "../routes";
import {Link} from "react-router-dom";

const Header = () => {
    const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0);
    const user = useSelector(state => state.user);

    const headerIds = {HOME: 'HOME', SHOP: 'SHOP', ORDERS: 'ORDERS', ACCOUNT_SETTINGS: 'ACCOUNT SETTINGS'};
    const headerTabs = [
        {
            id: headerIds.HOME,
            label: 'Home',
            path: "home"
        },
        {
            id: headerIds.SHOP,
            label: 'Shop',
            path: 'buy'
        },
        {
            id: headerIds.ORDERS,
            label: 'Orders',
            path: "orders"
        },
        {
            id: headerIds.ACCOUNT_SETTINGS,
            label: 'Account Settings',
            pageName: <AccountSettings/>
        }
    ];

    const onSelect = (index) => {
        setSelectedHeaderIndex(index);
        // onSelectTab(headerTabs[index]);
    };
    return (
            // <div className="container text-center">
            //     <div className="row">
            //         <div className="col-1">
            //             <Avatar img={logo} height={50}/>
            //         </div>
            //         <div className="col d-flex justify-content-center">
            //             <ul className="nav nav-pills">
            //                 {
            //                     headerTabs.map((tab, index) => {
            //                         return (
            //                             <li key={tab.id} className="nav-item" onClick={() => onSelect(index)}>
            //                                 <a className={selectedHeaderIndex === index ? 'nav-link active' : 'nav-link'}>{tab.label}</a>
            //                             </li>)
            //                     })
            //                 }
            //             </ul>
            //         </div>
            //         <div className="col-1">
            //             <div className="dropdown">
            //                 <button className="rounded-circle btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                     <Avatar height={50}/>
            //                 </button>
            //                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                     <a className="dropdown-item" href="#">Action</a>
            //                     <a className="dropdown-item" href="#">Another action</a>
            //                     <a className="dropdown-item" href="#">Something else here</a>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        <>
            <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                <a>
                    <img src={logo} alt="Logo" className="w-20 h-20"/>
                    {user.name} |
                    {user.email} |
                    {user.address}
                </a>

                <div className="w-full max-w-xl relative flex">
                    <span className="absolute left-4 top-3 text-lg text-gray-400">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                        <input type="text" name="search" id="search"
                               className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                               placeholder="search"/>
                            <button
                                className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
                                Search
                            </button>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="text-xs leading-3">Wishlist</div>
                        <div
                            className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            8
                        </div>
                    </a>
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div className="text-xs leading-3">Cart</div>
                        <div
                            className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            2
                        </div>
                    </a>
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </a>
                </div>
            </div>
        </header>
            <nav className="bg-gray-800">
                <div className="container flex">
                    <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                        <span className="capitalize ml-2 text-white hidden">All Categories</span>

                        <div
                            className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain"/>
                                    <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/terrace.svg" alt="terrace" className="w-5 h-5 object-contain"/>
                                    <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/bed.svg" alt="bed" className="w-5 h-5 object-contain"/>
                                    <span className="ml-6 text-gray-600 text-sm">Bed</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/office.svg" alt="office" className="w-5 h-5 object-contain"/>
                                    <span className="ml-6 text-gray-600 text-sm">office</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain"/>
                                    <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/bed-2.svg" alt="Mattress" className="w-5 h-5 object-contain"/>
                                    <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div className="flex items-center space-x-6 capitalize">
                            {
                                privateRoutes.map((tab, index) => {
                                    return (
                                        tab.path === "" ? "" : <Link to={tab.path} key={tab.path}  className={selectedHeaderIndex === index ? 'text-gray-200 hover:text-white transition active' : 'text-gray-200 hover:text-white transition'} onClick={() => onSelect(index)}>{tab.label}</Link>
                                    )
                                })
                            }
                        </div>
                        <a href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</a>
                    </div>
                </div>
            </nav>

            <div className="bg-cover bg-no-repeat bg-center py-36"
                 style={{backgroundImage: 'url("/imgs/jewel-lady-3.jpg")'}}>
                <div className="container">
                    <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">Radiance Redefined: <br/> The Essence of Elegance</h1>
                    <p>Embrace the essence of elegance and let your <br/>
                        beauty shine with our exquisite jewelry. <br/>
                        Because true beauty isn't just seen, it's felt.</p>
                    <div className="mt-12">
                        <a href="#" className="bg-primary border border-primary text-white px-8 py-3 font-medium
                    rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;