import { getFish } from './database.js';

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from './FishList.js';

const parentHTMLElement = document.querySelector(".fishes__list")

parentHTMLElement.innerHTML = FishList()