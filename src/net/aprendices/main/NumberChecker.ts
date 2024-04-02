import { Utils } from "./utils/Utils.js"

export class NumberChecker {
  private isNotNumber(num: string) {
    return num.match(/^[0-9]+$|^[0-9]+\.[0-9]$/) == null
  }

  private isNegativeNumber(num: string) {
    return num.match(/^-[0-9]+$|^-[0-9]+\.[0-9]$/) != null
  }

  private checkNegativeNumbers(numbers: string, delimiterExpression: RegExp) {
    const negativeNumbers: string[] = []
    numbers.split(delimiterExpression).forEach((num: string) => {
      if (this.isNegativeNumber(num)) {
        negativeNumbers.push(num)
      }
    })
    if (negativeNumbers.length != 0) {
      throw new Error(`Negative not allowed : ${Utils.printNegativeNumbers(negativeNumbers)}.`)
    }
  }

  private checkPositiveNumber(num: string, delimiter: string, numbers: string) {
    if (this.isNotNumber(num)) {
      const wrongDelimiter = num.match(/[^0-9]/)?.[0]
      const positionWrongDelimiter = numbers.indexOf(`${num.match(/[^0-9]/)?.[0]}`)
      throw new Error(`'${delimiter}' expected but '${wrongDelimiter}' found at position ${positionWrongDelimiter}`)
    }
  }

  checkNumber(numbers: string, delimiterExpression: RegExp, delimiter: string) {
    this.checkNegativeNumbers(numbers, delimiterExpression)
    numbers.split(delimiterExpression).forEach((num: string) => {
      this.checkPositiveNumber(num, delimiter, numbers)
    })
  }
}
