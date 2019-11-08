/*----- constants -----*/
let playerInput = null
const game ={
    rounds: [1],
    playerInput: null,
    compInput: "not",
    rando: function(max){return Math.floor(Math.random() * Math.floor(max));},
    compWins: [1],
    playerWins: [1],
    
    compChoice: function(){
        let aDInput = game.rando(4);
        if(aDInput === 3){
                if(this.rounds.length % 2=== 1){
                    console.log('3c')
                     document.getElementById('ad_d').innerHTML ='<img src="assets/face looking left.jpeg" width="210" height="120">'
                    // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
                }
                else if(this.rounds.length % 2=== 0){
                    console.log('3c')
                    document.getElementById('ad_d').innerHTML ='<img src="assets/left point.jpeg" width="210" height="120">'
                }
            this.compInput = aDInput;
            return aDInput
            }
        if(aDInput === 1){
            if(this.rounds.length % 2=== 1){
                console.log('1c')
                 document.getElementById('ad_d').innerHTML ='<img src="assets/face looking to the right.jpeg" width="210" height="120">'
                // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
            }
            else if(this.rounds.length % 2=== 0){
                console.log('1c')
                document.getElementById('ad_d').innerHTML ='<img src="assets/download.png" width="210" height="120">'
            }
            this.compInput = aDInput;
                 return aDInput
            }
        if(aDInput === 0){
            if(this.rounds.length % 2=== 1){
                console.log('0c')
                 document.getElementById('ad_d').innerHTML ='<img src="assets/face looking up.jpeg" width="210" height="120">'
                // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
            }
            else if(this.rounds.length % 2=== 0){
                console.log('0c')
                document.getElementById('ad_d').innerHTML ='<img src="assets/finger point up.jpeg" width="210" height="120">'
            }
            this.compInput = aDInput;
                 return aDInput
            }
        if(aDInput === 2){
            if(this.rounds.length % 2=== 1){
                console.log('2c')
                 document.getElementById('ad_d').innerHTML ='<img src="assets/face looking down.jpeg" width="210" height="120">'
                // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
            }
            else if(this.rounds.length % 2=== 0){
                console.log('2c')
                document.getElementById('ad_d').innerHTML ='<img src="assets/finger point down.png" width="210" height="120">'
            }
            this.compInput = aDInput;
                 return aDInput
            }
           
        },
        
     playerChoice: function(){
        
        if(playerInput === "ArrowUp"){
            if(this.rounds.length % 2=== 0){
                console.log('0p')
                 document.getElementById('ply_d').innerHTML ='<img src="assets/face looking up.jpeg" width="210" height="120">'
                // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
            }
            else if(this.rounds.length % 2=== 1){
                console.log('0p')
                document.getElementById('ply_d').innerHTML ='<img src="assets/finger point up.jpeg" width="210" height="120">'
            }
            this.playerInput = 0;
            game.compChoice();
            return 0;
        } if(playerInput === "ArrowRight"){
            if(this.rounds.length % 2=== 0){
                console.log('1p')
                 document.getElementById('ply_d').innerHTML ='<img src="assets/face looking to the right.jpeg" width="210" height="120">'
                // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
            }
            else if(this.rounds.length % 2=== 1){
                console.log('1p')
                document.getElementById('ply_d').innerHTML ='<img src="assets/download.png" width="210" height="120">'
            }
            this.playerInput = 1;
            game.compChoice();
            return 1;
        } if(playerInput === "ArrowDown"){
            if(this.rounds.length % 2=== 0){
                console.log('2p')
                 document.getElementById('ply_d').innerHTML ='<img src="assets/face looking down.jpeg" width="210" height="120">'
                // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
            }
            else if(this.rounds.length % 2=== 1){
                console.log('2p')
                document.getElementById('ply_d').innerHTML ='<img src="assets/finger point down.png" width="210" height="120">'
            }
            this.playerInput = 2;
            game.compChoice();
            return 2;
        } if(playerInput === "ArrowLeft"){
            if(this.rounds.length % 2=== 0){
                console.log('3p')
                 document.getElementById('ply_d').innerHTML ='<img src="assets/face looking left.jpeg" width="210" height="120">'
                // document.getElementById('ad_d').innerHTML ='<h1>Hello</h1>'
            }
            else if(this.rounds.length % 2=== 1){
                console.log('3p')
                document.getElementById('ply_d').innerHTML ='<img src="assets/left point.jpeg" width="210" height="120">'
            }
            this.playerInput = 3;
            game.compChoice();
            return 3;
        }

        
     },


     compare: function(){
         if(this.playerInput === this.compInput && this.rounds.length % 2 === 1 ){
            
            this.playerWins.push(1);
            document.getElementById("play-score").innerText = `Player Score:${game.playerWins.length -1}`;
             return Swal.fire({
                imageUrl: 'assets/Karl_losing.gif',
                imageHeight: 300,
                imageAlt: 'A tall image',
                text: 'You won!(Karl is a sore loser)'
              })
         }
         if(this.playerInput === this.compInput && this.rounds.length % 2 === 0){
            
            this.compWins.push(1);
            document.getElementById("comp-score").innerText = `Karl's Score:${game.compWins.length -1}`;
            return Swal.fire({
                imageUrl: 'assets/Karl_wins.gif',
                imageHeight: 300,
                imageAlt: 'A tall image',
                text: 'Karl won!(he is not a gracious winner)'
              })
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

let playerBoard = document.getElementById("play-score").innerText = `Player Score:${game.playerWins.length -1}`
 let compBoard = document.getElementById("comp-score").innerText = `Comp Score:${game.compWins.length -1}`







/*----- event listeners -----*/
document.addEventListener('keydown', function(event){
    playerInput = event.code;
    if(event.code === "ArrowUp" || event.code === "ArrowDown" || event.code === "ArrowLeft" || event.code === "ArrowRight"){

    game.playerChoice();
    
    game.compare();
    game.rounds.push(1);
    }
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

   
   
   