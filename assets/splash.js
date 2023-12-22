const splashes = `
we love alpersocial
hi
errrmmmm ackshully🤓👆
i've made a severe and continuous lapse in my judgement
limited edition!!!
Made in America🇺🇸🇺🇸🇺🇸!
javascrip
insert minecraft splash here
1337 haxxor
pwned
n00b
you just got BEAMED
opn sorce
1% bug free
ULTIMATE edition!!!!
water proof
01101000 01101001
at least 1 line of code
supercalifragilisticexpialidocious
Michael! Don't leave me here! Michael! MICHAEL!
Crazy? I was crazy once.
you should kill yourself NOW!
Greetings! Quandale Dingle here.
top ten n-words: number 10. nett. number 9. never. number 8. not. number 7. Norway. number 6. noice. number 5. niglet. number 4. nose. number 3. nutsack. number 2. nice. number 1. Nigeria.
Stop posting about BALLER. I’m tired of seeing it! My friends on TikTok send me BALLER. On discord it’s fucking BALLER. I was on studio origami right? And all of the channels, were just BALLER. I showed my super scuffle art to my girlfriend (bitch you ain’t got no damn girlfriend 😂 stop the CAP‼️🧢) I said his name when the BALLER is BALLER.
Hello and, again, welcome to the Aperture Science computer-aided enrichment center.
Well, you found me. Congratulations. Was it worth it?
A parent struggles with potty training their three-year-old son, who developed a paralyzing fear of toilets after being exposed to unsettling "skibidi toilet" YouTube videos
hot and ready
do u want free chicken nuggets? - tangomangle
`.split('\n');
// so it doesnt think the empty space after/before the ` is a splash
splashes.splice(0, 1); splashes.splice(splashes.length - 1, 1);

if (Math.floor(Math.random() * 200) == 1) {
    document.getElementById("splash").innerHTML = "theres a 1/200 chance of seeing this"
} else {
    document.getElementById("splash").innerHTML = splashes[Math.floor(Math.random() * (splashes.length - 1))];
}