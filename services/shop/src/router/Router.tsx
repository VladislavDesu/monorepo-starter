import App from "@/App";
import React, {Suspense} from "react";
import {Shop} from "@/pages/shop";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: '/shop',
        element: <App/>,
        children: [
            {
                path: '/shop',
                element: <Suspense fallback={<div>loading...</div>}><Shop/></Suspense>
            },
            {
                path: '/shop/product',
                element: <Suspense fallback={<div>loading...</div>}><h1>Product Page</h1></Suspense>
            }
        ],
    }
]

export const router = createBrowserRouter(routes)

export default routes