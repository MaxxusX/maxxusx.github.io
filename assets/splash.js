const splashes = [
'give me 88x31s',
'we love alpersocial',
'we love alpersocial',//double the chance of appearing (we love alpersocial)
'hi',
'errrmmmm ackshully🤓👆',
'i\'ve made a severe and continuous lapse in my judgement',
]; // add splashes here
document.getElementById("splash").innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))];