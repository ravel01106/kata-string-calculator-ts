import { Utils } from "../utils/Utils.js"

// create CheckerExpression class
export class CheckerExpression {
  private isNotNumber(number: string) {
    return number.match(/^[0-9]+$|^[0-9]+\.[0-9]$/) == null
  }

  private isNegativeNumber(number: string) {
    return number.match(/^-[0-9]+$|^-[0-9]+\.[0-9]$/) != null
  }

  // Solo existe numeros positivos
  // No existe numeros negativos
  private thereAreOnlyPositiveNumbers(expression: string, delimiterRegExp: RegExp) {
    const negativeNumbers: string[] = []
    expression.split(delimiterRegExp).forEach((num: string) => {
      if (this.isNegativeNumber(num)) {
        negativeNumbers.push(num)
      }
    })
    if (negativeNumbers.length != 0) {
      throw new Error(`Negative not allowed : ${Utils.printNegativeNumbers(negativeNumbers)}.`)
    }
  }

  // Revisar nombre funcion y parametros
  private thereIsNoWrongDelimiter(expression: string, delimiter: string, delimiterRegExp: RegExp) {
    expression.split(delimiterRegExp).forEach((num: string) => {
      if (this.isNotNumber(num)) {
        const wrongDelimiter = num.match(/[^0-9]/)?.[0]
        const positionWrongDelimiter = expression.indexOf(`${num.match(/[^0-9]/)?.[0]}`)
        throw new Error(`'${delimiter}' expected but '${wrongDelimiter}' found at position ${positionWrongDelimiter}`)
      }
    })
  }

  checkExpression(expression: string, delimiterRegExp: RegExp, delimiter: string) {
    this.thereAreOnlyPositiveNumbers(expression, delimiterRegExp)
    this.thereIsNoWrongDelimiter(expression, delimiter, delimiterRegExp)
  }
}
