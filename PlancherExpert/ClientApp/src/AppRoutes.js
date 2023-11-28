import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Order from "./pages/Order";
import Invoice from "./pages/Invoice";
import FloorCovering from "./pages/FloorCovering";
import AddFlooring from "./pages/AddFlooring";
import EditFlooring from "./pages/EditFlooring";
import Invoices from "./pages/Invoices";
import NotFound from "./pages/NotFound";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/invoices',
        element: <Invoices />
    },
    {
        path: '/floor-covering',
        element: <FloorCovering />
    },
    {
        path: '/add-flooring',
        element: <AddFlooring />
    },
    {
        path: '/edit-flooring/:id',
        element: <EditFlooring />
    },
    {
        path: '/order',
        element: <Order />
    },
    {
        path: '/invoice/:id',
        element: <Invoice />
    },
    {
        path: '/privacy',
        element: <Privacy />
    },
    {
        path: '/404',
        element: <NotFound />
    },
];

export default AppRoutes;
