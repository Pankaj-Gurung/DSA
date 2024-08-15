// const array = [1,2,3,4,5]

// const maxnumber = () =>{
//     for(i=0; i<array.length; i++){
//         if(array<i){
//             i++
//         }
//         else{
//             console.log(`$maxNum`)
//         }
//     }
// }
// maxnumber(array)

const array = [1,2,3,4,5]

const maxNumber = () => {
    let maxNum = array[0]
    for(let i=0; i<array.length;i++){
        if(array[i]>maxNum){
            maxNum = array[i]
        }
    }
    console.log(`${maxNum}`)
}

maxNumber(array)

