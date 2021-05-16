class Cube {

  constructor(number,N) {
    this.number = number
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
  getHTMLCube(){
    let divCube = document.createElement("div");
    divCube.classList.add("cube")
    let invisibleDivs = []
    for(let i = 0;i<4;i++){
      let invisible = document.createElement("div")
      invisible.classList.add("invisible_side")
      invisibleDivs.push(invisible)
    }
    divCube.appendChild(invisibleDivs[0])
    this.divSides = []
    for(let i = 0;i<6;i++){
      let divSide = document.createElement("div")
      divSide.classList.add("side")
      divSide.setAttribute("style",        "grid-template-columns: repeat(" + cube.N + ", 1fr);    grid-template-rows: repeat(" + cube.N + ", 1fr);")
      for (let j = 0; j < cube.N; j++) {
        for (let k = 0; k < cube.N; k++) {
          let div = document.createElement("div");
          div.style.background = colors[i];
          div.classList.add("color")
          divSide.appendChild(div);
        }
      }
      divSide.id = "cube"+this.number+"_side_"+i
      this.divSides.push(divSide)
    }
    divCube.appendChild(this.divSides[0])
    divCube.appendChild(invisibleDivs[1])
    divCube.appendChild(invisibleDivs[2])
    for(let i = 1;i<5;i++)
    divCube.appendChild(this.divSides[i])
    divCube.appendChild(invisibleDivs[3])
    divCube.appendChild(this.divSides[5])
    return divCube
  }
  getHTMLButtons(){  //Создаем кнопки поворота сторон кубика N * N
  let btns = document.createElement("div")
  let row1 = document.createElement("div")
  let row2 = document.createElement("div")
  btns.appendChild(row1)
  btns.appendChild(row2)
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < Math.floor(this.N / 2); i++) {
      let button = document.createElement("button");
      button.addEventListener("click", (e) => { this.rotate(j, false, i) })
      button.classList.add("button")
      button.textContent = (i + 1) + letters[j];
      row1.appendChild(button)
    }

  }
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < Math.floor(this.N / 2); i++) {
      let button = document.createElement("button");
      button.addEventListener("click", (e) => { this.rotate(j, true, i) })
      button.classList.add("button")
      button.textContent = (i + 1) + letters[j] + "'";
      row2.appendChild(button)
    }
  }
  return btns
  }

  visualize() {
    for (let i = 0; i < 6; i++) {
      let side = this.divSides[i];
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

class Solver{
  constructor(){
    this.bestMoves = []
    this.solved = false
    this.moves = []
  }
  solveOneSide(cubes,side,maxMoves) {
    this.cubes = cubes
    this.cube = cubes[0]
    this.side = side
    let valuesMove = [] 
    let i = 0
    while (i < maxMoves && !this.solved) {
      i++
      for (let j = 0; !this.solved && j < 6; j++) {
        for (let i = 0; i < !this.solved && Math.floor(this.cube.N / 2); i++) {
          valuesMove.push(this.checkMove(j,true,i))
          valuesMove.push(this.checkMove(j,false,i)) 
        }
      }
      let bestMove = this.moves[this.indexOfMax(valuesMove)]//берем самый ценный поворот
      this.bestMoves.push(bestMove)
      this.cubes.forEach(curCube => {
        curCube.rotate(bestMove[0], bestMove[1], bestMove[2])
      });
      valuesMove = []
      this.moves = []
    }
    
    if(this.solved){
      alert((+side + 1)+" сторона собрана за " + i + " поворотов")
    }else{
      alert("Мы не смогли собрать "+(+side + 1)+" сторону за "+maxMoves+" поворотов :(")
    }
    this.cube.visualize()
  }
  checkMove(j,inverted,i){
    let move = [j,inverted,i]           //запоминаем поворот
    this.moves.push(move)
    this.cubes.forEach(curCube => {
        curCube.rotate(j, inverted, i)
      });
    let values = this.checkSide() //вычисляем ценность поворота
    this.solved = true
    values.forEach(value=>{
        if (value != this.cube.N * this.cube.N) {//проверка собранности
          this.solved = false
        }
      })
    this.cubes.forEach(curCube => {//поварачиваем обратно после проверки
      curCube.rotate(j, !inverted, i)
    });
    return values
  }
  indexOfMax(arr) {
    if (arr.length === 0) {
      return -1;
    }
    var max = arr[0];
    var maxIndex = 0;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }
    return maxIndex;
  }

  checkSide(){
    let colorsValues = []
    this.cubes.forEach(curCube => {//проверить собрана ли хотя бы одна сторона у одного куба
      let colorsValue = [0,0,0,0,0,0]
      for(let i = 0; i< this.cube.N;i++){
        for(let j = 0;j< this.cube.N;j++){
           colorsValue[curCube.sides[this.side][i][j]]++
        }
      }
      colorsValues.push(Math.max.apply(null,colorsValue))
    });
    return colorsValues
  }
}
let a = 1;
let spawnCube = document.getElementById("SpawnCube")
colors = ["White", "Orange", "Green", "Red", "Blue", "Yellow"]
letters = ["U", "L", "F", "R", "B", "D"]
spawnCube.addEventListener("click", e => {
  let cubeSize = document.getElementById("cubeSize").value
  let cubeNumber = document.getElementById("cubeNumber").value
  document.getElementById("settingsID").hidden = true
  document.getElementById("solutionSettings").hidden = false
  let cubes = []
  for(let i = 0;i<cubeNumber;i++){
  cube = new Cube( 0, cubeSize)  
  cubes.push(cube)
  let cubeCard = document.createElement("div")
  document.getElementById("cubes").appendChild(cubeCard)
  cubeCard.appendChild(cube.getHTMLCube())
  cubeCard.appendChild(cube.getHTMLButtons())
  }
  document.getElementById("solve").addEventListener("click", (e) => { 
    let maxMoves = document.getElementById("maxMoves").value
    let side = document.getElementById("sideToSolve").value
    solver = new Solver()
    solver.solveOneSide(cubes,side,maxMoves)
  })
  
})




