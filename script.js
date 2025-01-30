//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  const inputValue = Number(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  function delay(value, time) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), time);
    });
  }

  delay(inputValue, 2000)
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(num * 2, 1000);
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(num - 3, 1000);
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(num / 2, 1000);
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(num + 10, 1000);
    })
    .then((num) => {
      outputDiv.textContent = `Final Result: ${num}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
});
