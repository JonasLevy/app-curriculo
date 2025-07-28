import { Button } from "@mui/material"

const ModalForm = ({ close, children, adicionar, acao, blockScroll }) => {
    const bodyElement = document.body;
    if (blockScroll) bodyElement.style.overflow = 'hidden';
    return (
        <div className="w-full h-full bg-slate-500 bg-opacity-80 fixed p-0 top-0 left-0 flex items-center  justify-center z-30 ">
            <div className="bg-slate-200 w-11/12 h-auto max-h-full p-4 flex flex-col gap-3 max-sm:w-full  align-bottom z-40">
                <form onSubmit={(e) => acao(e)} className="w-full h-auto max-h-full p-4 flex flex-col gap-3">
                    {children}
                    <div className="flex justify-center gap-2">
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            onClick={adicionar}
                            className="px-5 py-1 bg-green-500 self-center border-0">
                            Confirmar
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={close}
                            className="px-5 py-1 bg-green-500 self-center border-0">
                            Cancelar
                        </Button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default ModalForm