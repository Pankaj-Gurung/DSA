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

// explaination: The max number initially is the first value in the array and it needs to kept somewhere so, we declare maxNum. We use for loop
// which puts the first number here which is 1 initially and then it checks the lenght, as the lenght is smallar than 5, it continues, then it 
// compares 1 and 2, since 2 is greater than 1, the value in maxNum is updated to 2 and the i now becomes 2, now in the 2 place of array, there is
// number 3, now before checking it checks the lenght, the lenght is still smaller than 5 and so this continues.

