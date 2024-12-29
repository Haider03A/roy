export const PopUpTemp = ({ children }) => {

    return (
        <div className="w-screen h-dvh p-3 flex justify-center items-start bg-black bg-opacity-25 absolute mb-[380px] top-0 left-0 z-50">
            {children}
        </div>
    )
}
