SP = 67836.43
RJ = 36678.66
MG = 29229.88
ES = 27165.48
Outros = 19849.53

somaTotal = (SP + RJ + MG + ES + Outros)

console.log('O total da soma dos Estados é:',somaTotal);
porcSP = (SP * 100)/somaTotal
porcRJ = (RJ * 100)/somaTotal
porcMG = (MG * 100)/somaTotal
porcES = (ES * 100)/somaTotal
porcOutros = (Outros * 100)/somaTotal
console.log('Porcentagem SP:',porcSP.toPrecision(4));
console.log('Porcentagem RJ:',porcRJ.toPrecision(4));
console.log('Porcentagem MG:',porcMG.toPrecision(4));
console.log('Porcentagem ES:',porcES.toPrecision(4));
console.log('Porcentagem Outros:',porcOutros.toPrecision(4));