import { useState, useRef, useEffect } from 'react';

import { Formik, Form } from 'formik';

import { useNavigate } from "react-router-dom";

import { PopUpTemp } from "./components/PopUpTemp"
import { MaintenanceIcon, ServiceIcon, ProductIcon } from '../../assets/Icons';

export const CreateInvoice = () => {
    const [saleNodeActive, setSaleNodeActive] = useState(false)
    const saleNameRef = useRef(null)
    const saleNodeRef = useRef(null)


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

            saleNameRef.current.focus()
        }
    }, [])

    return (
        <PopUpTemp>
            <div className="container p-4 bg-white rounded-lg">
                <h1 className="pb-2 border-b font-semibold">Create invoice</h1>

                <Formik
                    initialValues={{
                        clientName: 'Unknown',
                        discount: 0,
                        saleName: '',
                        salePrice: 0,
                        saleCost: 0,
                        costCurrency: 'dollar',
                        saleClass: 'product',
                        saleCount: 1,
                        saleNote: '',
                    }}
                    onSubmit={(values) => {
                        
                        console.log(values);
                    }}
                    onReset={(values) => {
                        values.clientName = values.clientName
                        console.log('reset');
                    }}>
                    {
                        (formik) => {
                            return (
                                <Form className='mt-3'
                                    onSubmit={formik.handleSubmit}>
                                    <div className='w-full flex gap-x-4 snap-mandatory snap-x overflow-x-scroll'>
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
                                                <input type="text" inputMode='none'
                                                    className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                    name='discount'
                                                    id='discount'
                                                    placeholder="Discount"
                                                    value={formik.values.discount}
                                                    onChange={formik.handleChange} 
                                                    onFocus={(e) => e.target.select()}
                                                    onPaste={(e) => e.preventDefault()} />
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
                                                <input type="text" inputMode='none'
                                                    className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                    name='salePrice'
                                                    id='salePrice'
                                                    placeholder="Sale Price"
                                                    value={formik.values.salePrice}
                                                    onChange={formik.handleChange}
                                                    onFocus={(e) => e.target.select()}
                                                    onPaste={(e) => e.preventDefault()} />
                                            </div>
                                            <div className="flex gap-x-4 basis-full">
                                                <div className="flex flex-col basis-[60%]">
                                                    <label htmlFor='saleCost'
                                                        className="w-fit ml-1 text-gray-600 text-base">Sale cost</label>
                                                    <input type="text" inputMode='none'
                                                        className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                        name='saleCost'
                                                        id='saleCost'
                                                        placeholder="Sale cost"
                                                        value={formik.values.saleCost}
                                                        onChange={formik.handleChange}
                                                        onFocus={(e) => e.target.select()}
                                                        onPaste={(e) => e.preventDefault()} />
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
                                                <div className="flex flex-col basis-[25%]">
                                                    <label htmlFor='saleCount'
                                                        className="w-fit ml-1 text-gray-600 text-base">Sale count</label>
                                                    <input type="text" inputMode='none'
                                                        className="w-full px-2 py-1 bg-white shadow rounded-lg border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
                                                        name='saleCount'
                                                        id='saleCount'
                                                        placeholder="Sale count"
                                                        value={formik.values.saleCount}
                                                        onChange={formik.handleChange}
                                                        onFocus={(e) => e.target.select()}
                                                        onPaste={(e) => e.preventDefault()} />
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
                                    </div>

                                    <div className="flex justify-between gap-x-2 mt-6">
                                        <div className='flex gap-x-2'>
                                            <button type="button" className="py-2 px-3 bg-indigo-500 active:bg-indigo-600 text-indigo-50 font-medium rounded-lg"
                                                onClick={goBackNavigate}>Cansel</button>
                                            <button type="submit"  onClick={formik.handleSubmit} className="py-2 px-3 bg-teal-500 active:bg-teal-600 text-teal-50 font-medium rounded-lg">Create</button>
                                        </div>
                                        <button type="reset" onClick={formik.handleReset} className='w-9 h-9 flex justify-center items-center bg-sky-500 active:bg-sky-600 text-center rounded-lg'>
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