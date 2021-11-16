//given A of length N find smallest positive integer that does not occur in A assuming each element in A is in range [-1M, 1M] and N is in range [1, 100K]

function createArr(r1, r2) {
    let arr = [];
    for(let i = r1; i < r2+1; i++) {
        arr.push(i);
    }
    return arr;
}

function solution(A) {
    let N = A.length < 100000 ? A.length : 100000;
    for (let b = 1; b < N+1; b++) {
        if (!A.includes(b) || Math.max(...A) < 0){
            return b;
        }
    }
    return Math.max(...A) + 1;
}

let b = solution(createArr(1, 100000))
console.log(b)
