class Cube {

  constructor(N) {
    this.sides = [];
    this.N = N
    for (let i = 0; i < 6; i++) {
      let side = [];
      for (let j = 0; j < N; j++) {
        let line = [];
        for (let k = 0; k < N; k++) {
          line.push(i);
        }
        side.push(line);
      }
      this.sides.push(side);
    }
    
  }


}


let a = 1;
let spawnCube = document.getElementById("SpawnCube")
colors = ["Red", "White", "Blue", "Green", "Yellow", "Orange"]
spawnCube.addEventListener("click", e => {
  let cubeSize = document.getElementById("cubeSize").value
  cube = new Cube(cubeSize)
  for (let i = 0; i < 6; i++) {
    let side = document.getElementById("cube_side_" + i);
    side.setAttribute("style",
      "grid-template-columns: repeat(" + cube.N + ", 1fr);    grid-template-rows: repeat(" + cube.N + ", 1fr);"
    )
    for (let j = 0; j < cube.N; j++) {
      for (let k = 0; k < cube.N; k++) {
        let div = document.createElement("div");
        div.style.background = colors[i];
        div.classList.add("color")
        side.appendChild(div);
      }
    }
  }
})
let element = document.getElementById("test");
let chislo = document.getElementById("chislo");
let F = document.getElementById("F");
let _F = document.getElementById("F'");
let R = document.getElementById("R");
let _R = document.getElementById("R'");
let U = document.getElementById("U");
let _U = document.getElementById("U'");
let B = document.getElementById("B");
let _B = document.getElementById("B'");
let L = document.getElementById("L");
let _L = document.getElementById("L'");
let D = document.getElementById("D");
let _D = document.getElementById("D'");

F.addEventListener("click", (e) => {

});
_F.addEventListener("click", (e) => { });
R.addEventListener("click", (e) => { });
_R.addEventListener("click", (e) => { });
U.addEventListener("click", (e) => { });
_U.addEventListener("click", (e) => { });
B.addEventListener("click", (e) => { });
_B.addEventListener("click", (e) => { });
L.addEventListener("click", (e) => { });
_L.addEventListener("click", (e) => { });
D.addEventListener("click", (e) => {
  alert("1");
});
_D.addEventListener("click", (e) => {
  alert("asd");
});


