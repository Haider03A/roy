
export const PopUpTemp = ({children}) => {   
    
    return (
        <div className="w-screen h-screen flex justify-center items-start bg-black bg-opacity-25 fixed top-0 left-0">
            {children}
        </div>
    )
}
