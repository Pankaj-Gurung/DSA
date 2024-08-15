// Data Structure
const array = ["Panku", "Jenisha", "Kuro", "Resham", "Sweekar"]

//Algorithm for finding a specific user
const students = ( allStudents, studentName) => {
 for(let i=0; i<allStudents.length; i++ ){
    if(allStudents[i] === studentName){
        console.log(`Found ${studentName}`)
    }
 }
}

students(array, "Resham")