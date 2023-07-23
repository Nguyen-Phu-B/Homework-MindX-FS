// 3
const arr = ["one", "one", "one", "two", "two", "three", "one"];

const removeDuplicateFromArray = (prArr) => {
    rs = prArr.filter((item, index) => prArr.indexOf(item) === index);

    console.log(rs);
};

removeDuplicateFromArray(arr);
