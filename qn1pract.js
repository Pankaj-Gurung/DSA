const array = ["Panku", "Jenisha", "Paljor", "Samrat", "Sushant"]

const student = (allStudents, studentName) => {
    for(let i=0; i<allStudents.length; i++){
        if(allStudents[i] === studentName){
            console.log(`${studentName}`)
        }
    }
}

student(array, 'Panku')