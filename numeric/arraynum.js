//given A of length N find smallest positive integer that does not occur in A assuming each element in A is in range [-1M, 1M] and N is in range [1, 100K]

function uniqSort(arr = []) {
   const map = {};
   const res = [];
   for (let i = 0; i < arr.length; i++) {
      if (!map[arr[i]]) {
         map[arr[i]] = true;
         res.push(arr[i]);
      };
   };
    return res.sort((a, b) => a - b);
};

function solution(A) {
    let c = 1;
    A = uniqSort(A);
    let N = Math.min(A.length, 100000);
    for (let b = 0; b < N; b++) {
        if(A[b] > 0) {
            if(A[b] != c) {
                return c;
            }
            c += 1;
        } 
    }
    return c;
}

let d = solution([...Array(100000).keys()])
let e = solution([1, 3, 6, 4, 1, 2])
let f = solution([-1,-3, 1, 2, 3, 4, 5])

console.log(d, e, f)
