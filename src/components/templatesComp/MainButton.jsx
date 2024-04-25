export const MainButton = ({children, style, onClick, reference}) => {
    return (
        <button ref={reference ? reference : null} className={`pointer-events-auto py-2 px-3 rounded-lg active:bg-gray-100 ${style ? style : ''}`}
        onClick={onClick}>
                {children}
        </button>
    )
}