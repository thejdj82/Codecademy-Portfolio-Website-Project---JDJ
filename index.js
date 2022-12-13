const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const backgroundColor = btn.style.backgroundColor;

  if (backgroundColor === 'salmon') {
    btn.style.backgroundColor = 'green';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    btn.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
});

btn.addEventListener('click', function onClick(event) {
  const backgroundColor = document.body.style.backgroundColor;

  if (backgroundColor === 'white') {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';

  } else {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"; 
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
  }
});
