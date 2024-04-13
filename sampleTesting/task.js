console.log("Start")

// Way First
// function wakeup(){
//     console.log("Wake Up")
//     setTimeout(function brush(){
//         console.log("Brush")
//         setTimeout(function mess(){
//             console.log("Mess")
//             setTimeout(function dress(){
//                 console.log("dress")
//                 setTimeout(function go(){
//                     console.log("Dafa Ho")
//                 }, 4500);
//             }, 1000);
//         },4000)
//     },3000)
// }
// wakeup()

//Way Second
// function wakeup(){
//     setTimeout(() => {
//         console.log("WakeUp")
//         brush()
//     },3000)
// }
// function brush(){
//     setTimeout(() => {
//         console.log("Brush")
//         mess()
//     },4000)
// }
// function mess(){
//     setTimeout(() => {
//         console.log("mess")
//         dress()
//     }, 2000);
// }
// function dress(){
//     setTimeout(() => {
//         console.log("dress")
//         go()
//     },5000)
// }
// function go(){
//     setTimeout(() => {
//         console.log("Dafa ho")
//     },1000)
// }

// wakeup()

//Way Third
// function wakeup(){
//     console.log("WakeUp")
//     setTimeout(brush,3000)
// }
// function brush(){
//     console.log("Brush")
//     setTimeout(mess,4000)
// }
// function mess(){
//     console.log("Mess")
//     setTimeout(dress, 2000);
// }
// function dress(){
//     console.log("dress")
//     setTimeout(go,5000)
// }
// function go(){
//     setTimeout(() => {
//         console.log("Dafa ho")
//     },1000)
// }

// wakeup()


