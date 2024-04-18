const taAberto = (date) => {
  const data = new Date(date);
  const abertura = new Date(2024, 0, 1, 5, 0);
  const fechamento = new Date(2024, 0, 1, 15, 1);

  if (
    data.getHours() >= abertura.getHours() &&
    data.getHours() <= fechamento.getHours() &&
    data.getMinutes() < fechamento.getMinutes()
  ) {
    return console.log(true);
  }
  return console.log(false);
};
taAberto(new Date(2015, 1, 1, 7, 59))

taAberto(new Date(2015, 1, 1, 15, 0))
