import { faker } from '@faker-js/faker';
/**
 * This mocks the container data that will be pulled from backend
 * 
 *      data definiton
 *          id: an unique id for the container item, a serial number  ,
            title: Title to be displayed on the top of the product container,
            productdisplay: Display type of the product. A product can be displayed on the page in various size - normal, thin, large, small,
            displaylimit: Number of the products to be displayed in the Grid 
            description: Product description, to be displayed after titile


 *      ---------------------------------------------------
 *      Product data : to be displayed on the product grid
 *      ---------------------------------------------------
 *      data definiton
 * 
 *          id: an unique id for the item ,
            name: name of the Product,
            price: Product price,
            description: Product description,
            image: image of the Product, size 300X200px
            displayProduct: a boolean to show or hide product from the page
            fblink: [optional] fb page link of the item 
            twiterlink: [optional] twiter handle link of the item
            instalink: [optional] Instagram link of the itme

 *      ------------------------------------------------------
 * *      Content data : to be displayed on the Content grid
 *      ------------------------------------------------------
 * 
 *      data definiton
 * 
 *          id: an unique id for the item ,
            name: name of the Content,
            image: image of the Content, size 300X200px 
            displayProduct: a boolean to show or hide product from the page  
            fblink: [optional] fb page link of the item 
            twiterlink: [optional] twiter handle link of the item
            instalink: [optional] Instagram link of the itme 

 *      -------------------------------------------------------
 *      Product data : to be displayed on the todays-Pick grid
 *      -------------------------------------------------------
 * 
 *      data definiton
 *  
 *          id: an unique id for the item ,
            name: name of the todays-Pick item,
            description: odays-Pick item description,
            image: image of the odays-Pick item, size 300X200px
            displayProduct: a boolean to show or hide product from the page
            fblink: [optional] fb page link of the item 
            twiterlink: [optional] twiter handle link of the item
            instalink: [optional] Instagram link of the itme

 *      -------------------
 *      Event Update 
 *      -------------------
 *      data definiton
 * 
*           id: an unique id for the item ,
            name: name of the event,
            rating: event rating,
            bookingoffer: booking offer e.g. free cancellation,
            price: event ticket price,
            duration: duration of the event,
            location: event location,
            description: event description,
            image: image of the event, size 300X200px
            inStock: quantity of product available,
            fastDelivery: if the product is availabe for fast delivery,
            displayProduct: a boolean to show or hide product from the page
            fblink: [optional] fb page link of the item 
            twiterlink: [optional] twiter handle link of the item
            instalink: [optional] Instagram link of the itme
 */


