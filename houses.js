const houses = [
{
    nome: "Stark",
    regione: "Nord",
    affiliazione: "Signori di Grande Inverno",
    descrizione: "Casa Stark di Grande Inverno è una delle grandi casate del Continente Occidentale e la casa reale del Regno del Nord",
    immagine: "images/banners/stark.png"
},
{
    nome: "Lannister",
    regione: "Terre dell'Ovest",
    affiliazione: "Signori di Castel Granito",
    descrizione: "Casa Lannister di Castel Granito è una delle Grandi case dei Sette Regni e la casa principale delle Terre dell'Ovest. La loro residenza è la roccaforte di Castel Granito sebbene esista un ramo cadetto a Lannisport",
    immagine: "images/banners/lannister.png"
},
{
    nome: "Tully",
    regione: "Terre dei Fiumi",
    affiliazione: "Signori di Delta delle Acque",
    descrizione: "Casa Tully di Delta delle Acque è una delle grandi case di Westeros e domina sulle Terre dei Fiumi. L'attuale capo di Casa Tully è Lord Edmure Tully, figlio di Lord Hoster Tully.",
    immagine: "images/banners/tully.png"
},
{
    nome: "Tyrell",
    regione: "Altopiano",
    affiliazione: "Signori di Alto Giardino",
    descrizione: "Casa Tyrell di Alto Giardino è stata una delle Grandi Casate dei Sette Regni. Governava l'Altopiano dal castello di Alto Giardino ed era una famiglia grande e benestante la cui ricchezza, tra le altre grandi famiglie, era superata solo da quella della Casa Lannister mentre possedeva l'esercito più numeroso.",
    immagine: "images/banners/tyrell.png"
},
{
    nome: "Baratheon",
    regione: "Terre della Tempesta",
    affiliazione: "Signori di Capo Tempesta",
    descrizione: "Casa Baratheon di Capo Tempesta è una delle grandi casate i Westeros e domina sulle Terre della Tempesta. La residenza dei Baratheon è la roccaforte di Capo Tempesta, un antico castello costruito dai loro antenati.",
    immagine: "images/banners/baratheon.png"
},
{
    nome: "Ambrose",
    regione: "Altopiano",
    affiliazione: "Tyrell",
    descrizione: "Casa Ambrose è una Casa nobile del'Altopiano. Il loro stemma è rappresentato da delle formiche rosse su sfondo giallo e il loro motto è 'Mai a riposo'.",
    immagine: "images/banners/ambrose.png"
},
{
    nome: "Arryn",
    regione: "Valle di Arryn",
    affiliazione: "Signori di Nido dell'Aquila",
    descrizione: "Casa Arryn di Nido dell'Aquila è una delle grandi casate del Continente Occidentale, nonché la principale casata nobiliare della Valle di Arryn. Il loro seggio è Nido dell'Aquila.",
    immagine: "images/banners/arryn.png"
},
{
    nome: "Baelish di Harrenal",
    regione: "Le Dita",
    affiliazione: "Trono di Spade",
    descrizione: "Casa Baelish di Harrenhal è un ramo cadetto estinto di Casa Baelish delle Dita. Lord Petyr Baelish fonda la casata dopo aver procurato a Re Joffrey l'accordo matrimoniale con Margaery Tyrell.",
    immagine: "images/banners/baelish.png"
},
{
    nome: "Bronn delle Acque Nere",
    regione: "Altopiano",
    affiliazione: "Nuovo Lord di Alto Giardino",
    descrizione: "La Casa di Bronn di Alto Giardino è una delle grandi case di Westeros. Governa l'Altopiano, una vasta e fertile regione nel sud di Westeros, dal castello di Alto Giardino succedendo a Casa Tyrell dopo la sua estinzione nella guerra d'invasione di Daenerys Targaryen. È la più recente delle Grandi Case di Westeros.",
    immagine: "images/banners/bronn.png"
},
{
    nome: "Buckler",
    regione: "Terre della Tempesta",
    affiliazione: "Trono di Spade",
    descrizione: "Casa Buckler di Porta di Bronzo è una casa nobiliare di Porta di Bronzo nelle Terre della Tempesta fedele a Capo Tempesta.",
    immagine: "images/banners/buckler.png"
},
{
    nome: "Cassel",
    regione: "Nord",
    affiliazione: "Stark",
    descrizione: "La Casa Cassel è una casata nobile minore del Nord al servizio della Casa Stark di Grande Inverno.",
    immagine: "images/banners/cassel.png"
},
{
    nome: "Cerwyn",
    regione: "Nord",
    affiliazione: "Stark",
    descrizione: "Casa Cerwyn è una Casa nobile del Nord e tra i più fidati alfieri degli Stark. La loro roccaforte, Castel Cerwyn, si trova soltanto a mezza giornata di cavalcata da Grande Inverno.",
    immagine: "images/banners/cerwyn.png"
},
{
    nome: "Codd",
    regione: "Isole di Ferro",
    affiliazione: "Greyjoy",
    descrizione: "Casa Codd è una casata nobile delle Isole di Ferro i cui membri sono alfieri della Casa Greyjoy. Il loro stemma è rappresentato da un merluzzo grigio su sfondo nero e il loro motto è 'Benchè disprezzati da tutti gli uomini'.",
    immagine: "images/banners/codd.png"
},
{
    nome: "Connington",
    regione: "Terre della Tempesta",
    affiliazione: "Targaryen",
    descrizione: "Casa Connington di Posatoio del Grifone. Jon Connington fu primo cavaliere di re Aerys II Targaryen, ora si nascondende dietro lo pseudonimo di 'Griff' ed ha cresciuto in segreto Aegon, figlio del principe Rhaegar, nella speranza di farlo un giorno sedere sul trono,",
    immagine: "images/banners/connington.png"
},
{
    nome: "Crakehall",
    regione: "Terre dell'Ovest",
    affiliazione: "Lannister",
    descrizione: "Casa Crakehall di è una delle principali case nobiliari delle Terre dell'Ovest. La loro sede, Crakehall, si trova lungo la Strada dell'Oceano.",
    immagine: "images/banners/crakehall.png"
},
{
    nome: "Erenford",
    regione: "Terre dei Fiumi",
    affiliazione: "Frey",
    descrizione: "La Casa Erenford è una casa nobile delle Terre dei Fiumi. Joyeuse Erenford sposa Lord Walder Frey il giorno del novantesimo compleanno dell'uomo.",
    immagine: "images/banners/erenford.png"
},
{
    nome: "Estermont",
    regione: "Terre della Tempesta",
    affiliazione: "Baratheon",
    descrizione: "Casa Estermont è una Casa nobile delle terre della tempesta i cui membri sono tra i più importanti alfieri della Casa Baratheon di Capo Tempesta.",
    immagine: "images/banners/estermont.png"
},
{
    nome: "Fowler",
    regione: "Dorne",
    affiliazione: "Martell",
    descrizione: "Casa Fowler di Cieloalto è una nobile casata di Dorne. Posseggono il titolo di 'Protettore del Passo del Principe', e ciò sta ad indicare la loro importanza nella regione.",
    immagine: "images/banners/fowler.png"
},
{
    nome: "Bolton",
    regione: "Nord",
    affiliazione: "Usurpatori di Grande Inverno",
    descrizione: "Casa Bolton di Forte Terrore è un'antica casata estinta del Nord. Il suo seggio era Forte Terrore ed era discendente dai Primi Uomini e risalente all'Età degli Eroi.",
    immagine: "images/banners/bolton.png"
},
{
    nome: "Botley",
    regione: "Isole di Ferro",
    affiliazione: "Greyjoy",
    descrizione: "Casa Botley è una Casa nobile delle Isole di Ferro i cui membri sono tra gli alfieri più importanti della Casa Greyjoy. Il seggio dei Botley, Lordsport, si trova sull'isola di Pyke.",
    immagine: "images/banners/botley.png"
},
{
    nome: "Bracken",
    regione: "Terre dei Fiumi",
    affiliazione: "Tully",
    descrizione: "La Casa Bracken di Stone Hedge è un'antica e nobile casata delle Terre dei Fiumi, nonchè una delle più importanti famiglie fedeli alla Casa Tully",
    immagine: "images/banners/bracken.png"
},
{
    nome: "Darry",
    regione: "Terre dei Fiumi",
    affiliazione: "Tully",
    descrizione: "La Casa Darry è una casata delle terre dei fiumi. Quando Gregor Clegane inizia a razziare le terre dei fiumi, richiede giustizia per i crimini subiti, identificando la Montagna come leader dei razziatori",
    immagine: "images/banners/darry.png"
},
{
    nome: "Dayne",
    regione: "Dorne",
    affiliazione: "Martell",
    descrizione: "Casa Dayne di Stelle al Tramonto è una nobile casata della regione di Dorne. La 'Spada dell'Alba' è un titolo che viene dato a un cavaliere Dayne nel momento in cui lo si considera degno di brandire la grande spada Alba, lama forgiata da un meteorite.",
    immagine: "images/banners/dayne.png"
},
{
    nome: "Dondarrion",
    regione: "Terre della Tempesta",
    affiliazione: "Baratheon",
    descrizione: "Casa Dondarrion di Blackhaven è un'antica casata nobile delle Terre della Tempesta i cui membri sono alfieri di Capo Tempesta.",
    immagine: "images/banners/dondarrion.png"
},
{
    nome: "Florent",
    regione: "Altopiano",
    affiliazione: "Tyrell",
    descrizione: "Casa Florent della Fortezza di Acquachiara è una casata nobile dell'Altopiano ed uno dei principali alfieri della Casa Tyrell.",
    immagine: "images/banners/florent.png"
},
{
    nome: "Frey",
    regione: "Terre dei Fiumi",
    affiliazione: "Signori delle Torri Gemelle",
    descrizione: "Casa Frey del Guado è una nobile casata delle Terre dei Fiumi. Il loro seggio principale sono le Torri Gemelle, una coppia di castelli ciascuno situato su una sponda della Forca Verde del Tridente",
    immagine: "images/banners/frey.png"
},
{
    nome: "Glover",
    regione: "Nord",
    affiliazione: "Stark",
    descrizione: "Casa Glover di Deepwood Motte è una casa nobiliare del Nord ed è tra le principali case giurate di Grande Inverno.",
    immagine: "images/banners/glover.png"
},
{
    nome: "Greyjoy",
    regione: "Isole di Ferro",
    affiliazione: "Signori di Pyke",
    descrizione: "Casa Greyjoy di Pyke è una delle grandi casate di Westeros e domina sulle Isole di Ferro, un arcipelago cupo e ostile a largo della costa occidentale del continente.",
    immagine: "images/banners/greyjoy.png"
},
{
    nome: "Hightower",
    regione: "Altopiano",
    affiliazione: "Tyrell",
    descrizione: "Casa Hightower di Alta Torre è uno dei più importanti e potenti vassalli di Casa Tyrell. La loro sede è Alta Torre a Vecchia Città.",
    immagine: "images/banners/hightower.png"
},
{
    nome: "Mallister",
    regione: "Terre dei Fiumi",
    affiliazione: "Tully",
    descrizione: "La Casa Mallister è una delle casate nobili più importanti nelle Terre dei Fiumi. Il seggio è Seagard, una fortezza costruita per difendere la costa dai predoni delle Isole di Ferro",
    immagine: "images/banners/mallister.png"
},
{
    nome: "Locke",
    regione: "Nord",
    affiliazione: "Stark",
    descrizione: "Casa Locke di Vecchio Castello è una casa nobile del Nord. Al termine della Lunga Notte, i Locke regnano in qualità di re dei Primi Uomini, per poi essere ridotti al rango di vassalli dai Re dell'Inverno della Casa Stark",
    immagine: "images/banners/locke.png"
},
{
    nome: "Martell",
    regione: "Dorne",
    affiliazione: "Signori di Lancia del Sole",
    descrizione: "Casa Martell di Lancia del Sole è una delle grandi casate di Westeros e regna sul principato di Dorne. Viene a volte indicata come Casa Nymeros Martell, in cui 'Nymeros' indica la discendenza da Nymeria, regina del Rhoynar",
    immagine: "images/banners/martell.png"
},{
    nome: "Mooton",
    regione: "Terre dei Fiumi",
    affiliazione: "Tully",
    descrizione: "Casa Mooton di Maidenpool è una casata nobile delle Terre dei Fiumi. Maidenpool, il suo seggio, è uno dei porti e degli snodi commerciali più importanti.",
    immagine: "images/banners/mooton.png"
},
{
    nome: "Payne",
    regione: "Terre dell'Ovest",
    affiliazione: "Lannister",
    descrizione: "La Casa Payne è una casata nobile delle Terre dell'Ovest i cui membri sono tra i più importanti alfieri della Casa Lannister di Castel Granito.",
    immagine: "images/banners/payne.png"
},
{
    nome: "Redfort",
    regione: "Valle di Arryn",
    affiliazione: "Arryn",
    descrizione: "Casa Redfort è una delle principali casate nobili della Valle di Arryn. Lord Horton Redfort è uno dei sei Lord Dichiaranti che reclama la deposizione di Petyr Baelish come Lord Protettore della Valle.",
    immagine: "images/banners/redfort.png"
},
{
    nome: "Royce",
    regione: "Valle di Arryn",
    affiliazione: "Arryn",
    descrizione: "Casa Royce di Pietra di Runa è una vecchia e potente casa nobile della Valle, fedele di Casa Arryn.",
    immagine: "images/banners/royce.png"
},
{
    nome: "Clegane",
    regione: "Terre dell'Ovest",
    affiliazione: "Lannister",
    descrizione: "Il primo cavaliere di Casa Clegane era un maestro dei cani a Castel Granito che un autunno salvò Tytos Lannister da una leonessa perdendo una gamba e tre cani. Come ricompensa, il lord gli diede terre, una fortezza e prese suo figlio come suo scudiero.",
    immagine: "images/banners/clegane.png"
},
{
    nome: "Seaworth",
    regione: "Terre della Tempesta",
    affiliazione: "Stannis Baratheon",
    descrizione: "Casa Seaworth nasce quando Davos, contrabbandiere, riesce a eludere il blocco navale dei Redwyne e portare cibo alla guarnigione di Capo Tempesta durante la Ribellione di Robert Baratheon. Per il coraggio dimostrato, Stannis Baratheon concede a Davos il titolo di cavaliere.",
    immagine: "images/banners/seaworth.png"
},
{
    nome: "Slynt",
    regione: "Terre dei Fiumi",
    affiliazione: "Lannister",
    descrizione: "La casa viene creata quando re Joffrey Baratheon nobilita Janos Slynt, il comandante della Guardia Cittadina di Approdo del Re , e lo nomina Lord di Harrenhal per i servizi resi al regno - vale a dire, per aver tradito Eddard Stark",
    immagine: "images/banners/slynt.png"
},
{
    nome: "Stannis Baratheon",
    regione: "Altopiano",
    affiliazione: "Signori di Nido dell'Aquila",
    descrizione: "Casa Baratheon di Roccia del Drago è un ramo estinto della Casa Baratheon. La loro residenza è Roccia del Drago. Stannis scelse come simbolo il cuore di fuoco del Signore della Luce.",
    immagine: "images/banners/stannis.png"
},
{
    nome: "Tarly",
    regione: "Altopiano",
    affiliazione: "Tyrell",
    descrizione: "La Casa Tarly di Collina del Corno è una nobile casata dell'Altopiano e una delle più potenti casate fedeli alla Casa Tyrell di Alto Giardino.",
    immagine: "images/banners/tarly.png"
},
{
    nome: "Tarth",
    regione: "Terre della Tempesta",
    affiliazione: "Baratheon",
    descrizione: "Casa Tarth è una Casa nobile nelle Terre della Tempesta. Brienne di Tarth, nota come 'Vergine di Tarth', serve prima Renly Baratheon, per poi mettersi al servizio degli Stark. Attuale Lord Comandante della Guardia Reale di Re Brandon I Stark.",
    immagine: "images/banners/tarth.png"
},
{
    nome: "Thorne",
    regione: "Terre della Corona",
    affiliazione: "Trono di Spade",
    descrizione: "Casa Thorne è una casata nobile delle Terre della Corona i cui membri furono alfieri della Casa Baratheon quando governava Approdo del Re.",
    immagine: "images/banners/thorne.png"
},
{
    nome: "Trant",
    regione: "Terre della Tempesta",
    affiliazione: "Baratheon",
    descrizione: "Casa Trant di Gallowsgrey è una casata nobile delle Terre della Tempesta, una degli alfieri più importanti della Casa Baratheon di Capo Tempesta.",
    immagine: "images/banners/trant.png"
},
{
    nome: "Umber",
    regione: "Nord",
    affiliazione: "Bolton",
    descrizione: "Casa Umber di Ultimo Focolare è un'estinta nobile casata del Nord. Erano fedeli a Casa Stark di Grande Inverno. Durante l'ultima fase della Guerra dei Cinque Re giurò fedeltà a Casa Bolton sotto Ramsay Bolton fino a quando quest'ultimo fu sconfitto.",
    immagine: "images/banners/umber.png"
},
{
    nome: "Westerling",
    regione: "Terre dell'Ovest",
    affiliazione: "Signori di Nido dell'Aquila",
    descrizione: "Casa Westerling del Crag è una casa nobiliare nelle Terre dell'Ovest. Jeyne Westerling sposa Robb Stark, rompendo l'alleanza tra Stark e Frey, portando alle tragiche Nozze Rosse.",
    immagine: "images/banners/westerling.png"
},
];
