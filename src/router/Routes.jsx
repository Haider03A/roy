import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Invoices } from '../features/invoice/Invoices';

import { DeleteInvoice } from '../features/invoice/DeleteInvoice';
import { App } from '../App';
import { ModifyInvoice } from '../features/invoice/ModifyInvoice';
import { AddSale } from '../features/invoice/AddSale';


export const Routes = () => {
    const router = createHashRouter([
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
                    path: '/invoices/modify/:invoiceId',
                    element: (<ModifyInvoice />),
                    children: [
                        {
                            path: 'addsale',
                            element: (<AddSale />)
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