window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

const functionApi = '';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log('website called function api');
      count = respons.count;
      document.getElementById('counter').innerText = count;
    })
    .carch(function (error) {
      console.log(error);
    });
  return count;
};
