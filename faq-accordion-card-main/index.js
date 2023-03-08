const divider = document.querySelectorAll('.divider');
const arrow = document.querySelectorAll('.arrow');

divider.forEach((x) => {
  x.addEventListener('click', function() {
    divider.forEach((z) => {
      if(z.classList.contains('active') && z.classList[1] !== x.classList[1]) {
        z.classList.remove('active');
      }
    })
    x.classList.toggle('active');
  })
})

console.log(divider);