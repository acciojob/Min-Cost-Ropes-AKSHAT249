function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum = 0;
	arr.sort();
	let res = arr.map((currEle)=> {
		sum = sum+currEle;
		return sum;
		
		
	})
	let ans = 0;
	res.forEach( (currEle, index) => {
		if(index>0){
			ans += currEle;
		}
	});

	return ans;
  
}

module.exports=mincost;
