/*----- constants -----*/

console.log('Muffins')







/*----- app's state (variables) -----*/

// let = plyDirct, compDirct,







/*----- cached element references -----*/










/*----- event listeners -----*/


// document.addEventListener('keydown', function() {
    
//     document.getElementById('ply_d').textContent = "YOLO"
//     console.log(event.code)

// })

document.addEventListener('keydown', function() {
    if(event.code === "ArrowUp"){
    document.getElementById('ply_d').textContent = "YOLO"
    console.log(event.code)
    }

})

document.addEventListener('keydown', function() {
    if(event.code === "ArrowDown")
    document.getElementById('ad_d').textContent = "helloMeatBag"
    console.log(event.code)

})





/*----- functions -----*/