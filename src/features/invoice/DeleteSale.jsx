import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { PopUpTemp } from './components/PopUpTemp';
export const DeleteSale = () => {
    const { invoices } = useSelector(state => state.invoice)

    const navigate = useNavigate()
    const { invoiceId, saleId } = useParams();

    const goBackNavigate = () => {
        navigate('../..', { relative: "path", replace: true })

    }
    return (

        <PopUpTemp style='items-center'>

            <div className="w-[380px] my-auto bg-white rounded-lg relative">
                <div className="container my-5">
                    <h1 className="pb-2 mb-2 border-b font-semibold">Delete Sale</h1>
                    {
                        invoices.map((invoice, i) => {
                            if (invoice.invoiceId == invoiceId) {
                                return invoice.sales.map(sale => {
                                    if (sale.saleId == saleId) {
                                        return (
                                            <div key={i} className="mt-2 flex flex-col gap-y-1">
                                                <div>Do you want to delete sale ID <span className="px-1 bg-orange-500 text-orange-100 font-semibold rounded">#{sale.saleId}</span> ?</div>
                                                <div>Sale name <span className="px-1 bg-gray-100 font-semibold rounded capitalize">{sale.saleName}</span></div>
                                                <div>
                                                    Cost: <span className="px-1 bg-teal-500 text-teal-50 font-semibold rounded">
                                                        {sale.saleCost.toLocaleString()}
                                                        <span className="text-xs"> IQD</span>
                                                    </span>

                                                </div>
                                                <div>
                                                    Price: <span className="px-1 bg-purple-500 text-purple-50 font-semibold rounded">
                                                        {sale.salePrice.toLocaleString()}
                                                        <span className="text-xs"> IQD</span>
                                                    </span>

                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }

                        })
                    }
                    <div className="flex gap-x-2 mt-6">
                        <button type="reset" className="py-2 px-3 bg-indigo-500 text-indigo-50 active:bg-indigo-600 font-medium rounded-lg"
                            onClick={goBackNavigate}>Cansel</button>
                        <button type="submit" className="py-2 px-3 bg-rose-500 text-rose-50 active:bg-rose-600 font-medium rounded-lg">Delete</button>
                    </div>
                </div>
            </div>
        </PopUpTemp>
    )
}