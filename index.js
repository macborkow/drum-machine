let machine = document.createElement("div");
let display = document.createElement("div");
machine.id = "drum-machine";
display.id = "display";
document.getElementById("root").appendChild(machine);
document.getElementById("drum-machine").appendChild(display);

let drums = [];
const drum_letters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

for (let i = 0; i < 9; ++i) {
  drums[i] = document.createElement("div");
  drums[i].classList.add("drum-pad");
  drums[i].id = `sound-${drum_letters[i]}`;
  drums[i].innerText = drum_letters[i];
  drums[i].appendChild(document.createElement("audio"));
  drums[i].childNodes[1].id = drum_letters[i];
  drums[i].childNodes[1].src = `https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3`;
  drums[i].childNodes[1].classList.add("clip");
  let script = () => {
    drums[i].childNodes[1].play();
    display.innerText = drums[i].id;
  };

  drums[i].addEventListener("click", script);
  document.addEventListener("keypress", (e) => {
    console.log(e.code);
    if ( e.code == `Key${drum_letters[i]}`)
      script();
  });
  console.log(drums[i].childNodes);
  machine.appendChild(drums[i]);
}
