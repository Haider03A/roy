export const PopUpTemp = ({ children }) => {

    return (
        <div className="w-screen h-screen p-3 flex justify-center items-start bg-black bg-opacity-25 fixed top-0 left-0 z-50">
            {children}
        </div>
    )
}
