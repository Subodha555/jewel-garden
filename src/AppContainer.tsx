import {Provider} from "react-redux";
import {useState, useEffect} from "react";
import CreateStore from "./store/redux/store";
import App from "./App"
import store from "./store/redux/store";

const AppContainer = () => {
    // const [store, setStore] = useState(null);
    //
    // useEffect(() => {
    //     console.error("on store create");
    //     setStore(CreateStore());
    // }, []);

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default AppContainer;