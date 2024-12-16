import { useDispatch, useSelector } from 'react-redux';
import { setActiveInputNumberName } from '../../features/invoice/invoiceSlice';

export const useMangerFocusInputNumber = (inputName) => {

    const dispatch = useDispatch()
    const { activeInputNumberName, activeInputNumberValue } = useSelector(state => state.invoice)

    if (inputName == activeInputNumberName) return
    dispatch(setActiveInputNumberName(inputName))

}