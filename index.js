const task1 = (arr) => {
    return arr.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
}

console.log(task1(["apple", "banaNA", "kiWi", "ORANGE"]));