// this file contains all the mock data set to be used on the page


//site menu bar list

export const menuitems = [

    {
        id: 1,
        name: "Home",
        url: "/",
        tooltiptext: "Home"
    },
    {
        id: 2,
        name: "Dashboard",
        url: "/dashboard",
        tooltiptext: "Dashboard"
    },
    {
        id: 3,
        name: "Store",
        url: "/store",
        tooltiptext: "Store"
    },
    {
        id: 4,
        name: "Clubs",
        url: "/clubs",
        tooltiptext: "Clubs"
    },
    {
        id: 5,
        name: "Events",
        url: "/events",
        tooltiptext: "Events"
    }
];
// site vision-statement text
export const visionstatement =
    "We are here to help people to improve their quality of life, by providing the environment to develope quality of nature that contains balance, peace, harmony, purity and clarity. We work togther with you to improve elementry dimensions of human nature - attribution, leisure, sympathy, motivation, and acceptance. We acknowledge your need to feel good and fit and offer services to cater your quest for authentic well-being. We believe in the possibility to make it a more accessible and sustainable daily achievement."
    ;
// banner display data
export const banners = [
    {
        id: 1,
        heading1: "Welltech offerings",
        title: "Mega Event",
        description: "Welltech kicks off the festival season in December when consumers are looking for new ways to make health and wellbeing part of their lifestyle. We attract highly engaged and loyal wellbeing advocates who have a higher disposable income, with 81% of our visitors buying product at the event.",
        image: "/images/banner/banner-4.png"
    },
    {
        id: 2,
        heading1: "Huge Collections",
        title: "Huge Collections",
        description: "Launched this year, influenced by the lifestyle of its mentors. We can tap into your potential through self care practices arising from awareness and learned choices.",
        image: "/images/banner/banner-5.png"
    },
    {
        id: 3,
        heading1: "New Arrival",
        title: "New Arrival",
        description: "Walk in for a a breakaway from the monotony of routine through therapeutic massages and soothing treatments to relax, refresh and rejuvenate",
        image: "/images/banner/banner-6.png"
    }
];


/**
 * text to be displayed in the slider
 * a message can have maximum length= 40 chars
 * */
export const slidermessage = [
    "Join our Community Wellness Event",
    "Winter sala starts now,  visit our store",
    "Please like and subscribe",
    // "Please like and subscribe -123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412342 this is the end",
];


/**
 * product display size
 * 
 * Following are for all breakpoints : Desktop, Tabs, Mobile etc.
 * Normal: For displaying  with image, product-name and another product attribute e.g. price,
 * 
 * Following sizes are for Mobile/Tabs, displaying product in different size containers
 * Small: rending product in small area with smaill image and below product-name only,
 * Large: displaying slightly bigger area with more than two product attributes.
 * Thin: For displaying product name inside the image
 * Full: For displaying product in full width of the display
 */
export const productdisplay = {
    Small: 'small',
    Normal: 'normal',
    Large: 'large',
    Thin: 'thin',
    Full:'full',
};

/**
 * Define Button text for Add Cart button
 */
export const cartAddActionMessages = {
    remove : 'Remove from cart',
    add : 'Add to cart',
};


/**
 * Define Button text for Add Cart button
 */
 export const wishlistAddActionMessages = {
    remove : 'Remove from Wishlist',
    add : 'Add to Wishlist',
};

/**
 * Define view cart  messages
 */
export const cartViewMessages = {
    title: 'Your Cart',
    marketing : 'Login/register for great deals and offers',
    buttontext : 'Proceed to payment',
    emptycart: 'Your cart is empty!',
    emptycartletshop: 'You have no item in your shopping cart.\nLet\'s go buy something!',
    emptycartimage: '/images/cart/emptycart.png',
    emptyshopnow : 'Shop Now',
    deletemessage : 'Delete this product from your cart.',
};

/**
 * Define view cart  messages
 */
 export const favouriteViewMessages = {
    title: 'Your Wish List',
    marketing : 'You can manage Wish-List at any time.',
    deletemessage : 'Remove this product from your whish list.',
    nothing:'You have not added any items yet.\n\nTo add items to your whish-list, look out for the heart symbol on the items.',
    nofavourites:'/images/whishlist/nolist.png',
};
/**
 *      Product data : to be displayed on the product grid
 *  
 *      data definiton
 * 
 *          id: an unique id for the item ,
            name: name of the Product,
            price: Product price,
            description: Product description,
            image: image of the Product, size 300X200px
 */
