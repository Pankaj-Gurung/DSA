//data structure
const array = ["milk", "bread", "eggs", "flour", "cheese", "sugar"]


//O(n)
const findGrocery = (item) => {
    for(i=0; i<array.length;i++){
        if(array[i] === item){
            console.log(`${item}`)
        }
    }


    //noramlly, it would be n + n = 2n so it should be O(2n) but there can never be O(2n), this will also be O(n)
    for(j=0; j<array.length;j++){
        if(array[j] === item){
            console.log(`${item} 2`)
        }
    }
}

findGrocery('eggs')