import {useEffect, Suspense} from "react";
import {useDispatch} from "react-redux";
import {setUserDetails} from "./store/redux/reducers/user";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import './index.css'
import FallbackLoading from "./components/loader/FallbackLoading"
import {nonMenuRoutes, privateRoutes} from "./routes"

function App() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setUserDetails({
            name: "subodha",
            email: "subodha@gmail.com",
            address: "colombo"
        }));
    }, []);

    return (
        <div className="app">
            <Router basename="/jewel-garden">
                <Suspense fallback={<FallbackLoading />}>
                    <Routes>
                        <Route  path="/" element={<Login />} />
                        <Route  path="/register" element={<Register />} />
                        <Route  path="/reset" element={<Reset />} />
                        <Route  path="/dashboard" element={<Dashboard />}>
                            {privateRoutes.map((route) => (
                                <Route key={route.path} path={route.path} element={route.element}/>
                            ))}
                            {nonMenuRoutes.map((route) => (
                                <Route key={route.path} path={route.path} element={route.element}/>
                            ))}
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}
export default App;