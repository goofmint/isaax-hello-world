package main

import "fmt"
import "time"

func main() {
  for {
      // ここに無限ループで実行する処理を記述
      fmt.Println("Hello isaax. I'm Go!")
      time.Sleep(5 * time.Second)
  }
}