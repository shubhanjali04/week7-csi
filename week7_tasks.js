// ----------------------
// 1. Join Array Elements
// ----------------------

var myColor = ["Red", "Green", "White", "Black"];

console.log("1. Join using comma: " + myColor.join()) // Default comma
console.log("2. Join using toString: " + myColor.toString()) // toString also uses comma
console.log("3. Join using +: " + myColor.join("+")) // Custom separator: "+"

// -------------------------------
// 2. Most Frequent Item in Array
// -------------------------------

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFrequent(arr) {
    let frequency = {}
    let maxCount = 0
    let mostItem = null

    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1
        if (frequency[item] > maxCount) {
            maxCount = frequency[item]
            mostItem = item
        }
    }

    console.log(`\n4. Most Frequent Item: ${mostItem} (${maxCount} times)`)
}

mostFrequent(arr1)

// ----------------------
// 3. Truncate a String
// ----------------------

function truncateString(str, num) {
    // Slices the string from index 0 to num
    return str.slice(0, num)
}

console.log("\n5. Truncate Example:")
console.log(truncateString("Robin Singh", 4)) // Output: "Robi"

// ---------------------------
// 4. Capitalize Each Word
// ---------------------------

function capitalizeWords(str) {
    return str
        .split(" ") // Split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(" "); // Join back with spaces
}

console.log("\n6. Capitalize Example:")
console.log(capitalizeWords('js string exercises'))// Output: "Js String Exercises"

// ------------------------------------
// 5. Filter Array Between Two Numbers
// ------------------------------------

function arrBetween(a, b, arr) {
    // Filter numbers strictly between a and b
    return arr.filter(num => num > a && num < b)
}

console.log("\n7. Filter Array Between:")
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))// ➞ [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) // ➞ [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78])) // ➞ []

// -----------------------------
// 6. Find Index in an Array
// -----------------------------

function findIndex(arr, value) {
    // Returns index of value or -1 if not found
    return arr.indexOf(value);
}

console.log("\n8. Find Index Example:");
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // ➞ 2
console.log(findIndex(["js", "python", "cpp"], "java")); // ➞ -1

// --------------------------
// BONUS: Reverse a String
// --------------------------

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log("\n9. Bonus - Reverse String:");
console.log(reverseString("CSI Assignment")); // ➞ "tnemngissA ISC"

// --------------------------
// BONUS: Remove Duplicates
// --------------------------

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log("\n10. Bonus - Remove Duplicates:");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // ➞ [1, 2, 3, 4, 5]