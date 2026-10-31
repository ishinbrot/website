export default class Poem {
  title: string;
  text: string;
  year: string;
  linkTitle: string;

  constructor(title: string, text: string);
  constructor(title: string, year: string | null, text: string);
  constructor(title: string, yearOrText: string | null, text?: string) {
    this.title = title;
    this.text = text ?? yearOrText ?? '';
    if (text === undefined || yearOrText == null) {
      this.year = 'Unknown';
    } else {
      this.year = yearOrText;
    }
    this.linkTitle = 'display Poem';
  }
}



