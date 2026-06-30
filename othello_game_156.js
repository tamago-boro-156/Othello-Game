const table=document.getElementById("table");
const rows=table.getElementsByTagName("tr");

const boardData=[];

let currentPlayer=1;

for(let row=0;row<8;row++){
	const rowData=[];
	for(let col=0;col<8;col++){
		rowData.push(0);
	}
	boardData.push(rowData);
}

boardData[3][3]=2;
boardData[3][4]=1;
boardData[4][3]=1;
boardData[4][4]=2;

for(let row=0;row<rows.length;row++){
	const cell=rows[row].getElementsByTagName("td");
	for(let col=0;col<cell.length;col++){
		cell[col].dataset.row=row;
		cell[col].dataset.col=col;
		
		if(boardData[row][col]===1){
			cell[col].style.backgroundColor="black";
		}
		if(boardData[row][col]===2){
			cell[col].style.backgroundColor="white";
		}
	}
}

const cells=table.getElementsByTagName("td");

for(let i=0;i<cells.length;i++){
	cells[i].addEventListener("click",function(){
		const row=this.dataset.row;
		const col=this.dataset.col;

		if(boardData[row][col]!==0){
			return;
		}

		boardData[row][col]=currentPlayer;

		if(currentPlayer===1){
			this.style.backgroundColor="black";
		}
		else{
			this.style.backgroundColor="white";
		}

		currentPlayer=currentPlayer===1 ? 2:1;

		console.log("クリックされた場所：row="+row+",col="+col);
	});
}