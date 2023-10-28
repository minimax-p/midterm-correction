import { sum } from "./Shared";

// OPTION 1
it ("should return O when list is NULL", () => {
  //Arrange
  const numbers = null;

  // Act
  const result = sum(numbers);

  // Assert
  expect (result).toBe(0) ;
});

// OPTION 2
it ("should return O when list is empty", () => {
  // Arrange
  const numbers = [];
  
  // Act
  const result = sum(numbers) ;
  
  // Assert
  expect (result).toBe (0) ;
});

// OPTION 3
it ("should return correct value when list has number value", () => {
  // Arrange
  const numbers = [10];

  // Act
  const result = sum(numbers) ;

  // Assert
  expect (result).toBe(10) ;
});

// OPTION 4
it ("should return correct value when list has number value", () => {
  // Arrange
  const numbers = [-1, 0, 1, 2, 3];

  // Act
  const result = sum(numbers) ;

  // Assert
  expect (result).toBe(5) ;
});