const memes = `
balls.png
bingus.gif
hewwo.gif
gyuyhuahuahrhgrhuifufrraujl.gif
get real.gif
his ass is NOT lifting.png
fibrous powder.png
dance.gif
evil and treacherous and malicious.gif
Byuntear.gif
borgir.gif
boom.gif
i am going insane.gif
money getting tight.png
miguel.gif
mind blown.gif
this delinquint died.png
yay.gif
will you him his order.png
uhhhh.png
`.split('\n'); memes.splice(0, 1); memes.splice(memes.length - 1, 1);
const meme = memes[Math.round(Math.random() * (memes.length - 1))];
document.getElementById("memediv").innerHTML = `<img src="assets/images/memes/${meme}" id="meme">`;