export const products = [
    {
        id: 1,
        name: "Product-1",
        price: 121.21,
        description: "Made with real  extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you’ve got a bullpen of natural ingredients that will strike out any stink.",
        image: "/images/products/prd-1.jpg"
    },
    {
        id: 2,
        name: "Product-2",
        price: 222.22,
        description: "Clean the air of Allergies, Dust, Asthma, Bacteria, Pollen, Mold Spores, Pet Dander",
        image: "/images/products/prd-2.jpg"
    },
    {
        id: 3,
        name: "Product-3",
        price: 323.23,
        description: "Rated #1 in Only Comprehensive University Study for the Performance You Need",
        image: "/images/products/prd-3.jpg"
    },
    {
        id: 4,
        name: "Product-4",
        price: 424.24,
        description: "Best for Bedroom, Office, Living Room, Basement",
        image: "/images/products/prd-4.jpg"
    },
    {
        id: 5,
        name: "Product-5",
        price: 525.25,
        description: "With the proper ingredients, success comes naturally. Here's everything you need to make a distinctive tasting sausage stick that will be sure to tingle your taste buds. Comes with complete instructions.",
        image: "/images/products/prd-5.jpg"
    },
    {
        id: 6,
        name: "Product-6",
        price: 626.26,
        description: "emove dirt and impurities from your sensitive skin with our all-natural cleansing bar. Our gentle formula is especially designed to help neutralize skin irritations. This therapeutic blend is great for all skin types, especially sensitive or problematic skin, gentle yet effective. ",
        image: "/images/products/prd-6.jpg"
    },
    {
        id: 7,
        name: "Product-7",
        price: 727.27,
        description: "Beautifully handmademade in the Nepal Himalaya. It can be slipped inside your backpack or carried alone with space for all your work bits and pieces!",
        image: "/images/products/prd-7.jpg"
    },
    {
        id: 8,
        name: "Product-8",
        price: 828.28,
        description: "Activated carbon filter for light odors and gases",
        image: "/images/products/prd-8.jpg"
    },
    {
        id: 9,
        name: "Product-9",
        price: 929.29,
        description: "Room air purifier removes 99%+ of Airborne Particles",
        image: "/images/products/prd-9.jpg"
    },
    {
        id: 10,
        name: "Product-10",
        price: 210.21,
        description: "No matter what tactics you use, your end goal is to get the reader to buy your product. For this, you must write about the benefits that will motivate your prospects to make the final decision. And hopefully, the one that works in your favor.",
        image: "/images/products/prd-10.jpg"
    }
];

/**
 *      Content data : to be displayed on the Content grid
 * 
 *      data definiton
 * 
 *          id: an unique id for the item ,
            name: name of the Content,
            image: image of the Content, size 300X200px
 */
export const topTenContent = [
    {
        id: 1,
        name: " Low Potassium Cereals",
        image: "/images/top-10/top10-1.jpg"
    },
    {
        id: 2,
        name: "Office Groups",
        image: "/images/top-10/top10-2.jpg"
    },
    {
        id: 3,
        name: "Hygiene, Health and Wellness Ideas",
        image: "/images/top-10/top10-3.jpg"
    },
    {
        id: 4,
        name: "Top viewed tours",
        image: "/images/top-10/top10-4.jpg"
    },
    {
        id: 5,
        name: "top 10 books useful in life",
        image: "/images/top-10/top10-5.jpg"
    },
    {
        id: 6,
        name: "Signs of an Eating Disorder",
        image: "/images/top-10/top10-6.jpg"
    },
    {
        id: 7,
        name: "Mountain and hill walking",
        image: "/images/top-10/top10-7.jpg"
    },
    {
        id: 8,
        name: "Family Water Rafting Adventure",
        image: "/images/top-10/top10-8.jpg"
    },
    {
        id: 9,
        name: "Tunnels of Joy Drama Therapy",
        image: "/images/top-10/top10-9.jpg",
    },
    {
        id: 10,
        name: "Kidney Stone Articles",
        image: "/images/top-10/top10-10.jpg"
    }
];


