const database = {
    fish: [
        {
            name: "Bart",
            species: "octopus",
            origin: "St. Louis Zoo",
            diet: "crustaceans",
            size: 10,
            image: "https://cdn.britannica.com/32/162032-050-1ACE231F/Day-octopus.jpg"
        },
        {
            name: "Sandy",
            species: "land squirrel",
            origin: "Texas",
            diet: "nuts",
            size: 15,
            image: "https://static.wikia.nocookie.net/un-spongebob/images/0/04/Not_a_Grey_Squirrel..lol%2C_or_English..come_to_that..-O%29.jpg/revision/latest?cb=20100906234553"
        },
        {
            name: "Kevin",
            species: "sunfish",
            origin: "Gulf of Mexico",
            diet: "cytoplankton",
            length: 50,
            image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3N1bmZpc2guanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0=",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}