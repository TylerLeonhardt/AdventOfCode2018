import * as fs from "fs";
// tslint:disable:no-console

export abstract class AdventOfCodeDay {
    protected dayNumber: number;

    /**
     * @summary helper function to get the input text for a problem
     * @param day the day of Advent of Code
     * @param fileName the name of the txt file for the input for a part of a given day of Advent of Code
     * @returns an array of strings where each line of the file is an item in the array
     */
    public getInput(day: string, fileName: string): string[] {
        // since we run from dist, we need to go grab the txt file from the src directory
        return fs.readFileSync(`${__dirname}/../src/${day}/${fileName}.txt`, "utf8").split("\n");
    }

    /**
     * @summary helper function to log the answer
     * @param day the day of Advent of Code
     * @param part the part of the given day of Advent of Code
     * @param answer the answer to the question
     */
    public logAnswer(part: string, answer: any): void {
        console.log(`Day${this.dayNumber} ${part}:`);
        console.log(answer);
        console.log();
    }

    public abstract part1(): void;
    public abstract part2(): void;
}
