const quotes = [
{
  testo: "Un uomo può ancora essere coraggioso se ha paura?",
  autore: "Bran Stark",
  destinatario: "Eddard Stark"
},
{
  testo: "Oh, mio dolce bambino d'estate, cosa ne sai della paura?",
  autore: "Vecchia Nan",
  destinatario: "Bran Stark"
},
{
  testo: "Non ci sono uomini come me. Ci sono solo io",
  autore: "Jaime Lannister",
  destinatario: "Catelyn Stark"
},
{
  testo: "Non sarà un ragazzo per sempre... e l'inverno sta arrivando.",
  autore: "Eddard Stark",
  destinatario: "Catelyn Stark"
},
{
  testo: "C'è un solo dio, e il suo nome è Morte. E c'è solo una cosa che diciamo alla Morte: non oggi",
  autore: "Syrio Forel",
  destinatario: "Arya Stark"
},
{
  testo: "Il potere risiede dove gli uomini credono che risieda. È un trucco, un'ombra sul muro",
  autore: "Varys",
  destinatario: "Tyrion Lannister"
},
{
  testo: "Le cose che faccio per amore",
  autore: "Jaime Lannister",
  destinatario: "Cersei Lannister"
},
{
  testo: "Sei mio, come io sono tua. E se moriamo, moriamo. Tutti gli uomini devono morire. Ma prima, vivremo",
  autore: "Ygritte",
  destinatario: "Jon Snow"
},
{
  testo: "Solo un pazzo si umilia quando il mondo è così pieno di uomini desiderosi di fare quel lavoro per lui.",
  autore: "Theon Greyjoy",
  destinatario: "Yara/Asha Greyjoy"
},
{
  testo: "La vita non è un ballo, mio tesoro. Un giorno, potresti essere costretta ad apprendere questa realtà a tue spese",
  autore: "Petyr Baelish",
  destinatario: "Sansa Stark"
},
{
  testo: "Il nord ricorda, Lord *****",
  autore: "Wyman Manderly",
  destinatario: "Davos Seaworth"
},
{
  testo: "Quando giochi al gioco del trono, o vinci o muori.",
  autore: "Cersei Lannister",
  destinatario: "Eddard Stark"
},
{
  testo: "Rhaegar combatté valorosamente, Rhaegar combatté nobilmente e Rhaegar morì",
  autore: "Jorah Mormont",
  destinatario: "Daenerys Targaryen"
},
{
  testo: "Jaime Lannister manda i suoi saluti",
  autore: "Roose Bolton",
  destinatario: "Robb Stark"
},
{
  testo: "Egg?! Egg?! Ho sognato… ero vecchio!",
  autore: "Aemon Targaryen",
  destinatario: "Monologo"
},
{
  testo: "Una volta che il sole è tramontato, nessuna candela può sostituirlo",
  autore: "Loras Tyrell",
  destinatario: "Tyrion Lannister"
},
{
  testo: "C'è una bestia selvaggia in ogni uomo, e si risveglia quando gli metti una spada in mano",
  autore: "Jorah Mormont",
  destinatario: "Daenerys Targaryen"
},
{
  testo: "Non camminerai più, ma volerai",
  autore: "Corvo con Tre Occhi",
  destinatario: "Bran Stark"
},
{
  testo: "Ago era Robb, e Bran, e Rickon, sua madre e suo padre, persino Sansa. Ago erano le grigie mura del Grande Inverno e le risate della sua gente. Ago erano le nevi estive, le storie di Vecchia Nan, l'albero-cuore con le sue foglie rosse e la faccia spaventosa, il caldo odore terroso dei giardini di vetro, il suono del vento del nord che faceva tremare le persiane della sua stanza. Ago era il sorriso di Jon Snow",
  autore: "Arya Stark",
  destinatario: "Monologo"
},
{
  testo: "Una mente ha bisogno di libri come una spada ha bisogno di una pietra per affilarla, se vuole mantenere il suo filo",
  autore: "Tyrion Lannister",
  destinatario: "Jon Snow"
},
{
  testo: "Tu non sai niente",
  autore: "Ygritte",
  destinatario: "Jon Snow"
},
{
  testo: "Quando le nevi cadono e i venti bianchi soffiano, il lupo solitario muore, ma il branco sopravvive",
  autore: "Eddard Stark",
  destinatario: "Arya Stark"
},
{
  testo: "Sei il sangue del drago. Riuscirai a farti un cappello",
  autore: "Daenerys Targaryen",
  destinatario: "Monologo"
},
{
  testo: "Non dimenticare mai cosa sei, perché di sicuro il mondo non lo farà. Rendilo la tua forza. Allora, non potrà mai essere la tua debolezza. Armati di essa, e non sarà mai usata per farti del male",
  autore: "Tyrion Lannister",
  destinatario: "Jon Snow"
},
{
  testo: "L'estate finirà presto, e anche l'infanzia",
  autore: "Eddard Stark",
  destinatario: "Maestro Luwin"
},
{
  testo: "Quindi ti chiederò solo una volta. Sei un confratello dei Guardiani della Notte, o un ragazzo bastardo che vuole giocare alla guerra?",
  autore: "Jeor Mormont",
  destinatario: "Jon Snow"
},
{
  testo: "Qual è il desiderio del nostro cuore? Vendetta. Giustizia. Fuoco e sangue",
  autore: "Doran Martell",
  destinatario: "Arianne Martell"
},
{
  testo: "Ser Gerold Hightower aveva iniziato la sua storia e Ser Barristan Selmy l'aveva portata avanti, ma il resto avrebbe dovuto scriverlo da solo. Poteva scrivere quello che voleva, d'ora in poi",
  autore: "Jaime Lannister",
  destinatario: "Monologo"
},
{
  testo: "Io sono solo onesto. È il mondo che è orribile",
  autore: "Sandro Clegane",
  destinatario: "Sansa Stark"
},
{
  testo: "Quando morirò, per favore, lasciate che mi seppelliscano con una balestra, così potrò ringraziare il Padre di Sopra per i suoi doni nello stesso modo in cui ho ringraziato il Padre di Sotto",
  autore: "Tyrion Lannister",
  destinatario: "Lord Connington"
},
{
  testo: "La gente comune prega per la pioggia, per figli sani e per un'estate che non finisca mai. Non importa loro se gli alti signori giocano al gioco dei troni, purché siano lasciati in pace. Non lo sono mai",
  autore: "Jorah Mormont",
  destinatario: "Daenerys Targaryen"
},
{
  testo: "L'uomo che pronuncia la sentenza dovrebbe brandire la spada. Se vuoi togliere la vita a un uomo, lo devi guardare negli occhi e ascoltare le sue ultime parole. Se non riesci a sopportare di farlo, allora forse l'uomo non merita di morire",
  autore: "Eddard Stark",
  destinatario: "Bran Stark"
},
{
  testo: "Cos'è la vita di un ragazzo bastardo al confronto del Regno?",
  autore: "Stannis Baratheon",
  destinatario: "Lord Davos"
},
{
  testo: "Ho un debole nel mio cuore per i paralitici, i bastardi e le cose rotte",
  autore: "Tyrion Lannister",
  destinatario: "Robb Stark"
},
{
  testo: "Nell'oscurità, posso essere il Cavaliere dei Fiori",
  autore: "Tyrion Lannister",
  destinatario: "Sansa Stark"
},
{
  testo: "Vuoi sapere l'orribile verità? Non riesco nemmeno a ricordare come fosse. So solo che era l'unica cosa che ho sempre desiderato, e i Sette Regni non potevano riempire il vuoto che ha lasciato",
  autore: "Robert Baratheon",
  destinatario: "Eddard Stark"
},
{
  testo: "Ditocorto guarderebbe questo paese bruciare se potesse essere il re delle ceneri",
  autore: "Varys",
  destinatario: "Tyrion Lannister"
},
{
  testo: "Prima lezione, infilzali con la punta",
  autore: "Jon Snow",
  destinatario: "Arya Stark"
},
{
  testo: "La morte è terribilmente definitiva, mentre la vita è piena di possibilità",
  autore: "Tyrion Lannister",
  destinatario: "Jaime Lannister"
},
{
  testo: "Dio ti aiuti, ora sei veramente perduto",
  autore: "Rodrik Cassel",
  destinatario: "Theon Greyjoy"
},
{
  testo: "No, non farlo, non tagliarmi i capelli, Ned ama i miei capelli",
  autore: "Catelyn Stark",
  destinatario: "Raymund Frey"
},
{
  testo: "Eravamo uomini del re, cavalieri ed eroi, ma alcuni cavalieri sono oscuri e pieni di terrore, mia signora. La guerra fa di tutti noi dei mostri",
  autore: "Thoros di Myr",
  destinatario: "Brienne di Tarth"
},
{
  testo: "Andrò nella mia tomba pensando alla PESCA di mio fratello",
  autore: "Stannis Baratheon",
  destinatario: "Davos Seaworth"
},
{
  testo: "Un lettore vive mille vite prima di morire. L'uomo che non legge mai ne vive solo una",
  autore: "Jojen Reed",
  destinatario: "Bran Stark"
},
{
  testo: "Perché sono i cavalieri dell'estate, e l'inverno sta arrivando.",
  autore: "Catelyn Stark",
  destinatario: "Brienne di Tarth"
},
{
  testo: "Sei cresciuto con gli attori. Hai imparato il loro mestiere e hai imparato la loro volontà. Sono cresciuto con i soldati. Ho imparato a morire molto tempo fa",
  autore: "Eddard Stark",
  destinatario: "Janos Slynt"
},
{
  testo: "La pietra è forte, le radici degli alberi vanno in profondità, e sotto terra i Re dell'Inverno siedono sui loro troni. Non era morto, solo rotto",
  autore: "Bran Stark",
  destinatario: "Monologo"
},
{
  testo: "Bere e lussuria, nessun uomo mi può eguagliare in queste cose. Sono il dio delle tette e del vino",
  autore: "Tyrion Lannister",
  destinatario: "Tywin Lannister"
},
{
  testo: "La paura taglia più a fondo della spada",
  autore: "Syrio Forel",
  destinatario: "Arya Stark"
},
{
  testo: "Voglio solo stare in cima al Muro e pisciare ai confini del mondo",
  autore: "Tyrion Lannister",
  destinatario: "Jon Snow"
},
{
  testo: "Nel mio letto, con la pancia piena di vino e la bocca di una fanciulla intorno al mio cazzo, all'età di ottant'anni",
  autore: "Tyrion Lannister",
  destinatario: "Shagga delle Tribù delle Colline"
},
{
  testo: "Strade diverse a volte portano allo stesso castello",
  autore: "Jon Snow",
  destinatario: "Arya Stark"
},
{
  testo: "Penso che le madri e i padri abbiano inventato gli dei perché volevano che i loro figli dormissero tutta la notte",
  autore: "Davos Seaworth",
  destinatario: "Shireen Baratheon"
},
{
  testo: "Le tempeste vanno e vengono, le onde si infrangono sopra la testa, i pesci grandi mangiano i pesci piccoli, e io continuo a remare",
  autore: "Varys",
  destinatario: "Tyrion Lannister"
},
{
  testo: "Uccidi il ragazzo. L'inverno è quasi alle porte. Uccidi il ragazzo e lascia che nasca l'uomo",
  autore: "Aemon Targaryen",
  destinatario: "Jon Snow"
},
{
  testo: "Cos'è l'onore rispetto all'amore di una donna? Cos'è il dovere contro la sensazione di un figlio appena nato tra le braccia, o il ricordo del sorriso di un fratello? Siamo solo umani, e gli dei ci hanno plasmati per l'amore. Questa è la nostra grande gloria e la nostra grande tragedia",
  autore: "Aemon Targaryen",
  destinatario: "Jon Snow"
},
{
  testo: "Se guardo indietro sono perduta",
  autore: "Daenerys Targaryen",
  destinatario: "Monologo"
},
{
  testo: "Guardiamo le stesse stelle e vediamo cose così diverse",
  autore: "Jon Snow",
  destinatario: "Ygritte"
},
{
  testo: "Ci deve sempre essere uno Stark a Grande Inverno",
  autore: "Catelyn Stark",
  destinatario: "Robb Stark"
},
{
  testo: "Sono della Casa Lannister, un leone della Roccia, la legittima regina di questi Sette Regni, figlia naturale di Tywin Lannister. E i capelli ricrescono.",
  autore: "Cersei Lannister",
  destinatario: "Septa Unella"
},
{
  testo: "Perché sono sempre gli innocenti a soffrire di più, quando voi 'alti signori' giocate al gioco dei troni?",
  autore: "Varys",
  destinatario: "Eddard Stark"
},
{
  testo: "Poteva sentire la neve sulle ciglia, assaggiarla sulle labbra. Era il sapore di Grande Inverno. Il sapore dell'innocenza. Il sapore dei sogni",
  autore: "Sansa Stark",
  destinatario: "Monologo"
},
{
  testo: "Capisco solo che se escono altre parole dalla tua bocca dovrò mangiare ogni fottuto pollo in questa stanza",
  autore: "Sandor Clegane",
  destinatario: "Polliver"
},
{
  testo: "Senza Dio? Perché, sono l'uomo più pio che abbia mai issato le vele! Servi un dio ma io ne ho serviti diecimila. Da Ib ad Asshai, quando gli uomini vedono le mie vele, pregano",
  autore: "Euron Greyjoy",
  destinatario: "Aeron Greyjoy"
},
{
  testo: "Si inginocchieranno o li distruggerò",
  autore: "Stannis Baratheon",
  destinatario: "Davos Seaworth"
},
{
  testo: "Prendi le chiavi e togli quelle catene, prima che io ti faccia rimpiangere il giorno in cui ho violentato tua madre",
  autore: "Roose Bolton",
  destinatario: "Ramsay Bolton"
},
{
  testo: "Elia Martell. Ho ucciso il suo bambino che urlava. Poi l'ho violentata. Poi le ho fracassato la fottuta testa",
  autore: "Gregor Clegane",
  destinatario: "Oberyn Martell"
},
{
  testo: "Oberyn è sempre stato la vipera. Mortale, pericoloso, imprevedibile. Nessun uomo osava calpestarlo. Io ero l'erba. Piacevole, compiacente, profumata, che ondeggiava ad ogni brezza. Chi ha paura di camminare sull'erba? Ma è l'erba che nasconde la vipera ai suoi nemici e la ripara fino a quando non colpisce",
  autore: "Doran Martell",
  destinatario: "Ellaria Sand"
},
{
  testo: "Le vecchie storie sono come i vecchi amici, diceva sempre la vecchia Nan. Devi far loro visita di tanto in tanto",
  autore: "Bran Stark",
  destinatario: "Monologo"
},
{
  testo: "Una buona azione non cancella il male, né una cattiva azione il bene. Ognuno dovrebbe avere la sua ricompensa",
  autore: "Stannis Baratheon",
  destinatario: "Davos Seaworth"
},
{
  testo: "A volte penso che tutti fingono di essere coraggiosi, e nessuno di noi lo è davvero. Forse fingere è come si diventa coraggiosi, non lo so",
  autore: "Grenn",
  destinatario: "Jon Snow"
},
{
  testo: "Con quale diritto il lupo giudica il leone?",
  autore: "Jaime Lannister",
  destinatario: "Eddard Stark"
},
{
  testo: "Ogni tanto, molto di rado, Lord Tywin Lannister minacciava effettivamente di sorridere; non lo fece mai, ma la sola minaccia era terribile da vedere?",
  autore: "Tyrion Lannister",
  destinatario: "Monologo"
},
{
  testo: "Vuoi governare? Questo è governare; sdraiarsi su un letto di erbacce, strappandole via dalla radice, una per una, prima che ti strangolino nel sonno",
  autore: "Cersei Lannister",
  destinatario: "Tyrion Lannister"
},
{
  testo: "Quando strappi la lingua a un uomo, non stai dimostrando che è un bugiardo, stai solo dicendo al mondo che temi quello che potrebbe dire",
  autore: "Tyrion Lannister",
  destinatario: "Cersei Lannister"
},
{
  testo: "Un matrimonio Dothraki senza almeno tre morti è considerato noioso",
  autore: "Illyrio Mopatis",
  destinatario: "Daenerys Targaryen"
},
{
  testo: "Quando quella gioia si trasformerà in cenere nella tua bocca, saprai che il debito è stato pagato",
  autore: "Tyrion Lannister",
  destinatario: "Cersei Lannister"
},
{
  testo: "Robert poteva pisciare in una tazza e gli uomini lo avrebbero chiamato vino, ma io offro loro acqua fredda e limpida e loro socchiudono gli occhi con sospetto e borbottano tra loro su quanto sia strano il suo sapore",
  autore: "Stannis Baratheon",
  destinatario: "Davos Seaworth"
},
{
  testo: "Il mondo era pieno di codardi che fingevano di essere eroi; ci voleva un coraggio strano per ammettere la codardia",
  autore: "Jon Snow",
  destinatario: "Monologo"
},
{
  testo: "Lord Tywin Lannister, alla fine, non cagò oro",
  autore: "Tyrion Lannister",
  destinatario: "Monologo"
},
{
  testo: "Se pensi che questa abbia un lieto fine, non hai prestato attenzione",
  autore: "Ramsay Bolton",
  destinatario: "Theon Greyjoy"
},
{
  testo: "Non vinco mai niente. Gli dei hanno sempre sorriso a Watt, però. Quando i bruti lo buttarono giù dal Ponte dei Teschi, in qualche modo atterrò in una bella e profonda pozza d'acqua. Che fortuna, aver mancato tutte quelle rocce. Era già morto per quell'ascia in testa. Comunque, è stata piuttosto fortunato ad aver mancato le rocce",
  autore: "Edd l’Addolorato",
  destinatario: "Grenn"
},
{
  testo: "Sua Grazia si sta affezionando a te. Si vede. Ha minacciato di decapitarti solo due volte",
  autore: "Melisandre",
  destinatario: "Jon Snow"
},
{
  testo: "Tesoro, ti conosco da quando eri un bambino al seno di Joanna. Sorridi come Gerion e combatti come Tyg, e c'è qualcosa di Kevan in te, altrimenti non indosseresti quel mantello, ma Tyrion è il figlio di Tywin, non tu. L'ho detto una volta in faccia a tuo padre, e lui non mi ha parlato per sei mesi.",
  autore: "Genna Lannister",
  destinatario: "Jaime Lannister"
},
{
  testo: "Quello non è cremisi, né rosso Tully, il rosso fango del fiume. Quello è sangue lassù, bambino, spalmato sul cielo… Il nostro sangue o il loro? C'è mai stata una guerra in cui ha sanguinato solo una parte?",
  autore: "Il Pesce Nero",
  destinatario: "Catelyn Stark"
},
{
  testo: "Se muori prima di dire il suo nome, ti darò la caccia attraverso tutti e sette gli inferi",
  autore: "Oberyn Martell",
  destinatario: "Gregor Clegane"
},
{
  testo: "Non come tuo giudice. Come tuo campione",
  autore: "Oberyn Martell",
  destinatario: "Tyrion Lannister"
},
{
  testo: "Ogni uomo che deve dire \"Io sono il re\" non è un vero re. Aerys non l'ha mai capito, ma tu lo capirai",
  autore: "Tywin Lannister",
  destinatario: "Joffrey Baratheon"
},
{
  testo: "Ho vinto ogni battaglia, eppure in qualche modo sto perdendo la guerra",
  autore: "Robb Stark",
  destinatario: "Catelyn Stark"
},
{
  testo: "No, ora finisce",
  autore: "Eddard Stark",
  destinatario: "Arthur Dayne"
},
{
  testo: "Casa Mormont non conosce altro re che il Re del Nord, il cui nome è Stark",
  autore: "Lyanna Mormont",
  destinatario: "Jon Snow"
},
{
  testo: "C'è uno strumento per ogni compito e un compito per ogni strumento",
  autore: "Tywin Lannister",
  destinatario: "Tyrion Lannister"
},
{
  testo: "L'amore è la morte del dovere",
  autore: "Aemon Targaryen",
  destinatario: "Jon Snow"
},
{
  testo: "I giganti non hanno re, non più dei mammut, né degli orsi delle nevi, né delle grandi balene del mare grigio. Quello è Mag-Mar-Tun-Doh-Weg. Mag il Potente. Puoi inginocchiarti davanti a lui se ti va, non gliene frega niente. So che le tue ginocchia da inginocchiatoio devono prudere, per la mancanza di un re a cui piegarti. Attento a non farti pestare, però",
  autore: "Tormund Veleno-dei-Giganti",
  destinatario: "Jon Snow"
},
{
  testo: "Un leone non si cura dell'opinione delle pecore",
  autore: "Tywin Lannister",
  destinatario: "Jaime Lannister"
},
{
  testo: "Non servi niente e nessuno seguendolo nella tomba",
  autore: "Catelyn Stark",
  destinatario: "Robb Stark"
},
{
  testo: "Niente è più doloroso che non riuscire a proteggere chi ami",
  autore: "Brienne di Tarth",
  destinatario: "Podrick Payne"
},
{
  testo: "L'inverno non arriverà mai per gente come noi. Se dovessimo morire in battaglia, sicuramente canteranno di noi, ed è sempre estate nelle canzoni. Nelle canzoni tutti i cavalieri sono galanti, tutte le ancelle sono belle, e il sole splende sempre",
  autore: "Brienne di Tarth",
  destinatario: "Monologo"
},
{
  testo: "Le tue parole scompariranno. La tua casa scomparirà. Il tuo nome scomparirà. Ogni ricordo di te scomparirà",
  autore: "Sansa Stark",
  destinatario: "Ramsay Bolton"
},
{
  testo: "Non hanno mai visto una battaglia, non hanno mai visto un uomo morire, non sanno niente. I loro sogni erano pieni di canzoni e storie",
  autore: "Sansa Stark",
  destinatario: "Monologo"
},
{
  testo: "Il caos non è un baratro. Il caos è una scala. Molti che cercano di salirla falliscono e non possono più riprovarci. La caduta li spezza. E ad alcuni, viene data la possibilità di salire. Rifiutano, si aggrappano al regno o agli dei o all'amore. Illusioni. Solo la scala è reale. La scalata è tutto ciò che c’è",
  autore: "Petyr Baelish",
  destinatario: "Varys"
}
];
