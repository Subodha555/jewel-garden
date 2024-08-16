import {Suspense} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import './index.css'
import FallbackLoading from "./components/loader/FallbackLoading"
import {nonMenuRoutes, privateRoutes} from "./routes"
import {isAdmin} from "./utils/utils";

function App() {
    return (
        <div className="app">
            <Router basename="/jewel-garden">
                <Suspense fallback={<FallbackLoading />}>
                    <Routes>
                        <Route  path="/" element={<Login />} />
                        <Route  path="/register" element={<Register />} />
                        <Route  path="/reset" element={<Reset />} />
                        <Route  path="/dashboard" element={<Dashboard />}>
                            {privateRoutes.map((route) =>
                                (route.path !== "admin" || isAdmin) && (<Route key={route.path} path={route.path} element={route.element}/>))}
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