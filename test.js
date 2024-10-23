function generate(numRows) {

        let triangle = [[1]]
        if (numRows === 1) return triangle
        if (numRows === 2) return [...triangle, [1, 1]]

        // if num > 2 so we first add 2nd row then create the 3rd row
        triangle.push([1, 1])
        console.log("after pushing 2nd row", triangle)
        for (let i = 2; i < numRows; i++) {
            let row = [];
            row.push(1);
            let prevRow = triangle[i - 1]
            // now map the new row length witch will be eq to i 
            // as we inserted at 0  so we iterate from 1 to i
            for (let j = 1; j < i; j++) {
                const middleEl = prevRow[j - 1] + prevRow[j]
                row.push(middleEl)
            }
            row.push(1)
            triangle.push(row)
        }
        return triangle

};

console.log(generate(5))