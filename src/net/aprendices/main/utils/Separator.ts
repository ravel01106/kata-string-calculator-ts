export class Separator {
  private separator: string = ","

  private isVerticalBar(separator: String): Boolean {
    return separator == "|"
  }
  private isCustomSeparator(numbersSeparatedBySeparator: string): boolean {
    return numbersSeparatedBySeparator.startsWith("//")
  }

  getSeparator() {
    return this.separator
  }

  obtainNumbersWithoutCustomSeparator(numbersSeparatedBySeparator: string) {
    return (numbersSeparatedBySeparator = numbersSeparatedBySeparator.substring(
      numbersSeparatedBySeparator.indexOf("\n") + 1,
    ))
  }

  createSeparator(numbersSeparatedBySeparator: string) {
    if (this.isCustomSeparator(numbersSeparatedBySeparator)) {
      this.separator = numbersSeparatedBySeparator.substring(2, numbersSeparatedBySeparator.indexOf("\n"))
      this.separator = this.isVerticalBar(this.separator) ? "\\|" : this.separator
    }
  }
}
