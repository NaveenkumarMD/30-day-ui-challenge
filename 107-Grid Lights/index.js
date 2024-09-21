class Grid{
    constructor(rows,columns) {
        this.rows=rows;
        this.columns=columns;
        let grid=[]
        for (let i = 0; i <rows ; i++) {
            let arr=[]
            for(let j=0;j<columns;j++){
                arr.push(0)
            }
            grid.push(arr)
        }
        this.grid=grid;
    }
    log(){
        for (let i = 0; i <this.rows ; i++) {
            const arr=[]
            for(let j=0;j<this.columns;j++){
                arr.push(this.grid[i][j])
            }
            console.log(arr.join(" "))
        }
    }
    activate(from,to){
        for(let j=from.col;j<this.columns;j++){
            this.grid[from.row][j]=1
        }
        if(to.)
        for(let j=0;j<to.col;j++){
            this.grid[to.row][j]=1
        }

    }
}

const grid=new Grid(3,4);
grid.activate({row:0,col:1},{row:0,col:2})
grid.log()
