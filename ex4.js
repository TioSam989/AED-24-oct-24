
const rateExpressions = (A = true, B = true, C = false) => {
    const resultA = (A && B) || (A !== B)
    const resultB = (A || B) && (A && C)
    const resultC = (A || (C && B)) !== (A && !B)

    return {
        resultA,
        resultB,
        resultC
    }
}

const results = rateExpressions(true, true, false)

console.log({ resultA: results.resultA, resultB: results.resultB, resultC: results.resultC })