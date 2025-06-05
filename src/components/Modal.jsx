
const Modal = ({close}) => {

    return (
        <div className="w-full h-full bg-slate-500 bg-opacity-80 fixed p-0 top-0 left-0 flex items-center  justify-center">
            <div className="bg-slate-200 w-1/2 h-1/2 p-4 flex flex-col text-end">
            <button onClick={close} className="px-1 py-1 bg-slate-500 w-fit">x</button>

            </div>

        </div>
    )
}

export default Modal