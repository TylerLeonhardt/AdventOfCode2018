import { AdventOfCodeDay } from "../AdventOfCodeDay";

export class Day1 extends AdventOfCodeDay {
    constructor() {
        super();
        this.dayNumber = 1;
    }

    public part1(): void {
        const input = this.getInput();

        let answer = 0;
        for (const item of input) {
            answer += parseInt(item, 10);
        }

        this.logAnswer("part1", answer);
    }

    public part2(): void {
        const input = this.getInput();

        const sums = new Set<number>();
        let index = 0;
        let currentSum = 0;
        while (!sums.has(currentSum)) {
            sums.add(currentSum);
            currentSum += parseInt(input[index % input.length], 10);
            index++;
        }

        this.logAnswer("part2", currentSum);
    }
}
