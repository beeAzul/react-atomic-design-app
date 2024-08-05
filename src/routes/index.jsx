import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import homeRoutes from "./home-routes";




const router = createBrowserRouter([

    // home routes
    ...homeRoutes,
]);

export default function Router() {
    return <RouterProvider router={router} />
}
