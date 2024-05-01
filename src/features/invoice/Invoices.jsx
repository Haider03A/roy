import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';

import { DeleteInvoicBut } from './components/DeleteInvoiceBut';
import { DetailsInvoicBut } from './components/DetailsInvoiceBut';
import { ModifyInvoicBut } from './components/ModifyInvoiceBut';
export const Invoices = () => {
    const { invoices, dateTimeFormat, salesClass } = useSelector(state => state.invoice)

    const maintenanceIcon = <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
    const productIcon = <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6v0c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9v0c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
    const serviceIcon = <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>

    return (
        <>
            <Outlet />
            <div>
                <ul className='flex flex-col gap-y-3 pb-3'>
                    {
                        invoices.map(invoice => {
                            return (
                                <li key={invoice.invoiceId}
                                    className='odd:bg-gray-100 even:bg-white p-1 text-gray-600 rounded-lg shadow'>
                                    <div className='h-14 py-1 flex justify-between items-center'>
                                        <div className='h-full flex flex-col justify-between'>
                                            <span className='text-gray-500'>#{invoice.invoiceId}</span>
                                            <h1 className='font-semibold'>{invoice.clientName}</h1>
                                        </div>
                                        <div className='h-full flex flex-col justify-between items-center text-sm'>
                                            <span>
                                                {new Intl.DateTimeFormat("en-IQ", {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    weekday: 'short',
                                                }).format(new Date(invoice.invoiceCreatedTime))}
                                            </span>
                                            <span className='font-semibold'>
                                                {new Intl.DateTimeFormat("en-IQ", {
                                                    hourCycle: "h12",
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                }).format(new Date(invoice.invoiceCreatedTime))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='h-20 py-1 flex justify-between items-center'>
                                        <div className='flex flex-col justify-between'>
                                            <div>
                                                <span>Price: </span>
                                                <span className='font-semibold'>{invoice.invoicePrice.toLocaleString()}</span>
                                                <span className='text-xs'> IQD</span>
                                            </div>
                                            <div>
                                                <span>Cost: </span>
                                                <span className='font-semibold'>{invoice.invoiceCost.toLocaleString()}</span>
                                                <span className='text-xs'> IQD</span>
                                            </div>
                                            <div>
                                                <span>Profit: </span>
                                                <span className='font-semibold'>{invoice.profit.toLocaleString()}</span>
                                                <span className='text-xs'> IQD</span>
                                            </div>
                                        </div>
                                        <div className='h-full flex flex-col justify-between items-center'>
                                            <div>
                                                <span>Items: </span>
                                                <span className='font-semibold'>{invoice.sales.length}</span>
                                            </div>
                                            <div className='flex gap-x-3'>
                                                {
                                                    invoice.salesClassIncluded.map((saleCalss, i) =>
                                                        saleCalss == 'product' &&
                                                        <span key={i} className='fill-teal-500'>{productIcon}</span>

                                                    )
                                                }
                                                {
                                                    invoice.salesClassIncluded.map((saleCalss, i) =>
                                                        saleCalss == 'maintenance' &&
                                                        <span key={i} className='fill-sky-600'>{maintenanceIcon}</span>

                                                    )
                                                }
                                                {
                                                    invoice.salesClassIncluded.map((saleCalss, i) =>
                                                        saleCalss == 'service' &&
                                                        <span key={i} className='fill-cyan-500'>{serviceIcon}</span>

                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='m-2 pt-2 flex justify-between gap-x-2 border-t border-gray-200'>
                                        <DeleteInvoicBut invoiceId={invoice.invoiceId} />
                                        <div className='flex gap-x-2'>
                                            <DetailsInvoicBut invoiceId={invoice.invoiceId} />
                                            <ModifyInvoicBut invoiceId={invoice.invoiceId} />
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}