package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/mike1808/adventofcode2022/one"
	"github.com/mike1808/adventofcode2022/two"
)

var dayFlag = flag.String("day", "one", "which day")
var inputFlag = flag.String("input", "", "path to the input")

func main() {
	flag.Parse()

	in, err := os.Open(*inputFlag)
	if err != nil {
		log.Fatalf("failed to open the input file: %v", err)
	}

	var ans interface{}

	start := time.Now()

	switch *dayFlag {
	case one.Day:
		ans, err = one.Solve(in)
	case two.Day:
		ans, err = two.Solve(in)
	}

	elapsed := time.Now().Sub(start)

	if err != nil {
		log.Fatalf("got error while solving: %v", err)
	}

	fmt.Println(ans)

	log.Printf("took: %dns", elapsed.Nanoseconds())
}
