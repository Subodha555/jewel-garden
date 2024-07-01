import necklace from "/imgs/necklace.jpeg";
import ring from "/imgs/ring.jpeg";
import bracelet from "/imgs/bracelet.jpeg";
import earings from "/imgs/earings.jpeg";
import anklets from "/imgs/anklets.jpeg";
import pendants from "/imgs/pendants.jpeg";

export const categories = [
    {
        id: "neckalaces",
        label: "Necklaces",
        img: necklace
    },
    {
        id: "rings",
        label: "Rings",
        img: ring
    },
    {
        id: "bracelets",
        label: "Bracelets",
        img: bracelet
    },
    {
        id: "earings",
        label: "Earings",
        img: earings
    },
    {
        id: "anklets",
        label: "Anklets",
        img: anklets
    },
    {
        id: "pendants",
        label: "Pendants",
        img: pendants
    }
];

export const brands = [
    {
        id: "silver",
        label: "Silver"
    },
    {
        id: "gold",
        label: "Gold"
    }
];

export const currencies = [
    {
        id: "lkr",
        label: "LKR"
    },
    {
        id: "usd",
        label: "USD"
    }
];

export const maxItemsPurchaseCount = 5;