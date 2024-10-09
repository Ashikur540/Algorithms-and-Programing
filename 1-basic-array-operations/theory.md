## Introduction to Arrays

An array is a collection of elements stored at contiguous memory locations. In JavaScript, arrays are dynamic and can hold elements of different types.

### Characteristics of Arrays

1. **Contiguous Memory**: Elements in an array are stored in contiguous memory locations. This allows for efficient traversal and access.
2. **Fixed Size**: In JavaScript, arrays have a fixed size. Once an array is created, its size cannot be changed.
3. **Homogeneous Elements**: Arrays can hold elements of the same type. However, in JavaScript, arrays can hold elements of different types.
4. **Indexed Access**: Elements in an array can be accessed using an index. The index starts from 0 and goes up to the length of the array minus one.

### Declaration and Initialization

Arrays can be declared and initialized in several ways:

1. **Using the `Array` Constructor**:

   ```javascript
   let arr = new Array(1, 2, 3);
   ```

2. **Using Array Literal**:
   ```javascript
   let arr = [1, 2, 3];
   ```

### Accessing Elements

Elements in an array can be accessed using the index:

```javascript
let arr = [10, 20, 30, 40, 50];
console.log(arr[2]); // Output: 30
```

### Modifying Elements

Elements in an array can be modified using the index:

```javascript
let arr = [10, 20, 30, 40, 50];
arr[2] = 300;
console.log(arr); // Output: [10, 20, 300, 40, 50]
```

### Common Operations

1. **Traversal**: Iterating through all elements of an array.
2. **Insertion**: Adding an element to the array.
3. **Deletion**: Removing an element from the array.
4. **Searching**: Finding an element in the array.

## Know more :

- [Array Handbook](https://dev.to/manojspace/mastering-array-manipulation-in-dsa-using-javascript-from-basics-to-advanced-3i6j)
