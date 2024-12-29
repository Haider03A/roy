import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"

import { localStorageManger } from '../features/invoice/invoiceSlice'

const royLocalStorage = localStorage.getItem('roy')

export const LocalStorageApp = () => {
    const royApp = useSelector(state => state.invoice)

    const dispatch = useDispatch()

    useEffect(() => {
        if (royLocalStorage) {
            dispatch(localStorageManger(JSON.parse(royLocalStorage)))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('roy', JSON.stringify(royApp))

    }, [royApp])

}