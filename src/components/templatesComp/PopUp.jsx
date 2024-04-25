import { useRef } from "react"

export const PopUp = ({children, setPopUpStatus, className, exeptionsRef}) => {
    const popUpRef = useRef(null)
    document.addEventListener('click', (e) =>{
            if (popUpRef.current && exeptionsRef.current && popUpRef.current != e.target && exeptionsRef.current != e.target) {
                setPopUpStatus(false)
            }
    })
    return (
        <div className={className} ref={popUpRef}>
            {children}
        </div>
    )
}