import { useRef } from "react"
import { MainButton } from "../templatesComp/MainButton"
import { PopUp } from "../templatesComp/PopUp"

export const Options = ({ setOptionBoxActive, optionsOpenButtonRef }) => {

    const onOptionButtonClick = () => {
        setOptionBoxActive(false)
    }


    return (
        <PopUp className="w-40 flex flex-col items-start gap-y-2 absolute top-14 left-20 bg-white shadow rounded-lg px-2 py-2"
            setPopUpStatus={setOptionBoxActive} exeptionsRef={optionsOpenButtonRef}>
            <MainButton style='w-full text-left'
            onClick={onOptionButtonClick} >
                test
            </MainButton>
        </PopUp>
    )
}