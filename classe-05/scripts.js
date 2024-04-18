const taAberto = (date) => {
  const data = new Date(date);
  const abertura = new Date(2024, 0, 1, 8, 0);
  const fechamento = new Date(2024, 0, 1, 18, 1);
  const fechamentoShabat = new Date(2024, 0, 1, 12, 1);

  if (
    data.getHours() >= abertura.getHours() &&
    data.getHours() <= fechamento.getHours() &&
    data.getDay() !== 0 &&
    data.getDay() !== 6
  ) {
    return data.getHours() !== fechamento.getHours()
      ? console.log(true)
      : data.getMinutes() < 1
      ? console.log(true)
      : console.log(false);
  }

  if (
    data.getHours() >= abertura.getHours() &&
    data.getHours() <= fechamentoShabat.getHours() &&
    data.getDay() === 6
  ) {
    return data.getHours() !== fechamentoShabat.getHours()
      ? console.log(true)
      : data.getMinutes() < fechamento.getMinutes()
      ? console.log(true)
      : console.log(false);
  }

  console.log(false);
};

taAberto(new Date(2021, 3, 25, 12));

taAberto(new Date(2021, 3, 26, 12));

taAberto(new Date(2021, 3, 26, 18, 1));

taAberto(new Date(2021, 3, 24, 8, 0));
