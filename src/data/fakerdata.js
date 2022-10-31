
import { faker } from '@faker-js/faker';

faker.seed(99);

/**
 *          id: an unique id for the item ,
            name: name of the event,
            rating: event rating,
            bookingoffer: booking offer e.g. free cancellation,
            price: event ticket price,
            duration: duration of the event,
            location: event location,
            description: event description,
            image: image of the event, size 300X200px
 */
const products = [...Array(20)].map(() => ({  
    id: faker.datatype.uuid(), 
    name: faker.commerce.productName(),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    bookingoffer: "",
    price: faker.commerce.price(10, 200, 0, '£'),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
}));


export const containerfakedata = [

    {
        id: 1,
        title: "Today's Pick",
        productdisplay: "small",
        displaylimit: "4",
        description: "Today's Pick of the Welltech Basket",
        data: [...Array(20)].map(() => ({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.random.image(),
        }))
    },
    {
        id: 2,
        title: "Event Updates",
        productdisplay: "large",
        displaylimit: "4",
        description: "Exclusive and latest updates for all upcoming events",
        data: [...Array(20)].map(() => ({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]) + "/5",
            duration: "90 mins",
            price: faker.commerce.price(10, 200, 0, '£'),
            bookingoffer: "Free Cancellation",
            location: faker.address.city() + " " +faker.address.county(),
            description: faker.commerce.productDescription(),
            image: faker.random.image(),
        }))


    },
    {
        id: 3,
        title: "Top 10 Contents",
        productdisplay: "thin",
        displaylimit: "5",
        description: "Top 10 Most Popular Types of Contents this Week",
        data: [...Array(20)].map(() => ({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            image: faker.random.image(),
        }))
    },
    {
        id: 4,
        title: "Our Products",
        productdisplay: "normal",
        displaylimit: "5",
        description: "Browse our list of highest trending products",
        data: [...Array(20)].map(() => ({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(10, 200, 0, '£'),
            rating: faker.random.arrayElement([1, 2, 3, 4, 5]) + "/5",
            description: faker.commerce.productDescription(),
            image: faker.random.image(),
        }))
    },
];