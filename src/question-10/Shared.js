
export function sum (numbers) {
    if (numbers && numbers.length > 0) {
        // forEach () iterates each element in the arr
        let result = 0;    
        numbers. forEach (x => {
            result += x;
        });    
        return result;
    }
    return 0;
}
