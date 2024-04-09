export class Separator {
  private delimiter: string = ","

  private isVerticalBar(): Boolean {
    return this.delimiter == "|"
  }
  private isCustomSeparator(numbersSeparatedByDelimiter: string): boolean {
    return numbersSeparatedByDelimiter.startsWith("//")
  }

  obtainNumbersWithoutCustomSeparator(numbersSeparatedByDelimiter: string) {
    return this.isCustomSeparator(numbersSeparatedByDelimiter)
      ? (numbersSeparatedByDelimiter = numbersSeparatedByDelimiter.substring(
          numbersSeparatedByDelimiter.indexOf("\n") + 1,
        ))
      : numbersSeparatedByDelimiter
  }

  createDelimiter(numbersSeparatedByDelimiter: string) {
    if (this.isCustomSeparator(numbersSeparatedByDelimiter)) {
      this.delimiter = numbersSeparatedByDelimiter.substring(2, numbersSeparatedByDelimiter.indexOf("\n"))
      this.delimiter = this.isVerticalBar() ? "\\|" : this.delimiter
    }
    console.log("Delimiter -> " + this.delimiter)
    return this.delimiter
  }

  getDelimiter(): string {
    return this.delimiter
  }
}
