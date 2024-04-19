import { addDays } from "date-fns";

function promocao(dateInicio, dateSolicitacao) {
  const dataInicio = new Date(dateInicio);
  const dataFinal = addDays(dataInicio, 30);
  const dataSolicitacao = new Date(dateSolicitacao);

  return dataSolicitacao.getTime() >= dataInicio.getTime() &&
    dataSolicitacao.getTime() < dataFinal.getTime()
    ? console.log(true)
    : console.log(false);
}

promocao(new Date(2024, 3, 1), new Date(2024, 3, 30));
