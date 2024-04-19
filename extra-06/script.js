import { addHours } from 'date-fns'

function promocao(dateInicio, dateSolicitacao) {
    
    const dataInicio = new Date(dateInicio)
    const dataFinal = addHours(dataInicio, 24)
    const dataSolicitacao = new Date(dateSolicitacao)

    return dataSolicitacao.getTime() >= dataInicio.getTime() && dataSolicitacao.getTime() <= dataFinal.getTime() ? console.log(true) : console.log(false)


}

promocao(new Date(2024, 3, 18, 15), new Date(2024, 3, 19, 14, 1))