const fs = require("fs");

const json = fs.readFileSync('./classe-02/registros.json')

const registros = JSON.parse(json)

const registrosOrdenados = registros.sort((a, b) => {
   
    if (new Date(a.registered).getTime() > new Date(b.registered).getTime()) {
      return 1  
    }
    if (new Date(a.registered).getTime() < new Date(b.registered).getTime()) {
        return -1
    }
    return 0
})

console.log(registrosOrdenados);
