import { AdventOfCodeDay } from "../AdventOfCodeDay";
// tslint:disable:no-console

export class Day1 extends AdventOfCodeDay {
    public part1(): void {
        const input = this.getInput("Day1", "part1");

        let answer = 0;
        for (const item of input) {
            answer += parseInt(item, 10);
        }

        this.logAnswer("Day1", "part1", answer);
    }

    public part2(): void {
        const input = this.getInput("Day1", "part2");

        const sums = new Set<number>();
        let index = 0;
        let currentSum = 0;
        while (!sums.has(currentSum)) {
            sums.add(currentSum);
            currentSum += parseInt(input[index % input.length], 10);
            index++;
        }

        this.logAnswer("Day1", "part2", currentSum);
    }
}
