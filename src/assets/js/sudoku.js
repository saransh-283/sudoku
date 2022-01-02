var sudoku = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomizeArr(nums){
    var retArr=[];
    var tempArr=[...nums]
    const len=nums.length
    var random
    for (let i = 0; i < len; i++) {
        random=Math.floor(Math.random()*tempArr.length)
        retArr.push(tempArr[random])
        tempArr.splice(random,1)
    }
    return retArr
}

function rowCheck(grid,num,row){
    return !grid[row].includes(num)
}

function colCheck(grid,num,col){
    return grid.every(row=>row[col]!=num)
}

function boxCheck(grid,num,row,col){
    var box=[]
    for (let i = Math.floor(row/3); i < Math.floor(row/3)+1; i++) {
        for (let j = Math.floor(col/3); j < Math.floor(col/3)+1; j++) {
            box.push(grid[i][j])
        }
    }
    return !box.includes(num)
}

function cellFill(grid,nums,row,col,i=0) {
    // not ok over condition
    if(i>=9){
        return
    }
    var num=nums[i];
    //ok over condition
    if(rowCheck(grid,num,row)&&colCheck(grid,num,col)&&boxCheck(grid,num,row,col)){
        grid[row][col]=num
        return grid;
    }
    // next condition
    return cellFill(grid,nums,row,col,i+1)
}