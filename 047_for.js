//计算1~10之间所有整数的和
/*
for(var i=1,sum=0;i<=10;i++){
  sum+=i;
}
var i=1,sum=0;
for(;i<=10;i++){
  sum+=i;
}
var i=1,sum=0;
for(;i<=10;){
  sum+=i;
  i++;
}
var i=1,sum=0;
for(;;){
  //当i为11的时候，结束循环
  if(i==11){
    break;
  }
  sum+=i;
  //console.log(i);
  i++;
}
console.log(sum);
for(var i=1,j=5;i<=5;i++,j-=2){
  console.log(i+','+j);
}
//如果循环条件表达式中有多个条件，以最后一个条件为准
for(var i=1,j=5;j>=0,i<=10;i++,j-=2){
  console.log(i+','+j);
}
*/
//练习：计算1/10+2/9+3/8+4/7+5/6....10/1
for(var i=1,j=10,sum=0;i<=10;i++,j--){
  sum+=i/j
  //sum=sum+i/j;
}
console.log(sum);
