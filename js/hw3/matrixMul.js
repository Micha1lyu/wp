function multiplyMatrices(matrixA, matrixB) {
    // 獲取矩陣的維度
    var rowsA = matrixA.length;
    var colsA = matrixA[0].length;
    var rowsB = matrixB.length;
    var colsB = matrixB[0].length;


    // 初始化結果矩陣為零
    var result = new Array(rowsA);
    for (var i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
    }

    // 執行乘法
    for (var i = 0; i < rowsA; i++) {
        for (var j = 0; j < colsB; j++) {
            for (var k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}
var matrixA = [
    [1, 2, 3],
    [4, 5, 6]
];
var matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
];
