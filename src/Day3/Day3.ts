import { AdventOfCodeDay } from "../AdventOfCodeDay";
import { Claim } from "./Claim";

export class Day3 extends AdventOfCodeDay {
    constructor() {
        super();
        this.dayNumber = 3;
    }

    public part1(): void {
        const input: string[] = this.getInput();

        // Create a GIANT 2D array. The problem stated we needed at least 1000, so I used 10000 just in case
        const fabric: number[][] = Array(10000).fill(0).map(() => Array(10000).fill(0));

        for (const claimStr of input) {
            const claim = new Claim(claimStr);

            // Iterate through where the claim would be on the fabric and increment the fabric square inches
            for (let i = 0; i < claim.width; i++) {
                for (let j = 0; j < claim.height; j++) {
                    fabric[i + claim.x][j + claim.y]++;
                }
            }
        }

        // loop through the fabric and count the square inches that have 2 or more
        let overlappingSquares = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < fabric.length; i++) {
            for (let j = 0; j < fabric.length; j++) {
                if (fabric[i][j] >= 2) {
                    overlappingSquares++;
                }
            }
        }

        this.logAnswer("part1", overlappingSquares);
    }

    public part2(): void {
        const input: string[] = this.getInput();

        // Create a GIANT 2D array. The problem stated we needed at least 1000, so I used 10000 just in case.
        // it's filled with -1 because -1 is not a valid id.
        const fabric: number[][] = Array(10000).fill(-1).map(() => Array(10000).fill(-1));

        // This set in the end will contain the only item that is the free claim (aka answer)
        const freeClaims = new Set<number>();

        for (const claimStr of input) {
            const claim = new Claim(claimStr);

            // we add the new claim to the HashSet assuming it's free
            freeClaims.add(claim.id);

            // we iterate over the claim
            for (let i = 0; i < claim.width; i++) {
                for (let j = 0; j < claim.height; j++) {

                    // If the current square inch contains a claim already, remove it from the freeClaims
                    // Also, this means the the current claim is overlapping so we remove that too
                    const current = fabric[i + claim.x][j + claim.y];
                    if (current !== -1) {
                        if (freeClaims.has(current)) {
                            freeClaims.delete(current);
                        }
                        if (freeClaims.has(claim.id)) {
                            freeClaims.delete(claim.id);
                        }
                    }

                    // we set the current square innch to the claim id
                    // so that we know who to remove if there's an overlap
                    fabric[i + claim.x][j + claim.y] = claim.id;
                }
            }
        }

        this.logAnswer("part2", freeClaims.values().next().value);
    }
}
