/**
 * 888888888888888888888888888888888888888888888888888888
 * 
 *         STATIC VARIABLES USED IN THE APPLICATION
 * 
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 */



// this file contains all the mock data set to be used on the page

export const SITE_LOCALE = "£";

//site menu bar list

export const MENU_ITEMS = [

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
export const VISION_STATEMENT =
    "We are here to help people to improve their quality of life, by providing the environment to develope quality of nature that contains balance, peace, harmony, purity and clarity. We work togther with you to improve elementry dimensions of human nature - attribution, leisure, sympathy, motivation, and acceptance. We acknowledge your need to feel good and fit and offer services to cater your quest for authentic well-being. We believe in the possibility to make it a more accessible and sustainable daily achievement."
    ;

/**
 * 888888888888888888888888888888888888888888888888888888
 * 
 *              CART-VIEW DIALOG BOX CONFIGURATIONS
 * 
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 */


/**
 * Define view cart dialog box messages
 */
export const CART_VIEW = {
    TITLE: 'Your Cart',
    LOGIN_REG_MSG : 'Login/register for great deals and offers',
    DO_PAYMENT_TXT : 'Proceed to payment',
    EMPTY_CART_MSG: 'Your cart is empty!',
    EMPTY_CART_SHOP_MSG: 'You have no item in your shopping cart.\nLet\'s go buy something!',
    EMPTY_CART_IMG: '/images/cart/emptycart.png',
    SHOP_MSG : 'Shop Now',
    DELETE_MSG : 'Delete this product from your cart.',
    LINK: '/viewcart',
    TERM_CONDN:"By placing your order you agree to Welltech's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.",
    ORD_SUMRY : "Order Summary",
    ORD_TOTAL : "Order Total:",
    ORD_ITEMS : "Order Items",    
    ORD_SUB_TOTAL : "Order Subotal:",
    DLVRY_PCKG : "Postage & Packing:",
    FREE : "FREE",
    HELP_MSG : "Need help? Check our Help pages or contact us \n"+
    "When you click the \"Buy now\" button, we'll send you an e-mail message acknowledging receipt of your order. Your contract to purchase an item will not be complete until we send you an e-mail to indicate that the item has been dispatched.\n"+
    "Within 30 days of delivery, you may return new, unopened physical merchandise in its original condition. Exceptions and restrictions apply. See WellTech's Return Policy.",
};

/**
 * Define Button text for Add Cart button
 */
 export const CART_ACTION_MSG = {
    REMOVE : 'Remove from cart',
    ADD : 'Add to cart',
};


/**
 * Define view cart default setting
 */
 export const CART_DEFAULT_SETTINGS = {
    AVAILABLE:6,
 }

/**
 * 888888888888888888888888888888888888888888888888888888
 * 
 *             WISHLIST DIALOG BOX CONFIGURATIONS
 * 
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 */

/**
 * Define WISH LIST view  messages
 */
 export const WISHLIST_VIEW_MSG = {
    TITLE: 'Your Wish List',
    MARKETING : 'You can manage Wish-List at any time.',
    DELETE : 'Remove this product from your whish list.',
    EMPTY:'You have not added any items yet.\n\nTo add items to your whish-list, look out for the heart symbol on the items.',
    EMPTY_IMG:'/images/whishlist/nolist.png',
};

/**
 * Define Button text for Add Cart button
 */
 export const WISHLIST_ACTION_MSG = {
    REMOVE : 'Remove from Wishlist',
    ADD : 'Add to Wishlist',
};

/**
 * 888888888888888888888888888888888888888888888888888888
 * 
 *             STORE PAGE CONFIGURATIONS
 * 
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 */

/**
 * Define view cart  messages
 */
 export const STORE_FILTER = {
    TITLE: 'Filter Products',
    CLEAR_FILTER_TXT: 'Clear Filters',
};

/**
 * Define Button text for Add Cart button
 */
 export const STORE_DELIVERY_TYPE = {
    FAST : 'Fast Delivery',
    FOUR_DAYS : '4 days delivery',
};

/**
 * Define Button text for Add Cart button
 */
 export const STORE_PRODUCT_BTN_TXT = {
    SHARE : 'Share',
    LEARN_MORE : 'Learn More',
    ADD_TO_WHISHLIST : 'Add to Whishlist',
    REMOVE_WHISHLIST : 'In Whishlist',
};

/**
 * 888888888888888888888888888888888888888888888888888888
 * 
 *             PRODUCT DISPLAY CONFIGURATIONS
 * 
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 */

/**
 * show message on the product view list to view all or view less
 */
 export const PROD_LIST_VIEW = {
    MORE: 'View more >',
    LESS: 'View less <',
};


/**
 * show message on the product view list to view all or view less
 */
 export const PROD_ACTION_TOOLTIP = {
    DETAILED_VIEW: 'View product details.',
    SHARE: 'Share this product.',
    ADD_TO_WHISHLIST: 'Add to Your Wishlist',
};
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
 export const PROD_DISPLAY_SIZE = {
    SMALL: 'small',
    NORMAL: 'normal',
    LARGE: 'large',
    THIN: 'thin',
    FULL:'full',
};



/**
 * 888888888888888888888888888888888888888888888888888888
 * 
 *             M O C K DATA FOR TESTING
 * 
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 */


/**
 * text to be displayed in the slider
 * a message can have maximum length= 40 chars
 * */
 export const PROMO_SLIDER_MSGS = [
    "Join our Community Wellness Event",
    "Winter sala starts now,  visit our store",
    "Please like and subscribe",
    // "Please like and subscribe -123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412342 this is the end",
];



// banner display data
export const HOME_BANNER_DATA = [
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