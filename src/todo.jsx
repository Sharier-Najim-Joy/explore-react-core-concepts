// export default function Todo({task,isFinish}){
//     return(
//         <li>task: {task}</li>
//     )
// }
// export default function Todo({task,isFinish}){
//     if(isFinish===true){
//         return <li>Finish: {task}</li>
//     }
//     return <li>work on: {task}</li>
//     // else{
//     //     return <li>work on: {task}</li>
//     // }
// }

// export default function Todo({task,isFinish}){
//         if(isFinish===true){
//             return null
//         }
//         return <li>work on: {task}</li>
//     }

// ternary condition
// export default function Todo({task,isFinish}){
//     return(
//         <li>{isFinish?'finished':'work on'}: {task}</li>
//     )
// }

// export default function Todo({task,isFinish}){
//     return(
//         <li>{task} {isFinish || ':Do it'}</li>
//     )
// }

export default function Todo({task,isFinish}){
    let listItem;
    if(isFinish===true){
        listItem = <li>Finish: {task}</li>
    }
    else{
        listItem=<li>work on: {task}</li>
    }
    return listItem
}