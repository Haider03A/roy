import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveInputNumberName, setActiveInputNumberValue } from '../features/invoice/invoiceSlice';


const backTapIcon = <svg className="w-5 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" /></svg>
const backSpaceIcon = <svg className="w-5 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
const keysLabel = [{ l: 1, k: 1 }, { l: 2, k: 2 }, { l: 3, k: 3 }, { l: backSpaceIcon, k: 'backSpace' }, { l: 4, k: 4 }, { l: 5, k: 5 }, { l: 6, k: 6 }, { l: backTapIcon, k: 'backTap' }, { l: 7, k: 7 }, { l: 8, k: 8 }, { l: 9, k: 9 }, { l: 'GO', k: 'enter' }, { l: 0, k: 0 }, { l: '00', k: '00' }, { l: '.', k: '.' }]

export const KeyBorde = () => {
    const numberKeyBordRef = useRef(null)

    const dispatch = useDispatch()
    const { activeInputNumberName, activeInputNumberValue } = useSelector(state => state.invoice)

    const onClickKeyHandler = (e, key) => {
        const pattern = /^(0|[1-9]\d*)(\.\d*)?$|^\.\d+$|^\.?$|^(\d*\.)$/
        switch (key.k) {
            case 'backSpace':
                dispatch(setActiveInputNumberValue(activeInputNumberValue.slice(0, -1)))
                break;

            case 'enter':

                break;

            case 'backTap':

                break;

            default:
                pattern.test(activeInputNumberValue + key.k) ? dispatch(setActiveInputNumberValue(activeInputNumberValue + key.k)) : null
                break;
        }

    }

    return (
        <>
            {
                activeInputNumberName !== null ?
                    <div ref={numberKeyBordRef} className="w-full flex justify-center p-1 fixed left-0 bottom-0 z-[1000] bg-gray-100"
                        onClick={(e) => e.stopPropagation()} >
                        <div className="container max-w-[500px] grid grid-cols-4 grid-rows-4 gap-1 text-gray-600 font-bold">
                            {
                                keysLabel.map((key, i) => {
                                    return (
                                        <button type="button"
                                            key={i}
                                            className={`${key.k == 'enter' ? 'col-start-4 row-start-3 row-end-5 bg-indigo-500 active:bg-indigo-700 text-indigo-50' : 'bg-white active:bg-gray-200'} p-6 flex justify-center items-center rounded-lg duration-75 active:scale-75 shadow`}
                                            onClick={(e) => onClickKeyHandler(e, key)}>
                                            {key.l}
                                        </button >
                                    )
                                })
                            }
                        </div >
                    </div >

                    : null
            }
        </>

    )
}

