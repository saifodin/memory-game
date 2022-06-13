
let
  gameBlocks = document.querySelector(".memory-games-blcoks"),
  blocks = Array.from(gameBlocks.children),
  shuffleArray = creat_Shuffle_Array(blocks.length),
  triesCount = document.querySelector(".tries span ")
  ;


document.querySelector(".start span").onclick = () => {
  //  document.querySelector(".name span").textContent = prompt("What's Your Name?")
  document.querySelector(".start").remove();

  blocks.forEach(block => {
    block.classList.add("flipped");
    setTimeout(() => {
      block.classList.remove("flipped");
    }, 1500);
  });

};



blocks.forEach((block, index) => {

  block.style.order = shuffleArray[index]

  block.addEventListener('click', () => {
    flipped(block)
  })
});


//////////////////////////

function cout(print) {
  console.log(print);
}



function creat_Shuffle_Array(length) {

  let mySet = new Set();
  while (mySet.size != length) {

    let random = Math.floor(Math.random() * length);
    mySet.add(random);
  }
  return Array.from(mySet);
};



function flipped(select) {

  select.classList.add("flipped")
  let allFlipped = blocks.filter(x => x.classList.contains('flipped'))
  if (allFlipped.length === 2) {

    gameBlocks.style.pointerEvents = "none";
    setTimeout(() => {
      gameBlocks.style.pointerEvents = "auto"
    }, 500);
  }

  CheckMathch(allFlipped[0], allFlipped[1]);


}


function CheckMathch(first, second) {

  if (first.dataset.name == second.dataset.name) {

    first.classList.remove('flipped');
    second.classList.remove('flipped');

    first.classList.add('hold-flipped');
    second.classList.add('hold-flipped');
  } else {

    triesCount.textContent = Number(triesCount.textContent) + 1;
    setTimeout(() => {
      first.classList.remove('flipped');
      second.classList.remove('flipped');
    }, 500);
  }
}





