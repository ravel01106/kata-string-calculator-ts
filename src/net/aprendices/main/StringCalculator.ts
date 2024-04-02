import { Separator } from "./utils/Separator.js"

export class StringCalculator {
  add(numbers: string): number {
    let result: number = 0

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    let separator = new Separator()
    let delimiter: string = separator.createAndGetSeparator(numbers)
    numbers = separator.obtainNumbersWithoutSeparator(numbers)

    let separatorRegx: RegExp = new RegExp(delimiter + "|\n")

    this.checkNumberSeparators(numbers, separatorRegx, delimiter)

    result = this.sumNumbers(separatorRegx, numbers)

    return result
  }

  private checkNumberSeparators(numbers: string, separator: RegExp, delimiter: string) {
    if (numbers.endsWith(delimiter) || numbers.endsWith("\n")) {
      throw new Error(`Number expected but EOF found.`)
    } else if (numbers.includes(`${delimiter}\n`) || numbers.includes(`\n${delimiter}`)) {
      throw new Error(`Number expected but '\\n' found at the position ${numbers.indexOf("\n")}.`)
    }
    this.checkNegativeNumbers(numbers, separator)
    numbers.split(separator).forEach((num: string) => {
      this.checkNumber(num, delimiter, numbers)
    })
  }

  private sumNumbers(separator: RegExp, numbers: String): number {
    let result: number = 0
    numbers.split(separator).forEach((num: String) => {
      result = result + Number(num)
    })
    return result
  }

  private isNotNumber(num: string) {
    return num.match(/^[0-9]+$|^[0-9]+\.[0-9]$/) == null
  }

  private isNegativeNumber(num: string) {
    return num.match(/^-[0-9]+$|^-[0-9]+\.[0-9]$/) != null
  }

  private checkNegativeNumbers(numbers: string, separator: RegExp) {
    const negativeNumbers: string[] = []
    numbers.split(separator).forEach((num: string) => {
      if (this.isNegativeNumber(num)) {
        negativeNumbers.push(num)
      }
    })
    if (negativeNumbers.length != 0) {
      throw new Error(`Negative not allowed : ${this.printNegativeNumbers(negativeNumbers)}.`)
    }
  }

  private printNegativeNumbers(negativeNumbers: string[]) {
    let msg = ""
    negativeNumbers.forEach((num) => (msg += num + ", "))
    msg = msg.slice(0, msg.length - 2)
    return msg
  }

  private checkNumber(num: string, delimiter: string, numbers: string) {
    if (this.isNotNumber(num)) {
      const wrongSeparator = num.match(/[^0-9]/)?.[0]
      const positionWrongSeparator = numbers.indexOf(`${num.match(/[^0-9]/)?.[0]}`)
      throw new Error(`'${delimiter}' expected but '${wrongSeparator}' found at position ${positionWrongSeparator}`)
    }
  }
}
