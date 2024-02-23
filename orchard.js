///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0;

// Loop through all the elements from 3 arrays and add them to 'totalAcres' to find out total number of acres picked.
for (let i = 0; i < 7; i++){
    totalAcres = totalAcres + fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log("Total acres : ",totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//divided totalAcres by total number of days worked to find out avarage daily acres picked per day
let averageDailyAcres = totalAcres / 21
console.log("Average daily acres : ",averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
//in the while loop Subtract 'averageDailyAcres' from 'acresLeft' until its value is greater than 0 to find out total number of days
// required to finish remaining acres. Also increament days value by 1 everytime it loop executes.

while (acresLeft > 0) {
    days++;
    acresLeft-=averageDailyAcres
}
console.log(`You will need ${days} more days to finish remaining 174 acre.`)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
/*const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55*/

// CODE HERE
//initialize empty array
let fujiTons = []
let galaTons = []
let pinkTons = []

//As each acre yields 6.5 tons of apples so multiply every element in the above 3 array by 6.5 to find out the daily amount of apples picked, in tons, for each variety.
for (let i = 0; i< 7; i++) {
    fujiTons.push(fujiAcres[i] * 6.5)
    galaTons.push(galaAcres[i] * 6.5)
    pinkTons.push(pinkAcres[i] * 6.5)

}
console.log("Fuji apples in tons: ",fujiTons)
console.log("Gala apples in tons: ",galaTons)
console.log("Pink apples in tons: ",pinkTons)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
//initialize variables assign 0 to each variable
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

//Loop throught each variety of array and add each element to get total in tons
for (let i = 0; i < 7; i++){
    fujiPounds += fujiTons[i]
    galaPounds += galaTons[i]
    pinkPounds += pinkTons[i]
}

//multiply by 2000 to convert in pounds
console.log("fujiPounds : ",fujiPounds*2000)
console.log("galaPounds : ",galaPounds*2000)
console.log("pinkPounds : ",pinkPounds*2000)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

//multiply total pounds of apples by given price per pound to find profit
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("Total profit : $",fujiProfit)
console.log("Total profit : $",galaProfit)
console.log("Total profit : $",pinkProfit)





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//add profit of each variety get get total profit
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Total profit : $",totalProfit)