export const containerdata = [

    {
        id: 1,
        title: "Today's Pick",
        productdisplay: "small",
        displaylimit: "4",
        description: "Today's Pick of the Welltech Basket",
        data: [
            {
                id: 1,
                name: "Drama Therapy",
                description: "What we now call drama therapy has existed in some form or another since the beginnings of human civilization. Broadly speaking, drama therapy is the intentional use of dramatic tools and frameworks for therapeutic benefit.",
                image: "/images/today-pick/tdp-1.png",
                displayProduct: true,
                fblink: 'https://www.facebook.com/DanaNSayre',
                twiterlink: 'https://twitter.com/DanaNSayre',
            },
            {
                id: 2,
                name: "Physical Wellness",
                description: "Positive physical health habits can help decrease your stress, lower your risk of disease, and increase your energy.",
                image: "/images/today-pick/tdp-2.png",
                displayProduct: true,
            },
            {
                id: 3,
                name: "Health and Wellness Chat ",
                description: "Helping you improve your health and wellness. Live your best life!",
                image: "/images/today-pick/tdp-3.png",
                displayProduct: true,
            },
            {
                id: 4,
                name: "Herts Inclusive Theatre",
                description: "Herts Inclusive Theatre (HIT) use the arts and wellbeing practices to build confidence, develop skills and give participants and their families memorable, enjoyable life experiences where everyone is encouraged, valued, supported and has their part to play.",
                image: "/images/today-pick/tdp-4.jpg",
                displayProduct: true,
            },
            {
                id: 5,
                name: "Holistic Health",
                description: "Holistic health and wellness is sustained by eight pillars: physical, nutritional, emotional, social, spiritual, intellectual, financial, and environmental.",
                image: "/images/today-pick/tdp-5.jpg",
                displayProduct: true,
            }

        ]
    },
    {
        id: 2,
        title: "Event Updates",
        productdisplay: "large",
        displaylimit: "4",
        description: "Exclusive and latest updates for all upcoming events",
        data: [
            {
                id: 11,
                name: "Great Chefs Dinner",
                bookingoffer: "Free Cancellation",
                location: "London, United Kingdom",
                price: 75.25,
                duration: "2 hrs",
                description: "We are delighted to announce that the 11th Great Chefs Dinner will be taking place on Thursday 1st December 2022. Amid the Christmassy splendour of the Guildhall, the event celebrates the best fine dining the UK has to offer.",
                image: "/images/events/evt-1.jpg",
                inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
                fastDelivery: faker.datatype.boolean(),
                rating: 5,
                displayProduct: true,

            },
            {
                id: 12,
                name: "Merry Little Christmas concert",
                bookingoffer: "Free Cancellation",
                location: "London, United Kingdom",
                price: 45.00,
                duration: "3 hrs",
                description: "Join us on Tuesday 13 December at Cadogan Hall, Sloane Terrace for a magical evening packed with traditional Christmas carols, spectacular musical performances and celebrity special guests who will help us to spread Christmas cheer far and wide.",
                image: "/images/events/evt-2.jpg",
                inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
                fastDelivery: faker.datatype.boolean(),
                rating: 4.5,
                displayProduct: true,
            },
            {
                id: 13,
                name: "White Hat Ball ",
                bookingoffer: "",
                price: 33.45,
                duration: "1 hr",
                location: "London, United Kingdom",
                description: "The White Hat Ball Committee are delighted to invite you back to the annual White Hat Ball in aid of Childline at the Royal Lancaster Hotel, London on Friday 27 January 2023.",
                image: "/images/events/evt-3.jpg",
                inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
                fastDelivery: faker.datatype.boolean(),
                rating: 5,
                displayProduct: true,
            },
            {
                id: 14,
                name: "City Fine Wine Challenge",
                price: 30.25,
                duration: "2 hrs",
                bookingoffer: "Free Cancellation",
                location: "London, United Kingdom",
                description: "This is the perfect event to develop your appreciation of fine wines while entertaining your most valued clients, colleagues and friends. Show off your sommelier skills and uncork your wine knowledge. Guests are encouraged, in exchange for donations, to cheat their way to the Challenge trophy!",
                image: "/images/events/evt-4.jpg",
                inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
                fastDelivery: faker.datatype.boolean(),
                rating:4.5,
                displayProduct: true,
            },
            {
                id: 15,
                name: "Monday Movie Club",
                duration: "90 mins",
                price: 15.25,
                bookingoffer: "Free Cancellation",
                location: "London, United Kingdom",
                description: "Some of the fantastic films our members have seen before general release include If Beale Street Could Talk, Mary Poppins Returns, La La Land and Moonlight.",
                image: "/images/events/evt-5.jpg",
                inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
                fastDelivery: faker.datatype.boolean(),
                rating: 5,
                displayProduct: true,
            }
        ]
    },
    {
        id: 3,
        title: "Top 10 Contents",
        productdisplay: "thin",
        displaylimit: 5,
        description: "Top 10 Most Popular Types of Contents this Week",
        data: [
            {
                id: 21,
                name: " Low Potassium Cereals",
                image: "/images/top-10/top10-1.jpg",
                displayProduct: true,
            },
            {
                id: 22,
                name: "Office Groups",
                image: "/images/top-10/top10-2.jpg",
                displayProduct: true,
            },
            {
                id: 23,
                name: "Hygiene, Health and Wellness Ideas",
                image: "/images/top-10/top10-3.jpg",
                displayProduct: true,
            },
            {
                id: 24,
                name: "Top viewed tours",
                image: "/images/top-10/top10-4.jpg",
                displayProduct: true,
            },
            {
                id: 25,
                name: "top 10 books useful in life",
                image: "/images/top-10/top10-5.jpg",
                displayProduct: true,
            },
            {
                id: 26,
                name: "Signs of an Eating Disorder",
                image: "/images/top-10/top10-6.jpg",
                displayProduct: true,
            },
            {
                id: 27,
                name: "Mountain and hill walking",
                image: "/images/top-10/top10-7.jpg",
                displayProduct: true,
            },
            {
                id: 28,
                name: "Family Water Rafting Adventure",
                image: "/images/top-10/top10-8.jpg",
                displayProduct: true,
            },
            {
                id: 29,
                name: "Tunnels of Joy Drama Therapy",
                image: "/images/top-10/top10-9.jpg",
                displayProduct: true,
            },
            {
                id: 30,
                name: "Kidney Stone Articles",
                image: "/images/top-10/top10-10.jpg",
                displayProduct: true,
            }
        ]
    },
    {
        id: 4,
        title: "Our Products",
        productdisplay: "normal",
        displaylimit: 5,
        description: "Browse our list of highest trending products",
        data: [
            {
                id: 31,
                name: "Product-1",
                price: 121.21,
                description: "Made with real  extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
                image: "/images/products/prd-1.jpg",
                displayProduct: true,
            },
            {
                id: 32,
                name: "Product-2",
                price: 222.22,
                description: "Clean the air of Allergies, Dust, Asthma, Bacteria, Pollen, Mold Spores, Pet Dander",
                image: "/images/products/prd-2.jpg",
                displayProduct: true,
            },
            {
                id: 33,
                name: "Product-3",
                price: 323.23,
                description: "Rated #1 in Only Comprehensive University Study for the Performance You Need",
                image: "/images/products/prd-3.jpg",
                displayProduct: true,
            },
            {
                id: 34,
                name: "Product-4",
                price: 424.24,
                description: "Best for Bedroom, Office, Living Room, Basement",
                image: "/images/products/prd-4.jpg",
                displayProduct: true,
            },
            {
                id: 35,
                name: "Product-5",
                price: 525.25,
                description: "With the proper ingredients, success comes naturally. Here's everything you need to make a distinctive tasting sausage stick that will be sure to tingle your taste buds. Comes with complete instructions.",
                image: "/images/products/prd-5.jpg",
                displayProduct: true,
            },
            {
                id: 36,
                name: "Product-6",
                price: 626.26,
                description: "emove dirt and impurities from your sensitive skin with our all-natural cleansing bar. Our gentle formula is especially designed to help neutralize skin irritations. This therapeutic blend is great for all skin types, especially sensitive or problematic skin, gentle yet effective. ",
                image: "/images/products/prd-6.jpg",
                displayProduct: true,
            },
            {
                id: 37,
                name: "Product-7",
                price: 727.27,
                description: "Beautifully handmademade in the Nepal Himalaya. It can be slipped inside your backpack or carried alone with space for all your work bits and pieces!",
                image: "/images/products/prd-7.jpg",
                displayProduct: true,
            },
            {
                id: 38,
                name: "Product-8",
                price: 828.28,
                description: "Activated carbon filter for light odors and gases",
                image: "/images/products/prd-8.jpg",
                displayProduct: true,
            },
            {
                id: 39,
                name: "Product-9",
                price: 929.29,
                description: "Room air purifier removes 99%+ of Airborne Particles",
                image: "/images/products/prd-9.jpg",
                displayProduct: true,
            },
            {
                id: 40,
                name: "Product-10",
                price: 210.21,
                description: "No matter what tactics you use, your end goal is to get the reader to buy your product. For this, you must write about the benefits that will motivate your prospects to make the final decision. And hopefully, the one that works in your favor.",
                image: "/images/products/prd-10.jpg",
                displayProduct: true,
            }


        ]
    },
];