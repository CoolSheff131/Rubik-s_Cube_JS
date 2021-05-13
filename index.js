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
  rotate(side, inverted, row) {
    let h = this.N - row - 1
    let temp = []
    
    if (row == 0) {
      let sideTemp = []
      for (let i = 0; i < this.N; i++) {
        let rowTemp = []
        for (let j = 0; j < this.N; j++) {
          rowTemp.push(this.sides[side][i][j])
        }
        sideTemp.push(rowTemp)
      }
      for (let i = 0; i < this.N; i++) {
        for (let j = 0; j < this.N; j++) {
          this.sides[side][i][j] = sideTemp[this.N - 1 - j][i]
          console.log("side = " + (this.N - 1 - j) + " " + i + " " + sideTemp[this.N - 1 - j][i])
        }
      }
    }

    if (side == 0) {
      if (!inverted) {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[1][row][i])
        for (let i = 0; i < this.N; i++) this.sides[1][row][i] = this.sides[2][row][i]
        for (let i = 0; i < this.N; i++) this.sides[2][row][i] = this.sides[3][row][i]
        for (let i = 0; i < this.N; i++) this.sides[3][row][i] = this.sides[4][row][i]
        for (let i = 0; i < this.N; i++) this.sides[4][row][i] = temp[i]
      } else {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[1][row][i])
        for (let i = 0; i < this.N; i++) this.sides[1][row][i] = this.sides[4][row][i]
        for (let i = 0; i < this.N; i++) this.sides[4][row][i] = this.sides[3][row][i]
        for (let i = 0; i < this.N; i++) this.sides[3][row][i] = this.sides[2][row][i]
        for (let i = 0; i < this.N; i++) this.sides[2][row][i] = temp[i]
      }
    } else if (side == 1) {
      if (!inverted) {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[4][i][h])
        for (let i = 0; i < this.N; i++) this.sides[4][i][h] = this.sides[5][i][row]
        for (let i = 0; i < this.N; i++) this.sides[5][i][row] = this.sides[2][i][row]
        for (let i = 0; i < this.N; i++) this.sides[2][i][row] = this.sides[0][i][row]
        for (let i = 0; i < this.N; i++) this.sides[0][i][row] = temp[i]
      } else {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[4][i][h])
        for (let i = 0; i < this.N; i++) this.sides[4][i][h] = this.sides[0][i][row]
        for (let i = 0; i < this.N; i++) this.sides[0][i][row] = this.sides[2][i][row]
        for (let i = 0; i < this.N; i++) this.sides[2][i][row] = this.sides[5][i][row]
        for (let i = 0; i < this.N; i++) this.sides[5][i][row] = temp[i]
      }
    } else if (side == 2) {
      if (!inverted) {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[1][i][h])
        for (let i = 0; i < this.N; i++) this.sides[1][i][h] = this.sides[5][row][i]
        for (let i = 0; i < this.N; i++) this.sides[5][row][i] = this.sides[3][i][row]
        for (let i = 0; i < this.N; i++) this.sides[3][i][row] = this.sides[0][h][i]
        for (let i = 0; i < this.N; i++) this.sides[0][h][i] = temp[i]
      } else {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[1][i][h])
        for (let i = 0; i < this.N; i++) this.sides[1][i][h] = this.sides[0][h][i]
        for (let i = 0; i < this.N; i++) this.sides[0][h][i] = this.sides[3][i][row]
        for (let i = 0; i < this.N; i++) this.sides[3][i][row] = this.sides[5][row][i]
        for (let i = 0; i < this.N; i++) this.sides[5][row][i] = temp[i]
      }
    } else if (side == 3) {
      if (!inverted) {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[2][i][h])
        for (let i = 0; i < this.N; i++) this.sides[2][i][h] = this.sides[5][i][h]
        for (let i = 0; i < this.N; i++) this.sides[5][i][h] = this.sides[4][i][row]
        for (let i = 0; i < this.N; i++) this.sides[4][i][row] = this.sides[0][i][h]
        for (let i = 0; i < this.N; i++) this.sides[0][i][h] = temp[i]
      } else {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[2][i][h])
        for (let i = 0; i < this.N; i++) this.sides[2][i][h] = this.sides[0][i][h]
        for (let i = 0; i < this.N; i++) this.sides[0][i][h] = this.sides[4][i][row]
        for (let i = 0; i < this.N; i++) this.sides[4][i][row] = this.sides[5][i][h]
        for (let i = 0; i < this.N; i++) this.sides[5][i][h] = temp[i]
      }
    } else if (side == 4) {
      if (!inverted) {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[0][row][i])
        for (let i = 0; i < this.N; i++) this.sides[0][row][i] = this.sides[3][i][h]
        for (let i = 0; i < this.N; i++) this.sides[3][i][h] = this.sides[5][h][i]
        for (let i = 0; i < this.N; i++) this.sides[5][h][i] = this.sides[1][i][row]
        for (let i = 0; i < this.N; i++) this.sides[1][i][row] = temp[i]
      } else {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[0][row][i])
        for (let i = 0; i < this.N; i++) this.sides[0][row][i] = this.sides[1][i][row]
        for (let i = 0; i < this.N; i++) this.sides[1][i][row] = this.sides[5][h][i]
        for (let i = 0; i < this.N; i++) this.sides[5][h][i] = this.sides[3][i][h]
        for (let i = 0; i < this.N; i++) this.sides[3][i][h] = temp[i]
      }
    } else if (side == 5) {
      if (!inverted) {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[1][h][i])
        for (let i = 0; i < this.N; i++) this.sides[1][h][i] = this.sides[4][h][i]
        for (let i = 0; i < this.N; i++) this.sides[4][h][i] = this.sides[3][h][i]
        for (let i = 0; i < this.N; i++) this.sides[3][h][i] = this.sides[2][h][i]
        for (let i = 0; i < this.N; i++) this.sides[2][h][i] = temp[i]
      } else {
        for (let i = 0; i < this.N; i++) temp.push(this.sides[1][h][i])
        for (let i = 0; i < this.N; i++) this.sides[1][h][i] = this.sides[2][h][i]
        for (let i = 0; i < this.N; i++) this.sides[2][h][i] = this.sides[3][h][i]
        for (let i = 0; i < this.N; i++) this.sides[3][h][i] = this.sides[4][h][i]
        for (let i = 0; i < this.N; i++) this.sides[4][h][i] = temp[i]
      }
    }
    //this.printCube()
    this.visualize()
  }
  printCube() {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < this.N; j++) {
        var combinedString = ""
        for (let k = 0; k < this.N; k++) {
          combinedString = combinedString + " " + this.sides[i][j][k]
        }
        console.log(combinedString)
      }
    }
  }
  visualize() {
    for (let i = 0; i < 6; i++) {
      let side = document.getElementById("cube_side_" + i);
      let m = 0
      for (let j = 0; j < cube.N; j++) {
        for (let k = 0; k < cube.N; k++) {
          side.children[m].style.background = colors[this.sides[i][j][k]]
          m = m + 1
        }
      }
    }

  }
}


let a = 1;
let spawnCube = document.getElementById("SpawnCube")
colors = ["White", "Orange", "Green", "Red", "Blue", "Yellow"]
letters = ["U", "L", "F", "R", "B", "D"]
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
  //СТАВИМ КНОПКИ
  let btns = document.getElementById("rotateBtns")
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < Math.floor(cube.N / 2); i++) {
      let button = document.createElement("button");
      button.addEventListener("click", (e) => { cube.rotate(j, false, i) })
      button.textContent = (i + 1) + letters[j];
      btns.appendChild(button)
    }

  }
  let btnsInverted = document.getElementById("rotateBtnsInverted")
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < Math.floor(cube.N / 2); i++) {
      let button = document.createElement("button");
      button.addEventListener("click", (e) => { cube.rotate(j, true, i) })
      button.textContent = (i + 1) + letters[j] + "'";
      btnsInverted.appendChild(button)
    }
  }
})
let element = document.getElementById("test");
let chislo = document.getElementById("chislo");



