// Library for linaer Algebra

// Type Definitions

class Scalar {
  constructor(value) {
    this.value = value;
  }
}

class Vector {
  constructor(rows) {
    this.rows = rows;
    this.vector = [];

    for(let i=0; i < this.rows; i++){
      this.vector[i] = 1;
    }
  }
}

class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    for(let i=0; i < this.rows; i++){
      this.matrix[i] = [];
      for(let j=0; j < this.cols; j++){
        this.matrix[i][j] = 1;
      }
    }
  }
}
