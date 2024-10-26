const checkGrades = (g1,g2,g3, ava ) => {
    try{
        if(!!!g1 || !!!g2 || !!!g3 || !!!ava){
            throw new Error('All values are mandatory to use the function!')
        }
        [g1,g2,g3, ava].forEach(grade => {
            if(typeof grade != 'number'){
                 throw new Error('All grades must be numbers!')
            }
        })

        return( g1+(g2*2)+(g3*3)+ava)/7
    }catch(err){
        console.error({err})
    }
    
}