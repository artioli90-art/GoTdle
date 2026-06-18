const mapImage = document.getElementById("mapImage");
const marker = document.getElementById("marker");
const select = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");

let guessed = [];

// =========================
// DATA MAP WIDTH REALE
// =========================
const MAP_WIDTH = 229;   // usa la zona più grande (map5 è 229x258 max x)
const MAP_HEIGHT = 258;

// =========================
// LOAD MAP
// =========================
const maps = {
    map1: [
        { name:"forte terrore", x:167, y:115 },
        { name:"karhold", x:201, y:95 },
        { name:"ultimo focolare", x:162, y:83 },
        { name:"deepwood motte", x:81, y:100 },
        { name:"isola dell'orso", x:69, y:71 },
        { name:"pugno dei primi uomini", x:110, y:16 },
        { name:"castello di craster", x:142, y:30 },
        { name:"aspra dimora", x:178, y:16 },
        { name:"torre delle ombre", x:128, y:43 },
        { name:"castello nero", x:150, y:45 },
        { name:"piazza di torrhen", x:83, y:143 },
        { name:"grande inverno", x:116, y:127 },
        { name:"porto bianco", x:141, y:174 },
        { name:"moat cailin", x:119, y:184 },
        { name:"le dita", x:202, y:220 }
    ],

    map2: [
        { name:"delta delle acque", x:87, y:46 },
        { name:"castel granito", x:30, y:78 },
        { name:"lannisport", x:29, y:87 },
        { name:"pyke", x:32, y:26 },
        { name:"forte clegane", x:32, y:89 },
        { name:"harrenhal", x:126, y:56 },
        { name:"nido dell'aquila", x:167, y:21 },
        { name:"porta insanguinata", x:157, y:26 },
        { name:"maidenpool", x:160, y:63 },
        { name:"roccia del drago", x:196, y:74 },
        { name:"tarth", x:208, y:137 },
        { name:"capo tempesta", x:179, y:144 },
        { name:"sala dell'estate", x:144, y:148 },
        { name:"rostro del grifone", x:171, y:152 },
        { name:"lancia del sole", x:201, y:225 },
        { name:"arbor", x:10, y:232 },
        { name:"collina del corno", x:67, y:175 },
        { name:"vecchia citta", x:28, y:194 },
        { name:"stelle al tramonto", x:68, y:208 },
        { name:"approdo del re", x:160, y:98 },
        { name:"baia delle acque nere", x:180, y:95 },
        { name:"le stepstone", x:229, y:195 },
        { name:"collina fantasma", x:196, y:206 },
        { name:"alto giardino", x:60, y:160 },
        { name:"ashford", x:97, y:153 }
    ],

    map3: [
        { name:"braavos", x:27, y:8 },
        { name:"pentos", x:28, y:118 },
        { name:"volantis", x:142, y:243 },
        { name:"lys", x:34, y:243 },
        { name:"tyrosh", x:5, y:188 },
        { name:"myr", x:50, y:185 }
    ],

    map4: [
        { name:"valyria", x:13, y:147 },
        { name:"mereen", x:147, y:22 },
        { name:"astapor", x:120, y:80 },
        { name:"yunkai", x:130, y:37 }
    ],

    map5: [
        { name:"vaes dothrak", x:67, y:32 },
        { name:"qarth", x:126, y:258 }
    ]
};

// =========================
// RANDOM MAP + LOCATION
// =========================
const allMaps = Object.values(maps).flat();

const today = new Date();
const seed = today.getFullYear()*10000 + (today.getMonth()+1)*100 + today.getDate();

function getIndex(seed, len){
    let v = 0;
    for(let i=0;i<seed.toString().length;i++){
        v = ((v<<5)-v) + seed.toString().charCodeAt(i);
        v |= 0;
    }
    return Math.abs(v)%len;
}

const current = allMaps[getIndex(seed, allMaps.length)];

// =========================
// MAP IMAGE (puoi cambiarla in base a zona se vuoi dopo)
// =========================
mapImage.src = "images/map/map1.png";

// =========================
// MARKER (SEMPRE VISIBILE)
// =========================
function placeMarker(){
    marker.style.left = current.x + "px";
    marker.style.top = current.y + "px";
}

// =========================
// DROPDOWN
// =========================
function setupDropdown(){
    select.innerHTML = `<option value="">Seleziona luogo</option>`;

    allMaps
        .map(l => l.name)
        .sort()
        .forEach(name => {
            const opt = document.createElement("option");
            opt.value = name;
            opt.textContent = name;
            select.appendChild(opt);
        });
}

setupDropdown();

// =========================
// CHECK
// =========================
document.getElementById("checkBtn").addEventListener("click", () => {

    const guess = select.value;
    if(!guess) return;

    const correct = guess === current.name;

    if(correct){
        feedback.textContent = "🏆 Corretto!";
        placeMarker();
    } else {
        feedback.textContent = "✖ Sbagliato";
    }
});
