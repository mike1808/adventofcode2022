package two_test

import (
	"strings"
	"testing"

	"github.com/mike1808/adventofcode2022/two"
	"github.com/stretchr/testify/assert"
)

var input = `A Y
B X
C Z
`

func TestSolve(t *testing.T) {
	in := strings.NewReader(input)

	ans, err := two.Solve(in)
	assert.NoError(t, err)

	assert.EqualValues(t, 15, ans)
}
