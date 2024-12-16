import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Invoices } from '../features/invoice/Invoices';

import { DeleteInvoice } from '../features/invoice/DeleteInvoice';
import { App } from '../App';
import { ModifyInvoice } from '../features/invoice/ModifyInvoice';
import { AddSale } from '../features/invoice/AddSale';
import { DeleteSale } from '../features/invoice/DeleteSale';
import { CreateInvoice } from '../features/invoice/CreateInvoice';


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
                        },
                        {
                            path: 'addInvoice',
                            element: (<CreateInvoice />)
                        },
                        {
                            path: '/invoices/modify/:invoiceId',
                            element: (<ModifyInvoice />),
                            children: [
                                {
                                    path: 'addsale',
                                    element: (<AddSale />)
                                },
                                {
                                    path: 'deleteSale/:saleId',
                                    element: (<DeleteSale />)
                                }
                            ]

                        },
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