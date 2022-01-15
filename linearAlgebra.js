// Library for linaer Algebra

// Type Definitions

function Scalar(value) { 
  this.value = value;
  
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
