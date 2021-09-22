var addTwoNumbers = (l1, l2) => {
	//l1 and l2 are linked-lists
	//return their reversed sum	
	
	let add1, add2; //add1 is always the bigger of the two linked-lists
	if(lengthLL(l1) >= lengthLL(l2)) {
		[add1, add2] = [l1, l2];
	} else {
		[add1, add2] = [l2, l1];
	}
	
	let res = add1;
	let head = add1;
	let carry = 0;
	while (res !== null) {	
		let val = (carry + add1.val + add2.val);
		carry = val >= 10 ? 1 : 0; //one or zero
		res.val = val % 10;

		if(add2.next === null) { 
			add2.next = new ListNode(0);
		} 
		
		if (add1.next === null && (carry > 0)) {
			add1.next = new ListNode(0);
			res.next = new ListNode(0);
		} 

		add1 = add1.next;
		add2 = add2.next
		res = res.next;	
	}

	return head;
}

//possible worst-case scenarios..
let l1 = createLL([2,4,9]);
//let l1 = createLL([9,9,9,9,9,9,9]);
//let l1 = createLL([1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
//let l2 = createLL([9,9,9,9,9,9,9]);
let l2 = createLL([5,6,4]);

console.log(arrayFromLL(addTwoNumbers(l1, l2)));



