const ex1 = (firstMan, secondMan, firstWoman, secondWoman) => {
    
    try{ 
        if(!!firstMan && !!secondMan && !!firstWoman && !!secondMan){
            [firstMan, secondMan, firstWoman, secondWoman].forEach(age => {
                if(typeof age != 'number') throw new Error('All values must be numbers')
            })
            if(firstMan === secondMan) throw new Error('Males ages must be the different')
            if(firstWoman === secondWoman) throw new Error('Female ages must be different ')

            return {
                sum: (Math.max(firstMan, secondMan))+(Math.min(firstWoman, secondWoman)),
                product: (Math.max(firstWoman, secondWoman))*(Math.min(firstMan, secondMan)),
            }
            
        }else{
            throw new Error('Values are mandatory to use function')
        }
    
    }catch(err){
        console.error(`Error: ${err}`)
    }
}