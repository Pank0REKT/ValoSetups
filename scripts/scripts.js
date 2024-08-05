const heroes = [
    {
        "name":"Cypher",
        "maps":["Sunset"],
        "imageLink":"images/heroes/Cypher_icon.webp",
        "pageLink": "Cypher.html"
    },
    {
        "name":"Deadlock",
        "maps":[],
        "imageLink":"images/heroes/Deadlock_icon.webp",
        "pageLink": ""
    },
]

function buildHeroesGrid(){
    const grid = document.getElementById("heroes-grid");
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i];
        const card = `<div class="hero">
            <a href="${hero.pageLink}">
                <img src="${hero.imageLink}" alt="cypher hero" height="200px"/>
            </a>
            <p>${hero.name}</p>
        </div>`;
        grid.innerHTML += card;
    }
}

function buildMaps(hero)
{
    const maps = heroes.find((item) => item.name === hero).maps;
    console.log(maps);
    const menu = document.getElementById("nav-menu");
    for (let i = 0; i < maps.length; i++) {
        console.log(maps[i]);
        menu.innerHTML += `<a>${maps[i]}</a>`;
    }
}