const count = [0,0,0,0,0,0,0,0,0,0,0];
const main = document.createElement("main");

const rollofDice = () => (Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));

function multiroll(numOfRolls){
    let rol = 0;
    for(let i=0;i<numOfRolls;i++){
        rol = rollofDice();
        count[rol - 2] += 1;
    }
    return count
}

function printCount(numOfRolls){
    let rollArr = multiroll(numOfRolls);
    for(let i=0; i<rollArr.length;i++){
        const p = document.createElement("p");
        p.textContent = i+2 + ": " + rollArr[i];
        main.appendChild(p);
    }
    return rollArr;
}

function bargraph(resultsArray){
    let rollArrSum = resultsArray.reduce((sum,curr) => sum + curr);
    const table = document.createElement("article");
    table.className = "table";
    main.appendChild(table);
    for(let i=0; i<resultsArray.length;i++){
        const bar = document.createElement("div");
        bar.className = "bar-graph";
        barHeight = (resultsArray[i]/rollArrSum)*500;
        bar.style.height = barHeight + "%";
        table.appendChild(bar);
    }
    let newLine = document.createElement("div");
    newLine.className = "break";
    table.appendChild(newLine);
    for(let i=0; i<resultsArray.length;i++){
        const tableNumbers = document.createElement("div");
        tableNumbers.className = "table-results";
        tableNumbers.textContent = " " + resultsArray[i]+ " ";
        table.appendChild(tableNumbers);
    }
}

let results = printCount(1000);
bargraph(results);

document.body.appendChild(main);