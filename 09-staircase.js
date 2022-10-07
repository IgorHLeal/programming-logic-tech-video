function staircase(n) {
  let array = [];
  for (let index = 0; index < n; index += 1) {
    array.push(" ".repeat(n - index - 1) + '#'.repeat(index + 1))
  } for (const entry of array) {
    console.log(entry);
  }
}

staircase(5);

// ---------------- REFERÊNCIAS -----------------

// repeat: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// https://pt.stackoverflow.com/questions/384290/escada-javascript