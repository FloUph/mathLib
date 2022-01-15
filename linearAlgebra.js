// Library for linaer Algebra

// Type Definitions

function Scalar(value, unit) { 
  this.value = value;
  this.unit = unit;
  
  scalar = this.value
  
  return scalar;
}

function Vector(rows, unit) {
  this.rows = rows;
  this.unit = unit;
  
  vector = [];
  for(let i=0; i < this.rows; i++){
    vector[i] = 1;
  }
  return vector;
}

function Matrix(rows, cols, unit) {
  this.rows = rows;
  this.cols = cols;
  this.unit = unit;
  
  matrix = [];
  for(let i=0; i < rows; i++){
    matrix[i] = [];
    for(let j=0; j < cols; j++){
      matrix[i][j] = 1;
    }
  }
  return matrix;
}
