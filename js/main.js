/*----- constants -----*/
let playerInput = null
const game ={
    rounds: [],
    //playerInput: null,
    rando: function(max){return Math.floor(Math.random() * Math.floor(max));},
    hdtrn: function(){},
    finger: function(){

    },
    compChoice: function(){
        let aDInput = game.rando(4);
        if(aDInput === 3){
            document.getElementById('ad_d').textContent = "Bite my shiny metal Axe";
            return aDInput
            }
        if(aDInput === 1){
                 document.getElementById('ad_d').textContent = "no compute";
                 return aDInput
            }
        if(aDInput === 0){
                 document.getElementById('ad_d').textContent = "Yuss";
                 return aDInput
            }
        if(aDInput === 2){
                 document.getElementById('ad_d').textContent = "JoJo";
                 return aDInput
            }
           
        },
        
     playerChoice: function(){
        
        if(playerInput === "ArrowUp"){
            document.getElementById('ply_d').textContent = "Yolo!";
            return 0;
        } if(playerInput === "ArrowRight"){
            document.getElementById('ply_d').textContent = "Dommo Arigato";
            return 1;
        } if(playerInput === "ArrowDown"){
            document.getElementById('ply_d').textContent = "Bizarre Adventure";
            return 2;
        } if(playerInput === "ArrowLeft"){
            document.getElementById('ply_d').textContent = "Hello meatbag";
            return 3;
        }

        
     },
    // gotta figure this function out
    //  play: function(){
    //         this.playerChoice();
    //         this.compChoice();
    //         while(this.playerChoice !== this.compChoice){
    //             this.playerChoice;
    //             this.compChoice;
    //             this.rounds.push(1);
    //         if(this.playerChoice === this.compChoice)
    //         return "win"
    //         }
    // },
};










/*----- app's state (variables) -----*/

// let = plyDirct, compDirct,







/*----- cached element references -----*/










/*----- event listeners -----*/
document.addEventListener('keydown', function(event){
    playerInput = event.code;
});

// let plyrInpt = document.addEventListener('keydown', ) 

//  document.addEventListener('keydown', function(event){
//         if(event.code === "ArrowUp"){
//         document.getElementById('ply_d').textContent = "YOLO";
//         console.log(event.code);
//         return 0;
//         }
//         if(event.code === "ArrowLeft"){
//          document.getElementById('ply_d').textContent = "Bamf";
//          console.log(event.code);
//          return 3;
//         };
//         if(event.code === "ArrowRight"){
//         document.getElementById('ply_d').textContent = "Yuss"
//         console.log(event.code);
//         return 1;
//         }
//          if(event.code === "ArrowDown"){
//         document.getElementById('ply_d').textContent = "JoJo"
//         console.log(event.code);
//         return 2;
//         }
//     });

// document.addEventListener('keydown', function() {
//     if(event.code === "ArrowDown")
//     document.getElementById('ad_d').textContent = "helloMeatBag"
//     console.log(event.code)

// })





/*----- functions -----*/


 function getRandomInt(max) {
     return Math.floor(Math.random() * Math.floor(max));
   }
    let aDInput = getRandomInt(4);

function aDChoice(aDInput){
       if(aDInput === 3){
           return document.getElementById('ad_d').textContent = "Bite my shiny metal Axe"
       }
      if(aDInput === 1){
          return document.getElementById('ad_d').textContent = "no compute";
        
      }
      if(aDInput === 0){
         return document.getElementById('ad_d').textContent = "Yuss"
       
      }
     if(aDInput === 2){
         return document.getElementById('ad_d').textContent = "JoJo"
       
      }
   }

   console.log(aDInput)

   
   