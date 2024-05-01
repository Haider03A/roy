import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { Formik, Form, FieldArray } from 'formik';

import { PopUpTemp } from "./components/PopUpTemp"
import { useEffect, useState } from "react";

export const ModifyInvoice = () => {
    const { invoices } = useSelector(state => state.invoice)

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
                                                        <div className='flex flex-col justify-between'>

                                                            <span className='text-gray-500'>#{invoice.invoiceId}</span>
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

                                                        <div className="flex flex-col">
                                                            <label htmlFor="clientName"
                                                                className="w-fit ml-1 text-gray-600 text-base">Client Name</label>
                                                            <input type="text"
                                                                className="w-full px-2 py-1 bg-gray-100 rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                name="clientName"
                                                                id="clientName"
                                                                placeholder="Client name"
                                                                value={formik.values.clientName}
                                                                onChange={formik.handleChange} />
                                                        </div>

                                                        <ul className="h-[calc(260px*2)] overflow-y-scroll flex flex-col gap-y-2">
                                                            <FieldArray
                                                                name="sales"
                                                                render={arrayHelpers => (
                                                                    formik.values.sales.map((sale, index) => {
                                                                        return (
                                                                            <li key={sale.saleId}
                                                                                className="border p-2">
                                                                                <span className='text-gray-500'>#{sale.saleId}</span>
                                                                                <div className="flex gap-2 flex-wrap">

                                                                                    <div className="flex flex-col basis-[60%]">
                                                                                        <label htmlFor={`sales.${index}.saleName`}
                                                                                            className="w-fit ml-1 text-gray-600 text-base">Sale Name</label>
                                                                                        <input type="text"
                                                                                            className="w-full px-2 py-1 bg-gray-100 rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                            name={`sales.${index}.saleName`}
                                                                                            id={`sales.${index}.saleName`}
                                                                                            placeholder="Sale Name"
                                                                                            value={sale.saleName}
                                                                                            onChange={formik.handleChange} />
                                                                                    </div>
                                                                                    <div className="flex flex-col basis-[30%]">
                                                                                        <label htmlFor={`sales.${index}.salePrice`}
                                                                                            className="w-fit ml-1 text-gray-600 text-base">Sale Price</label>
                                                                                        <input type="text"
                                                                                            className="w-full px-2 py-1 bg-gray-100 rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
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
                                                                                            <input type="text"
                                                                                                className="w-full px-2 py-1 bg-gray-100 rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                                name={`sales.${index}.saleCost`}
                                                                                                id={`sales.${index}.saleCost`}
                                                                                                placeholder="Sale cost"
                                                                                                value={sale.saleCost}
                                                                                                onChange={formik.handleChange} />
                                                                                        </div>

                                                                                        <div className="flex gap-x-4">
                                                                                            <div className="flex flex-col justify-between items-center">
                                                                                                <label htmlFor={`sales.${index}.currencyDollar`}
                                                                                                    className="w-fit ml-1 text-gray-600 text-base">Dollar</label>
                                                                                                <input type="radio"
                                                                                                    className="appearance-none w-7 h-7 bg-gray-100 rounded-lg checked:bg-indigo-500"
                                                                                                    name={`sales.${index}.currency`}
                                                                                                    id={`sales.${index}.currencyDollar`}
                                                                                                    value='dollar'
                                                                                                    defaultChecked />
                                                                                            </div>
                                                                                            <div className="flex flex-col justify-between items-center">
                                                                                                <label htmlFor={`sales.${index}.currencyIqD`}
                                                                                                    className="w-fit ml-1 text-gray-600 text-base">IQD</label>
                                                                                                <input type="radio"
                                                                                                    className="appearance-none w-7 h-7 bg-gray-100 rounded-lg checked:bg-indigo-500"
                                                                                                    name={`sales.${index}.currency`}
                                                                                                    id={`sales.${index}.currencyIqD`}
                                                                                                    value='iqd' />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="flex flex-col basis-full">
                                                                                        <label htmlFor={`sales.${index}.saleNote`}
                                                                                            className="w-fit ml-1 text-gray-600 text-base">Sale Note</label>
                                                                                        <textarea type="text"
                                                                                            className="w-full px-2 py-1 bg-gray-100 rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                                                            name={`sales.${index}.saleNote`}
                                                                                            id={`sales.${index}.saleNote`}
                                                                                            placeholder="Sale Note"
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
                                                            <div className="container my-4 flex gap-x-2">
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