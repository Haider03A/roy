import { useState, useRef, useEffect, useMemo } from 'react';

import { Formik, Form } from 'formik';

import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { addInvoice } from '../invoice/invoiceSlice'

import { PopUpTemp } from "./components/PopUpTemp"
import { MaintenanceIcon, ServiceIcon, ProductIcon } from '../../assets/Icons';
import { QrcodeScanner } from './QrcodeScanner'



export const CreateInvoice = () => {
    const [saleNodeActive, setSaleNodeActive] = useState(false)
    const [qrcodeBoxActive, setQrcodeBoxActive] = useState(false)
    const saleNameRef = useRef(null)
    const saleNodeRef = useRef(null)

    const dispatch = useDispatch();


    const navigate = useNavigate();

    const goBackNavigate = () => {
        navigate('..', { relative: "path", replace: true })

    }

    useEffect(() => {
        if (saleNodeRef.current) {
            saleNodeRef.current.focus()
        }
    }, [saleNodeActive])


    useEffect(() => {
        if (saleNameRef.current) {
            // saleNameRef.current.focus()
            setQrcodeBoxActive(true)
        }
    }, [])


    const addInvoiceToInvoices = (formik) => {
        const { clientName, discount, saleName, salePrice, saleCost, costCurrency, saleClass, saleCount, saleNote, sales } = formik.values

        if (sales.length == 0) return;


        const invoice = {
            clientName,
            invoiceCreatedTime: new Date().toISOString(),
            discount,
            sales
        }

        dispatch(addInvoice(invoice))
        goBackNavigate()
    }

    const onScanSuccessQrcode = (decodedText) => {
        setQrcodeBoxActive(false)
        alert(decodedText)
        saleNameRef.current.value = decodedText
        saleNameRef.current.focus()
    }
    return (
        <PopUpTemp>
            <div className="container p-4 bg-white rounded-lg">


                <Formik
                    initialValues={{
                        clientName: 'unknow',
                        discount: 0,
                        saleName: 'some',
                        salePrice: 0,
                        saleCost: 0,
                        costCurrency: 'dollar',
                        saleClass: 'product',
                        saleCount: 1,
                        saleNote: '',
                        sales: []
                    }}
                    onSubmit={async (values, formik) => {
                        const { clientName, discount, saleName, salePrice, saleCost, costCurrency, saleClass, saleCount, saleNote, sales } = values
                        if (saleCount == 0 || salePrice == 0 || saleCost == 0) return;

                        const newSales = [...sales, { saleName, salePrice, saleCost, costCurrency, saleClass, saleCount, saleNote }]
                        const newInputsValues = {
                            clientName,
                            discount,
                            saleName: 'some',
                            salePrice: 0,
                            saleCost: 0,
                            costCurrency,
                            saleClass,
                            saleCount: 1,
                            saleNote: '',
                            sales: newSales
                        }
                        await formik.setValues(newInputsValues)
                        saleNameRef.current.focus()
                    }}
                    onReset={(values) => {
                        values.clientName = values.clientName
                        console.log('reset');
                    }}>
                    {
                        (formik) => {
                            return (
                                <Form
                                    onSubmit={formik.handleSubmit}>
                                    {
                                        qrcodeBoxActive ?
                                            <QrcodeScanner onScanSuccess={onScanSuccessQrcode} />
                                            : null
                                    }
                                    <div className="pb-2 flex justify-between border-b">
                                        <h1 className="font-semibold">Create invoice</h1>
                                        <span className='bg-indigo-500 py-1 px-2 text-sm text-white rounded'>{formik.values.sales.length}</span>
                                    </div>
                                    <div className='mt-1 w-full flex gap-x-4 snap-mandatory snap-x overflow-x-scroll'>
                                        <div className='min-w-full p-1 flex gap-x-3 snap-center snap-always'>
                                            <div className="flex flex-col basis-[60%]">
                                                <label htmlFor='clientName'
                                                    className="w-fit ml-1 text-gray-600 text-base">Client Name</label>
                                                <input type="text"
                                                    className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                    name='clientName'
                                                    id='clientName'
                                                    placeholder="Client Name"
                                                    value={formik.values.clientName}
                                                    onChange={formik.handleChange}
                                                    onFocus={(e) => e.target.select()} />
                                            </div>
                                            <div className="flex flex-col basis-[30%]">
                                                <label htmlFor='discount'
                                                    className="w-fit ml-1 text-gray-600 text-base">Discount</label>
                                                <input type="number"
                                                    min={0}
                                                    className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                    name='discount'
                                                    id='discount'
                                                    placeholder="Discount"
                                                    value={formik.values.discount}
                                                    onChange={formik.handleChange}
                                                    onFocus={(e) => e.target.select()} />
                                            </div>
                                        </div>
                                        <div className='min-w-full p-1 flex flex-wrap gap-3 snap-center snap-always'>
                                            <div className="flex flex-col basis-[60%]">
                                                <label htmlFor='saleName'
                                                    className="w-fit ml-1 text-gray-600 text-base">Sale Name</label>
                                                <input type="text"
                                                    ref={saleNameRef}
                                                    className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                    name='saleName'
                                                    id='saleName'
                                                    placeholder="Sale Name"
                                                    value={formik.values.saleName}
                                                    onChange={formik.handleChange}
                                                    onFocus={(e) => e.target.select()} />
                                            </div>
                                            <div className="flex flex-col basis-[30%]">
                                                <label htmlFor='salePrice'
                                                    className="w-fit ml-1 text-gray-600 text-base">Sale Price</label>
                                                <input type="number"
                                                    className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                    name='salePrice'
                                                    id='salePrice'
                                                    placeholder="Sale Price"
                                                    value={formik.values.salePrice}
                                                    onChange={formik.handleChange}
                                                    onFocus={(e) => e.target.select()} />
                                            </div>
                                            <div className="flex gap-x-4 basis-full">
                                                <div className="flex flex-col basis-[60%]">
                                                    <label htmlFor='saleCost'
                                                        className="w-fit ml-1 text-gray-600 text-base">Sale cost</label>
                                                    <input type="number"
                                                        className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                        name='saleCost'
                                                        id='saleCost'
                                                        placeholder="Sale cost"
                                                        value={formik.values.saleCost}
                                                        onChange={formik.handleChange}
                                                        onFocus={(e) => e.target.select()} />
                                                </div>

                                                <div className="flex gap-x-4">
                                                    <div className="flex flex-col justify-between items-center">
                                                        <label htmlFor='costCurrencyDollar'
                                                            className="w-fit ml-1 text-gray-600 text-base">Dollar</label>
                                                        <div className="w-7 h-7 p-1 flex justify-center items-center bg-white shadow rounded-full">
                                                            <input type="radio"
                                                                className="appearance-none h-full w-full rounded-full checked:bg-gray-600"
                                                                name='costCurrency'
                                                                id='costCurrencyDollar'
                                                                value='dollar'
                                                                onChange={formik.handleChange}
                                                                defaultChecked={formik.values.costCurrency == 'dollar' ? true : false} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-between items-center">
                                                        <label htmlFor='costCurrencyIqD'
                                                            className="w-fit ml-1 text-gray-600 text-base">IQD</label>
                                                        <div className="w-7 h-7 p-1 flex justify-center items-center bg-white shadow rounded-full">
                                                            <input type="radio"
                                                                className="appearance-none h-full w-full rounded-full checked:bg-gray-600"
                                                                name='costCurrency'
                                                                id='costCurrencyIqD'
                                                                value='iqd'
                                                                onChange={formik.handleChange}
                                                                defaultChecked={formik.values.costCurrency == 'iqd' ? true : false} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap basis-full gap-3">
                                                <div className="flex flex-col basis-[22%]">
                                                    <label htmlFor='saleCount'
                                                        className="w-fit ml-1 text-gray-600 text-base">Count</label>
                                                    <input type="number"
                                                        min={1}
                                                        className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                        name='saleCount'
                                                        id='saleCount'
                                                        placeholder="count"
                                                        value={formik.values.saleCount}
                                                        onChange={formik.handleChange}
                                                        onFocus={(e) => e.target.select()} />
                                                </div>
                                                <div className="flex flex-col justify-between items-center">
                                                    <label htmlFor='saleClassProduct'
                                                        className="w-fit ml-1 text-gray-600 text-base">Product</label>
                                                    <div className="relative">
                                                        <span className='w-6 fill-teal-500 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{<ProductIcon />}</span>
                                                        <input type="radio"
                                                            className="appearance-none w-8 h-8 block bg-white shadow rounded-full border-[3px] border-transparent checked:border-teal-500"
                                                            name='saleClass'
                                                            id='saleClassProduct'
                                                            value='product'
                                                            onChange={formik.handleChange}
                                                            defaultChecked={formik.values.saleClass == 'product' ? true : false} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-between items-center">
                                                    <label htmlFor='saleClassMaintenance'
                                                        className="w-fit ml-1 text-gray-600 text-base">Maintenance</label>
                                                    <div className="relative">
                                                        <span className='w-5 fill-sky-500 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{<MaintenanceIcon />}</span>
                                                        <input type="radio"
                                                            className="appearance-none w-8 h-8 block bg-white shadow rounded-full border-[3px] border-transparent checked:border-sky-500"
                                                            name='saleClass'
                                                            id='saleClassMaintenance'
                                                            value='maintenance'
                                                            onChange={formik.handleChange}
                                                            defaultChecked={formik.values.saleClass == 'maintenance' ? true : false} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-between items-center">
                                                    <label htmlFor='saleClassService'
                                                        className="w-fit ml-1 text-gray-600 text-base">Service</label>
                                                    <div className="relative">
                                                        <span className='w-5 fill-cyan-500 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{<ServiceIcon />}</span>
                                                        <input type="radio"
                                                            className="appearance-none w-8 h-8 block bg-white shadow rounded-full border-[3px] border-transparent checked:border-cyan-500 "
                                                            name='saleClass'
                                                            id='saleClassService'
                                                            value='service'
                                                            onChange={formik.handleChange}
                                                            defaultChecked={formik.values.saleClass == 'service' ? true : false} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex flex-col basis-full">
                                                <label htmlFor='saleNote'
                                                    className="w-fit ml-1 text-gray-600 text-base">Sale note</label>
                                                {
                                                    saleNodeActive || formik.values.saleNote ?
                                                        <textarea type="text"
                                                            ref={saleNodeRef}
                                                            className="w-full min-h-16 max-h-36 px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                            name='saleNote'
                                                            id='saleNote'
                                                            placeholder="Sale note"
                                                            value={formik.values.saleNote}
                                                            onChange={formik.handleChange}
                                                            onBlur={() => formik.values.saleNote ? null : setSaleNodeActive(false)}
                                                            onFocus={(e) => e.target.select()} />
                                                        :
                                                        <button type="button"
                                                            className="w-full h-16 px-2 py-1 bg-white shadow rounded-lg"
                                                            id='saleNote'
                                                            onClick={() => setSaleNodeActive(true)}>Write node</button>
                                                }




                                            </div>
                                        </div>
                                        <div className="min-w-full max-h-[300px] p-1 snap-center snap-always overflow-auto">
                                            {
                                                formik.values.sales.length > 0 ?
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
                                                                formik.values.sales.map((sale, i) => {
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
                                                    </table> :
                                                    <div className='h-full flex justify-center items-center'>
                                                        <h1 className='text-lg font-medium text-gray-600'>No Item </h1>
                                                    </div>
                                            }

                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-x-2 mt-6">
                                        <div className='flex gap-x-2'>
                                            <button type="button" className="py-2 px-3 bg-indigo-500 active:bg-indigo-600 text-indigo-50 font-medium rounded-lg"
                                                onClick={goBackNavigate}>Cansel</button>
                                            <button type="button" onClick={(e) => addInvoiceToInvoices(formik)} className="py-2 px-3 bg-teal-500 active:bg-teal-600 text-teal-50 font-medium rounded-lg">Create</button>
                                        </div>
                                        <button type="submit" onClick={formik.handleSubmit} className='w-9 h-9 flex justify-center items-center bg-sky-500 active:bg-sky-600 text-center rounded-lg'>
                                            <svg className='w-5 h-5 fill-sky-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    }


                </Formik>
            </div>
        </PopUpTemp>
    )
}