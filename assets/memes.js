const memes = `
balls.webp
bingus.gif
hewwo.gif
gyuyhuahuahrhgrhuifufrraujl.gif
get real.gif
his ass is NOT lifting.webp
fibrous powder.webp
dance.gif
evil and treacherous and malicious.gif
Byuntear.gif
borgir.gif
boom.gif
i am going insane.gif
money getting tight.webp
miguel.gif
mind blown.gif
this delinquint died.webp
yay.gif
will you him his order.webp
uhhhh.webp
catscale.webp
harmacy.webp
fanter.webp
atomicbomb.gif
cheese.gif
cat-the-cat.gif
post this cat.gif
19th.gif
heroin.gif
too fat.gif
portable.gif
krnl-cracked.gif
checking key.gif
wrd.gif
do not the cat.gif
krnl-fluxus.gif
update fluxus.gif
roblox.gif
roblox-mfs-me-like-roblox.gif
264.gif
stare.gif
`.split('\n'); memes.splice(0, 1); memes.splice(memes.length - 1, 1);

for (var i = memes.length - 1; i > 0; i--) {// shuffle array
	var j = Math.floor(Math.random() * (i + 1));
	var temp = memes[i];
	memes[i] = memes[j];
	memes[j] = temp;
};

const meme = memes[Math.round(Math.random() * (memes.length - 1))];
document.getElementById("memediv").innerHTML = `<img src="assets/images/memes/${meme}" id="meme">`;