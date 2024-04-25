import { MainButton } from "../templatesComp/MainButton"
import { PopUp } from "../templatesComp/PopUp"

export const NavBar = ({ setNavBarActive, navBarOpenButtonRef }) => {

    return (
        <PopUp className='absolute top-0 left-0 max-h-screen h-screen min-w-48 w-7/12 z-40 p-5 bg-gray-100 shadow'
            setPopUpStatus={setNavBarActive}
            exeptionsRef={navBarOpenButtonRef}>
            <nav className="pointer-events-none">
                <div className="border-b mb-8 pb-1">
                    <MainButton onClick={() => setNavBarActive(false)}>
                        <svg className="h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </MainButton>
                </div>
                <ul className="flex flex-col gap-y-3">
                    <li><a className="block pointer-events-auto active:bg-gray-200 py-1 px-3 rounded-lg" href="/home">Home</a></li>
                    <li><a className="block pointer-events-auto active:bg-gray-200 py-1 px-3 rounded-lg" href="/statistics">Statistics</a></li>
                    <li><a className="block pointer-events-auto active:bg-gray-200 py-1 px-3 rounded-lg" href="/history">History</a></li>
                </ul>
            </nav>

        </PopUp>
    )
}