// 2
const countVowels = (prSting) => {
    const vowels = ["e", "u", "o", "a", "i"];
    let count = 0;

    for (let i = 0; i < prSting.length; i++) {
        if (vowels.includes(prSting[i])) {
            console.log(vowels.includes(prSting[i]));
            count++;
        }
    }

    console.log(count);
};

countVowels("anhyeuem");
countVowels("Viet Nam vo dich. Malaysia tuoi gi :))");
countVowels("");
countVowels("Javascript is a beautiful programming language");
