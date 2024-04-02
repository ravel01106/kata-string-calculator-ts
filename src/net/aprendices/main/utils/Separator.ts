export class Separator {
  private delimiter: string = ","

  private isVerticalBar(delimiter: String): Boolean {
    return delimiter == "|"
  }
  private isCustomSeparator(numbersSeparatedBySeparator: string): boolean {
    return numbersSeparatedBySeparator.startsWith("//")
  }

  getSeparator() {
    return this.delimiter
  }

  obtainNumbersWithoutCustomSeparator(numbersSeparatedBySeparator: string) {
    return (numbersSeparatedBySeparator = numbersSeparatedBySeparator.substring(
      numbersSeparatedBySeparator.indexOf("\n") + 1,
    ))
  }

  createSeparator(numbersSeparatedBySeparator: string) {
    if (this.isCustomSeparator(numbersSeparatedBySeparator)) {
      this.delimiter = numbersSeparatedBySeparator.substring(2, numbersSeparatedBySeparator.indexOf("\n"))
      this.delimiter = this.isVerticalBar(this.delimiter) ? "\\|" : this.delimiter
    }
  }
}
