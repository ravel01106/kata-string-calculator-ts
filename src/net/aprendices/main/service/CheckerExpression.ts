import { Utils } from "../utils/Utils.js"
export class CheckerExpression {
  private isNotNumber(number: string) {
    return number.match(/^[0-9]+$|^[0-9]+\.[0-9]$/) == null
  }

  private isNegativeNumber(number: string) {
    return number.match(/^-[0-9]+$|^-[0-9]+\.[0-9]$/) != null
  }

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

  checkExpression(expression: string, delimiterRegExp: RegExp, delimiter: string) {
    this.thereAreOnlyPositiveNumbers(expression, delimiterRegExp)
    this.checkDelimiter(expression, delimiter, delimiterRegExp)
  }

  private checkDelimiter(expression: string, delimiter: string, delimiterRegExp: RegExp) {
    if (expression.endsWith(delimiter) || expression.endsWith("\n")) {
      throw new Error(`Number expected but EOF found.`)
    } else if (expression.includes(`${delimiter}\n`) || expression.includes(`\n${delimiter}`)) {
      throw new Error(`Number expected but '\\n' found at the position ${expression.indexOf("\n")}.`)
    }

    expression.split(delimiterRegExp).forEach((num: string) => {
      if (this.isNotNumber(num)) {
        const wrongDelimiter = num.match(/[^0-9]/)?.[0]
        const positionWrongDelimiter = expression.indexOf(`${num.match(/[^0-9]/)?.[0]}`)
        throw new Error(`'${delimiter}' expected but '${wrongDelimiter}' found at position ${positionWrongDelimiter}`)
      }
    })
  }
}
