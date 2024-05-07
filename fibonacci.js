// solve it iteratively

function fibs(target) {
    let arr = [];
    for (let i = 0; i < target; i++) {
        if (i < 2) {
            arr.push(i);
        } else {
            let next = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(next);
        }
    }
    return arr;
}

console.log(fibs(8));

// solving it recursivley
function fibsRec(target) {
    if (target == 0 || target == 1) {
        return target;
    }
    return fibsRec(target - 1) + fibsRec(target - 2);
}

console.log(fibsRec(8));

// Merge sort algorithim

function mergeSort(arr) {
    if (arr.length < 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function mergeSortIntegers(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSortIntegers(leftHalf);
    console.log('done with left half')
    const sortedRight = mergeSortIntegers(rightHalf);
    console.log('done with right half')

    return mergeIntegers(sortedLeft, sortedRight);
}

function mergeIntegers(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    console.log('while loop done now to concat')
    result = result.concat(left.slice(i)).concat(right.slice(j));
    console.log(result)
    
    return result;
}

console.log(mergeSortIntegers([3, 2, 1, 13, 8, 5, 0, 1]));
