const ex2 = (item, quant) => {

    const fruits = [
        {id: 1,name:'strawberry',price:2.50,currency:'EUR'},
        {id:2,name:'apple',price:1.80,currency:'EUR'}
    ]
    
    try{
        if(!!!item || !!!quant) throw new Error('Choose something and a quantity')
        const selectedItem = fruits.find(fruit => fruit.id == item)

        if(!selectedItem) throw new Error('Fruit not found')
        
        const totalPrice = ( selectedItem.price ) *  quant 
            return (quant > 8 || totalPrice > 25)  ? (totalPrice)/100*10 : totalPrice
    }catch(err){
        console.error(`Error: ${err}`)
        return 0
    }
}