function percentual(value, total, fraction, invert) {
    /* DESCRIÇÃO:
    Na função, passe o valor (value) e o total (total) a se fazer a conversão, informe quantos números vêm após a vírgula (fraction) e se o valor a ser passado é o inverso (invert). Exemplo: 
        10% * 10 === 1, logo:
            value = 1,
            total = 10,
            fraction = 2,
            invert = false || null
        O retorno da função será "10.00". Caso 'invert' seja 'true', o resultado viria "90.00".
    */

    if (!(typeof value === 'number' || typeof total === 'number' || typeof fraction === 'number')) { return { percentualError: "Please, informe just numbers at this function." } }

    if (invert) {
        return parseFloat(((1 - (value / total)) * 100).toFixed(fraction))
    }

    return parseFloat(((value / total) * 100).toFixed(fraction))
}

function percentOf(percentual, number, forceToInt) {
    /* DESCRIÇÃO:
    Informe o percentual (percentual) a retirar um valor de um número a ser informado (number). Informe se deseja forçar o número a ser inteiro.
    */

    if (forceToInt) {
        return parseInt((percentual / 100) * number)
    }

    return (percentual / 100) * number
}

export { percentual, percentOf }