export const setDadosFormulario = (key, value, setUseState, state) => {
    const dadosDoForm = {
        ...state,
        [key]: value
    }
    setUseState(dadosDoForm)
}