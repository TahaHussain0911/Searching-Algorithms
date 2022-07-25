/*for Binary search the array should be sorted
*/
function binarysearch(arr, search) {
    let leftindex = 0;
    let rightindex = arr.length - 1;
    while (rightindex >= leftindex) {
        const middle = Math.floor(leftindex+rightindex / 2);
        if (arr[middle] == search) {
            return middle;
        }
        else if (search < arr[middle]) {
            rightindex=middle-1;
        }
        else {
            leftindex=middle+1;
        }
    }
    return -1
}
console.log(binarysearch([2,3,4,10,34,115], 34))
