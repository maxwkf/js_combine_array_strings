
		let a1 = ['a','b','c'];
		let a2 = null;
		let a3 = ['J','Q','K'];
		
		let result = [];
		
		let filters = [a1, a2, a3];
		
		filters.forEach(function(filterElement) {
			if (!filterElement) {
			  filterElement = [''];
		  }
		
		  // replicate result as input array length
		  result = selfReplication(result, filterElement ? filterElement.length : 1);
		  // foreach new result, add input data
		  result = fillMeUp(result, filterElement);
		} )
		
		/* result = selfReplication(result, a1 ? a1.length : 0);
		
		result = fillMeUp(result, a1);
		
		result = selfReplication(result, a2 ? a2.length : 0);
		
		result = fillMeUp(result, a2);
		
		result = selfReplication(result, a3 ? a3.length : 0);
		
		result = fillMeUp(result, a3);
		 */
		console.log(result);
		
		function fillMeUp(oriArr, inputArr) {
			let result = oriArr;
		  
		  for(let i = 0; i < oriArr.length; i++) {
			  oriArr[i] += inputArr[ i % inputArr.length ];
		  }
		  
		  return result;
		}
		
		function selfReplication(arrElement, multiplier) {
			let result = [];
		  if (arrElement == undefined || arrElement == null || arrElement.length == 0) {
			  arrElement = [''];
		  }
		  for(let i = 0; i < multiplier; i++) {
			  arrElement.forEach( (data) => { result.push(data); } );
		  }
		  return result;
		}
