import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPopUpActive } from '../invoiceSlice';

export const PopUpTemp = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPopUpActive(true))
        return () =>dispatch(setPopUpActive(false))
    }, [])
    
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black bg-opacity-25 fixed top-0 left-0">
            {children}
        </div>
    )
}
