function discountPrices(prices,discount){
    const discounted = [];
    const length = prices.length;

    for (let i=0; i<length; i++){
        const discountedPrice = prices[i] * (1-discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }
    //console.log(i);
    console.log(length);
    //console.log(discountedPrice);
    //console.log(finalPrice);

    console.log(discounted)

    return discounted;


}

//discountPrices([100,200,300],0.5)
let test = {
    ree: function() { console.log("hi");},
    course: [0,1,2]

}

test.ree()
console.log(test.course[0])