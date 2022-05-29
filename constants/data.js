export const quick = 1
export const fair = 2
export const slow = 3

export const venues = [
    {
        id: 1,
        name: "Hélène Darroze",
        thumbnail: require("../assets/images/venue_1.jpg"),
        affordability: "£££",
        cuisine: "Italian",
        district: "Chelsea",
        number: +442031477200,
        address: "9 Conduit St, London, W1S 2XG",
        website: 'https://www.the-connaught.co.uk/restaurants-bars/helene-darroze-at-the-connaught/',
        description: "In our three Michelin-star restaurant, each dish is grounded in seasonal produce sourced from the farmers, makers and growers carefully chosen by Hélène. And every menu is a reflection of your personal tastes, as our chefs transform your selected ingredients into original works of culinary art.",
        menu: [
            {
                id: 1,
                name: "Chicken Shish",
                price: "11.50",
                duration: fair,
                photo: require("../assets/images/kebab_1.jpg")
            },
            {
                id: 2,
                name: "Sirloin Steak",
                price: "17.00",
                duration: slow,
                photo: require("../assets/images/steak_1.jpg")
            },
            {
                id: 3,
                name: "Cuban Prawn Pasta",
                price: "7.50",
                duration: fair,
                photo: require("../assets/images/pasta_1.jpg")
            },
            {
                id: 4,
                name: "Fall Salad",
                price: "5.00",
                duration: quick,
                photo: require("../assets/images/salad_1.jpg")
            },
            {
                id: 5,
                name: "The Cheeseburger",
                price: "9.00",
                duration: quick,
                photo: require("../assets/images/burger_1.jpg")
            },
            {
                id: 6,
                name: "Gorgonzola",
                price: "16.49",
                duration: quick,
                photo: require("../assets/images/pizza_1.jpg")
            },
            {
                id: 7,
                name: "Doner Kebab Sandwich",
                price: "5.49",
                duration: quick,
                photo: require("../assets/images/doner_1.jpg")
            },
            {
                id: 8,
                name: "Mixed Maki Plate",
                price: "14.99",
                duration: slow,
                photo: require("../assets/images/sushi_1.jpg")
            },
            {
                id: 9,
                name: "Chocolate Fondant",
                price: "9.99",
                duration: fair,
                photo: require("../assets/images/dessert_1.jpg")
            },
            {
                id: 10,
                name: "Dark & Stormy",
                price: "7.49",
                duration: quick,
                photo: require("../assets/images/drink_1.jpg")
            }
        ]
    },
    {
        id: 2,
        name: "The Square",
        thumbnail: require("../assets/images/venue_2.jpg"),
        affordability: "££",
        cuisine: "British",
        district: "Knightsbridge",
        number: +441992760666,
        address: "Carlos Pl, London, W1K 2AL",
        website: 'http://www.thesquarebarandgrill.co.uk/',
        description: "The best things happen in The Square. Stunning location, stylish interiors and distinct food & drink offerings - you'll happen upon us and never want to leave. With unrivalled service and a beautiful terrace overlooking St Paul's Cathedral, it is the perfect setting for alfresco drinks and all day dining.",
        menu: [
            {
                id: 1,
                name: "Lamb Chops",
                price: "15.00",
                duration: slow,
                photo: require("../assets/images/kebab_2.jpg")
            },
            {
                id: 2,
                name: "Rib Eye Steak",
                price: "17.99",
                duration: slow,
                photo: require("../assets/images/steak_2.jpg")
            },
            {
                id: 3,
                name: "Spaghetti Bolognese",
                price: "6.99",
                duration: fair,
                photo: require("../assets/images/pasta_2.jpg")
            },
            {
                id: 4,
                name: "Greek Salad",
                price: "9.99",
                duration: quick,
                photo: require("../assets/images/salad_2.jpg")
            },
            {
                id: 5,
                name: "The Blacklock Burger",
                price: "11.00",
                duration: fair,
                photo: require("../assets/images/burger_2.jpg")
            },
            {
                id: 6,
                name: "Caprese",
                price: "12.49",
                duration: quick,
                photo: require("../assets/images/pizza_2.jpg")
            },
            {
                id: 7,
                name: "Zigeuner Doner",
                price: "6.49",
                duration: quick,
                photo: require("../assets/images/doner_2.jpg")
            },
            {
                id: 8,
                name: "Tuna Sashimi",
                price: "36.00",
                duration: slow,
                photo: require("../assets/images/sushi_2.jpg")
            },
            {
                id: 9,
                name: "Death by Oreo",
                price: "4.50",
                duration: quick,
                photo: require("../assets/images/dessert_2.jpg")
            },
            {
                id: 10,
                name: "Oreo Milkshake",
                price: "5.50",
                duration: quick,
                photo: require("../assets/images/drink_2.jpg")
            }
        ]
    },
    {
        id: 3,
        name: "The Ritz Restaurant",
        thumbnail: require("../assets/images/venue_3.jpeg"),
        affordability: "££££",
        cuisine: "Mediterranean",
        district: "Soho",
        number: +442074938181,
        address: "29 Maddox St, London, W1S 2PA",
        website: 'https://www.theritzlondon.com/dine-with-us/the-ritz-restaurant/',
        description: "Welcome to the Michelin-starred Ritz Restaurant, where the finest cuisine is consumed in the most spectacular of settings. With sparkling chandeliers, towering marble columns and soaring floor to ceiling windows overlooking the calm oasis of Green Park, the elegant Ritz Restaurant is widely considered to be one of the most beautiful dining rooms in the world.",
        menu: [
            {
                id: 1,
                name: "Lamb Shish",
                price: "14.49",
                duration: fair,
                photo: require("../assets/images/kebab_3.jpg")
            },
            {
                id: 2,
                name: "Wagyu Steak",
                price: "24.00",
                duration: slow,
                photo: require("../assets/images/steak_3.jpg")
            },
            {
                id: 3,
                name: "Mac 'n' Cheese",
                price: "6.49",
                duration: fair,
                photo: require("../assets/images/pasta_3.jpeg")
            },
            {
                id: 4,
                name: "Mixed Green Salad",
                price: "4.49",
                duration: quick,
                photo: require("../assets/images/salad_3.jpg")
            },
            {
                id: 5,
                name: "Tribute Burger",
                price: "13.00",
                duration: fair,
                photo: require("../assets/images/burger_3.jpg")
            },
            {
                id: 6,
                name: "Margherita",
                price: "11.99",
                duration: quick,
                photo: require("../assets/images/pizza_3.jpg")
            },
            {
                id: 7,
                name: "Doner Al Forno",
                price: "7.49",
                duration: quick,
                photo: require("../assets/images/doner_3.jpg")
            },
            {
                id: 8,
                name: "Yasai Temaki",
                price: "17.00",
                duration: fair,
                photo: require("../assets/images/sushi_3.jpg")
            },
            {
                id: 9,
                name: "Raspberry Swirl",
                price: "6.99",
                duration: quick,
                photo: require("../assets/images/dessert_3.jpg")
            },
            {
                id: 10,
                name: "Summer Fresh",
                price: "12.00",
                duration: quick,
                photo: require("../assets/images/drink_3.jpg")
            }
        ]
    }
]

