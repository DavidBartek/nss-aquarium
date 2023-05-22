const database = {
    fish: [
        {
            name: "Bart",
            species: "octopus",
            location: "St. Louis Zoo",
            diet: "crustaceans",
            length: 10,
            image: "https://cdn.britannica.com/32/162032-050-1ACE231F/Day-octopus.jpg"
        },
        {
            name: "Sandy",
            species: "land squirrel",
            location: "Texas",
            diet: "nuts",
            length: 15,
            image: "https://img.texasmonthly.com/2021/10/Texas-Squirrels-Gone-Wild.jpg?auto=compress&crop=faces&fit=fit&fm=webp&h=0&ixlib=php-3.3.1&q=45&w=1820"
        },
        {
            name: "Kevin",
            species: "sunfish",
            location: "Gulf of Mexico",
            diet: "cytoplankton",
            length: 50,
            image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3N1bmZpc2guanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0=",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}