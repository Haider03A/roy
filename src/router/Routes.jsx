import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Invoices } from '../features/invoice/Invoices';

import { DeleteInvoice } from '../features/invoice/DeleteInvoice';
import { App } from '../App';


export const Routes = () => {
    const router = createBrowserRouter([
        {
            element: <App />,
            children: [
                {
                    path: '/',
                    element: (<h1>Home</h1>),
                },
                {
                    path: '/invoices',
                    element: (<Invoices />),
                    children: [
                        {
                            path: 'delete/:invoiceId',
                            element: (<DeleteInvoice />)
                        }
                    ]
                },
                {
                    path: '/statistics',
                    element: (<h1>Statistics</h1>),
                    children: [
                    ]
                }
            ]

        }
    ])
    return (
        <RouterProvider router={router} />
    )
}