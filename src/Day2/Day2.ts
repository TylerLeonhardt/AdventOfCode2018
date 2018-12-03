import { AdventOfCodeDay } from "../AdventOfCodeDay";
// tslint:disable:no-console

export class Day2 extends AdventOfCodeDay {
    public part1(): void {
        const input: string[] = this.getInput("Day2", "part1");
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

        this.logAnswer("Day2", "part1", numOfTwos * numOfThrees);
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
        this.logAnswer("Day2", "part2", "not implemented");
    }
}
