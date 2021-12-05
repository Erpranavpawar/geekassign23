var calculator = {
    'num1': 10,
    'num2' : 7,
    'res' :0,
    'input' : [1,2,3,4,5,6,7,8],
    'append_input' : function(number){
    this.input.append(number);
  
  },
  'sum' : function() {
    this.res = this.num1 + this.num2;
    return this.res;
  },
   'div' : function() {
    this.res = this.num1 % this.num2;
    return this.res;
   },
   'mul' : function() {
    this.res = this.num1 * this.num2;
    return this.res;
   },
   'diff' : function() {
    this.res = this.num1 - this.num2;
    return this.res;
   },
  };
  
  var sumz = calculator.sum();
  console.log(sumz);

  var dive = calculator.div();
  console.log(dive);

  var multi = calculator.mul();
  console.log(multi);

  var differ = calculator.diff();
  console.log(differ);