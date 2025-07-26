/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    let m = matrix.length;      // number of rows
    let n = matrix[0].length;   // number of columns

    // Step 1: Find all zero positions
    let zeroPositions = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroPositions.push([i, j]);
            }
        }
    }
    console.log("✨ ~ setZeroes ~ zeroPositions:", zeroPositions)

    // Step 2: For each recorded zero, set its row & column to 0
    for (let [row, col] of zeroPositions) {
        console.log(`row=${row}, col=${col}`)

        // Zero out the entire row
        for (let j = 0; j < n; j++) {
            matrix[row][j] = 0;
        }

        // Zero out the entire column
        for (let i = 0; i < m; i++) {
            matrix[i][col] = 0;
        }
    }
    return matrix
}


console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))