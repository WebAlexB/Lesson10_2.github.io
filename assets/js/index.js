
const tableNumber = 10;

function multiplicationTable(data){
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    for (let i = 0; i <= data; i++) {
        const th = document.createElement('th');
        th.innerHTML = i === 0 ? '' : i;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    for (let i = 1; i <= data; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j <= data; j++) {
            const cell = document.createElement('td');
            if (j === 0) {
                cell.innerHTML = i;
            } else {
                cell.innerHTML = i * j;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

multiplicationTable(tableNumber)