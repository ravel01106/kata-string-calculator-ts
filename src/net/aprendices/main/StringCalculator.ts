import { CheckerExpression } from "./service/CheckerExpression.js"
import { Separator } from "./utils/Separator.js"
import { Utils } from "./utils/Utils.js"

// numbers -> expression

export class StringCalculator {
  add(expression: string): number {
    let result: number = 0
    let numberChecker = new CheckerExpression()
    let separator = new Separator()

    if (expression == "") return 0
    else if (expression.length == 1) return Number(expression)

    let delimiter: string = separator.createAndGetSeparator(expression)
    expression = separator.obtainNumbersWithoutCustomSeparator(expression)

    let delimiterExpression: RegExp = new RegExp(delimiter + "|\n")

    separator.checkSeparator(expression, delimiter)
    numberChecker.checkExpression(expression, delimiterExpression, delimiter)

    result = Utils.sumNumbers(delimiterExpression, expression)

    return result
  }
}
