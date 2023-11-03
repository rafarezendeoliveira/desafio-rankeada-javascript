let vitoria = 2
let derrota = 1
let saldoVitorias = vitoria - derrota

function calcularRanking(derrota,vitoria) {
    let ranking = vitoria - derrota
    if(ranking <10)
    {return "Ferro"}
    else if (ranking >= 11 <=50) 
    {return "Prata"}
    else if (ranking >=51 <=80) 
    {return "Ouro"}
    else if (ranking >=81 <=90)
       {return "Diamante"}
    else if (ranking >=91 <=100)
   {return "Lendario"}
    else {ranking >=100} ranking = "Imortal"
    return ranking}

let resultadoranking = calcularRanking(derrota,vitoria)
console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + resultadoranking)