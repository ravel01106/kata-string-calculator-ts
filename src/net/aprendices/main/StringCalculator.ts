import { NumberChecker } from "./NumberChecker.js"
import { Separator } from "./utils/Separator.js"
import { Utils } from "./utils/Utils.js"

export class StringCalculator {
  add(numbers: string): number {
    let result: number = 0

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    let separator = new Separator()
    let delimiter: string = separator.createAndGetSeparator(numbers)
    numbers = separator.obtainNumbersWithoutSeparator(numbers)

    let delimiterExpression: RegExp = new RegExp(delimiter + "|\n")

    this.checkNumberSeparators(numbers, delimiterExpression, delimiter)

    result = Utils.sumNumbers(delimiterExpression, numbers)

    return result
  }

  private checkNumberSeparators(numbers: string, delimiterExpression: RegExp, delimiter: string) {
    if (numbers.endsWith(delimiter) || numbers.endsWith("\n")) {
      throw new Error(`Number expected but EOF found.`)
    } else if (numbers.includes(`${delimiter}\n`) || numbers.includes(`\n${delimiter}`)) {
      throw new Error(`Number expected but '\\n' found at the position ${numbers.indexOf("\n")}.`)
    }
    let numberChecker = new NumberChecker()
    numberChecker.checkNumber(numbers, delimiterExpression, delimiter)
  }
}
