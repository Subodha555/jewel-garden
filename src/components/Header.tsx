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
        <>
            <nav className="bg-gray-800">
                <div className="flex">
                    <div className="flex items-center justify-between flex-grow md:px-12 py-5">
                        <a>
                            <img src={logo} alt="Logo" className="w-20 h-20"/>
                        </a>
                        <div className="flex items-center space-x-6 capitalize">
                            {
                                privateRoutes.map((tab, index) => {
                                    return (
                                        tab.path === "" ? "" : <Link to={tab.path} key={tab.path}  className={selectedHeaderIndex === index ? 'text-gray-200 hover:text-white transition active' : 'text-gray-200 hover:text-white transition'} onClick={() => onSelect(index)}>{tab.label}</Link>
                                    )
                                })
                            }
                        </div>
                        {/*<a href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</a>*/}
                        <div className="text-white">{user.name} |
                            {user.email} |
                            {user.address}</div>
                    </div>
                </div>
            </nav>

            <div className="bg-cover bg-no-repeat bg-center py-36"
                 style={{backgroundImage: 'url("/imgs/jewel-lady-3.jpg")'}}>
                <div className="container">
                    <h1 className="text-6xl text-black-800 font-medium mb-4 capitalize">Radiance <br/>Redefined</h1>
                    <p className="text-white">Embrace the essence of elegance and let your <br/>
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