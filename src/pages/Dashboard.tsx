import {useEffect, useCallback} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";
import {setUserDetails} from "../store/redux/reducers/user";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {isAdmin} from "../utils/utils";

function App() {
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
            <div className="outlet-container">
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default App
