### Big-O

Big-O is a way to mathematically figure out how efficient the code is. Big-O always refers to calculations done as per the worst case scenario.

### Time Complexity

Time required by an algorithm to run when given input `n`.

### Space Complexity

Space required by an algorithm to run including the input values.

### O(n)

Takes `n` number of time to finish algorithm, where `n` is the length of input.

e.g.

```
function log(n) {
  for(let i = 0; i < n; i++) {
    console.log(i)
  }
}

log(10) // Outputs 0 to 9
```

Takes `n` time to finish

```
function log(n) {
  for(let i = 0; i < n; i++) {
    console.log(i)
  }

  for(let i = 0; i < n; i++) {
    console.log(i)
  }
}

log(10) // Outputs 0 to 9 twice
```

Takes `n` + `n` times to finish. Complexity here would be `O(2n)`, but constant2 here is a constant, and constants are ignored in Big-O hence the complexity is `O(n)`. [Why are these constants ignored?](https://stackoverflow.com/questions/22188851/why-is-the-constant-always-dropped-from-big-o-analysis)

### O(n²)

Takes `n*n` time to finish the code.

e.g.

```
function log(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}

log(10)

// Outputs from 0 0, 0 1, ... to 9 9
```

Took 10\*10 = 100 times to finish. Hence `n²`

### O(1)

Time taken is constant no matter how big the input is.

e.g.

```
function add(n) {
  return n * ((n + 1) / 2);
}
```

No matter the input, the function above will always take constant time to finish.

### O(log n)

Also known as divide and conquer. Logarithm is the number a number needs to be raised to, to get another number.

e.g.

Consider the number 8

```
aⁿ = 8
```

Where `a` will be 2 unless spicified otherwise.

```
2ⁿ = 8
```

```
Log₂8 = n
```

```
2 * 2 * 2 = 8

i.e Log₂8 = 3

i.e. 2³ = 8
```

e.g.

```
function logn(n) {
  while(n > 1) {
    console.log(n)
    n = Math.floor(n / 2)
  }
  if(n === 1) {
    console.log('Finished')
  }
}

logn(8)

Logs
8 4 2 'Finished'

Log₂8 = 3
i.e. 2³ = 8

```

Total iterations taken by the function = 3
Hence the solution is O(log n)

### [Big-O Cheatsheet](https://www.bigocheatsheet.com/)
