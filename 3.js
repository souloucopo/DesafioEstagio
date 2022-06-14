const Dias = [
    {
        'dia01': 'Segunda',
        'Valor': 2000
    },
    {
        'dia02': 'Terça',
        'Valor': 3000
    },
    {
        'dia03': 'Quarta',
        'Valor': 5000
    },
    {
        'dia04': 'Quinta',
        'Valor': 6000
    },
    {
        'dia05': 'Sexta',
        'Valor': 8000
    },
    {
        'dia06': 'Sabado',
        'Valor': 0
    },
    {
        'dia07': 'Domingo',
        'Valor': 0
    },
    {
        'dia08': 'Segunda',
        'Valor': 6000
    },
    {
        'dia09': 'Terça',
        'Valor': 5000
    },
    {
        'dia10': 'Quarta',
        'Valor': 7000
    },
    {
        'dia11': 'Quinta',
        'Valor': 4000
    },
    {
        'dia12': 'Sexta',
        'Valor': 35000
    },
    {
        'dia13': 'Sabado',
        'Valor': 0
    },
    {
        'dia14': 'Domingo',
        'Valor': 0
    },
    {
        'dia15': 'Segunda',
        'Valor': 2000
    }
]


const maiorValor = Dias.reduce(function(prev, current) { 
	return prev.Valor > current.Valor ? prev : current; 
});

const menorValor = Dias.reduce(function(prev, current) { 
	return prev.Valor < current.Valor ? prev : current; 
});

console.log(maiorValor);
console.log(menorValor);

