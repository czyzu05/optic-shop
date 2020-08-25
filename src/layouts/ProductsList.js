import React from 'react'

fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&q=sunglasses&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "asos2.p.rapidapi.com",
        "x-rapidapi-key": "326e8e7414mshd51a15891865252p1030ffjsnf86624255eb1"
    }
})
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

const ProductsList = () => {



    return (
        <div>product</div>
    )
}

export default ProductsList