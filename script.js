function decimalToBinary(num) {
  //Write you code here
	let res=""
	while(num!=0){

		res=res+num%2

		num=Math.floor(num/2)

		
	}

	return res
  
}

let num=prompt("Enter a number")

alert(decimalToBinary(num))

window.decimalToBinary = decimalToBinary;
