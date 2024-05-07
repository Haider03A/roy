import { useNavigate } from "react-router-dom";

export const AddSaleButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button type="button" className='w-9 h-9 flex justify-center items-center bg-sky-500 active:bg-sky-600 text-center rounded-lg'
                onClick={() => navigate('addsale')}>
                    <svg className='w-5 h-5 fill-sky-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </button>
        </>
    )}