const task1 = (arr) => {
    return arr.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
}



const task2 = (arr1, arr2) => {
    const uniqueVal = (arr) => arr.filter((el, id) => arr.indexOf(el) === id);
    const genEl = (arr) => arr.filter((el, id) => arr.indexOf(el) !== id);
  
    return genEl(uniqueVal(arr1).concat(uniqueVal(arr2)));
  };


  const task3 = (arr) => {
    return (newObject = {
      sum: arr.reduce((acc, cur) => acc + cur, 0),
      average: arr.reduce((acc, cur) => acc + cur, 0) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
    });
  };
  
console.log(task1(["apple", "banaNA", "kiWi", "ORANGE"]));
console.log(task2([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]));
console.log(task3([1, 2, 3, 4, 5]));