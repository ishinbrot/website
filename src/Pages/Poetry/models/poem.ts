export default class Poem {
  title: string;
  text: string;
  year: string;
  linkTitle: string;

  constructor(title: string, year: string | null, text: string) {
    this.title = title;
    this.text = text;
    if (year == null) {
      this.year = 'Unknown';
    } else {
      this.year = year;
    }
    this.linkTitle = 'display Poem';
  }
}




