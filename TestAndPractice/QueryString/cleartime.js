function hello () {  
    console.log("This will not run at all");  
  }  
  console.log("It is supposed to print the data immediately")
  var imm = setImmediate(hello);
  clearImmediate(imm);

  function hello () {  
    console.log("This will Not Run at all");  
  }  
  console.log("It is supposed Print the data recursively after a delay of 2000ms again and again")
  var s_int = setInterval(hello,2000); 
  clearInterval(s_int);