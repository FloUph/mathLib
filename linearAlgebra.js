// Library for linaer Algebra

// Type Definitions

function Scalar(value) { 
  this.value = value;
  
  scalar = this.value
  return scalar;
}

function Vector(rows) {
  this.rows = rows;

  vector = [];
  for(let i=0; i < this.rows; i++){
    vector[i] = 1;
  }
  return vector;
}

function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  
  matrix = [];
  for(let i=0; i < rows; i++){
    matrix[i] = [];
    for(let j=0; j < cols; j++){
      matrix[i][j] = 1;
    }
  }
  return matrix;
}
