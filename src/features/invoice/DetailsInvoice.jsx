import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { PopUpTemp } from "./components/PopUpTemp"
import { deleteInvoice } from '../invoice/invoiceSlice'

import { MaintenanceIcon, ServiceIcon, ProductIcon } from '../../assets/Icons';


export const DetailsInvoice = () => {

    const { invoiceId } = useParams();
    const navigate = useNavigate();

    const { invoices } = useSelector(state => state.invoice)
    const dispatch = useDispatch();

    const goBackNavigate = () => {
        navigate('../..', { relative: "path", replace: true })

    }


    return (
        <PopUpTemp>
            <div className="w-[350px] p-4 my-auto bg-white rounded-lg">
                <h1 className="pb-2 border-b font-semibold">Details invoice</h1>

                {
                    invoices.map((invoice, i) => {
                        if (invoice.invoiceId == invoiceId) {
                            return (
                                <div key={i} className="mt-2 flex flex-col gap-y-1">
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            Id <span className="px-1 bg-gray-100 text-gary-500 font-semibold rounded">#{invoice.invoiceId}</span>
                                        </div>
                                        <div className="px-1 font-semibold rounded">
                                            {
                                                new Intl.DateTimeFormat("en-IQ", {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    weekday: 'short',
                                                    hourCycle: "h12",
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                }).format(new Date(invoice.invoiceCreatedTime))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b">
                                        <div>Client name <span className="px-1  font-semibold rounded capitalize">{invoice.clientName}</span></div>
                                    </div>
                                    <div className="mt-2 flex flex-wrap justify-between gap-1">
                                        <div className="p-1 border">
                                            Price <span className="px-1  text-gary-500 font-semibold rounded">
                                                {invoice.invoicePrice.toLocaleString()}
                                                <span className="text-xs"> IQD</span>
                                            </span>

                                        </div>
                                        <div className="p-1 border">
                                            Cost <span className="px-1 text-gary-500 font-semibold rounded">
                                                {invoice.invoiceCost.toLocaleString()}
                                                <span className="text-xs"> IQD</span>
                                            </span>

                                        </div>
                                        <div className="p-1 border">
                                            Profit <span className="px-1  text-gary-500 font-semibold rounded">
                                                {invoice.profit.toLocaleString()}
                                                <span className="text-xs"> IQD</span>
                                            </span>
                                        </div>
                                        <div className="p-1 border">Items <span className="px-1  font-semibold rounded">{invoice.sales.length}</span></div>
                                    </div>
                                    <div className="w-full overflow-x-scroll">

                                        <table className='w-full'>
                                            <thead className='w-full'>
                                                <tr>
                                                    <th scope="col" className='px-3 py-2 text-gray-600 text-left'>NO</th>
                                                    <th scope="col" className='px-3 py-2 text-gray-600 text-left'>Name</th>
                                                    <th scope="col" className='px-3 py-2 text-gray-600 text-left'>Price</th>
                                                    <th scope="col" className='px-3 py-2 text-gray-600 text-left'>Cost</th>
                                                    <th scope="col" className='px-3 py-2 text-gray-600 text-left'>Count</th>
                                                    <th scope="col" className='px-3 py-2 text-gray-600 text-left'>Class</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    invoice.sales.map((sale, i) => {
                                                        return (
                                                            <tr key={i} className='odd:bg-gray-50'>
                                                                <td className='p-3'>{i + 1}</td>
                                                                <td className='p-3'>{sale.saleName}</td>
                                                                <td className='p-3 space-x-1'>
                                                                    <span>
                                                                        {sale.salePrice.toLocaleString()}
                                                                    </span>
                                                                    <span className='text-[10px] bg-indigo-500 text-indigo-100 rounded px-1'>IQD</span>
                                                                </td>
                                                                <td className='p-3 space-x-1'>
                                                                    <span>
                                                                        {sale.saleCost.toLocaleString()}
                                                                    </span>
                                                                    <span className={`text-[10px] rounded px-1 ${sale.costCurrency == 'dollar' ? 'bg-teal-500 text-teal-100' : 'bg-indigo-500 text-indigo-100'}`}>{sale.costCurrency == 'dollar' ? '$' : 'IQD'}</span>
                                                                </td>
                                                                <td className='p-3'>{sale.saleCount}</td>
                                                                <td className='p-3'>
                                                                    {sale.saleClass == 'service' &&
                                                                        <span key={i} className='w-4 block fill-cyan-500'>{<ServiceIcon />}</span>}

                                                                    {sale.saleClass == 'maintenance' &&
                                                                        <span key={i} className='w-4 block fill-sky-600'>{<MaintenanceIcon />}</span>}

                                                                    {sale.saleClass == 'product' &&
                                                                        <span key={i} className='w-4 block fill-teal-500'>{<ProductIcon />}</span>}

                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            )
                        }

                    })
                }

                <div className="flex gap-x-2 mt-6">
                    <button className="py-2 px-3 bg-indigo-500 active:bg-indigo-600 text-indigo-50 font-medium rounded-lg"
                        onClick={goBackNavigate}>Cansel</button>

                </div>
            </div>
        </PopUpTemp>
    )
}