// Constructs the table for rules
 
let gameMoves = [
    {
        choice: 'rock',
        beat1: 'scissors',
        beats2: 'lizard',
    },
    {
        choice: 'scissors',
        beat1: 'paper',
        beats2: 'lizard',
    },
    {
        choice: 'paper',
        beat1: 'rock',
        beats2: 'spock',
    },
    {
        choice: 'lizard',
        beat1: 'spock',
        beats2: 'paper',
    },
    {
        choice: 'spock',
        beat1: 'scissors',
        beats2: 'rock',
    },
];

function buildTable(){
  let hTable = document.createElement("table");
  hTable.id = "game-rules";
 
  let tableHtml = `
    <table>
        <thead>
            <tr>
                <th>BEATS</th>    
            </tr>
        </thead>
        <tbody>
    </tbody>
    </table>`;

    let picks = [];

    for (let pick of picks) {
        let pix = {};
        let cells = gameMoves.children;
        pix.beat1 = cells[0].textContent;
        pix.beat2 = cells[1].textContent;
        picks.push(pix);
   
        return picks;
    }

    let data = buildTable();
    document.getElementById("game-rules").innerHTML = data;
}