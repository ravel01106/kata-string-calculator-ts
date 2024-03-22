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

  private checkNumberSeparators(numbers: string, separator: RegExp, separatorStr: String) {
    if (numbers.endsWith(",") || numbers.endsWith("\n")) {
      throw new Error(`Number expected but EOF found.`)
    } else if (numbers.includes(",\n") || numbers.includes("\n,")) {
      throw new Error(`Number expected but '\\n' found at the position ${numbers.indexOf("\n")}.`)
    }

    numbers.split(separator).forEach((num: string) => {
      console.log("num ->" + num + "<- num")
      if (num.match(/^[0-9]+$|^[0-9]+\.[0-9]$/) == null) {
        console.log(num.match(/[^0-9]/)?.[0])
        throw new Error(
          `'${separatorStr}' expected but '${num.match(/[^0-9]/)?.[0]}' found at position ${numbers.indexOf(`${num.match(/[^0-9]/)?.[0]}`)}`,
        )
      }
    })
  }

  private sumNumbers(separator: RegExp, numbers: String): number {
    let result: number = 0
    numbers.split(separator).forEach((num: String) => {
      result = result + Number(num)
    })
    return result
  }
}
