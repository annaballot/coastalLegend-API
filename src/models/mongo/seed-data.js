
export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    lists: {
      _model: "List",
      faveBeaches: {
        title: "Favourite Beaches",
        userid: "->users.homer"
      },
      munsterFavourites: {
        title: "Munster Favourites",
        userid: "->users.homer"
      },
      placesNotYetVisited: {
        title: "Places Not Yet Visited",
        userid: "->users.Marge"
      }
    },
    placemarks: {
      _model : "Placemark",
      placemark1 : {
        name: "Clonea",
        category: "Beach",
        description: "Lovely long beach in west waterford",
        latitude: 52.094495,
        longitude: -7.544396,
        rating: 8,
        img: "https://res.cloudinary.com/dloycvswk/image/upload/v1714496692/uvagfsaikoletstdt3sl.jpg",
        userid: "->users.homer",
        listid: "->lists.faveBeaches"
      },
      placemark2 : {
        name: "Kilmurrin",
        category: "Beach",
        description: "Great beach for surfing and swimming",
        latitude: 52.139158,
        longitude: -7.319156,
        rating: 9,
        userid: "->users.homer",
        listid: "->lists.faveBeaches"
      },
      placemark3 : {
        name: "Ardmore Coastal Walk",
        category: "Coastal Path",
        description: "Beautiful coastal path with views of shipwreck",
        latitude: 51.947993,
        longitude: -7.708807,
        rating: 8,
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark4 : {
        name: "Dunmore East",
        category: "Mobile Sauna",
        description: "Mobile sauna which you can book via the Hotpod.com",
        latitude: 52.144735,
        longitude: -6.995002,
        rating: 7,
        img: "https://res.cloudinary.com/dloycvswk/image/upload/v1714753837/xsfqtb7tw1wbsji8d5qo.jpg",
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark5 : {
        name: "Inch Beach",
        category: "Beach",
        description: "Long Beach in Co.Kerry",
        latitude: 52.140717,
        longitude: -9.982297,
        rating: 6,
        userid: "->users.marge",
        listid: "->lists.placesNotYetVisited"
      },
      placemark6 : {
        name: "Lahinch",
        category: "Surf Spot",
        description: "Great surfing beach, suitable for beginners",
        latitude: 52.933300,
        longitude: -9.348076,
        rating: 7,
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark7 : {
        name: "The Guillamene",
        category: "Diving Board",
        description: "Great spot for diving. Can give at high or low tide",
        latitude: 52.143697,
        longitude: -7.164781,
        rating: 9,
        img: "https://res.cloudinary.com/dloycvswk/image/upload/v1714752195/rrxlh3ipfqugqa40wbjs.png",
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark8 : {
        name: "Ardmore Shipwreck",
        category: "Snorkelling",
        description: "Amazing snorkelling around the shipwreck in Ardmore. Need boat to get out to it",
        latitude: 51.943535,
        longitude: -7.709990,
        rating: 6,
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark9 : {
        name: "Inchydoney Beach",
        category: "Surf Spot",
        description: "West Cork Surfing Beach",
        latitude: 51.596707,
        longitude: -8.863225,
        rating: 10,
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark10 : {
        name: "Barleycove Beach",
        category: "Beach",
        description: "Gorgeous Mizen Head Beach",
        latitude: 51.468918,
        longitude: -9.777127,
        rating: 6,
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark11 : {
        name: "Bunmahon Beach",
        category: "Beach",
        description: "Amazing snorkelling around the shipwreck in Ardmore. Need boat to get out to it",
        latitude: 52.138145,
        longitude: -7.366060,
        rating: 7,
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark12 : {
        name: "Hook Head",
        category: "Snorkelling",
        description: "Snorkelling spot and sub aqua club at Hook head",
        latitude: 52.135148,
        longitude: -6.910469,
        rating: 8,
        userid: "->users.homer",
        listid: "->lists.munsterFavourites"
      },
      placemark13 : {
        name: "The Hot Pod",
        category: "Mobile Sauna",
        description: "Mobile Sauna at Clonea Beach",
        latitude: 52.099274,
        longitude: -7.537924,
        rating: 7,
        userid: "->users.homer",
        listid: "->lists.faveBeaches"
      },
    }
  };