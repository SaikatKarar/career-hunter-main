// import { accounts, creative, marketing, chip } from "../assets/icons";
import accounts from "../assets/icons/accounts.png";
import creative from "../assets/icons/creative.png";
import marketing from "../assets/icons/marketing.png";
import chip from "../assets/icons/chip.png";

export const navigation = [
    {
        id: "0",
        title: "Statistics",
        url: "/statistics",
    },
    {
        id: "1",
        title: "Applied Jobs",
        url: "/applied",
    },
    {
        id: "2",
        title: "Blog",
        url: "/blog",
    },
    {
        id: "3",
        title: "Roadmap",
        url: "/roadmap",
    },
    {
        id: "4",
        title: "New account",
        url: "/signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Sign in",
        url: "/login",
        onlyMobile: true,
    },
];

export const categoryList = [
    {
        id: "0",
        title: "Account & Finance",
        job: "300 Jobs Available",
        imgs: accounts
    },
    {
        id: "1",
        title: "Creative Design",
        job: "100+ Jobs Available",
        imgs: creative
    },
    {
        id: "2",
        title: "Marketing & Sales",
        job: "150 Jobs Available",
        imgs: marketing
    },
    {
        id: "3",
        title: "Engineering Job",
        job: "224 Jobs Available",
        imgs: chip
    },
]