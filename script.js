function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
let res = [];
let sum = arr[0];
arr.map((currEle,index) => {
  if(index>=1){
  sum+=currEle;
  res.push(sum);
  }
})
let ans = 0 ;
res.forEach((currEle) => {
  ans += currEle;
})
return ans;
  
}

module.exports=mincost;
