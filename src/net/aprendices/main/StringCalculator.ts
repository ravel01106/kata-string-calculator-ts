import { NumberChecker } from "./NumberChecker.js"
import { Separator } from "./utils/Separator.js"
import { Utils } from "./utils/Utils.js"

export class StringCalculator {
  add(numbers: string): number {
    let result: number = 0
    let numberChecker = new NumberChecker()
    let separator = new Separator()

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    let delimiter: string = separator.createAndGetSeparator(numbers)
    numbers = separator.obtainNumbersWithoutCustomSeparator(numbers)

    let delimiterExpression: RegExp = new RegExp(delimiter + "|\n")

    separator.checkSeparator(numbers, delimiter)
    numberChecker.checkNumber(numbers, delimiterExpression, delimiter)

    result = Utils.sumNumbers(delimiterExpression, numbers)

    return result
  }
}
