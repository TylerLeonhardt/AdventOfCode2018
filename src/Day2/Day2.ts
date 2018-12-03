import { AdventOfCodeDay } from "../AdventOfCodeDay";

export class Day2 extends AdventOfCodeDay {
    constructor() {
        super();
        this.dayNumber = 2;
    }

    public part1(): void {
        const input: string[] = this.getInput();
        let numOfTwos: number = 0;
        let numOfThrees: number = 0;

        for (const item of input) {
            let hasTwo: boolean = false;
            let hasThree: boolean = false;
            const freq = this.getCharacterFrequencyMatrix(item);

            for (const kvp of freq) {
                if (kvp[1] === 2) {
                    hasTwo = true;
                } else if (kvp[1] === 3) {
                    hasThree = true;
                }
            }

            numOfTwos += hasTwo ? 1 : 0;
            numOfThrees += hasThree ? 1 : 0;
        }

        this.logAnswer("part1", numOfTwos * numOfThrees);
    }

    private getCharacterFrequencyMatrix(str: string): Map<string, number> {
        const freq = new Map<string, number>();
        for (const char of str) {
            if (!freq.has(char)) {
                freq.set(char, 0);
            }
            freq.set(char, freq.get(char) + 1);
        }
        return freq;
    }

    // tslint:disable-next-line:member-ordering
    public part2(): void {
        const input: string[] = this.getInput();
        let answer: string = "";

        outer:
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (this.computeWeakEditDistance(input[i], input[j]) === 1) {
                    for (let k = 0; k < input[i].length; k++) {
                        answer += input[i].charAt(k) === input[j].charAt(k) ? input[j].charAt(k) : "";
                    }
                    break outer;
                }
            }
        }

        this.logAnswer("part2", answer);
    }

    // tslint:disable-next-line:member-ordering
    private computeWeakEditDistance(str1: string, str2: string): number {
        let differences: number = 0;
        for (let i = 0; i < str1.length; i++) {
            differences += str1.charAt(i) !== str2.charAt(i) ? 1 : 0;
        }
        return differences;
    }
}
