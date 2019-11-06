/*----- constants -----*/
let playerInput = null
const game ={
    rounds: [1],
    //playerInput: null,
    rando: function(max){return Math.floor(Math.random() * Math.floor(max));},
    hdtrn: function(){
        if(this.rounds.length % 2 === 0 ){
        game.compChoice();
        game.playerChoice();
        game.rounds.push(1);
        game.compare();
        
        
        }
    },
    finger: function(){
        if(this.rounds.length % 2 === 1 ){
            game.compChoice();
            game.playerChoice();
            game.rounds.push(1);
            game.compare();
            
        }

    },
    compChoice: function(){
        let aDInput = game.rando(4);
        if(aDInput === 3){
                if(this.rounds.length % 2=== 1){
                    console.log("face1")
                     document.getElementById('ad_d').innerHTML ='<img src="assets/face looking left.jpeg" width="213" height="127">'
                    // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
                }
                else if(this.rounds.length % 2=== 0){
                    console.log("face2")
                    document.getElementById('ad_d').innerHTML ='<img src="assets/left point.jpeg" width="250" height="200">'
                }
            // document.getElementById('ad_d').textContent = "Bite my shiny metal Axe";
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
            game.compChoice();
            return 0;
        } if(playerInput === "ArrowRight"){
            document.getElementById('ply_d').textContent = "Dommo Arigato";
            game.compChoice();
            return 1;
        } if(playerInput === "ArrowDown"){
            document.getElementById('ply_d').textContent = "Bizarre Adventure";
            game.compChoice();
            return 2;
        } if(playerInput === "ArrowLeft"){
            document.getElementById('ply_d').textContent = "Hello meatbag";
            game.compChoice();
            return 3;
        }

        
     },


     compare: function(){
         if(this.playerChoice() === this.compChoice() && this.rounds.length % 2 === 1){
             return window.alert('You Win!')
         }
         if(this.playerChoice() === this.compChoice() && this.rounds.length % 2 === 0){
            return window.alert('You Lose, MeatBag!')
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
    game.playerChoice();
    game.compare();
    game.rounds.push(1);
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


//  function getRandomInt(max) {
//      return Math.floor(Math.random() * Math.floor(max));
//    }
//     let aDInput = getRandomInt(4);

// function aDChoice(aDInput){
//        if(aDInput === 3){
//            return document.getElementById('ad_d').textContent = "Bite my shiny metal Axe"
//        }
//       if(aDInput === 1){
//           return document.getElementById('ad_d').textContent = "no compute";
        
//       }
//       if(aDInput === 0){
//          return document.getElementById('ad_d').textContent = "Yuss"
       
//       }
//      if(aDInput === 2){
//          return document.getElementById('ad_d').textContent = "JoJo"
       
//       }
//    }

   
   
   