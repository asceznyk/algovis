var ListNode = function(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

var createLL = (arr) => {
	let head = new ListNode(arr[0]);
	let curr = head;
	for(let i = 1; i < arr.length; i++) {
		curr.next = i < arr.length ? new ListNode(arr[i]) : null;
		curr = curr.next;
	}

	return head;
}

var reverseLL = (ll) => {
	let curr = ll //head of ll
	let prev = null

	while (curr !== null) {
		let node = curr.next
		curr.next = prev
		prev = curr
		curr = node
	}

	return prev;
}

var arrayFromLL = (ll) => {
	let arr = []
	while(ll !== null) {
		arr.push(ll.val);
		ll = ll.next
	}

	return arr;
}

var numberFromLL = (ll) => {
	let p = 0;
	let num = 0;
	while(ll !== null) {
		num += Math.pow(10, p) * ll.val;
		ll = ll.next;
		p++;
	}
	return num;
}

var llFromNumber = (num) => {
	let arr = num.toString().split('');
	arr = arr.map(n => parseInt(n))
	return createLL(arr);
}

var addTwoNumbers = (l1, l2) => {
	let num1 = numberFromLL(l1);
	let num2 = numberFromLL(l2);
	let num3 = num1 + num2;

	console.log(num1, num2, num3)

	let ll = llFromNumber(num3);
	ll = reverseLL(ll);
	return ll;
}

let l1 = createLL([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
let l2 = createLL([5,6,4]);

console.log(arrayFromLL(addTwoNumbers(l1, l2)));



