class Cube{
    constructor(N){
        let sides = [];

        for (let i = 0; i < N; i++) { 
            let arr = [[]]
            for (let j = 0; j < N; j++) { 
                arr[i][j] = i
            }
            sides.push(arr)
        }

    }
}
let a = 1
let element = document.getElementById("test")
let chislo = document.getElementById("chislo")
element.addEventListener("click", e=>{
    chislo.innerHTML = a
    a++;
});