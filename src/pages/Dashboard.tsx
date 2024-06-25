import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

function App() {
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

    return (
        <>
            <Header/>
            {/*{*/}
            {/*    SelectedTab.pageName*/}
            {/*}*/}

            <Outlet/>

            {/*<button className="dashboard__btn" onClick={logout}>*/}
            {/*    Logout*/}
            {/*</button>*/}

            {/*<Blog/>*/}
            <Footer/>
        </>
    )
}

export default App
