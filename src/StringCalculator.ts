export class StringCalculator {
  add(numbers: string): number {
    let result: number = 0
    let separator: string = ","

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    if (numbers.startsWith("//")) {
      separator = this.createCustomSeparator(numbers)
      numbers = numbers.substring(numbers.indexOf("\n") + 1)
    }

    let separatorRegx: RegExp = new RegExp(separator + "|\n")

    this.checkNumberSeparators(numbers, separatorRegx, separator)

    result = this.sumNumbers(separatorRegx, numbers)

    return result
  }

  private isVerticalBar(separator: String): Boolean {
    return separator == "|"
  }

  private createCustomSeparator(numbers: String): string {
    let separator = numbers.substring(2, numbers.indexOf("\n"))

    separator = this.isVerticalBar(separator) ? "\\|" : separator

    return separator
  }

  private checkNumberSeparators(numbers: string, separator: RegExp, separatorStr: string) {
    if (numbers.endsWith(separatorStr) || numbers.endsWith("\n")) {
      throw new Error(`Number expected but EOF found.`)
    } else if (numbers.includes(`${separatorStr}\n`) || numbers.includes(`\n${separatorStr}`)) {
      throw new Error(`Number expected but '\\n' found at the position ${numbers.indexOf("\n")}.`)
    }
    this.checkNegativeNumbers(numbers, separator)
    numbers.split(separator).forEach((num: string) => {
      this.checkNumber(num, separatorStr, numbers)
    })
  }

  private sumNumbers(separator: RegExp, numbers: String): number {
    let result: number = 0
    numbers.split(separator).forEach((num: String) => {
      result = result + Number(num)
    })
    return result
  }

  private isNumber(num: string) {
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

  private checkNumber(num: string, separator: string, numbers: string) {
    const negativeNumbers: string[] = []
    if (this.isNumber(num)) {
      const wrongSeparator = num.match(/[^0-9]/)?.[0]
      const positionWrongSeparator = numbers.indexOf(`${num.match(/[^0-9]/)?.[0]}`)
      throw new Error(`'${separator}' expected but '${wrongSeparator}' found at position ${positionWrongSeparator}`)
    }
  }
}
