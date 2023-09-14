const data = [
	// thanks syce!!!!
	//
    //{
    //    name: "Example",
    //    description: "Example",
    //    link: "game/example.html",
	//	  devices: "PC, Mobile",
	//	  unblocked: "yes",
    //},
	{
        name: "Breakout",
        description: "shoot ball at brick",
        link: "game/breakout.html",
		devices: "PC, Mobile",
		unblocked: "no",
    },
    {
        name: "Donkey Kong",
        description: "climb thing and defeat evil monkey",
        link: "game/donkey-kong.html",
		devices: "PC",
		unblocked: "no",
    },
	{
        name: "Duck Hunt",
        description: "shoot duck",
        link: "game/duck-hunt.html",
		devices: "PC, Mobile",
		unblocked: "no",
    },
	{
        name: "Invaders",
        description: "BROKEN -- WILLFIX",
        link: "game/invaders.html",
		devices: "PC",
		unblocked: "yes",
    },
	{
        name: "Pacman",
        description: "eat yummy dot",
        link: "game/pacman-js.html",
		devices: "PC",
		unblocked: "no",
    },
	{
        name: "Pong",
        description: "pong",
        link: "game/pong.html",
		devices: "PC, Mobile",
		unblocked: "yes",
    },
	{
        name: "Q*bert",
        description: "orange man does funny stuff with weird controls",
        link: "game/qbert.html",
		devices: "PC",
		unblocked: "no",
    },
	{
        name: "Snake",
        description: "snek",
        link: "game/snake.html",
		devices: "PC",
		unblocked: "yes",
    },
	{
        name: "Tetris",
        description: "tetris!!!! btw press enter for instant drop",
        link: "game/tetris.html",
		devices: "PC",
		unblocked: "yes",
    },
	{
        name: "Getting Over It",
        description: "🤬",
        link: "game/gettingoverit.html",
		devices: "PC, Mobile",
		unblocked: "yes",
    },
	{
        name: "Geometry Dash",
        description: "robert topala",
        link: "game/geometrydash.html",
		devices: "PC, Mobile",
		unblocked: "yes",
    },
]



const gamesdiv = document.getElementById("games")
data.forEach(game => {
    gamesdiv.innerHTML += `<a style="font-size:20px;" rel="nofollow" href="${game.link}"><h3>${game.name}</h3></a>
	<b>${game.devices}</b>
	<br>
	<b>unblocked: ${game.unblocked}</b>
	<br>
    ${game.description}
    <br><br>`
})