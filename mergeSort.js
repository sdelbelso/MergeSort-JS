function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	
	// divide
	const mid = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, mid - 1);
	const rightArr = arr.slice(mid);
	
	return merge(mergeSort(leftArr), mergeSort(righArr));
}

// conquer
function merge(leftArr, rightArr) {
	const sortedArr = [];
	const leftIndex = 0;
	const rightIndex = 0;
	
	while(leftIndex < leftArr.length && rightIndex < righArr.length) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			sortedArr.push(leftArr[leftIndex]);
			leftIndex++;
		} else {
			sortedArr.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}
	
	// concat the rest of the arrays
	return sortedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}
