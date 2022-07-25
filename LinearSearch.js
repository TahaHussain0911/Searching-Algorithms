function linearsearch(arr, search) {
    return arr.findIndex(element => element == search);
}
console.log(linearsearch([2, 4, 36, 17, 167, 215, 12, 34, 1],34))
