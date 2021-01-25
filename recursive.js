// ================== Counting Sheep ==========================
// TODO: 1. Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// input: number (5)
// expected output: number: 'Another sheep jumps over the fence'
// base case: number (0)

function howManySheeps(num){
    // base case
    if (num === 0){
        console.log('All sheep jumped over the fence');
        return;
    }
    //general case
    if (num > 0){
        console.log(`${num}: Another sheep jumped over the fence`);
        howManySheeps(num-1);
    }
}
