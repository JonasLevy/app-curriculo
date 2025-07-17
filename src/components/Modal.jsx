
const Modal = ({ close, children }) => {

    return (
        <div className="w-full h-full bg-slate-500 bg-opacity-80 fixed p-0 top-0 left-0 flex items-center  justify-center ">
            <div className="bg-slate-200 w-11/12 h-auto p-4 flex flex-col gap-3 max-sm:w-full  align-bottom ">
                {children}
                <button onClick={close} className="px-5 py-1 bg-green-500 self-center border-0">Ok</button>
            </div>

        </div>
    )
}

export default Modal