/**
 *      Product data : to be displayed on the todays-Pick grid
 * 
 *      data definiton
 *  
 *          id: an unique id for the item ,
            name: name of the todays-Pick item,
            description: odays-Pick item description,
            image: image of the odays-Pick item, size 300X200px
 */
export const todaysPick = [
    {
        id: 1,
        name: "Drama Therapy",
        description: "What we now call drama therapy has existed in some form or another since the beginnings of human civilization. Broadly speaking, drama therapy is the intentional use of dramatic tools and frameworks for therapeutic benefit.",
        image: "/images/today-pick/tdp-1.png"
    },
    {
        id: 2,
        name: "Physical Wellness",
        description: "Positive physical health habits can help decrease your stress, lower your risk of disease, and increase your energy.",
        image: "/images/today-pick/tdp-2.png"
    },
    {
        id: 3,
        name: "Health and Wellness Chat ",
        description: "Helping you improve your health and wellness. Live your best life!",
        image: "/images/today-pick/tdp-3.png"
    },
    {
        id: 4,
        name: "Herts Inclusive Theatre",
        description: "Herts Inclusive Theatre (HIT) use the arts and wellbeing practices to build confidence, develop skills and give participants and their families memorable, enjoyable life experiences where everyone is encouraged, valued, supported and has their part to play.",
        image: "/images/today-pick/tdp-4.jpg"
    },
    {
        id: 5,
        name: "Holistic Health",
        description: "Holistic health and wellness is sustained by eight pillars: physical, nutritional, emotional, social, spiritual, intellectual, financial, and environmental.",
        image: "/images/today-pick/tdp-5.jpg"
    }
];

/**
 *      Event Update 
 * 
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
 */
export const eventsUpdate = [
    {
        id: 1,
        name: "Great Chefs Dinner",
        rating: "4.5/5",
        bookingoffer: "Free Cancellation",
        location: "London, United Kingdom",
        price: 75.25,
        duration: "2 hrs",
        description: "We are delighted to announce that the 11th Great Chefs Dinner will be taking place on Thursday 1st December 2022. Amid the Christmassy splendour of the Guildhall, the event celebrates the best fine dining the UK has to offer.",
        image: "/images/events/evt-1.jpg"
    },
    {
        id: 2,
        name: "Merry Little Christmas concert",
        rating: "5/5",
        bookingoffer: "Free Cancellation",
        location: "London, United Kingdom",
        price: 45.00,
        duration: "3 hrs",
        description: "Join us on Tuesday 13 December at Cadogan Hall, Sloane Terrace for a magical evening packed with traditional Christmas carols, spectacular musical performances and celebrity special guests who will help us to spread Christmas cheer far and wide.",
        image: "/images/events/evt-2.jpg"
    },
    {
        id: 3,
        name: "White Hat Ball ",
        rating: "4.5/5",
        bookingoffer: "",
        price: 33.45,
        duration: "1 hr",
        location: "London, United Kingdom",
        description: "The White Hat Ball Committee are delighted to invite you back to the annual White Hat Ball in aid of Childline at the Royal Lancaster Hotel, London on Friday 27 January 2023.",
        image: "/images/events/evt-3.jpg"
    },
    {
        id: 4,
        name: "City Fine Wine Challenge",
        rating: "5/5",
        price: 30.25,
        duration: "2 hrs",
        bookingoffer: "Free Cancellation",
        location: "London, United Kingdom",
        description: "This is the perfect event to develop your appreciation of fine wines while entertaining your most valued clients, colleagues and friends. Show off your sommelier skills and uncork your wine knowledge. Guests are encouraged, in exchange for donations, to cheat their way to the Challenge trophy!",
        image: "/images/events/evt-4.jpg"
    },
    {
        id: 5,
        name: "Monday Movie Club",
        rating: "5/5",
        duration: "90 mins",
        price: 15.25,
        bookingoffer: "Free Cancellation",
        location: "London, United Kingdom",
        description: "Some of the fantastic films our members have seen before general release include If Beale Street Could Talk, Mary Poppins Returns, La La Land and Moonlight.",
        image: "/images/events/evt-5.jpg"
    }
];