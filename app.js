const theRightPrice = (random, number) => {
  const image = document.getElementById('gameImg')
  const textAnnoncer = document.getElementById('text-annoncer')
  const succes = 'Woooooooow big boy !! You win  !!! Chapeau !';
  const less = "Wooopsy, it's less !" ;
  const more = "That's not good, it's more !"

  document.getElementById('rules').style.display = 'none'

  console.log(random)

  if (number < 0 || number > 100) {

    alert("Invalid entry");

  } else {
      if (number < random) {

        console.log('more')
        textAnnoncer.innerHTML = more
        image.src = './img/Character3.png'
        

      } else if (number > random) {

        console.log('less')
        textAnnoncer.innerHTML = less
        image.src = './img/Character3.png'

      } else {

        console.log('succes')
        textAnnoncer.innerHTML = succes
        image.src = './img/Calque 3.png'

      }
  }
};

const randomNumb = Math.floor(Math.random() * 100) + 1;
const gameStartButton = document.getElementById('form')

gameStartButton.addEventListener("submit", (e) => {
  e.preventDefault()
  const playerNumb = document.getElementById('number').value
  theRightPrice(randomNumb, playerNumb)
});
