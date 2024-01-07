// this script is used by EVERY PAGE on this site.

function genString(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
};

const obfuscated = document.getElementsByClassName("obfuscated")
setInterval(function() {
	for (let i = 0; i < obfuscated.length; i++) {
		const elem = obfuscated[i];
		elem.innerText = genString(elem.innerText.length);
	};
}, 10)