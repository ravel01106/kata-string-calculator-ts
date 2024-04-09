export class Separator {
  private delimiter: string = ","

  private isVerticalBar(): Boolean {
    return this.delimiter == "|"
  }
  private isCustomSeparator(numbersSeparatedBySeparator: string): boolean {
    return numbersSeparatedBySeparator.startsWith("//")
  }

  obtainNumbersWithoutCustomSeparator(numbersSeparatedBySeparator: string) {
    return this.isCustomSeparator(numbersSeparatedBySeparator)
      ? (numbersSeparatedBySeparator = numbersSeparatedBySeparator.substring(
          numbersSeparatedBySeparator.indexOf("\n") + 1,
        ))
      : numbersSeparatedBySeparator
  }

  createAndGetSeparator(numbersSeparatedBySeparator: string): string {
    if (this.isCustomSeparator(numbersSeparatedBySeparator)) {
      this.delimiter = numbersSeparatedBySeparator.substring(2, numbersSeparatedBySeparator.indexOf("\n"))
      this.delimiter = this.isVerticalBar() ? "\\|" : this.delimiter
    }
    console.log("Delimiter -> " + this.delimiter)
    return this.delimiter
  }
}
