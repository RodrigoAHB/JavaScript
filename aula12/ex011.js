var idade = 19
if (idade < 16) {
    console.log('Não vota.')
} else {
    if ((idade>=16) && (idade < 18)){
        console.log('Voto facultativo.')
    } else{
        console.log('Voto obrigatório.')
    }
}