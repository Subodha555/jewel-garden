import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import logo from "/imgs/app-logo.jpg";
import jewelLady from "/imgs/jewel-lady-4.webp"
import {privateRoutes} from "../routes";
import {Link, useLocation} from "react-router-dom";
import {RootState} from "../store/redux/store";

const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState(privateRoutes[0]);
    const [showBanner, setShowBanner] = useState(true);
    const user = useSelector((state: RootState) => state.user);
    const location = useLocation();

    useEffect(()=> {
        const homePage = location.pathname.replaceAll("/", "");
        setShowBanner(location.pathname.includes("dashboard/home") || homePage === "dashboard");
    }, [location.pathname]);

    useEffect(() => {
        const headerHeight = document.querySelector("header").offsetHeight;
        console.log("header height from header", headerHeight);
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }, [showBanner]);

    const onSelect = (selectedMenu: typeof privateRoutes[0]) => {
        setSelectedMenu(selectedMenu);
    };
    return (
        <header className={showBanner ? "" : "h-[120px]"}>
            <nav className="bg-gray-800">
                <div className="flex">
                    <div className="flex items-center justify-between flex-grow md:px-12 py-2">
                        <Link to="home">
                            <img src={logo} alt="Logo" className="w-12 h-12"/>
                        </Link>
                        <div className="flex items-center space-x-6 capitalize">
                            {
                                privateRoutes.map((tab, index) => {
                                    return (
                                        tab.path === "" || (tab.path === "admin" && !user.isAdmin) ? "" : <Link to={tab.path} key={tab.path}  className={selectedMenu.path === tab.path ? 'text-gray-200 hover:text-white transition active' : 'text-gray-200 hover:text-white transition'} onClick={() => onSelect(tab)}>{tab.label}</Link>
                                    )
                                })
                            }
                        </div>
                        {/*<a href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</a>*/}
                        <div className="text-white">
                            <span className="pr-2">{user.name}</span>
                            <span className="pr-2">|</span>
                            <span>{user.email}</span>
                            {/*{user.address}*/}
                        </div>
                    </div>
                </div>
            </nav>

            {showBanner && (<div className="bg-contain bg-no-repeat bg-right py-36 bg-[#b4c5cb]"
                 style={{backgroundImage: `url(${jewelLady})`}}>
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
            </div>)}
        </header>
    )
};

export default Header;