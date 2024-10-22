function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum = 0;
let ans = 0;


while(arr.length!=1){
	arr.sort(function(a,b){return a-b});
	sum = arr[0]+arr[1]
	ans += sum
	arr.shift()
	arr.shift()
	arr.push(sum)
	
	
}
return ans;
	

  
}

module.exports=mincost;
