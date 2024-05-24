import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';

import { DeleteInvoicBut } from './components/DeleteInvoiceBut';
import { DetailsInvoicBut } from './components/DetailsInvoiceBut';
import { ModifyInvoicBut } from './components/ModifyInvoiceBut';

import { MaintenanceIcon, ServiceIcon, ProductIcon } from '../../assets/Icons';
import { CreateInvoiceBut } from './components/CreateInvoiceBut';
export const Invoices = () => {
    const { invoices } = useSelector(state => state.invoice)

    return (
        <>
            <Outlet />
            <ul className='h-[calc(100%-75px)] flex flex-col gap-y-3 pb-3 overflow-y-scroll'>
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
                                        <div>
                                            <span>Discount: </span>
                                            <span className='font-semibold'>{invoice.discount.toLocaleString()}</span>
                                            <span className='text-xs'> IQD</span>
                                        </div>
                                        <div className='flex justify-center gap-x-3'>
                                            {
                                                invoice.salesClassIncluded.map((saleCalss, i) =>
                                                    saleCalss == 'product' &&
                                                    <span key={i} className='w-4 block fill-teal-500'>{<ProductIcon />}</span>

                                                )
                                            }
                                            {
                                                invoice.salesClassIncluded.map((saleCalss, i) =>
                                                    saleCalss == 'maintenance' &&
                                                    <span key={i} className='w-4 block fill-sky-600'>{<MaintenanceIcon />}</span>

                                                )
                                            }
                                            {
                                                invoice.salesClassIncluded.map((saleCalss, i) =>
                                                    saleCalss == 'service' &&
                                                    <span key={i} className='w-4 block fill-cyan-500'>{<ServiceIcon />}</span>

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
            <CreateInvoiceBut />
        </>
    )
}