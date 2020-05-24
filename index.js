const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const body = document.querySelector('body');
  const start = document.querySelector('button[data-action="start"]');
  const stop = document.querySelector('button[data-action="stop"]');
  let intervalId;

  const randomColor = (arr, ind) => {
      let result =  arr[ind];
      return body.style.backgroundColor = `${result}`
  };


  start.addEventListener('click', ev => {
    intervalId = setInterval(() => randomColor(colors, randomIntegerFromInterval(0, 5)), 1000);
    start.disabled = true;
    stop.disabled = false;
  });

  stop.addEventListener('click', ev => {
      clearInterval(intervalId);
      start.disabled = false;
      stop.disabled = true;
  })