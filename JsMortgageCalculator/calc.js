window.onload = function()
	{
	  document.getElementById("apr").focus();
	  document.getElementById("sbt").onclick = getValues;
	}
	
	function getFocus() {           
	  document.getElementById("apr").focus();
	}
	
	//used to validate the form and check for empty fields 
	function validateForm()
	{
	  if ((document.getElementById("apr").value=="") || (document.getElementById("amt").value=="")) {
	    alert("empty fields must be filled out!");
		document.getElementById("apr").focus();
		return false;
	  }
	  if((document.getElementById("apr").value < 0) || (document.getElementById("apr").value > 25))
	  {
	    alert("Invalid number for APR value");
		document.getElementById("apr").focus();
		return false;
	  }
	}
	//use toFixed(2) to set the precision of the mPayment.
	function getValues()
	{
	  term = document.getElementById("trm").value;
	  apr = document.getElementById("apr").value;
	  amt = document.getElementById("amt").value;
	  apr /= 1200;
	  term *= 12;
	  mPmt = calculatePayment();
	  document.getElementById("pmt").value = "$" + mPmt.toFixed(2);
	}
	function calculatePayment()
	{
	  var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
	  return payment;
	}
