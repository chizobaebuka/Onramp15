// DESCRIPTION:
// Find the minimum dollar bill's count to represent some value based on the availables bills.

// You will receive the value and an array as input (the array contains the available bills).

// For instance:

// minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

// minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

// minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

// minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

// It is guaranteed that the value can always be divided into given bills, and there are no "tricky" edge cases.

function minimumBill(value, numArr){
    let bill = 0;
    numArr.sort((a,b) => b-a).forEach((bill) => {
        bill += parseInt(value / bill);
        value %= bill;
    })
    return bill;
}

// OR 

function minimumBillCount(value, bills) {
    // sort bills in descending order
    bills.sort((a, b) => b - a); 
    // initializing the billCOunt to 0
    let billCount = 0;
    // iterating through the bills array to find the new billCount
    for (let i = 0; i < bills.length; i++) {
        // while the value given is >= bills[i]
        while (value >= bills[i]) {
            value -= bills[i];
            billCount++;
        }
    }
    return billCount;
}

// OR

function minimumBillCount(value, bills) {
    // sort the bills array in descending order
    bills.sort((a, b) => b - a);

    let count = 0;
    let i = 0;
    while (value > 0) {
        if (value >= bills[i]) {
            count += Math.floor(value / bills[i]);
            value = value % bills[i];
        }
        i++;
    }
    return count;
}

