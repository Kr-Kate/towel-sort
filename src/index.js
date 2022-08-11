module.exports = function towelSort (matrix) {
  try{
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 1) {
      result.push(matrix[i].reverse());
    }
    else{result.push(matrix[i])}
  }
  return result.flat();}
  catch{return []}
}
