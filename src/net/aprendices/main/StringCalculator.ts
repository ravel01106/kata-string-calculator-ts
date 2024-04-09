import { CheckerExpression } from "./service/CheckerExpression.js"
import { Separator } from "./model/Separator.js"
import { Utils } from "./utils/Utils.js"

export class StringCalculator {
  add(expression: string): number {
    let result: number = 0
    let checkerExpression = new CheckerExpression()
    let separator = new Separator()

    if (expression == "") return 0
    else if (expression.length == 1) return Number(expression)

    separator.createDelimiter(expression)
    let delimiter: string = separator.getDelimiter()
    expression = separator.obtainNumbersWithoutCustomSeparator(expression)

    let delimiterRegExp: RegExp = new RegExp(delimiter + "|\n")

    checkerExpression.checkExpression(expression, delimiterRegExp, delimiter)

    result = Utils.sumNumbers(delimiterRegExp, expression)

    return result
  }
}
