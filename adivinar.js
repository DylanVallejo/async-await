
const enterNumber = () =>{
    return new Promise((resolve, reject) =>{
        const userNumber  = Number(window.prompt("Enter a number between (1 - 6): "));
        const randomNumber = Math.floor(Math.random() * 6 +1 )
                
        if (isNaN(userNumber)){
            reject (new Error("EL tipo del dato es in correcto"))
        }
        if (userNumber === randomNumber){
            resolve({
                points: 2,
                randomNumber,
            })
            
        }else if (
            userNumber === randomNumber - 1 ||
            userNumber === randomNumber + 1
        ){
            resolve({
                points: 1,
                randomNumber,
            });
        }else {
            resolve({
                points: 0,
                randomNumber,
            });
        }
    })
}

const continueGame = () =>{
    return new Promise ((resolve,)=>{
        if(window.confirm("Do you want to play again?")){
            resolve(true);
        }else {
            resolve(false)
        }
    })
}


const handleGuess = async () => {
    
    try {
        const result = await enterNumber();
        alert(`dice ${result.randomNumber}: you got ${result.points} points`)
        
        const isContinuing = await continueGame();
        
        if(isContinuing){
            handleGuess();
        }else{
            alert("Game Ends");
        }
    } catch(error){
        alert(error)
    }
}


const start = () => {
    handleGuess();
}
start();





// const handleGuess = () =>{
//     enterNumber().then((result)=>{
//         alert(`dice ${result.randomNumber}: you got ${result.points} points`)
//         continueGame().then((result)=>{
//             if (result){
//                 handleGuess();
//             }else {
//                 alert("Game Ends");
//             }
//         })
//     })
//     .catch((error) => alert(error))
// }