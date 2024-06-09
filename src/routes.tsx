import Home from "./views/Home";
import Buy from "./views/Buy";
import Orders from "./views/Orders";
import AccountSettings from "./views/AccountSettings";
import ItemView from "./views/ItemView";

export const privateRoutes = [
    {
        path: "",
        label: 'Home',
        element: <Home/>
    },
    {
        path: "home",
        label: 'Home',
        element: <Home/>
    },
    {
        path: "buy",
        label: 'Shop',
        element: <Buy/>
    },
    {
        path: "orders",
        label: 'Orders',
        element: <Orders/>
    },
    {
        path: "accountSettings",
        label: 'Account Settings',
        element: <AccountSettings/>
    }
];

export const nonMenuRoutes = [
    {
        path: "item/:itemId",
        element: <ItemView />,
    }
];