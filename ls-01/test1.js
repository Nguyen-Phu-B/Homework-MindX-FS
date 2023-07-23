// 1

const fizzBuzz = () => {
    let result = "";

    for (let i = 1; i < 16; i++) {
        if (i % 3 == 0) {
            result += "Fizz";
        } else if (i % 5 == 0) {
            result += "Buzz";
        } else if (i % 3 == 0 && i % 5 == 0) {
            result += "FizzBuzz";
        }

        console.log(i, result);
    }
};

fizzBuzz();
