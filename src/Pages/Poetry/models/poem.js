class Poem {
    
    constructor(title, year, text) {
        this.title = title;
        this.text = text;
        if (year==null) {
            this.year="Unknown"
        }
        else {
        this.year = year;
        }
        this.linkTitle="display Poem"
    }
}
export default Poem;