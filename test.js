function compute(a, b) { // JavaScript numbers are always stored as double precision floating point numbers, IEEE 754 standard. 
	let arr=[],arr1=[],ans=[];	// arr~"numerator array"
	// check for input errors
	if (typeof b !== 'object' || !b.every(o=> typeof o === 'number')){ // make sure each element is a number
		console.log([]);return []; 
	}
	if(a <=0 || a%1 !==0 || b.length===0 || b === null || typeof b !== 'object' ) { // 0 length, null, non-integer, non-natural number case
		console.log([]);return [];
	}
	// determine output array
	if(b.length>0){ // 1 length case
		arr.push([b[0]]); 
	}
	if(b.length>1 && a>1){  //2 length 
			arr1 = b.slice(0,2)
			arr.push(arr1)
	} 	
	if(b.length>2) { //3+ length case
		for (let i=0; i<a && i+3<=b.length;i++) { // fills array till window size
			if(3+i<=a) {
				arr1 = b.slice(0,3+i)
				arr.push(arr1)				
			// console.log(arr1) 
			} 
		}
		for (let i=1; i+a<=b.length ;i++) { // fills array till input length
				arr1 = b.slice(i,i+a)
				arr.push(arr1)				
				// console.log(arr1)
		}				
	}
	// console.log(arr);
	for(let elem of arr) { // push moving avg values into output array
		let sum = elem.reduce(function(a, b) { return a + b; }); //sum of "numerator array"
		let avg = sum/elem.length // calculate avg.
		ans.push(avg);
	}
	console.log(ans) // **Note, parseFloat(),toFixed() could provide single decimal digit value
	return ans;
}

compute(3, [0,1,2,3,4]); //[0,0.5,1,2,3]
// compute(5, [0,1,-2,3,-4,5,-6,7,-8,9]); 
// compute(51, [0,1,-2,3,-4,5,-6,7,-8,9]); 
// issues that can occur unexpected token i.e. compute(%,[$,#]) 

/* Instructions to run application. */
// Run by typing node <file name> on Node.js cli.
// Note, the code is written in JavaScript.  Change the compute function on line 42 to test out cases.

/*Description of solution*/
// I've left a lot of notes next to the code for elaboration.
// Firstly, I wrote a checker for the two arguments inputed into compute.
// Here, you can see I checked to make sure the first argument is an integer or natural number, and the second argument is an array of number types.
// Secondly, I wrote a case for array length 0, 1, 2, and 3.  The reason I have a 2 length case is
// to make my code more efficient since I wouldn't need a for-loop if the length of the array is 2. 
// Basically, my approach is to create the "numerator array" over the length of the numerator. An
// example for your compute(3, [0,1,2,3,4]); case would display the "numerator array" as 
// [ [ 0 ], [ 0, 1 ], [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ].
// Hence, the avg would then provide the sought after output array of [0,0.5,1,2,3]. 
// I've tested various cases ,and this appears to be the correct solution.

// This code takes up O(N) time and O(N) space

