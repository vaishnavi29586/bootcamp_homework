function addArrays(...args) {
    return args.reduce((total,arr)=>total.concat(arr));
  }
  
  console.log(addArrays([2,3,4],[5,4,6],[7,8,4])) 
  