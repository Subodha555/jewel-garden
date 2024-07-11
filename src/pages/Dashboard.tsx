import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";
import {setUserDetails} from "../store/redux/reducers/user";
import {isAdmin} from "../utils/utils";

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

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    useEffect(()=> {
        if (user) {
            dispatch(setUserDetails({
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                isAdmin: isAdmin
            }));
        } else if (user === null && !loading) {
            navigate("/");
        }
    }, [user, loading]);


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
