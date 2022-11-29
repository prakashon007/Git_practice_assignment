// problem1

let prime=0;
let num=13
    for(i=1;i<=num;i++){
        if(num%i==1)
        prime++
    }
    if(prime==2){
        console.log("Yes");
    }
    else{
        console.log("No");
    }

//problem2

let rev ="";
let str="prakash"
  for(let i=str.length;i>=0;i--)
      rev=rev+str[i];
  
  if(rev==str){
      console.log("Yes");
 }
 else{
      console.log("No");
 } 