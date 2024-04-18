const taAberto = (date) => {
  const data = new Date(date);
  const abertura = new Date(2024, 0, 1, 5, 0);
  const fechamento = new Date(2024, 0, 1, 15, 1);

  if (
    data.getHours() >= abertura.getHours() &&
    data.getHours() <= fechamento.getHours() &&
    data.getMinutes() < fechamento.getMinutes() &&
    data.getDay() !== 0 && 
    data.getDay() !== 6
  ) {
    return console.log(true);
  }
  return console.log(false);
};

taAberto(new Date(2021,3,25,12))

taAberto(new Date(2021,3,26,12))

taAberto(new Date(2021,3,26,7,59))