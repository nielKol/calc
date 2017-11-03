function ff()
{
	var aNum = parseInt(aTxt.value);
	var bNum = parseInt(bTxt.value);
	var oPer = oTxt.value;
	var result = calc (aNum, bNum, oPer);
	resTxt.value = result;
}

function calc (a, b, op)
{
	var res = 0;
	if(op == '+')
		res = a + b;
	else if (op == '-')
		res = a-b;
	else if (op == '*')
		res = a*b;
	else if(op == '/')
		res = a/b;
	else res = 'Operator not recognised';
	return res;		
}