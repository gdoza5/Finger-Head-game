/*----- constants -----*/

console.log('Muffins')







/*----- app's state (variables) -----*/

// let = plyDirct, compDirct,







/*----- cached element references -----*/










/*----- event listeners -----*/


// let plyrInpt = document.addEventListener('keydown', ) 

document.addEventListener('keydown', function() {
    if(event.code === "ArrowUp"){
    document.getElementById('ply_d').textContent = "YOLO";
    console.log(event.code)
    }
    if(event.code === "ArrowLeft"){
         document.getElementById('ply_d').textContent = "Bamf";
         console.log(event.code);
     };
     if(event.code === "ArrowRight"){
        document.getElementById('ply_d').textContent = "Yuss"
        console.log(event.code)
     }
     if(event.code === "ArrowDown"){
        document.getElementById('ply_d').textContent = "JoJo"
        console.log(event.code)
     }
});

document.addEventListener('keydown', function() {
    if(event.code === "ArrowDown")
    document.getElementById('ad_d').textContent = "helloMeatBag"
    console.log(event.code)

})





/*----- functions -----*/