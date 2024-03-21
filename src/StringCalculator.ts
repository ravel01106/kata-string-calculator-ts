export class StringCalculator {
  add(numbers: String): number {
    let result: number = 0
    let separator: string = ",|\n"

    if (numbers == "") return 0
    else if (numbers.length == 1) return Number(numbers)

    if (numbers.startsWith("//")) {
      separator = numbers.substring(2, numbers.indexOf("\n")) + "|\n"
      console.log(separator)
      numbers = numbers.substring(numbers.indexOf("\n"))
      console.log(numbers)
    }

    let separatorRegx: RegExp = new RegExp(separator)

    this.checkNumberSeparators(numbers)

    result = this.sumNumbers(separatorRegx, numbers)

    return result
  }

  private checkNumberSeparators(numbers: String) {
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
