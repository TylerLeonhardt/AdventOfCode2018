export class Claim {
    public id: number;
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor(inputStr: string) {
        // parse the over-complicated input string
        // looks like:
        // #1263 @ 531,257: 29x14
        const inputArr = inputStr.split(" ");

        // First part is the Id
        this.id = parseInt(inputArr[0].substring(1, inputArr[0].length + 1), 10);

        // We ignore the '@' and go to the x,y separated by a ',' with a ':' at the end for some reason
        const location = inputArr[2].split(",");
        this.x = parseInt(location[0], 10);
        this.y = parseInt(location[1].substring(0, location[1].length), 10);

        // We grab the width and height which are separated by an 'x'
        const dimensions = inputArr[3].split("x");
        this.width = parseInt(dimensions[0], 10);
        this.height = parseInt(dimensions[1], 10);
    }
}
