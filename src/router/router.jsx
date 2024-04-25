import { createBrowserRouter } from 'react-router-dom';
import { Invoices } from '../features/invoice/Invoices';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (<Invoices />),
        
    },
]) 