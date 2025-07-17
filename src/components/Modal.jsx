import { Button } from "@mui/material"

const Modal = ({ close, children }) => {

    return (
        <div className="w-full h-full bg-slate-500 bg-opacity-80 fixed p-0 top-0 left-0 flex items-center  justify-center z-30 ">
            <div className="bg-slate-200 w-11/12 h-auto max-h-full p-4 flex flex-col gap-3 max-sm:w-full  align-bottom z-40">
                {children}
                <Button variant="contained" color="success" onClick={close} className="px-5 py-1 bg-green-500 self-center border-0">Ok</Button>
            </div>

        </div>
    )
}

export default Modal