package one_test

import (
	"strings"
	"testing"

	"github.com/mike1808/adventofcode2022/one"
	"github.com/stretchr/testify/assert"
)

var input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

func TestSolve(t *testing.T) {
	in := strings.NewReader(input)

	ans, err := one.Solve(in)
	assert.NoError(t, err)

	assert.EqualValues(t, 24000, ans)
}
