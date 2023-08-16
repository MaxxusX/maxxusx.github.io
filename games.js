const data = [
	// thanks syce!!!!
	//
    //{
    //    name: "example",
    //    description: "example",
    //    link: `game/example.html`,
    //},
	{
        name: "Breakout",
        description: "shoot ball at brick",
        link: "game/breakout.html",
    },
    {
        name: "Donkey Kong",
        description: "climb thing and defeat evil monkey",
        link: "game/donkey-kong.html",
    },
	{
        name: "Duck Hunt",
        description: "shoot duck",
        link: "game/duck-hunt.html",
    },
	{
        name: "Invaders",
        description: "BROKEN -- WILLFIX",
        link: "game/invaders.html",
    },
	{
        name: "Pacman",
        description: "eat yummy dot",
        link: "game/pacman-js.html",
    },
	{
        name: "Pong",
        description: "pong",
        link: "game/pong.html",
    },
	{
        name: "Q*bert",
        description: "orange man does funny stuff with weird controls",
        link: "game/qbert.html",
    },
	{
        name: "Snake",
        description: "snek",
        link: "game/snake.html",
    },
	{
        name: "Tetris",
        description: "tetris!!!! btw press enter for instant drop",
        link: "game/tetris.html",
    },
]



const gamesdiv = document.getElementById("games")
data.forEach(game => {
    gamesdiv.innerHTML += `<a style="font-size:20px;" rel="nofollow" href="${game.link}"><h3>${game.name}</h3></a>
    ${game.description}
    <br><br>`
})