function sum(args) {
  const arr = arguments;
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }//for

  return totalSum;
}

// console.log(sum(1,2,3,4,5));


function restSum(...args) {
  let totalSum = 0;

  for (let i = 0; i < args.length; i++) {
    totalSum += args[i];
  }//for

  return totalSum;
}

// console.log(restSum(1,2,3,4,5));
////////////////////////////////////////////////////////////////////////
Function.prototype.myBind = function(context) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1); //takes all arguments other than context

  return function() {
    const callArgs = Array.from(arguments);

    return () => fn.apply(context, bindArgs.concat(callArgs));

  };
};


Function.prototype.myBind2 = function (context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};
////////////////////////////////////////////////////////////////////////
function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let totalSum = 0;

      numbers.forEach((el) => { totalSum += el; });
      return totalSum;
    } else {
      return _curriedSum;
    }// if/else
  }//_curriedSum

  return _curriedSum;
}//curriedSum

// const sumThree = curriedSum(3);
// const sumFive = curriedSum(5);
// console.log(sumThree(1)(1)(1));
// console.log(sumFive(2)(2)(2)(2)(2));

////////////////////////////////////////////////////////////////////////
Function.prototype.curry = function(numArgs) {
  let fn = this;
  const numbers = [];

  function _curry(num) {
    numbers.push(num);

    if(numbers.length === numArgs) {
      return fn.apply(null, numbers);
    } else {
      return _curry;
    }// if/else
  }// _curry

  return _curry;
};

console.log(sum.curry(3)(2)(2)(2));

Function.prototype.curry = function(numArgs) {
  const args = [];
  const _curry = (num) => {
    args.push(num);
    if(args.length === numArgs) {
      return this(...args);
    } else {
      return _curry;
    }// if/else
  };// _curry

  return _curry;
};

console.log(sum.curry(3)(2)(2)(2));
