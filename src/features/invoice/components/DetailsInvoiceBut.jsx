import { useNavigate } from "react-router-dom";

export const DetailsInvoicBut = ({ invoiceId }) => {
    const navigate = useNavigate();

    return (
        <>
            <button type="button"
                className='w-9 h-9 flex justify-center items-center bg-sky-500 active:bg-sky-600 text-center rounded'
                onClick={() => navigate(`details/${invoiceId}`)}>
                <svg className='h-6 fill-sky-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" /></svg>
            </button>
        </>
    )
}