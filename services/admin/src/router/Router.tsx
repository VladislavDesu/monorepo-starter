import App from "@/App";
import React, {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import {About} from "@/pages/about";

const routes = [
    {
        path: '/admin',
        element: <App/>,
        children: [
            {
                path: '/admin',
                element: <Suspense fallback={<div>loading...</div>}><About/></Suspense>
            }
        ],
    }
]

export const router = createBrowserRouter(routes)

export default routes