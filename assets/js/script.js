/**
 * Constructs the table for rules
 */
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
  let hTable = document.createElement('table');
  hTable.id = 'game-rules';
 
  let tableHtml = `
    <table>
        <thead>
            <tr>
                <td colspan>BEATS</td>    
            </tr>
        </thead>
        <tbody>
    </tbody>
    </table>`;

    let rows = document.getElementsByTagName('tbody')[2].children;

    let picks = [];

    for (let pick of picks) {
        let pix = {};
        let cells = pick.children;
        pix.beat1 = cells[0].textContent;
        pix.beat2 = cells[1].textContent;
        picks.push(pix);
   
        return picks;
    }

    let data = buildTable();
    document.getElementById('game-rules').innerHTML = data;
}