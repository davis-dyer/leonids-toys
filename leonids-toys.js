// Creating Toys as Objects

const toys = [
    {
        id: 00001,
        name: 'grabber',
        sellingPrice: 9.99,
        tax: 0.07,
        inventory: 100,
        description: 'metal claw with a pulley to grab things'
    },
    {
        id: 00002,
        name: 'hover board',
        sellingPrice: 99.99,
        tax: 0.07,
        inventory: 25,
        description: 'A board with wheels that moves based on body weight distribution'
    },
    {
        id: 00003,
        name: 'magic rock',
        sellingPrice: 2.99,
        tax: 0.07,
        inventory: 70000,
        description: 'A rock that we cannot believe people are buying.'
    }       
]

//Creating two new objects
const laserShoes = {
    id: 00004,
    name: 'laser shoes',
    sellingPrice: 249.99,
    tax: 0.07,
    inventory: 2,
    description: 'A shoe that will shoot lasers out of the toe'
}

const houseMouse = {
    id: 00005,
    name: 'house mouse',
    sellingPrice: 19.99,
    tax: 0.07,
    inventory: 356,
    description: 'A robot mouse that makes you feel like you are in the city all the time'
}

//adding the new objects to the array
toys.push(laserShoes);
toys.push(houseMouse);

//string interpolation
/* for (const toy of toys) {
    console.log(`Due to inflation, we need to raise the price of ${toy.name} to be ${toy.sellingPrice} plus $2`)
} */

//adding a 5% price increase to all toys and indexing the variable toyToFind
const toyToFind = 00001;
for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.sellingPrice = toy.sellingPrice * 1.05;
        console.log(`Due to inflation, we need to raise the price of ${toy.name} to be ${toy.sellingPrice}`)
    }
}

