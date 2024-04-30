import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { PopUpTemp } from "./components/PopUpTemp"

export const DeleteInvoice = () => {
    const { invoices } = useSelector(state => state.invoice)

    const { invoiceId } = useParams();
    const navigate = useNavigate();

    const goBackNavigate = () => {
        navigate('../..', { relative: "path", replace: true })
        
    }
    
    return (
        <PopUpTemp>
            <div className="w-[350px] p-4 bg-white rounded-lg">
                <h1 className="pb-2 border-b font-semibold">Delete invice</h1>

                {
                    invoices.map((invoice, i) => {
                        if (invoice.invoiceId == invoiceId) {
                            return (
                                <ul key={i} className="mt-2 flex flex-col gap-y-1">
                                    <li>Do you want to delete invoice ID <span className="px-1 bg-rose-500 text-rose-100 font-semibold rounded">#{invoice.invoiceId}</span> ?</li>
                                    <li>Client name <span className="px-1 bg-gray-100 font-semibold rounded capitalize">{invoice.clientName}</span></li>
                                    <li>Items counts: <span className="px-1 bg-gray-100 font-semibold rounded">{invoice.sales.length}</span></li>
                                    <li>
                                        Profit: <span className="px-1 bg-teal-500 text-teal-50 font-semibold rounded">
                                            {invoice.profit.toLocaleString()}
                                            <span className="text-xs"> IQD</span>
                                        </span>

                                    </li>
                                    <li>
                                        Invoice created at: <span className="px-1 bg-gray-100 font-semibold rounded">
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
                                        </span>
                                    </li>
                                </ul>
                            )
                        }

                    })
                }

                <div className="flex gap-x-2 mt-6">
                    <button className="py-2 px-3 bg-indigo-500 text-indigo-50 font-medium rounded-lg"
                        onClick={goBackNavigate}>Cansel</button>
                    <button className="py-2 px-3 bg-rose-500 text-rose-50 font-medium rounded-lg">Delete</button>
                </div>
            </div>
        </PopUpTemp>
    )
}