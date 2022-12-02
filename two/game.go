package two

import (
	"bufio"
	"io"
)

/*
A - 1
B - 2
C - 3

*/

const winScore = 6
const drawScore = 3

func Solve(in io.Reader) (int, error) {
	scanner := bufio.NewScanner(in)

	score := 0

	for scanner.Scan() {
		line := scanner.Text()
		a := line[0] - 'A'
		b := line[2] - 'X'

		score += int(b) + 1

		if a == b {
			score += drawScore
		} else if abs(a, b) == 1 {
			if b > a {
				score += winScore
			}
		} else if b < a {
			score += winScore
		}
	}

	if err := scanner.Err(); err != nil {
		return 0, err
	}

	return score, nil
}

func abs(a, b uint8) int {
	d := int(a) - int(b)
	if d < 0 {
		return -d
	}
	return d
}
