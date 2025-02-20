import { createBrowserRouter } from "react-router-dom";
import { Error } from "../Pages/Error";
import { Onboarding } from "../Pages/Onboarding";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Onboarding />
            },
            {
                path: "/onboarding",
                element: <Home />,
            }
        ]
    },
    
]);

export default router;