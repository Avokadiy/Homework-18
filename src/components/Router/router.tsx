import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Facts from "../pages/Facts/facts";
import NotFound from "../pages/Not Found/notFound";
import Combinations from "../pages/Combinations/combinations";
import History from "../pages/History/history";
import About from "../pages/About/about";
import Review from "../pages/Review/review";
import Beans from "../pages/Beans/beans";
import Layout from "../Layout/layout";
import Loader from "../Loader/loader";
import { BeanPage } from "../pages/BeanPage/BeanPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        loader: Loader,
        children: [
            {index: true, element: <Home/>},
            {path: 'beans', element: <Beans/>},
            {path: 'bean/:id', element: <BeanPage/>},
            {path: 'facts', element: <Facts/>},
            {path: 'combinations', element: <Combinations/>},
            {path: 'history', element: <History/>},
            {path: 'about', element: <About/>},
            {path: 'review', element: <Review/>},
            {path: '*', element: <NotFound/>}
        ],
    },
]);

export default router;