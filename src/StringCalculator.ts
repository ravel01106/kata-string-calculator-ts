export class StringCalculator {
  add(numbers: string): number {
    let result: number = 0
    let separator: string = ","

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    if (numbers.startsWith("//")) {
      separator = this.createCustomSeparator(numbers)
      numbers = numbers.substring(numbers.indexOf("\n"))
    }

    let separatorRegx: RegExp = new RegExp(separator + "|\n")

    this.checkNumberSeparators(numbers)

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

  private checkNumberSeparators(numbers: string) {
    if (numbers.endsWith(",") || numbers.endsWith("\n")) {
      throw new Error(`Number expected but EOF found.`)
    } else if (numbers.includes(",\n") || numbers.includes("\n,")) {
      throw new Error(`Number expected but '\\n' found at the position ${numbers.indexOf("\n")}.`)
    }
  }

  private sumNumbers(separator: RegExp, numbers: String): number {
    let result: number = 0
    numbers.split(separator).forEach((num: String) => {
      result = result + Number(num)
    })
    return result
  }
}