export const categories = [
    {
        id: 1,
        name: "Menu",
        icon: require("../assets/icons/menu.png")
    },
    {
        id: 2,
        name: "Kebab",
        icon: require("../assets/icons/kebab.png")
    },
    {
        id: 3,
        name: "Steak",
        icon: require("../assets/icons/meat.png")
    },
    {
        id: 4,
        name: "Pasta",
        icon: require("../assets/icons/spaghetti.png")
    },
    {
        id: 5,
        name: "Salad",
        icon: require("../assets/icons/salad.png")
    },
    {
        id: 6,
        name: "Burger",
        icon: require("../assets/icons/hamburger.png")
    },
    {
        id: 7,
        name: "Pizza",
        icon: require("../assets/icons/pizza.png")
    },
    {
        id: 8,
        name: "Doner",
        icon: require("../assets/icons/doner.png")
    },
    {
        id: 9,
        name: "Sushi",
        icon: require("../assets/icons/sushi.png")
    },
    {
        id: 10,
        name: "Dessert",
        icon: require("../assets/icons/donut.png")
    },
    {
        id: 11,
        name: "Drink",
        icon: require("../assets/icons/drink.png")
    }
]

export const dishes = [
    {
        id: 1,
        name: "Chicken Shish",
        venue: "Hélène Darroze",
        price: "11.50",
        duration: fair,
        categories: [1, 2],
        photo: require("../assets/images/kebab_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 2,
        name: "Sirloin Steak",
        venue: "Hélène Darroze",
        price: "17.00",
        duration: slow,
        categories: [1, 3],
        photo: require("../assets/images/steak_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 3,
        name: "Cuban Prawn Pasta",
        venue: "Hélène Darroze",
        price: "7.50",
        duration: fair,
        categories: [1, 4],
        photo: require("../assets/images/pasta_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 4,
        name: "Fall Salad",
        venue: "Hélène Darroze",
        price: "5.00",
        duration: quick,
        categories: [1, 5],
        photo: require("../assets/images/salad_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 5,
        name: "The Cheeseburger",
        venue: "Hélène Darroze",
        price: "9.00",
        duration: quick,
        categories: [1, 6],
        photo: require("../assets/images/burger_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 6,
        name: "Gorgonzola",
        venue: "Hélène Darroze",
        price: "16.49",
        duration: quick,
        categories: [1, 7],
        photo: require("../assets/images/pizza_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 7,
        name: "Doner Kebab Sandwich",
        venue: "Hélène Darroze",
        price: "5.49",
        duration: quick,
        categories: [1, 8],
        photo: require("../assets/images/doner_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 8,
        name: "Mixed Maki Plate",
        venue: "Hélène Darroze",
        price: "14.99",
        duration: slow,
        categories: [1, 9],
        photo: require("../assets/images/sushi_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 9,
        name: "Chocolate Fondant",
        venue: "Hélène Darroze",
        price: "9.99",
        duration: fair,
        categories: [1, 10],
        photo: require("../assets/images/dessert_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 10,
        name: "Dark & Stormy",
        venue: "Hélène Darroze",
        price: "7.49",
        duration: quick,
        categories: [1, 11],
        photo: require("../assets/images/drink_1.jpg"),
        thumbnail: require("../assets/images/venue_1.jpg")
    },
    {
        id: 11,
        name: "Lamb Chops",
        venue: "The Square",
        price: "15.00",
        duration: slow,
        categories: [1, 2],
        photo: require("../assets/images/kebab_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 12,
        name: "Rib Eye Steak",
        venue: "The Square",
        price: "17.99",
        duration: slow,
        categories: [1, 3],
        photo: require("../assets/images/steak_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 13,
        name: "Spaghetti Bolognese",
        venue: "The Square",
        price: "6.99",
        duration: fair,
        categories: [1, 4],
        photo: require("../assets/images/pasta_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 14,
        name: "Greek Salad",
        venue: "The Square",
        price: "9.99",
        duration: quick,
        categories: [1, 5],
        photo: require("../assets/images/salad_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 15,
        name: "The Blacklock Burger",
        venue: "The Square",
        price: "11.00",
        duration: fair,
        categories: [1, 6],
        photo: require("../assets/images/burger_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 16,
        name: "Caprese",
        venue: "The Square",
        price: "12.49",
        duration: quick,
        categories: [1, 7],
        photo: require("../assets/images/pizza_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 17,
        name: "Zigeuner Doner",
        venue: "The Square",
        price: "6.49",
        duration: quick,
        categories: [1, 8],
        photo: require("../assets/images/doner_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 18,
        name: "Tuna Sashimi",
        venue: "The Square",
        price: "36.00",
        duration: slow,
        categories: [1, 9],
        photo: require("../assets/images/sushi_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 19,
        name: "Death by Oreo",
        venue: "The Square",
        price: "4.50",
        duration: quick,
        categories: [1, 10],
        photo: require("../assets/images/dessert_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 20,
        name: "Oreo Milkshake",
        venue: "The Square",
        price: "5.50",
        duration: quick,
        categories: [1, 11],
        photo: require("../assets/images/drink_2.jpg"),
        thumbnail: require("../assets/images/venue_2.jpg")
    },
    {
        id: 21,
        name: "Lamb Shish",
        venue: "The Ritz Restaurant",
        price: "14.49",
        duration: fair,
        categories: [1, 2],
        photo: require("../assets/images/kebab_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 22,
        name: "Wagyu Steak",
        venue: "The Ritz Restaurant",
        price: "24.00",
        duration: slow,
        categories: [1, 3],
        photo: require("../assets/images/steak_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 23,
        name: "Mac 'n' Cheese",
        venue: "The Ritz Restaurant",
        price: "6.49",
        duration: fair,
        categories: [1, 4],
        photo: require("../assets/images/pasta_3.jpeg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 24,
        name: "Mixed Green Salad",
        venue: "The Ritz Restaurant",
        price: "4.49",
        duration: quick,
        categories: [1, 5],
        photo: require("../assets/images/salad_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 25,
        name: "Tribute Burger",
        venue: "The Ritz Restaurant",
        price: "13.00",
        duration: fair,
        categories: [1, 6],
        photo: require("../assets/images/burger_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 26,
        name: "Margherita",
        venue: "The Ritz Restaurant",
        price: "11.99",
        duration: quick,
        categories: [1, 7],
        photo: require("../assets/images/pizza_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 27,
        name: "Doner Al Forno",
        venue: "The Ritz Restaurant",
        price: "7.49",
        duration: quick,
        categories: [1, 8],
        photo: require("../assets/images/doner_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 28,
        name: "Yasai Temaki",
        venue: "The Ritz Restaurant",
        price: "17.00",
        duration: fair,
        categories: [1, 9],
        photo: require("../assets/images/sushi_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 29,
        name: "Raspberry Swirl",
        venue: "The Ritz Restaurant",
        price: "6.99",
        duration: quick,
        categories: [1, 10],
        photo: require("../assets/images/dessert_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    },
    {
        id: 30,
        name: "Summer Fresh",
        venue: "The Ritz Restaurant",
        price: "12.00",
        duration: quick,
        categories: [1, 11],
        photo: require("../assets/images/drink_3.jpg"),
        thumbnail: require("../assets/images/venue_3.jpeg")
    }
]

export const tables = [
    {
        id: 1,
        name: "Table 1"
    },
    {
        id: 2,
        name: "Table 2"
    },
    {
        id: 3,
        name: "Table 3"
    },
    {
        id: 4,
        name: "Table 4"
    },
    {
        id: 5,
        name: "Table 5"
    },
    {
        id: 6,
        name: "Table 6"
    },
    {
        id: 7,
        name: "Table 7"
    },
    {
        id: 8,
        name: "Table 8"
    },
    {
        id: 9,
        name: "Table 9"
    },
    {
        id: 10,
        name: "Table 10"
    },
    {
        id: 11,
        name: "Table 11"
    },
    {
        id: 12,
        name: "Table 12"
    },
    {
        id: 13,
        name: "Table G1"
    },
    {
        id: 14,
        name: "Table G2"
    },
    {
        id: 15,
        name: "Table G3"
    },
    {
        id: 16,
        name: "Table G4"
    },
    {
        id: 17,
        name: "Table G5"
    },
    {
        id: 18,
        name: "Table G6"
    },
    {
        id: 19,
        name: "Master Chief"
    }
]

export const times = [
    {
        id: 1,
        name: "ASAP"
    },
    {
        id: 2,
        name: "11:00 a.m."
    },
    {
        id: 3,
        name: "11:30 a.m."
    },
    {
        id: 4,
        name: "12:00 p.m."
    },
    {
        id: 5,
        name: "12:30 p.m."
    },
    {
        id: 6,
        name: "1:00 p.m."
    },
    {
        id: 7,
        name: "1:30 p.m."
    },
    {
        id: 8,
        name: "2:00 p.m."
    },
    {
        id: 9,
        name: "2:30 p.m."
    },
    {
        id: 10,
        name: "3:00 p.m."
    },
    {
        id: 11,
        name: "3:30 p.m."
    },
    {
        id: 12,
        name: "4:00 p.m."
    },
    {
        id: 13,
        name: "4:30 p.m."
    },
    {
        id: 14,
        name: "5:00 p.m."
    },
    {
        id: 15,
        name: "5:30 p.m."
    },
    {
        id: 16,
        name: "6:00 p.m."
    },
    {
        id: 17,
        name: "6:30 p.m."
    },
    {
        id: 18,
        name: "7:00 p.m."
    },
    {
        id: 19,
        name: "7:30 p.m."
    },
    {
        id: 20,
        name: "8:00 p.m."
    },
    {
        id: 21,
        name: "8:30 p.m."
    },
    {
        id: 22,
        name: "9:00 p.m."
    },
    {
        id: 23,
        name: "9:30 p.m."
    },
    {
        id: 24,
        name: "10:00 p.m."
    },
    {
        id: 25,
        name: "10:30 p.m."
    },
    {
        id: 26,
        name: "11:00 p.m."
    },
    {
        id: 27,
        name: "11:30 p.m."
    }
]

export const mapDarkStyle = [
    {
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#212121"
        }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#212121"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#9e9e9e"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#bdbdbd"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#181818"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#1b1b1b"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#2c2c2c"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#8a8a8a"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#373737"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#3c3c3c"
        }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#4e4e4e"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#000000"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#3d3d3d"
        }
        ]
    }
]

const data = { venues, categories, dishes, tables, times, mapDarkStyle };

export default data;