// Constructs the table for rules
 
let gameMoves = [
    {
        choice: 'rock',
        beat1: 'scissors',
        beat2: 'lizard',
    },
    {
        choice: 'scissors',
        beat1: 'paper',
        beat2: 'lizard',
    },
    {
        choice: 'paper',
        beat1: 'rock',
        beat2: 'spock',
    },
    {
        choice: 'lizard',
        beat1: 'spock',
        beat2: 'paper',
    },
    {
        choice: 'spock',
        beat1: 'scissors',
        beat2: 'rock',
    },
];

function buildTable(){
  let hTable = document.createElement("table");
  hTable.id = "game-rules";
 
  let tableHtml = `
    <table>
        <thead>
            <tr>
                <th col span ='5'>BEATS</th>    
            </tr>
        </thead>
        <tbody>
    </tbody>
    </table>`;

    let data = buildTable();
    document.getElementById("game-rules").innerHTML = data;
}