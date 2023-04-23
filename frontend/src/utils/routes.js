import MainPage from "../pages/main";
import PolicyPage from "../pages/policy";
import { MAIN_PAGE_ROUTE, POLICY_PAGE_ROUTE } from "./consts";

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: POLICY_PAGE_ROUTE,
        Component: PolicyPage
    }
];