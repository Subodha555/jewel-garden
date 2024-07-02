import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import {useEffect, useCallback} from "react";

function App() {
    console.log("window height", window.innerHeight);
    // const headerIds = {HOME: 'HOME', SHOP: 'SHOP', ORDERS: 'ORDERS', ACCOUNT_SETTINGS: 'ACCOUNT SETTINGS'};
    // const headerTabs = [
    //     {
    //         id: headerIds.HOME,
    //         label: 'Home',
    //         pageName: <Home/>
    //     },
    //     {
    //         id: headerIds.SHOP,
    //         label: 'Shop',
    //         pageName: <Buy/>
    //     },
    //     {
    //         id: headerIds.ORDERS,
    //         label: 'Orders',
    //         pageName: <Orders/>
    //     },
    //     {
    //         id: headerIds.ACCOUNT_SETTINGS,
    //         label: 'Account Settings',
    //         pageName: <AccountSettings/>
    //     }
    // ];
    // const [SelectedTab, setSelectedTab] = useState(headerTabs[0]);
    //
    // const onChangeTab = (tab) => {
    //     setSelectedTab(tab)
    // };

    const setHeights = useCallback(() => {
        const headerHeight = document.querySelector("header")?.offsetHeight;
        const footerHeight = document.querySelector("footer")?.offsetHeight;

        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
    }, []);

    useEffect(()=> {
        setHeights();

        window.addEventListener("resize", setHeights);

        return () => {
            window.removeEventListener('resize', setHeights);
        };
    }, [setHeights]);

    return (
        <>
            <Header/>
            {/*{*/}
            {/*    SelectedTab.pageName*/}
            {/*}*/}
            <div className="outlet-container">
                <Outlet/>
            </div>

            {/*<button className="dashboard__btn" onClick={logout}>*/}
            {/*    Logout*/}
            {/*</button>*/}

            {/*<Blog/>*/}
            <Footer/>
        </>
    )
}

export default App
