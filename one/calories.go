package one

import (
	"bufio"
	"fmt"
	"io"
	"strconv"
)

func Solve(in io.Reader) (int64, error) {
	scanner := bufio.NewScanner(in)

	var maxs, cur int64

	for scanner.Scan() {
		s := scanner.Text()

		if s == "" {
			if cur > maxs {
				maxs = cur
			}
			cur = 0
			continue
		}

		n, err := strconv.ParseInt(s, 10, 64)
		if err != nil {
			return 0, fmt.Errorf("failed to parse the line into number: %w", err)
		}
		cur += n
	}

	if err := scanner.Err(); err != nil {
		return 0, err
	}

	if cur > maxs {
		maxs = cur
	}

	return maxs, nil
}
