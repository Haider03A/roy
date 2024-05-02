import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { Formik, Form, FieldArray } from 'formik';

import { PopUpTemp } from "./components/PopUpTemp"

import { MaintenanceIcon, ServiceIcon, ProductIcon } from '../../assets/Icons';

export const ModifyInvoice = () => {
    const { invoices, salesClass } = useSelector(state => state.invoice)

    const { invoiceId } = useParams();
    const navigate = useNavigate();

    const goBackNavigate = () => {
        navigate('../..', { relative: "path", replace: true })

    }

    return (
        <PopUpTemp>
            <div className="w-full h-full bg-white rounded-lg relative">
                <div className="container my-5">
                    <h1 className="pb-2 border-b font-semibold">Modify invoice</h1>
                    {
                        invoices.map((invoice, i) => {
                            if (invoice.invoiceId == invoiceId) {
                                return (
                                    <Formik
                                        key={i}
                                        initialValues={{
                                            clientName: invoice.clientName,
                                            discount: invoice.discount,
                                            sales: invoice.sales
                                        }}
                                        onSubmit={(values) => {
                                            console.log(values);
                                        }}
                                    >
                                        {
                                            (formik) => {
                                                return (

                                                    <Form className="flex flex-col gap-y-2"
                                                        onSubmit={formik.handleSubmit}>
                                                        <div className='flex flex-col justify-between gap-y-1'>
                                                            <div className="mt-2 flex items-center justify-between">
                                                                <span className='text-gray-500'>#{invoice.invoiceId}</span>
                                                                <div className='h-full flex flex-col items-center text-sm'>
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
                                                            <div className="flex gap-x-3 justify-between items-center">
                                                                <div className="flex flex-col basis-[50%]">
                                                                    <label htmlFor="clientName"
                                                                        className="w-fit ml-1 text-gray-600 text-base">Client Name</label>
                                                                    <input type="text"
                                                                        className="w-full px-2 py-1 rounded-lg  bg-white shadow border-b-2 border-transparent focus:border-indigo-500 focus:outline-none font-semibold"
                                                                        name="clientName"
                                                                        id="clientName"
                                                                        placeholder="Client name"
                                                                        value={formik.values.clientName}
                                                                        onChange={formik.handleChange} />
                                                                </div>
                                                                <div className="flex flex-col basis-[50%]">
                                                                    <label htmlFor="discount"
                                                                        className="w-fit ml-1 text-gray-600 text-base">Discount</label>
                                                                    <input type="number"
                                                                        className="w-full px-2 py-1 rounded-lg bg-white shadow border-b-2 border-transparent focus:border-indigo-500 focus:outline-none font-semibold"
                                                                        name="discount"
                                                                        id="discount"
                                                                        placeholder="Discount"
                                                                        value={formik.values.discount}
                                                                        onChange={formik.handleChange} />
                                                                </div>
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
                                                                            <span key={i} className='w-4 fill-teal-500'>{<ProductIcon />}</span>

                                                                        )
                                                                    }
                                                                    {
                                                                        invoice.salesClassIncluded.map((saleCalss, i) =>
                                                                            saleCalss == 'maintenance' &&
                                                                            <span key={i} className='w-4 fill-sky-600'>{<MaintenanceIcon />}</span>

                                                                        )
                                                                    }
                                                                    {
                                                                        invoice.salesClassIncluded.map((saleCalss, i) =>
                                                                            saleCalss == 'service' &&
                                                                            <span key={i} className='w-4 fill-cyan-500'>{<ServiceIcon />}</span>

                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="snap-mandatory snap-x overflow-y-scroll flex gap-x-3 mb-24 pb-4 px-1 pt-1">
                                                            <FieldArray
                                                                name="sales"
                                                                render={arrayHelpers => (
                                                                    formik.values.sales.map((sale, index) => {
                                                                        return (
                                                                            <li key={sale.saleId}
                                                                                className="min-w-full snap-center odd:bg-gray-100 even:bg-white p-2 text-gray-600 rounded-lg shadow">
                                                                                <span className='text-gray-500'>#{sale.saleId}</span>
                                                                                <div className="flex gap-2 flex-wrap">

                                                                                    <div className="flex flex-col basis-[60%]">
                                                                                        <label htmlFor={`sales.${index}.saleName`}
                                                                                            className="w-fit ml-1 text-gray-600 text-base">Sale Name</label>
                                                                                        <input type="text"
                                                                                            className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                            name={`sales.${index}.saleName`}
                                                                                            id={`sales.${index}.saleName`}
                                                                                            placeholder="Sale Name"
                                                                                            value={sale.saleName}
                                                                                            onChange={formik.handleChange} />
                                                                                    </div>
                                                                                    <div className="flex flex-col basis-[30%]">
                                                                                        <label htmlFor={`sales.${index}.salePrice`}
                                                                                            className="w-fit ml-1 text-gray-600 text-base">Sale Price</label>
                                                                                        <input type="number"
                                                                                            className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                            name={`sales.${index}.salePrice`}
                                                                                            id={`sales.${index}.salePrice`}
                                                                                            placeholder="Sale Price"
                                                                                            value={sale.salePrice}
                                                                                            onChange={formik.handleChange} />
                                                                                    </div>
                                                                                    <div className="flex gap-x-4 basis-full">

                                                                                        <div className="flex flex-col basis-[60%]">
                                                                                            <label htmlFor={`sales.${index}.saleCost`}
                                                                                                className="w-fit ml-1 text-gray-600 text-base">Sale cost</label>
                                                                                            <input type="number"
                                                                                                className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                                name={`sales.${index}.saleCost`}
                                                                                                id={`sales.${index}.saleCost`}
                                                                                                placeholder="Sale cost"
                                                                                                value={sale.saleCost}
                                                                                                onChange={formik.handleChange} />
                                                                                        </div>

                                                                                        <div className="flex gap-x-4">
                                                                                            <div className="flex flex-col justify-between items-center">
                                                                                                <label htmlFor={`sales.${index}.costCurrencyDollar`}
                                                                                                    className="w-fit ml-1 text-gray-600 text-base">Dollar</label>
                                                                                                <input type="radio"
                                                                                                    className="appearance-none w-7 h-7 bg-white shadow rounded-lg checked:bg-indigo-500"
                                                                                                    name={`sales.${index}.costCurrency`}
                                                                                                    id={`sales.${index}.currencyDollar`}
                                                                                                    value='dollar'
                                                                                                    defaultChecked={sale.costCurrency == 'dollar' ? true : false} />
                                                                                            </div>
                                                                                            <div className="flex flex-col justify-between items-center">
                                                                                                <label htmlFor={`sales.${index}.costCurrencyIqD`}
                                                                                                    className="w-fit ml-1 text-gray-600 text-base">IQD</label>
                                                                                                <input type="radio"
                                                                                                    className="appearance-none w-7 h-7 bg-white shadow rounded-lg checked:bg-indigo-500"
                                                                                                    name={`sales.${index}.costCurrency`}
                                                                                                    id={`sales.${index}.costCurrencyIqD`}
                                                                                                    value='iqd' 
                                                                                                    defaultChecked={sale.costCurrency == 'iqd' ? true : false} />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="flex flex-col basis-full">
                                                                                        <label htmlFor={`sales.${index}.saleClass`}
                                                                                            className="w-fit ml-1 text-gray-600 text-base">Sale class</label>
                                                                                        <div className="flex gap-x-7 items-center">
                                                                                            <select defaultValue={sale.saleClass}
                                                                                                className="w-[60%] px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                                name={`sales.${index}.saleClass`}
                                                                                                id={`sales.${index}.saleClass`}
                                                                                                onChange={formik.handleChange}>
                                                                                                {salesClass.map(((saleClass, i) => {
                                                                                                    if (saleClass == sale.saleClass) {
                                                                                                        return <option key={i} value={saleClass}>{saleClass}</option>
                                                                                                    }
                                                                                                    return <option key={i} value={saleClass}>{saleClass}</option>
                                                                                                }))}
                                                                                            </select>
                                                                                            <div className='flex gap-x-3'>
                                                                                                {

                                                                                                    sale.saleClass == 'product' &&
                                                                                                    <span className='w-6 fill-teal-500'>{<ProductIcon />}</span>


                                                                                                }
                                                                                                {
                                                                                                    sale.saleClass == 'maintenance' &&
                                                                                                    <span className='w-6 fill-sky-600'>{<MaintenanceIcon />}</span>

                                                                                                }
                                                                                                {
                                                                                                    sale.saleClass == 'service' &&
                                                                                                    <span className='w-6 fill-cyan-500'>{<ServiceIcon />}</span>

                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="flex flex-col basis-full">
                                                                                        <label htmlFor={`sales.${index}.saleNote`}
                                                                                            className="w-fit ml-1 text-gray-600 text-base">Sale note</label>
                                                                                        <textarea type="text"
                                                                                            className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                            name={`sales.${index}.saleNote`}
                                                                                            id={`sales.${index}.saleNote`}
                                                                                            placeholder="Sale note"
                                                                                            value={sale.saleNote}
                                                                                            onChange={formik.handleChange} />
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    })
                                                                )}
                                                            />
                                                        </ul>

                                                        <div className="w-full bg-white fixed bottom-0 left-0">
                                                            <div className="container mb-10 mt-4 flex gap-x-2">
                                                                <button type="reset" className="py-2 px-3 bg-indigo-500 text-indigo-50 font-medium rounded-lg"
                                                                    onClick={goBackNavigate}>Cansel</button>
                                                                <button type="submit" className="py-2 px-3 bg-teal-500 text-teal-50 font-medium rounded-lg">Save</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )
                                            }
                                        }
                                    </Formik>
                                )
                            }

                        })
                    }

                </div>
            </div>
        </PopUpTemp>
    )
}