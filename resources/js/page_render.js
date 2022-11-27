const boxImages = {
    linguaggio: `<img src="resources/images/BOX_LINGUAGGIO.jpg" title="Linguaggio" />`,
    autonomie: `<img src="resources/images/BOX_AUTONOMIE.jpg" title="Autonomie" />`,
    centrale: `<img src="resources/images/BOX_CENTRALE.jpg" title="Fascia d'età" />`,
    campanelli: `<img src="resources/images/BOX_CAMPANELLI.jpg" title="Campanelli d'allarme" />`,
    spunti: `<img src="resources/images/BOX_SPUNTI.png" title="Spunti" />`,
    gioco: `<img src="resources/images/BOX_GIOCO.jpg" title="Gioco" />`,
    parole_in_bocca: `<img src="resources/images/Parole_in_bocca.jpg" title="Parole In Bocca" />`,
    parole_in_volo: `<img src="resources/images/Parole_in_volo.jpg" title="Parole In Volo" />`,
};

const boxNames = {
    linguaggio: `LINGUAGGIO`,
    autonomie: `AUTONOMIE`,
    centrale: [
        `PRIMA DI METTERSI IN CAMMINO, QUANDO SI SPENGONO LE CANDELINE DEI 3 ANNI: COSA MI PORTO NELLO ZAINO?`,
        `DAI 3 AI 4 ANNI`,
        `DAI 4 AI 5 ANNI`,
        `DAI 5 AI 6 ANNI`
    ],
    campanelli: `CAMPANELLI DI ALLARME!`,
    spunti: `BOX SPUNTI`,
    gioco: `RELAZIONI SOCIALI - IL GIOCO`
};

const pdfDownloads = [
    `<a href="javascript:void(0)" class="sub-title2" download="">Download</a>`,
    `<a href="javascript:void(0)" class="sub-title2">Download</a>`,
    `<a href="javascript:void(0)" class="sub-title2">Download</a>`,
    `<a href="javascript:void(0)" class="sub-title2">Download</a>`,
];

const indexes = [
    {
        id: 0,
        title: "Homepage - Parole In Cammino",
        indexValue: "Introduzione",
        style: `style="background-color: #e5760d;"`,
        page: "index.html",
        image: `<img src="resources/images/INTRODUZIONE.png" title="Introduzione" />`,
        content: `
            <h1 class="sub-title">Chi siamo e cos'è Parole In Cammino?</h1>

            Buongiorno!<br />
            Benvenuti in questo progetto di tesi.<br />
            Siamo Marta Corti e Francesca Minola, due studentesse del Corso di Laurea di Logopedia, presso l'Università Statale di Milano, sezioni di Bosisio Parini e Fondazione Don Gnocchi.<br />
            Dal nostro progetto di tesi nasce <span class="sub-title">Parole in cammino</span>, un libretto online che vuole essere di agevole lettura e facilmente reperibile.<br />
            Abbiamo creato un sito all'interno del quale sono illustrate le principali tappe dello<span class="sub-title">sviluppo dei bambini tra i 3 e 5 anni.</span> Nello specifico abbiamo approfondito le aree del <span class="sub-title">linguaggio</span> e della <span class="sub-title">comunicazione</span>, delle <span class="sub-title">autonomie personali</span> e delle <span class="sub-title">relazioni sociali sviluppate all'interno del gioco</span>.<br />
            Di fondamentale importanza il contributo e la partecipazione del Presidente del CdL Professor Antonio Schindler, della docente del CdL Logopedista Raffaella Pozzoli, delle Logopediste Elena Giudici, Francesca Tombola, Alessandra Brunetti, Silvana Bresciani, dei genitori e delle figure che gravitano attorno ai bambini.<br /><br />

            <span class="sub-title3">Parole in Cammino</span> è nato in seguito ad uno <span class="sub-title">studio osservazionale</span> che ha visto coinvolti genitori, figure professionali e non, che nella loro quotidianità si interfacciano con i bambini.<br />
            A tutti coloro che hanno deciso di partecipare al progetto è stato proposto un questionario online anonimo con lo scopo di indagare le aree di sviluppo approfondite all'interno del libretto.<br />
            Per questo <span class="sub-title">ringraziamo tutti i partecipanti</span> che, rispondendo al questionario, ci hanno permesso di creare uno strumento informativo e di supporto per altri genitori e per tutti coloro che accompagnano i bambini nel loro percorso di crescita.<br /><br />

            Ringraziamo di cuore per il supporto e la preziosa collaborazione:<br />
            Prof. Antonio Schindler, Presidente del Corso di Laurea in Logopedia dell'Università degli Studi di Milano<br />
            Logopedista Raffaella Pozzoli, Docente del Corso di Laurea in Logopedia dell'Università degli Studi di Milano<br />
            Logopedista Elena Giudici<br />
            Logopedista Francesca Tombola<br />
            Logopedista Alessandra Brunetti<br />
            Logopedista Silvana Bresciani<br />
            Psicologa Chiara Cantiani, Ricercatrice dell'Istituto La Nostra Famiglia, Bosisio Parini<br />
            Psicologa Sara Mascheretti, Ricercatrice del Dipartimento di Scienze del Sistema Nervoso e del Comportamento - Università degli Studi di Pavia<br />
            Lorenzo Solito, sviluppatore del sito<br />
            Lara Zerbi, realizzatrice delle illustrazioni di "Parole in Cammino"<br />
            Walter Crippa, graphic designer<br /><br />

            <h1 class="sub-title">Lettera ai genitori e alle figure di riferimento</h1>

            Accompagnare e supportare la crescita di un bambino è uno dei compiti più complicati e più belli che esistano.<br />
            I bambini crescono molto velocemente e devono imparare tantissime cose fin dai primi giorni di vita; in pochi anni arriveranno a parlare, a camminare, a correre, a osservare, a cercare, a domandare…<br />
            <span class="sub-title">Ogni bambino è unico e non esiste un manuale che contenga delle regole fisse</span> e prestabilite su come debba procedere la sua crescita e su come l'adulto debba accompagnare il suo cammino spesso tortuoso e in salita.<br />
            Dagli studi condotti fino ad oggi sappiamo che esistono delle <span class="sub-title">"tappe</span> che devono essere raggiunte entro un certo periodo di tempo e che sono influenzate in buona parte <span class="sub-title">dagli stimoli e dalle persone</span> che circondano il bambino.<br />
            Questi fattori (stimoli e persone) potranno facilitare oppure complicare l'apprendimento di nuove abilità e comportamenti da parte del bambino.<br /><br />
            
            Il nostro progetto di tesi ha lo scopo di <span class="sub-title">diffondere</span> il più possibile le <span class="sub-title">conoscenze</span> sulle competenze di un bambino in età prescolare; vorremmo rendere queste preziose informazioni più facilmente accessibili a genitori, pediatri, educatori … a tutti i professionisti che lavorano con questa fascia d'età per favorire un'attenta osservazione dello sviluppo di ciascuno.<br /><br />

            Speriamo che questo strumento possa essere utile e interessante, che possa incuriosirvi e lasciarvi qualche spunto di riflessione; non abbiamo la presunzione di essere esaustive, perché ogni bambino è un mondo e la sua crescita è un Cammino lungo una vita.<br />
            <span class="sub-title">Vorremmo augurare a tutti gli uomini e le donne di domani un avventuroso viaggio</span>.<br />
            Un soddisfacente Cammino!<br /><br />
            
            <div id="instraction-cointaner">
                <span class="sub-title">COME E' STRUTTURATO IL SITO</span><br />
                Il sito è diviso in capitoli per fasce d'età e in ogni sezione troverete i diversi argomenti nei rispettivi box:<br />
                <div class="list">
                    ●	Linguaggio.<br />
                    ●	Autonomie.<br />
                    ●	Relazioni sociali - gioco.
                </div>
                Inoltre abbiamo creato delle "pillole" da lasciarvi come spunti finali: libri, bilinguismo e device.<br /><br />
                
                <span class="sub-title">In grassetto sono riportate le competenze dei bambini</span>, <span class="sub-title2">mentre i consigli e le proposte di attività per l'adulto sono sottolineati.</span>
            </div>
        `
    },
    {
        id: 1,
        title: "3 anni - Parole In Cammino",
        indexValue: "3 anni",
        style: `style="background-color: #8e1582;"`,
        page: "three_years_old.html",
        linguaggio: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(0, "linguaggio")}
                </div>

                I nostri bambini iniziano a chiacchierare sempre di più: il linguaggio è il mezzo più rapido ed efficace, che consente di farsi comprendere velocemente.<br />
                La maggior parte delle frasi dette dal bambino è composta da tre parole o più grazie alla comparsa di numerosi <span class="sub-title">verbi</span>.<br />
                Passiamo da "Mamma pappa" a "Mamma voio pappa" (per dire: "Mamma voglio la pappa")<br />
                Questo è il momento in cui si consolida la concordanza tra il <span class="sub-title">nome</span> e il verbo<br />
                Ad esempio "Bimbi gioca" diventerà "Bimbi giocano".<br />
                Potremmo inoltre notare la comparsa di piccole paroline che in italiano non esistono e che <span class="sub-title">anticipano articoli</span>, preposizioni, pronomi e congiunzioni.<br />
                "Mamma voio a pappa"<br /><br />

                Ovviamente ci sarà ancora qualche piccolo errore … è del tutto normale. In questi casi possiamo <span class="sub-title2">ripetere noi la frase corretta</span>, lasciando che i bambini semplicemente la ascoltino e la apprendano.<br />
                Possiamo stimolare il linguaggio anche durante il gioco: ricordiamoci di <span class="sub-title2">descrivere quello che succede</span>, enfatizzando le azioni compiute!<br />
                Ad esempio: "Stai lavando la bambola … guarda come è pulita!"<br /><br />

                I nostri piccoli fanciulli e fanciulle sono pronti per arricchire il loro linguaggio, rendendolo sempre più simile a quello di un adulto.
            </div>
        `,
        autonomie: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(0, "autonomie")}
                </div>

                <span class="sub-title">1. Alimentazione</span><br />
                <div class="list">
                    Come crescono in fretta i nostri bambini!! Ebbene sì, stanno diventando sempre più abili e sempre più autonomi.<br />
                    Durante il momento del pasto sono già in grado di <span class="sub-title">bere dal bicchiere</span> e mangiano ormai da soli, <span class="sub-title">usando in autonomia la forchetta e il cucchiaio</span>.<br />
                    Potremmo definire i nostri bambini dei "gran divoratori": se le consistenze e i sapori sono di loro gradimento sono in grado definitivamente di <span class="sub-title">mangiare gli stessi cibi che mangiano gli adulti</span>.<br />
                    Tic tac … è ora di mangiare!<br />
                    I nostri bambini stanno cominciando a capire quali sono i momenti del pasto all'interno della loro routine e iniziano anche a dare un significato a quel famoso "languorino" che ci accomuna tutti. Sono in grado di <span class="sub-title">comunicare la sensazione di fame</span>, richiedendo il cibo di cui più hanno voglia.<br /><br />
                </div>

                <span class="sub-title">2. Bagno e igiene</span><br />
                <div class="list">
                    Oh - oh … qualcuno deve fare i bisogni? Presto, si corre in bagno!<br />
                    Che bel traguardo: abbiamo detto <span class="sub-title">addio al pannolino</span>. Questo significa che i nostri bambini stanno imparando ad ascoltare il proprio corpo, riconoscono gli stimoli che derivano da questo e li sanno comunicare ad una figura di riferimento.<br />
                    Nella routine del bagno rientra anche l'abilità di <span class="sub-title">lavarsi le mani</span>.<br />
                    Per fare in modo che questo meccanismo diventi del tutto automatico è importante <span class="sub-title2">complimentarsi e motivare il bambino</span>: così facendo capirà che sta percorrendo la strada giusta.<br /><br />
                </div>

                <span class="sub-title">3. Vestirsi</span><br />
                <div class="list">
                    Maglietta gialla o rossa? Calze con i cuori o con i fiori?<br />
                    I nostri bambini iniziano a <span class="sub-title">vestirsi in autonomia</span>. Certo è ancora presto per fare tutto completamente da soli e ci sarà ancora qualche manica fuori posto, ma si può procedere per piccoli passi.<br />
                    <span class="sub-title2">Possiamo aiutarli nei primi step per poi incoraggiarli a terminare da soli</span>.<br />
                    Se i nostri bambini non riescono al primo tentativo proviamo a non essere precipitosi, anzi, <span class="sub-title2">sosteniamoli e sproniamoli</span>. In questo modo sentiranno che stiamo dando loro fiducia e con i loro tempi riusciranno a portare a termine il compito.<br /><br />
                </div>

                Facciamo un esempio: possiamo arrotolare le gambe dei pantaloni, aiutare il bambino a infilare i piedini e incoraggiarlo “Dai forza! Finisci tu … tira su i pantaloni fino in alto”.
            </div>
        `,
        centrale: `
            <div id="value-content-centrale">
                <div>
                    ${titleBox(0, "centrale")}
                </div>

                Che gioia! I nostri bambini hanno appena spento 3 candeline, è già il momento di andare all'asilo!<br />
                I nostri piccini stanno crescendo e sono pronti per nuove avventure: nuova scuola, nuove maestre, nuovi compagni e tante nuove esperienze che riempiranno sempre di più il bagaglio delle loro abilità.<br />
                È necessario prepararsi al meglio!<br />
                Dobbiamo portare uno zaino bello pieno di entusiasmo, curiosità e coraggio; tutto ciò che hanno imparato fino ad ora sarà lo strumento che li sosterrà nel CAMMINO.<br /><br />

                BIBLIOGRAFIA: (Girolametto et al, 2019); (Caselli et al, 2015); (Schindler, et al., 2011); (Deny M., 2020); (Federico e Cammisa, 2022); (Baumgartner E., 2018).<br />
                Clicca qui per scaricare il pdf del capitolo: ${pdfDownloads[0]}
            </div>
        `,
        campanelli: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(0, "campanelli")}
                </div>

                <span class="sub-title">Segnalate al pediatra se notate:</span><br />
                <div class="list">
                -   L'assenza della combinazione di almeno due parole (tendenza ad esprimersi con singole parole).<br />
                <span class="list">Ad esempio: "bambola" invece di "voglio bambola" o "mamma voglio la bambola".</span><br />
                -	Il rifiuto di cibi solidi, la perdita di cibo dalla bocca e la presenza di tosse causata da pezzettini di cibo che vanno di traverso.<br />
                -	La ripetizione "a eco" delle domande degli adulti.<br />
                -	Il peggioramento del linguaggio dopo che il bambino ha imparato a elaborare frasi di due parole.<br />
                -	La difficoltà del bambino nel comprendere ciò che gli viene detto (anche richieste semplici).<br />
                <span class="list">Ad esempio durante il gioco richieste del tipo "metti la mucca nella stalla e dai da mangiare al cavallo".</span>
                </div>
            </div>
        `,
        spunti: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(0, "spunti")}
                </div>

                <div class="list">
                    -   <span class="sub-title">Niente frustrazioni … una strategia per dare coraggio</span><br />
                    <span class="list">
                        Se il bambino si scoraggia facilmente quando fa qualcosa in autonomia, possiamo <span class="sub-title2">creare delle situazioni che lo portino a fare bene da solo</span>. Facciamo un esempio: il nostro bambino vuole iniziare a fare un nuovo puzzle, ma noi lo conosciamo bene e sappiamo che i livelli di pazienza non sono alti e che si perde d'animo in breve tempo.<br />
                        Quale strategia possiamo usare per fare in modo che porti a termine il compito da solo? Potremmo invitarlo ad aiutarci a dividere i pezzi del puzzle per colore, per personaggi, "cornice-centro", creando così una situazione che sia per lui facilitante.<br /><br />
                    </span>

                    -	<span class="sub-title">Tutti i gusti in tavola</span><br />
                    <span class="list">L'età in cui si sviluppano abilità motorie alimentari è in gran parte influenzata dalle stimolazioni ambientali alle quali i bambini vengono esposti nella loro quotidianità.</span><br />
                    Per sostenere e incrementare il prima possibile queste competenze è importante che noi stessi creiamo delle opportunità in cui i nostri bambini <span class="sub-title2">facciano esperienza</span>. Possiamo partecipare attivamente al momento del pasto e proporre cibi e consistenze che costituiscano delle novità per i nostri piccoli.<br /><br />

                    -	<span class="sub-title">A proposito di alcune abitudini…</span><br />
                    Attenzione ad alcune abitudini e comportamenti quotidiani:<br />
                    <span class="list">●	Favorire il <span class="sub-title">distacco da biberon e ciuccio</span>.</span><br />
                    <span class="list">●	<span class="sub-title">Incentivare l'uso del bicchiere</span>, da preferire rispetto alla cannuccia o al bicchiere con il beccuccio.</span><br />
                    <span class="list">●	Favorire <span class="sub-title">l'abbandono dei vizi orali</span> (ad esempio digrignare i denti, mordere unghie o oggetti, succhiare il pollice).</span><br />

                    -	<span class="sub-title">Soffiarsi il naso</span><br />
                    Tra le abilità da acquisire prima dell'ingresso alla scuola d'infanzia c'è proprio il "soffiare il naso". Non è una competenza così scontata, bisogna rispettare una precisa sequenza di azioni:<br />
                    <div class="list sub-title">
                        1.	Prendere bene il fiato.<br />
                        2.	Chiudere la bocca.<br />
                        3.	Spingere fuori dal naso l'aria.<br />
                        4.	Con il fazzoletto, chiudere prima una narice e poi l'altra.<br />
                    </div>
                    All'inizio dovremo <span class="sub-title2">ricordare</span> a voce la sequenza e <span class="sub-title2">aiutare anche fisicamente<br /> i nostri bambini anche con l'ultimo passaggio.
                </div>
            </div>
        `,
        gioco: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(0, "gioco")}
                </div>

                Quante mattine e quanti pomeriggi a giocare con i nostri bambini al parco, in casa, in giardino...<br />
                Quali giochi ha appreso il nostro bambino fino a questo momento del suo viaggio?<br />
                Sicuramente nei primi mesi di vita i giochi preferiti riguardano <span class="sub-title">l'esplorazione</span> come ad esempio gattonare, lanciare oggetti, rotolarsi…<br />
                Compaiono poi i <span class="sub-title">giochi di costruzione</span> (torri con i lego, pista delle macchinine…) e si intravede lo sviluppo del <span class="sub-title">gioco di finzione</span>: "Faccio finta di bere il tè dalla tazzina" oppure "Faccio finta di dare da mangiare alla bambola" …<br /><br />

                E' importante <span class="sub-title2">giocare insieme</span> ai nostri bambini <span class="sub-title">lasciando che siano loro a condurre il gioco</span> e a decidere le regole che più gli piacciono.
            </div>
        `
    },
    {
        id: 2,
        title: "3-4 anni - Parole In Cammino",
        indexValue: "3-4 anni",
        style: `style="background-color: #e5760d;"`,
        page: "three_four_years_old.html",
        linguaggio: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(1, "linguaggio")}
                </div>

                La lingua corre sempre più veloce ed è sempre più precisa nei suoi movimenti: riesce anche a pronunciare suoni difficili, come quelli presenti in <span class="sub-title">GN</span>omo, <span class="sub-title">CI</span>ao, <span class="sub-title">GI</span>allo.<br /><br />
 
                Le <span class="sub-title">paroline</span> che prima erano pronunciate solo parzialmente ora sono <span class="sub-title">complete</span> e riconoscibili: si passa ad esempio da "nana" a "banana".<br /><br />

                Questo passaggio potrebbe essere facilitato dalle <span class="sub-title2">numerose stimolazioni</span> che i bambini ricevono quotidianamente: possiamo <span class="sub-title2">ripetere</span> ai bambini quello che hanno detto utilizzando, però, un modello corretto che li aiuterà a correggere spontaneamente le loro frasi.<br />
                <div class="list">
                    Facciamo un esempio pratico:<br />
                    - Bambino: "Mamma! Compiamo le nane?"<br />
                    - Mamma: "Certo, tesoro, compriamo le BANANE. Prendiamo 3 BANANE. Metti nel carrello le 3 BANANE".<br />
                </div>

                Le nuove parole apprese aumentano di numero ogni giorno che passa: basta pensare che dopo i 3 anni il vocabolario dei bambini ha raggiunto la quota di circa <span class="sub-title">1000 parole</span>!<br />
                E non è finita qui … è possibile che i nostri "giovani pionieri" arrivino ad imparare dalle 5 alle 10 parole nuove al giorno.<br /><br />

                Non dimentichiamo di sfruttare ogni momento di condivisione con i nostri bambini <span class="sub-title2">proponendo sinonimi o parole che non hanno mai sentito</span> per arricchire la valigetta del vocabolario.<br />
                <div class="list">
                    Ad esempio:<br />
                    - Bambino: "Metto il vestito alla bambola!"<br />
                    - Papà: "Cosa vuoi? La camicia, il vestito lungo o la giacca?"<br />
                </div>

                Nelle frasi compaiono gli <span class="sub-title">articoli</span> dal più semplice ("la") ai più complessi ("gli" e "lo"). I bambini dovranno pazientare fino ai 5 anni per padroneggiarli tutti correttamente.<br />
                I bambini diventeranno sempre più bravi anche con le <span class="sub-title">preposizioni</span>, in particolare quelle utili per parlare dello "spazio": "da", "su", "a", "in" …<br />
                Organizziamo delle divertenti <span class="sub-title2">cacce al tesoro</span> per farli sperimentare.<br /><br />

                In questa fascia di età ci sono degli errori tipici che riguardano la coniugazione dei <span class="sub-title">verbi</span> e che tenderanno a scomparire spontaneamente intorno ai 4 anni.<br />
                Ad esempio "Leggio io il libro" oppure "Ho aprito la porta" diventeranno poi rispettivamente "Leggo io il libro" e "Ho aperto la porta".<br />

                Facciamo il punto della situazione: gli articoli e le preposizioni sono sempre più stabili, i nomi e i verbi aumentano a dismisura, le frasi sono ben costruite … i bambini hanno tutti gli strumenti necessari per <span class="sub-title">raccontare una storia</span>!<br />
                Anche in questo caso si procede per step: i bambini ci raccontano le loro esperienze, presentandole più come un susseguirsi di eventi non collegati, senza uno scopo preciso né tanto meno un finale.<br />
                "Papi ha guidato fino al mare, e ho mangiato la focaccia, il mare era pieno di pesci"<br /><br />

                Come possiamo interagire e prendere parte a questi dialoghi un po' bizzarri?<br />
                Non c'è una regola scritta che ci dice quali risposte dare e come comunicare; una delle strategie migliori è quella di <span class="sub-title2">mostrare interesse</span> per quello che i nostri piccoli hanno da raccontarci...ne saranno entusiasti e si sentiranno ascoltati!<br />
                Dal primo anno della scuola dell'Infanzia parte la sperimentazione del "raccontare storie", ma ci vorrà un po' di pazienza perché risulti efficace e funzionale.
            </div>
        `,
        autonomie: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(1, "autonomie")}
                </div>

                <span class="sub-title">1. Alimentazione</span><br />
                <div class="list">
                    Facciamo il punto della situazione di tutto quello che i nostri bambini sanno utilizzare a tavola: il bicchiere c'è, il cucchiaio lo abbiamo, forchetta presente … manca qualcosa …<br />
                    Ma certo, è proprio il <span class="sub-title">coltello</span>! E' ora che i bambini facciano esperienza e provino ad utilizzare anche il coltello con la punta arrotondata. Sicuramente saranno un po' impacciati, ma hanno solo bisogno di un pochino di tempo e di pratica.<br /><br />

                    Possiamo aiutarli ad allenarsi <span class="sub-title2">mostrando i movimenti e guidandoli con pazienza</span>.<br /><br />

                    Quante volte qualcuno di noi ha dovuto ingegnarsi per fare in modo che i "nostri piccoli terremoti" stessero seduti a tavola? E' in arrivo una super notizia!<br />
                    In questo anno i bambini dovrebbero cominciare a partecipare attivamente al momento del pasto:<br />
                    <div class="list">
                        ●	Diminuiranno sempre di più le occasioni in cui sarà necessario l'aiuto dei giochi o della televisione.<br />
                        ●	Aumenteranno gradualmente le situazioni in cui i nostri piccoli staranno seduti correttamente e converseranno con chi è presente.<br /><br />
                    </div>
                    Ovviamente non c'è la pretesa che rispettino i tempi degli adulti, ma nel frattempo possiamo invogliarli a rimanere a tavola <span class="sub-title2">proponendo argomenti di loro interesse e commentando le azioni che si compiono a tavola</span>: <span class="sub-title3">"contiamo insieme i mirtilli che ci sono nella ciotola!" oppure "tagliamo la pizza a forma di triangolo"</span>.<br /><br />

                    Parlando del momento del pasto, non dimentichiamo che a quest'età i nostri bambini possono aiutarci ad <span class="sub-title">apparecchiare e sparecchiare la tavola.</span><br />
                    Questo potrebbe diventare un piccolo appuntamento fisso nel corso della giornata che aiuta i nostri piccoli a farsi carico di un compito che ai loro occhi è un lavoro da grandi. Possiamo renderlo un momento di condivisione divertente, istituendo delle vere e proprie <span class="sub-title2">catene di montaggio</span>!<br /><br />
                </div>

                <span class="sub-title">2. Bagno e igiene</span><br />
                <div class="list">
                    Quanto è bello vedere i nostri bambini che sfoggiano i loro coloratissimi e simpaticissimi spazzolini mentre fanno le facce più assurde per pulire tutti i dentini?<br />
                    E' arrivato il momento di <span class="sub-title">lavare i denti da soli</span> … che bel traguardo!<br />
                    Non neghiamolo, ci sarà sempre qualche furbetto un po' pigrone che non ha voglia di sfregare per bene. Il nostro compito è quello di <span class="sub-title2">spiegare</span> ai nostri piccoli i motivi per cui è importante lavarsi accuratamente i denti. Possiamo anche fare in modo che diventi un <span class="sub-title2">momento divertente e di gioco</span>, ad esempio facendo una gara a chi fa le facce più strane mentre si spazzola i denti o a chi fa più schiuma.<br /><br />
                </div>

                <span class="sub-title">3. Momenti di svago</span><br />
                <div class="list">
                    "Giochiamo con il trenino? Ora giochiamo con le costruzioni? Adesso invece giochiamo a fare gli chef con la cucina?" Certo! Ma prima un po' di ORDINE!<br />
                    E' importante che i bambini comincino a <span class="sub-title">gestire gli spazi</span> in cui vivono durante la giornata e inizino a rispettare una nuova regolina: quando un gioco è terminato prima di prenderne uno nuovo si sistema e si <span class="sub-title">mette in ordine</span> quello che si stava usando!<br />
                    Inizialmente potrebbe essere utile <span class="sub-title2">ricordare</span> più volte ai nostri bambini <span class="sub-title2">questa semplice regola</span>, ma con il tempo impareranno a farlo anche da soli.
                </div>
            </div>
        `,
        centrale: `
            <div id="value-content-centrale">
                <div>
                    ${titleBox(1, "centrale")}
                </div>

                Alcune mamme li chiamano scherzosamente i "Terribili Tre": i bambini hanno ormai imparato a correre e a parlare … Possono essere dei veri terremoti!<br />
                Alla scuola dell'infanzia crescono ogni giorno di più e sono in continua ricerca di novità da imparare. La curiosità è il loro instancabile motore e chi di noi non ha pensato almeno una volta "Come si spegne questo bambino? Non si scaricano mai le batterie?!<br />
                La "cattiva notizia" è che non esiste nessun pulsante OFF, ma la "buona notizia" è che, con pazienza e giuste strategie, è possibile gestire la vivacità di questi bambini!!<br /><br />

                BIBLIOGRAFIA: (Tresoldi et al, 2015); (Girolametto et al, 2019); (D'Amico e Devescovi, 2013); (Schindler, et al., 2011); (Infant & Toddler Forum, 2014); (Deny M., 2020); (Federico e Cammisa, 2022); (Baumgartner, 2010).<br />
                Clicca qui per scaricare il pdf del capitolo: ${pdfDownloads[1]}
            </div>
        `,
        campanelli: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(1, "campanelli")}
                </div>

                <span class="sub-title">Segnalate al pediatra se notate:</span><br />
                <div class="list">
                -   Il rifiuto di comunicare.<br />
                <span class="list">Quando il bambino non riesce a farsi comprendere, potrebbe scoraggiarsi e rinunciare ad avere relazioni e contatti con altri; se per qualsiasi motivo il suo linguaggio non gli permette di comunicare, potrebbe decidere di non utilizzarlo più.</span>
                </div>
            </div>
        `,
        spunti: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(1, "spunti")}
                </div>

                <div class="list">
                    -	<span class="sub-title">Stimolare il linguaggio e imparare nuove parole</span>.<br />
                    <div class="list">
                        Per stimolare e aumentare il linguaggio dei bambini sono di grande aiuto le <span class="sub-title">filastrocche e le canzoni</span> di qualsiasi genere, perché al loro interno ci sono parole che si ripetono molte volte e permettono di imparare giocando e divertendosi.<br />
                        La <span class="sub-title2">ripetizione</span> dell'adulto è fondamentale: la strategia è che i bambini SENTANO le parole più volte.<br /><br />
                    
                    Un altro modo per mettere la spunta sulla casellina "parole acquisite" è <span class="sub-title2">rendere questa parole pratiche e viverle nella quotidianità</span>.<br />
                    Fare esperienze, attività e giochi li aiuterà ad arricchire il loro vocabolario: facciamo giri alle mostre, andiamo al cinema, organizziamo un picnic nel parco, andiamo in barca, visitiamo l'acquario o lo zoo, entriamo in negozi che non hanno mai visto … le attività sono davvero infinite.<br /><br />
                    </div>

                    -	<span class="sub-title">La chiave per stimolare l'autonomia</span><br />
                    <div class="list">
                        A volte, anche se in buona fede, c'è un po' di ansia da parte della figura adulta: "E se si fa male?" "No, questo è troppo difficile" "Stai attento che è pericoloso!"<br />
                        Questa insicurezza si trasmette sul bambino che si sente circondato da pericoli e, di conseguenza, non è stimolato ad affrontare nuove esperienze perché timoroso di quello che potrebbe accadere.<br />
                        Certamente saranno utili una discreta supervisione, piccoli aiuti e consigli che non diventino però un sostituirsi ai bambini stessi!<br />
                        Molto utili <span class="sub-title2">alcune parole che danno coraggio</span>: "Bravo hai fatto un ottimo lavoro!", "Ci sei quasi, ci stai riuscendo", "Fino ad ora hai fatto un ottimo lavoro, ora prova a…", "Continua così! E' difficile ma te la stai cavando alla grande!"<br /><br />
                    </div>
                    
                    -	<span class="sub-title">Pasta, pizza, carne, gelato, torte, cioccolato … chi più ne ha più ne metta</span><br />
                    <div class="list">
                        I bambini iniziano ad esprimere delle preferenze sul cibo. E' proprio in questo momento che arrivano le lotte per convincere alcuni dei nostri bambini a mangiare alimenti importanti per la loro crescita, come le verdure, la frutta o il pesce.<br />
                        Il consiglio di molti chef è <span class="sub-title2">quello di nascondere la pietanza indesiderata</span> all'interno di quello che i bambini preferiscono di più: una sorta di "inganno benevolo".<br />
                        Per di più nulla ci impedisce di <span class="sub-title2">"giocare"</span> anche <span class="sub-title2">a tavola</span>:<br />
                        <div class="list">
                            ●	le verdure sono tantissime e anche molto variopinte. Un sugo di barbabietola rende la pasta ROSA, o la zucca porta un tocco di ARANCIONE.<br />
                            ●	tagliare o creare dei disegni nel piatto attirerà sicuramente l'attenzione dei più piccoli.<br /><br />
                        </div>
                    </div>
                    
                    -	<span class="sub-title">Il coltello - uno sguardo attento sulla scelta!</span><br />
                    <div class="list">
                        Abbiamo parlato di coltelli, ma…quali sono i migliori coltelli per i nostri bambini?<br />
                        Possiamo essere sicuri e sereni quando i nostri bambini impugnano un coltello?<br />
                        Ma certo che si può essere tranquilli, avendo però l'accortezza di scegliere un coltellino con le giuste caratteristiche!<br />
                        E' consigliabile che i coltelli utilizzati abbiano una <span class="sub-title">punta arrotondata</span>, un'<span class="sub-title">impugnatura antiscivolo</span> che faciliti la presa e <span class="sub-title">denti non affilati</span>.<br />
                        Se scelti con cura questi strumenti migliorano i movimenti, la coordinazione e l'indipendenza di ogni bambino.
                    </div>
                </div>
            </div>
        `,
        gioco: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(1, "gioco")}
                </div>

                "Faccio finta che la spazzola sia un telefonino per chiamare la mamma in cucina!"<br />
                Nonno: "Oggi è il compleanno di Peppa Pig, bisogna organizzare una festa! Caspita ci manca la torta"<br />
                Bambino: "Usiamo tante collane colorate per creare una torta arcobaleno!"<br /><br />

                Adesso accade spesso che nel gioco i bambini sfruttino la loro immaginazione per <span class="sub-title">dare agli oggetti e ai giochi una vita e un'identità tutta nuova</span>!<br />
                Ecco che la spazzola diventa un telefono e la collana una buonissima torta.<br /><br />

                Anche se ci può sembrare assurdo, mettiamoci anche noi una scatola in testa per fare un elegante cappello degno di una sfilata. <span class="sub-title2">Seguiamoli ed entriamo nel loro mondo pieno di fantasia e immaginazione</span>.<br /><br />

                Se c'è qualcosa che tutti noi conosciamo molto bene sono i litigi e i pianti disperati di due bambini che vogliono lo stesso gioco tutto per loro e per nessun motivo al mondo vogliono condividerlo!<br />
                Inizialmente sarà richiesta maggiormente la presenza dell'adulto, ma passo dopo passo aumenteranno sempre di più le situazioni in <span class="sub-title">cui si cercheranno a vicenda per giocare insieme</span>.<br />
                Non possiamo di certo pretendere che scompaiano del tutto i diverbi tra i nostri piccoli. Qualche conflitto è del tutto normale, ma li aiuterà a confrontarsi e a trovare un punto di incontro per tornare a giocare insieme in tutta tranquillità e serenità!<br /><br />

                A volte può essere utile un piccolo sostegno da parte nostra per <span class="sub-title2">aiutarli a ragionare</span> su quanto accaduto e <span class="sub-title2">trovare una soluzione</span> che soddisfi tutti quanti. E' fondamentale <span class="sub-title2">ascoltare il punto di vista di ciascun bambino</span> dando il giusto spazio a ognuno per poi aiutarli a fare chiarezza sulla situazione.
            </div>
        `
    },
    {
        id: 3,
        title: "4-5 anni - Parole In Cammino",
        indexValue: "4-5 anni",
        style: `style="background-color: #44b513;"`,
        page: "four_five_years_old.html",
        linguaggio: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(2, "linguaggio")}
                </div>

                Accidenti! Il metro segna sempre qualche centimetro in più, i vestiti dell'anno prima sono diventati piccoli e la valigetta delle competenze dei nostri bambini pesa sempre di più. Compaiono altri suoni come quelli presenti in <span class="sub-title">SC</span>immia e <span class="sub-title">R</span>ana.<br />
                Non c'è da preoccuparsi se la lettera /r/ ancora non c'è o stenta a uscire: è un suono un po' complesso da produrre e serve pazienza!<br /><br />

                Nei racconti dei bambini possiamo riconoscere l'Ambiente, l'Evento iniziale e le Conseguenze. Inoltre le storie vengono costruite con un ordine tipico:<br />
                <span class="list">"Prima…" "...dopo…", "...alla fine"</span><br /><br />

                Per allenare l'<span class="sub-title">ordine temporale</span> della narrazione potremmo <span class="sub-title2">chiedere ai nostri piccoli cosa hanno fatto durante la loro giornata</span> con domande del tipo: "Cosa hai fatto dopo pranzo?", "Dove sei andato ieri?", "E poi, cosa è successo?" …<br />
                Saranno facilitati nel racconto di esperienze quotidiane o di eventi passati rilevanti: quelli a valenza negativa saranno per lo più piccoli incidenti, mentre quelli a valenza positiva riguarderanno le nuove scoperte e attività.<br /><br />

                Già dai 4 anni i nostri bambini sono in grado di <span class="sub-title">adattare il loro linguaggio</span> in base alla persona con cui stanno parlando: con i bambini più piccoli o con gli animali useranno frasi semplici e brevi con molte ripetizioni.
            </div>
        `,
        autonomie: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(2, "autonomie")}
                </div>

                <span class="sub-title">1. Vestirsi</span><br />
                <div class="list">
                    Driiin! La sveglia suona, è ora di aprire gli occhi. Un nuovo giorno è cominciato, chissà quale avventura attende oggi i nostri bambini!<br />
                    Forza, non perdiamo tempo: togliamo il pigiama e … tutti a vestirsi.<br />
                    Ora i nostri piccoli ometti e le nostre piccole fanciulle <span class="sub-title">si vestono da soli</span>.<br />
                    I nostri bambini hanno imparato ad infilare i pantaloni e la maglietta, a mettere e togliere le calze e le scarpe. Con un po' di concentrazione e di pazienza avranno dimestichezza anche con le zip e con i bottoni.<br /><br />
                    
                    Noi cosa possiamo fare? <span class="sub-title2">Essere un modello</span> e <span class="sub-title2">non sostituirli nello svolgere questa attività</span>. I bambini, osservandoci, prenderanno esempio e proveranno a ripetere i nostri stessi gesti, facendo tesoro delle piccole strategie che abbiamo adoperato. Dobbiamo avere pazienza e lasciare ai nostri piccoli il tempo per sperimentare e senza anticiparli.<br /><br />
                    
                    Se i nostri piccoli sono interessati <span class="sub-title2">proponiamo la scelta</span> tra alcuni capi di abbigliamento e lasciamo che siano loro a decidere quale indossare: per i bambini sarà un momento divertente da condividere con l'adulto!<br /><br />
                </div>

                <span class="sub-title">2. Bagno e igiene</span><br />
                <div class="list">
                    Alla fine di una giornata intensa, in cui i nostri bambini sono andati all'asilo, hanno colorato con le tempere, hanno giocato con la sabbia al parco … serve assolutamente una bella doccia o un bagno rigenerante!<br />
                    <span class="sub-title">Insaponarsi e sciacquarsi</span> è già un compito che possono svolgere da soli, pur sapendo che in qualsiasi momento possono chiederci aiuto. In questi casi il nostro compito sarà quello di <span class="sub-title2">dare loro qualche consiglio</span>.<br />
                    Ovviamente se combiniamo tra di loro una serie di elementi come la vivacità dei nostri bambini, i giochi con l'acqua e l'euforia del momento, possiamo immaginare che acqua e schiuma saranno un po' ovunque. Va bene così!<br />
                    Inizialmente l'importante è che siano invogliati nello svolgere questo nuovo compito in autonomia e che ne capiscano l'importanza. In un secondo momento, invece, potremo dare dei consigli e delle dritte in modo tale che anche i "nostri piccoli pesciolini" diano il loro contributo nel mantenere pulizia e ordine.
                </div>
            </div>
        `,
        centrale: `
            <div id="value-content-centrale">
                <div>
                    ${titleBox(2, "centrale")}
                </div>

                Che bello, i nostri bambini sono ormai dei veri e propri esploratori, curiosi e pieni di energia! Le loro giornate si riempiono sempre di più e c'è molto tempo da sfruttare, soprattutto ora che il sonnellino pomeridiano comincia a non essere più un'abitudine, ma un vecchio ricordo … ciao ciao nanna, stiamo diventando grandi!!<br /><br />

                BIBLIOGRAFIA: (Marini et al., 2015); (Girolametto et al, 2019); (Tresoldi et al, 2018); (D’Amico e Devescovi, 2013); (Dunn e Kendrick, 1982); (Federico e Cammisa, 2022); (Deny M., 2020); (Baumgartner, 2010).<br />
                Clicca qui per scaricare il pdf del capitolo: ${pdfDownloads[2]}
            </div>
        `,
        campanelli: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(0, "campanelli")}
                </div>

                <span class="sub-title">Segnalate al pediatra se notate:</span><br />
                <div class="list">
                    -	L'assenza di alcuni suoni<br />
                    <span class="list">Man mano che i bambini crescono riescono a pronunciare suoni sempre più difficili. In questa fascia d'età devono essere presenti i suoni che compaiono per primi nello sviluppo: 'P', 'T', 'M', 'N', 'B', 'L', 'D', 'C' (di "cane"), 'F'.</span>
                </div>
            </div>
        `,
        spunti: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(2, "spunti")}
                </div>

                <div class="list">
                    -   <span class="sub-title">Prepararsi ad affrontare gli ostacoli e i pericoli</span><br />
                    <div class="list">
                        Tutti sappiamo benissimo che sia a casa che fuori potrebbero esserci delle situazioni pericolose.<br />
                        Per questo è essenziale preparare i nostri bambini a reagire in maniera corretta e responsabile … meglio essere ben preparati piuttosto che sperare nella fortuna!<br />
                        Ormai i nostri bambini sono grandicelli e hanno raggiunto un'età in cui sono in grado di comprendere ciò che gli spieghiamo, sono orgogliosi di quello che imparano e sanno dare la giusta importanza ai vari pericoli se ben informati.<br />
                        Prendiamoci del tempo per <span class="sub-title2">spiegare il motivo</span> per cui alcune cose non sono sicure:<br />
                        <span class="list">spesso questo modo di agire è molto più efficace che imporre dei divieti.</span><br /><br />
                    </div>
                    
                    -	<span class="sub-title">Una buona parola per i traguardi raggiunti e i piccoli insuccessi</span><br />
                    <div class="list">
                        A volte, quando i bambini raggiungono dei piccoli traguardi, è preferibile <span class="sub-title2">fare complimenti precisi e specifici</span> perché risultano essere più incisivi.<br />
                        Ad esempio potremmo congratularci dicendo: "Ottimo! Guarda come hai allacciato bene la camicia! Anche le scarpe sono infilate correttamente., piuttosto che: "Ti sei vestito bene!.<br />
                        In questo modo i bambini si sentiranno gratificati e avranno un rimando diretto su quali azioni hanno compiuto in maniera corretta e soddisfacente.<br /><br />
                        
                        Di fronte ad una frustrazione, invece, può essere utile <span class="sub-title2">ricordare i successi passati</span>.<br />
                        Ad esempio si può ricordare ai nostri piccoli che prima non riuscivano a infilare le scarpe, poi hanno imparato. Se non riescono serve un po' di pazienza e un filo di concentrazione in più.<br />
                        <span class="sub-title2">Rassicuriamoli</span>, infine, sul fatto che sappiamo che sono capaci e siamo certi che ce la possono fare con un po' di determinazione!
                    </div>
                </div>
            </div>
        `,
        gioco: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(2, "gioco")}
                </div>

                Quanto è bello vedere i nostri bambini che giocano insieme agli amici e alle amiche!<br />
                La fantasia corre veloce e nei giochi i nostri bambini <span class="sub-title">si immedesimano in altri personaggi</span>:<br />
                <div class="list">
                    "Facciamo finta che io ero il cavaliere e tu la principessa da salvare".<br />
                    "Facciamo finta che io ero il dottore e tu eri il signore che non sta bene perchè ha mal di pancia".<br />
                </div>
                Caspita, l'immaginazione dei nostri bambini non ha limiti! Adesso non solo ci raccontano delle storie, ma le mettono anche in scena, diventando allo stesso tempo registi e attori di un vero e proprio spettacolo teatrale. Ognuno ha il suo personaggio e si decide insieme il copione da seguire.<br /><br />

                Quale potrebbe essere il nostro ruolo all'interno di questi "mini spettacoli teatrali"?<br />
                Noi potremmo essere gli <span class="sub-title2">addetti alla sicurezza</span>: dobbiamo fare in modo che i nostri bambini giochino in autonomia, ma anche in sicurezza. Assicuriamoci che gli ambienti, i giochi e gli oggetti che hanno a disposizione siano tanti ma non pericolosi.
            </div>
        `
    },
    {
        id: 4,
        title: "5-6 anni - Parole In Cammino",
        indexValue: "5-6 anni",
        style: `style="background-color: #3b5bed;"`,
        page: "five_six_years_old.html",
        linguaggio: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(3, "linguaggio")}
                </div>

                I nostri "grandoni" esplorano e imparano gli ultimi suoni come quelli delle parole "ro<span class="sub-title">S</span>a", "<span class="sub-title">S</span>ole", "fami<span class="sub-title">GLI</span>a".<br />
                Anche in questo caso per questi suoni più difficili potrebbe volerci un po' di tempo.<br /><br />

                Scompaiono le difficoltà nelle parole con <span class="sub-title">consonanti vicine</span>, come "a<span class="sub-title2">nc</span>ora, <span class="sub-title2">gr</span>a<span class="sub-title2">nd</span>e, se<span class="sub-title2">nz</span>a, ma<span class="sub-title2">ng</span>ia, …". Tutte le lettere che compongono una parola si possono distinguere chiaramente … check precisione: si sente tutto bene? Forte e chiaro!<br /><br />

                Gli errori grammaticali sono quasi completamente spariti e, quando per caso accadono, i bambini riescono a <span class="sub-title">correggersi in autonomia</span>.<br />
                A 5 anni è possibile arrivare al livello di "<span class="sub-title">6000 parole apprese</span>” e poco prima dei 6 anni anche alla formidabile quota di 10 000!<br /><br />

                Le storie dei nostri bambini iniziano con "C'era una volta" e spesso si concludono con "Basta", "Finita", "Fine della storia"...<br />
                All'interno dei racconti i personaggi compiono determinate azioni perché hanno uno <span class="sub-title">scopo ben preciso</span>, come ad esempio la ricerca di un tesoro o di un luogo incantato.<br />
                Cominciano a fare capolino anche le <span class="sub-title">emozioni</span> e gli stati d'animo dei protagonisti delle storie: i bambini scoprono che tutti proviamo paura, felicità, rabbia, affetto, tristezza, coraggio!
            </div>
        `,
        autonomie: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(3, "autonomie")}
                </div>

                <span class="sub-title">1. Vestirsi</span><br />
                    <div class="list">
                        I nostri bambini sono dei veri gioiellini! Sanno indossare un completo da cima a fondo tutti da soli.<br />
                        Manca forse l'ultimo piccolo passo: le <span class="sub-title">stringhe delle scarpe</span>!!<br />
                        Fai un orecchio, tieni fermo, gira intorno, fai passare sotto … insomma non è per niente facile da spiegare, né tanto meno da imparare, ma ormai sia noi che i nostri bambini sappiamo benissimo che gli ingredienti necessari per riuscire bene sono pazienza e tanta pratica!<br />
                        C'è tanta curiosità di "saper fare" e per alcuni anche quel pizzico di testardaggine nel voler imparare senza l'aiuto degli adulti.<br /><br />

                        Non opponiamoci! <span class="sub-title2">Se vogliono sperimentare da soli lasciamoglielo fare</span>; se avranno difficoltà o perderanno la pazienza saranno loro a chiedere di <span class="sub-title2">farglielo rivedere</span>.<br /><br />
                    </div>

                <span class="sub-title">2. Compiti domestici</span><br />
                    <div class="list">
                        Che bello vedere i nostri bambini che si occupano dell'ambiente in cui vivono!<br />
                        Eh sì … adesso sono in grado di aiutarci anche a svolgere alcuni <span class="sub-title">compiti domestici</span>, come ad esempio pulire il tavolino su cui disegnano, lavare il piatto o la forchetta della merenda o ancora rifare il proprio letto.<br />
                        Ovviamente la richiesta non è quella di far brillare ogni angolo della casa o di tirare le coperte alla perfezione … sarebbe fin troppo noioso e inadatto ai nostri bambini!<br />
                        Si partirà dal sistemare solo il cuscino, per poi piegare anche il pigiama e infine le coperte. Quello che conta è l'impegno e la partecipazione di ognuno nel prendersi cura dell'ambiente in cui vive.<br /><br />

                        Si tratta pur sempre di nuove esperienze e i nostri bambini non vedranno l'ora di mostrarci i loro progressi. Nessuna esitazione … <span class="sub-title2">dimostriamoci entusiasti del lavoro svolto</span>!!<br /><br />
                    </div>

                <span class="sub-title">3. Momenti di svago</span><br />
                    <div class="list">
                        In una bella giornata di sole cosa c'è di meglio di andare al parco con gli amici?<br />
                        "Evviva, tutti sullo scivolo! E ora proviamo la carrucola!"<br />
                        I nostri bambini sono diventati più <span class="sub-title">responsabili</span>, più <span class="sub-title">autonomi</span> e sono a <span class="sub-title">conoscenza dei pericoli</span> che li circondano. Per questo sarà più facile scambiare quattro chiacchiere con gli altri genitori al parco.<br />
                        Certamente sarà ancora necessario che qualcuno li accompagni e che abbia un occhio di riguardo nei loro confronti, ma potremo stare più tranquilli.<br /><br />

                        E' questo il  momento per <span class="sub-title2">verificare che abbiano appreso</span> quali sono le situazioni di potenziale pericolo da evitare (ad esempio: non ci si spinge, non si va in piedi sullo scivolo…).
                    </div>
            </div>
        `,
        centrale: `
            <div id="value-content-centrale">
                <div>
                    ${titleBox(3, "centrale")}
                </div>

                Li chiamano "remigini"!! Che emozione … ecco in arrivo l'ultimo anno di asilo! I nostri bambini sono ormai i grandi della classe e, in quanto tali, spesso hanno anche il compito di aiutare i più piccoli nelle attività scolastiche. Sanno di dover dare l’esempio agli altri bambini e si sentono dei giganti alla ricerca di avventure!<br />
                Bisogna prepararsi al meglio e farsi le spalle larghe … l'anno prossimo bisognerà preparare un altro zaino e indossare nuovi grembiulini: finalmente si va a scuola!!<br /><br />

                BIBLIOGRAFIA: (D'Amico e Devescovi, 2013); (BVL); (Girolametto et al, 2019); (Tresoldi et al, 2015); (Pinton, 2018); (Federico e Cammisa, 2022); (Deny M., 2020); (Baumgartner, 2010).<br />
                Clicca qui per scaricare il pdf del capitolo: ${pdfDownloads[3]}
            </div>
        `,
        campanelli: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(3, "campanelli")}
                </div>

                <span class="sub-title">Segnalate al pediatra se notate:</span><br />
                <div class="list">
                    -	L'assenza di alcuni suoni della lingua all'inizio della scuola primaria<br />
                    <span class="list">All'inizio della scuola primaria è fondamentale che siano presenti tutti i suoni caratteristici della lingua parlata.<br />
                    Se persistono difficoltà nella pronuncia di alcuni suoni o addirittura l'assenza di questi è consigliato il consulto di diverse figure professionali, tra cui il pediatra e il logopedista.</span>
                </div>
            </div>
        `,
        spunti: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(3, "spunti")}
                </div>

                -	<span class="sub-title">Una cascata di emozioni</span><br />
                <div class="list">
                    Le emozioni sono ciò che permettono di vivere quello che abbiamo attorno e ci rendono uomini in quanto tali.<br />
                    Ogni tanto, però, <span class="sub-title">può capitare che siano travolgenti</span>, come dei fiumi in piena che ci trasportano via e ci fanno perdere il controllo: questo è molto più evidente nei bambini che negli adulti, perché in giovane età non si conoscono ancora le strategie per comprendere e gestire i sentimenti da cui si è inondati. Ad esempio:<br />
                    <div class="list">
                        ●	Alti livelli di felicità potrebbero portarli a giocare con troppa foga insieme a un amico.<br />
                        ●	Alti livelli di rabbia possono far dire loro parole che davvero non pensano.<br />
                        ●	Alti livelli di paura possono far perdere loro l'occasione di scoprire cose nuove.<br /><br />
                    </div>

                    Come possiamo aiutare i nostri bambini a gestire questo carico di emozioni?<br />
                    Non è per niente facile e tante volte ci sembra di essere a corto di idee o addirittura di non sapere nemmeno da dove partire.<br />
                    Il <span class="sub-title2">primo consiglio</span> è di <span class="sub-title2">dare un nome a queste emozioni</span>: per conoscere qualcosa bisogna dargli il suo nome.<br />
                    <div class="list">
                        ●   "Vedo che sei arriabbiato".<br />
                        ●   "Caspita! Sei molto felice oggi".<br />
                        ●   "Oh no… questo mostro ti fa paura".<br /><br />
                    </div>

                    <span class="sub-title2">Secondo consiglio</span>: <span class="sub-title2">non c'è motivo per sminuire quello che sentiamo</span> e quello che siamo. Ogni nostro stato d'animo ci rappresenta in quel momento e può insegnarci, proteggerci e stimolarci: trattiamo quindi tutte le emozioni in egual modo.<br />
                    <span class="sub-title2">Ultimo consiglio</span>, ma non per importanza: i nostri bambini imparano tantissimo attraverso l'osservazione e l'imitazione. <span class="sub-title2">Se noi stessi sapremo vivere, comprendere e gestire al meglio le nostre emozioni, anche loro, prendendo esempio, saranno incentivati a farlo</span>!
                </div>
            </div>
        `,
        gioco: `
            <div id="value-content">
                <div id="section-title">
                    ${titleBox(3, "gioco")}
                </div>

                Eccoci qua … è il momento di assistere o partecipare attivamente ai tornei dei <span class="sub-title">giochi in scatola</span>!<br />
                In questi giochi bisogna seguire il famoso foglietto delle istruzioni: tutti i partecipanti devono condividere e seguire le stesse regole affinché tutto funzioni correttamente.<br />
                Quale bambino non ama le novità? I nostri bambini saranno entusiasti dei loro nuovi giochi e non vedranno l'ora di coinvolgere amici e parenti in lunghe partite … che vinca il migliore!<br />
                E' proprio negli stessi giochi che prendono vita le discussioni senza fine tra i nostri accaniti giocatori: "Hai barato!", "No, non si gioca così!" …<br /><br />
                
                E' proprio in questi momenti che possiamo intervenire per <span class="sub-title2">ripristinare un clima sereno</span>, invitando a leggere tutti insieme le istruzioni e risolvere qualsiasi dubbio esistente.<br />
                <span class="sub-title2">Ricordiamo sempre ai nostri bambini che l'importante è partecipare</span>!
            </div>
        `
    },
    {
        id: 5,
        title: "Lettura - Parole In Cammino",
        indexValue: "Lettura",
        style: `style="background-color: #8e1582;"`,
        page: "reading.html",
        image: `<img src="resources/images/LIBRI.jpg" title="Lettura" />`,
        content: `
            <h1 class="sub-title">LIBRI</h1>

            C'era una volta … tanti piccoli bambini pronti a varcare le porte della scuola elementare, alla scoperta di un nuovo mondo. Qui apprenderanno le tabelline, l'inglese, la storia degli antichi egizi … ma, prima di tutto ciò, impareranno a leggere e a scrivere.<br />
            Per prepararsi al meglio vi suggeriamo caldamente di ritagliare già dalla tenera età dei piccoli momenti da dedicare alla <span class="sub-title">lettura condivisa</span>. Questa preziosa attività permette di <span class="sub-title">creare un contesto intimo, privato e sereno</span> ed è un'ottima occasione per <span class="sub-title">apprendere la lingua</span>: ci sono frequenti ripetizioni, frasi complete e corrette e la possibilità di usare intonazioni diverse e divertenti.<br />
            Il vantaggio che si guadagna dalla lettura è innegabile: non influisce tanto il fatto che sia mamma o papà o la tata a prendere in mano il libro, piuttosto risulta <span class="sub-title">fondamentale la costanza</span> con cui si riserva del tempo per leggere insieme.<br />
            Ecco un semplice esempio di cosa succede durante la lettura quotidiana:<br />
            <img src="resources/images/LEGGERE.png" id="libreria" /><br />
            
            E' importante fare <span class="sub-title">attenzione anche al "modo" in cui condividiamo i libri</span> con i nostri bambini: i nostri piccoli non dovranno avere solo il ruolo di ascoltatori, ma anche quello di curiosi narratori e sperimentatori.<br />
            Ecco alcuni <span class="sub-title">consigli</span> per accompagnare i momenti di lettura:<br />
            <div class="list">
                ●	utilizzare domande aperte rivolte al bambino<br />
                <span class="list">"Cosa farà ora il povero protagonista?;</span><br />
                ●	indicare le immagini e le parole mentre leggete ad alta voce<br />
                <span class="list">"Guarda che bel vestito giallo che indossa Anna!";</span><br />
                ●	sfruttare la ripetizione frequente<br />
                <span class="list">"Si girò e vide un ragno! … Un ragno?! Quell'animaletto nero con 8 zampe: è un ragno! Che paura! Un ragno nero!";</span><br />
                ●	commentare quanto letto<br />
                <span class="list">"Mi è proprio piaciuta questa storia. E tu? Cosa ne pensi? [...] Chi è il tuo personaggio preferito?"</span><br />
            </div>
            
            I libri sono <span class="sub-title">fonte di conoscenza, ma anche di divertimento</span>!! Trasmettere il piacere della lettura consegnerà ai bambini uno strumento illimitato per conoscere il mondo e sé stessi.<br />
            Ogni occasione è buona per <span class="sub-title">passare in Biblioteca Comunale o in Libreria</span> e far scegliere ai nostri bambini ciò che più li incuriosisce. Che luoghi stupendi e magici … tantissime  copertine colorate, pagine profumate e scaffali pieni zeppi di libri di tutte le dimensioni e di ogni genere.<br /><br />            
            
            BIBLIOGRAFIA: (D'Amico e Devescovi, 2013); (Nagy e Herman, 1987)<br /><br />

            Qualche idea di lettura per l'età prescolare:<br />
            <div class="list">
                ★	3 anni<br />
                <span class="list">❖	"Tre piccoli gufi" di Martin Waddell.</span><br />
                <span class="list">❖	"Orso, buco!" di Nicola Grossi.</span><br />
                <span class="list">❖	"Il piccolo bruco Maisazio" di Eric Carle.</span><br />
                ★	4 anni<br />
                <span class="list">❖	"A caccia dell'orso" di Michael Rosen</span><br />
                <span class="list">❖	"Oh! Un libro che fa dei suoni" o tutti i libri di Hervé Tullet.</span><br />
                <span class="list">❖	"Il ladro di foglie" di Alice Hemming.</span><br />
                ★	5 anni<br />
                <span class="list">❖	"In punta di piedi" di Christine Schneider.</span><br />
                <span class="list">❖	"La piccola principessa e il segreto del drago" di Jutta Langreuter.</span><br />
                <span class="list">❖	"Amy e Louis" di Libby Gleeson.</span><br />
            </div>
        `
    },
    {
        id: 6,
        title: "Bilinguismo - Parole In Cammino",
        indexValue: "Bilinguismo",
        style: `style="background-color: #cc0000;"`,
        page: "bilinguism.html",
        image: `<img src="resources/images/BILINGUISMO.jpg" title="Bilinguismo" />`,
        content: `
            <h1 class="sub-title">Bilinguismo</h1>

            Il bilinguismo sembra un fenomeno così lontano da noi! In realtà è molto più comune di quanto crediamo. Infatti le <span class="sub-title">persone che parlano più di una lingua nella propria giornata</span> sono molte: c'è la famiglia con la mamma italiana e il papà spagnolo, c'è la famiglia francese migrata in Cina, c'è chi usa quotidianamente l'inglese per lavoro e ci sono gli anziani che parlano il proprio dialetto durante le partite a bocce.<br /><br />
            
            <span class="sub-title">Il bilinguismo costituisce un vantaggio o uno svantaggio per i nostri piccoli parlatori?</span>
            Non c'è ombra di dubbio … conoscere e riuscire ad utilizzare più lingue porta diversi <span class="sub-title">vantaggi</span>:<br />
            <div class="list">
                -	a livello sociale, perché la seconda lingua è uno strumento in più per comunicare;<br />
                -	a livello cerebrale: il continuo passaggio da una lingua all'altra allena la capacità di alternare compiti diversi, aumenta la capacità di controllo, così come l'abilità di concentrarsi su un'attività e non lasciarsi distrarre;<br />
                -	a livello dell'attenzione e della creatività: i bambini bilingui ricevono continui stimoli differenti e sono incentivati a ricercare novità intorno a loro.<br /><br />
            </div>
            
            <span class="sub-title">La presenza di due lingue diverse può confondere i nostri bambini?<br />
            Assolutamente no!</span> I nostri piccoli non correranno nessun rischio perché sanno perfettamente che le lingue conosciute sono strumenti diversi e sanno persino in che situazioni utilizzarle.<br />
            Non è sinonimo di fatica l'utilizzo di entrambe le lingue all'interno della stessa frase: è del tutto normale nell'apprendimento. Facciamo alcuni esempi:<br />
            
            "Andiamo via mamma? Torniamo a … maison?"<br />
            Due lingue utilizzate: italiano (torniamo a) e francese (maison)<br />
            In questo caso il bambino ha sfruttato un vocabolo francese per esprimere il significato di una parola che non sa nella lingua italiana o che non ricorda.<br /><br />
            
            "Voglio questo! Ho choosato quello blu"<br />
            Due lingue utilizzate: italiano (la forma -ato per il participio passato) e inglese (il verbo "choose" che significa scegliere)<br />
            Il bambino coniuga il verbo secondo le regole della lingua italiana, ma utilizza il verbo inglese "choose".<br /><br />
            
            Questi sono fenomeni che con il passare del tempo spariranno da soli quando il bambino avrà il pieno controllo di entrambe le lingue e sarà lui a decidere l'espressione più adatta da usare nelle diverse situazioni.<br /><br />
            
            Attenzione! Non c'è confusione tra le lingue, ma <span class="sub-title">è normale che ci sia qualche settimana</span> di silenzio in cui il bambino ascolta la nuova lingua: prima di provare qualcosa dobbiamo averla almeno osservata o ascoltata!<br /><br />
            
            BIBLIOGRAFIA: Marini et al., 2019
        `
    },
    {
        id: 7,
        title: "Device - Parole In Cammino",
        indexValue: "Device",
        style: `style="background-color: #354f0b;"`,
        page: "device.html",
        image: `<img src="resources/images/DEVICE.jpg" title="Tecnologia"/>`,
        content: `
            <h1 class="sub-title">Tecnologia</h1>

            Gli strumenti tecnologici sono ormai entrati a far parte delle nostre vite, ma è importante prestare attenzione al modo in cui si usano.<br />
            Nel 2018 i pediatri italiani hanno preso posizione sull'<span class="sub-title">uso dei dispositivi tecnologici in età prescolare:</span><br />
            
            <div id="instraction-cointaner">
                <div class="list">
                    ●	consigliano di non dare al bambino strumenti digitali prima dei 2 anni.<br />
                    ●	dai 2 ai 5 anni lo strumento digitale non deve essere usato per più di un'ora al giorno ed è sempre necessaria la supervisione di un adulto.<br />
                    ●	dai 5 agli 8 anni il tempo di fruizione può al massimo raddoppiare (con accanto il genitore).<br />
                    ●	mai utilizzarlo durante i pasti o prima di andare a dormire e mai sottoporre contenuti violenti.<br />
                    ●	la tecnologia non deve avere lo scopo di calmare o distrarre i più piccoli perché limita lo sviluppo della regolazione delle emozioni nei bambini.<br />
                </div>
            </div><br />
            
            Ecco alcuni consigli da poter attuare quando si parla di strumenti tecnologici:<br />
            <div class="list">
                -	è importante <span class="sub-title">limitare l'uso prolungato</span> degli schermi.<br />
                -	nei brevi momenti in cui questi strumenti vengono utilizzati è utile <span class="sub-title">dare il buon esempio</span> su un uso consapevole.<br />
                -	è importante <span class="sub-title">assicurarsi che app, giochi e programmi siano davvero adatti</span> all'età dei bambini: per esempio sarebbe meglio evitare giochi con i combattimenti piuttosto che applicazioni in cui ci sono azioni illegali o diseducative (rapine in banca, graffiti sui muri, fughe dalla polizia …).<br /><br />
            </div>
            
            <span class="sub-title2">Quali rischi potrebbero derivare da un eccessivo utilizzo?</span><br />
            Se il tempo dedicato all'uso della tecnologia è elevato nella vita di tutti i giorni la posizione rigida tenuta dai bambini potrebbe essere causa di <span class="sub-title">dolori muscolari</span> alle spalle e al collo.<br />
            La sedentarietà legata ai device potrebbe inoltre causare un <span class="sub-title">aumento di peso e un'irregolarità del sonno</span>: i bambini dormono meno ore per notte e si addormentano con maggiore fatica.<br />
            Un altro problema che è opportuno segnalare riguarda le stimolazioni eccessive: la luminosità degli schermi e i suoni troppo elevati possono <span class="sub-title">danneggiare la vista e l'udito</span>, che sono ancora in via di sviluppo durante questa età.<br />
            Per non parlare della <span class="sub-title">facile dipendenza</span> che può essere provocata dalla prolungata esposizione alla tecnologia, con conseguenti comportamenti insistenti e capricciosi per ottenere quegli schermi.<br /><br />
            
            Quindi…utilizzati con i <span class="sub-title">tempi e le modalità adeguate</span> all'età dei bambini, i dispositivi elettronici possono offrire l'opportunità di imparare in modo giocoso e divertente, MA è <span class="sub-title">indispensabile che l'adulto affianchi il bambino</span> per commentare e portare nella quotidianità gli stimoli ascoltati: un bambino che utilizza in solitaria la tecnologia (subendo in modo passivo lo strumento) NON sarà in grado di apprendere!<br /><br />
            
            Qualche <span class="sub-title2">consiglio pratico per evitare la dipendenza dagli schermi</span>:<br />
            <div class="list">
                ★	quando prendiamo una scelta o imponiamo delle regole (soprattutto se si tratta di schermi), <span class="sub-title">spieghiamo ai bambini il perché</span>. Cominceremo a renderli consapevoli.<br />
                ★	in momenti di attesa fuori casa (al ristorante, dal dottore, dal dentista …) portiamo dei giochi specifici: uno zainetto con <span class="sub-title">attività che i bambini fanno raramente</span> (dei colori particolari, delle carte nuove …) e solo in quell'occasione di attesa. La "novità" potrebbe allontanarli facilmente dal telefonino.<br />
                ★	se attraverso i device emerge una passione del bambino (scopre i dinosauri grazie ai documentari, o gli piace il personaggio di un cartone, o adora un cantante …), <span class="sub-title">ampliamo questo argomento anche fuori dalla tecnologia</span>: cerchiamo dei libri inerenti, o dei personaggini giocattolo, piuttosto che gli stickers …<br />
                <span class="list">In questo modo enfatizzeremo e daremo importanza alla sua passione e non al momento con il tablet.</span><br />
                ★	si può anche cercare di <span class="sub-title">non enfatizzare l'uso della tecnologia</span>: evitiamo di usarla come premio o di toglierla in caso di capricci perchè così facendo potrebbe sembrare che il dispositivo sia qualcosa di bello e desiderabile.<br /><br />
            </div>
            
            BIBLIOGRAFIA: (Lavenia, 2019); (Chaibal S e Chaiyakul S., 2022); (Moon et al., 2019); (Yadav e Chakraborty, 2018); (Bozzola et al., 2018). 
        `
    },
    {
        id: 8,
        title: "Dove altro guardare - Parole In Cammino",
        indexValue: "Dove altro<br /> guardare",
        style: `style="background-color: #e5760d;"`,
        page: "bibliography.html",
        content: `
            <h1 class="sub-title">Dove altro guardare</h1>
            Due libretti online da leggere, condividere e ri-leggere:<br />
            <div id="extra">
                ${boxImages.parole_in_bocca}
                ${boxImages.parole_in_volo}
            </div>
            <div class="list">
                ➢	<span class="sub-title">PAROLE IN BOCCA</span>, riporta le principali tappe dello sviluppo comunicativo-linguistico e delle competenze alimentari nel bambino tra gli 0 e i 36 mesi<br />
                <span class="list"><a href="https://issuu.com/peregolibribarzanolcitaly/docs/libretto_pediatri" class="sub-title2" target="blank">https://issuu.com/peregolibribarzanolcitaly/docs/libretto_pediatri</a></span><br />
                ➢	<span class="sub-title">PAROLE IN VOLO</span>, una breve introduzione al mondo della balbuzie nei bambini<br />
                <span class="list"><a href="https://www.logopediamilano.it/doc/libretto_PAROLE_IN_VOLO_pdf.pdf" class="sub-title2" target="blank">https://www.logopediamilano.it/doc/libretto_PAROLE_IN_VOLO_pdf.pdf</a></span><br /><br />
            </div>
            Altri spunti per approfondire:
            <div class="list">
                ●	Baumgartner E. (2010) Il gioco dei bambini. II edizione. Roma: Carocci editore.<br />
                ●	Deny M (2020) Autonomi si diventa. Come stimolare i bambini per farli crescere forti e intraprendenti. Milano: Red Edizione.<br />
                ●	Girolametto L, Marotta L e Onofrio D, (2019) Crescere parlando nella scuola dell'infanzia. Edizione Centro Studi Erickson.<br />
                ●	Lavenia Giuseppe, (2019) Mio figlio non riesce a stare senza smartphone. Giunti Edu.<br />
            </div><br />

            Riportiamo anche la <span class="sub-title">BIBLIOGRAFIA</span> che abbiamo utilizzato per creare questo strumento informativo, potete approfondire tutti gli argomenti grazie a:<br />
            Baumgartner E. (2010) Il gioco dei bambini. II edizione. Roma: Carocci editore.<br />
            Bozzola E, Spina G, Ruggiero M, Memo L, Agostiniani R, Bozzola M, Corsello G, Villani A. (2018) 74th Congress of the Italian Society of Pediatrics, Italian Journal of Pediatric.<br />
            Caselli M C, Bello A, Rinaldi P, Stefanini S, Pasqualetti P, “Il Primo Vocabolario del Bambino: Gesti, Parole e Frasi”, 2° ed.2015, FrancoAngeli.<br />
            Chaibal S, Chaiyakul S. (2022) The association between smartphone and tablet usage and children development. Acta Psychol (Amst); 228:103646.<br />
            D'Amico S e Devescovi A (2013) Psicologia dello sviluppo del linguaggio. il Mulino.<br />
            Deny M (2020) Autonomi si diventa. Come stimolare i bambini per farli crescere forti e intraprendenti. Milano: Red Edizione.<br />
            Dunn J, Kendrick C (1982). The speech of two- and three-years-olds to infant sibilings: “baby talk” and the context of communication. J Child Lang.; 9(3):579-95.<br />
            Federico F e Cammisa M, (2022) Educare i bambini all'Autonomia: dai 6 mesi ai 6 anni [online]. Disponibile da: <a href="https://alimentazionebambini.e-coop.it/pedagogia/educare-bambini-allautonomia" class="sub-title2" target="blank">https://alimentazionebambini.e-coop.it/pedagogia/educare-bambini-allautonomia</a> [consultato l'11 agosto 2022].<br />
            Girolametto L, Marotta L e Onofrio D, (2019) Crescere parlando nella scuola dell'infanzia. Edizione Centro Studi Erickson.<br />
            Infant & Toddler Forum (2014) Developmental Stages in Infant and Toddler Feeding [online]. Disponibile da: <a href="https://infantandtoddlerforum.org/media/upload/pdf-downloads" class="sub-title2" target="blank">https://infantandtoddlerforum.org/media/upload/pdf-downloads</a> <span class="sub-title2">3.5_Developmental_Stages_in_Infant_and_Toddler_Feeding_NEW.pdf</span> [consultato l'8 agosto 2022].<br />
            Lavenia Giuseppe, (2019) Mio figlio non riesce a stare senza smartphone. Giunti Edu.<br />
            Marini A, Marotta L, Bulgheroni S, Fabbro F (2015) Batteria per la Valutazione del Linguaggio in Bambini dai 4 ai 12 anni (BVL 4-12). Giunti O.S. Psychometrics, Firenze.<br />
            Marini A, Sperindé P, Ruta I, Savegnago C and Avanzini F (2019) Linguistic Skills in Bilingual Children With Developmental Language Disorders: A Pilot Study. Front. Psychol. 10:493.<br />
            Moon JH, Cho SY, Lim SM, Roh JH, Koh MS, Kim YJ, Nam E. (2019) Smart device usage in early childhood is differentially associated with fine motor and language development. Acta Paediatr.; 108(5):903-910.<br />
            Nagy WE, Anderson RC, Herman PA. (1987) Learning Word Meanings From Context During Normal Reading. American Educational Research Journal; 24(2):237-270.<br />
            Pinton Alessandra, (2018) I disturbi fonetici e fonologici nell'età dello sviluppo. Carocci Faber.<br />
            Schindler, O., Ruppolo, G. & Schindler, A., (2011). Deglutologia. II edizione. Torino: Omega edizioni.<br />
            Tresoldi M, Barillari MR, Ambrogi F, Sai E, Barillari U, Tozzi E, Scarponi L, Schindler A. (2018). Normative and validation data of an articulation test for Italian-speaking children. Int J Pediatr Otorhinolaryngol.; 110:81-86.<br />            
            Yadav S, Chakraborty P. (2018) Using smartphones with suitable apps can be safe and even useful if they are not misused or overused. Acta Paediatr.r; 107(3):384-387.<br /><br />
        `
    }
]

document.body.addEventListener("load", (titleRender(), menuRender(), contentRender()));

function titleRender() {
    const data = document.querySelector(".title-site");
    data.innerHTML = `
        <a href="index.html" id="title-site">
            PAROLE IN CAMMINO
        </a>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    `;
}

function menuRender() {
    const data = document.querySelector("#data");
    const menu = document.createElement("aside");
    indexes.forEach(index => {
        if (document.title == index.title) {
            menu.innerHTML += `
                <div class="menu-links" ${index.style}>
                    ${index.indexValue}
                    <span class="link-spanner"></span>
                </div>
            `;
        } else {
            menu.innerHTML += `
                <div class="menu-links">
                    <a href="${index.page}">
                        ${index.indexValue}
                        <span class="link-spanner"></span>
                    </a>
                </div>
            `;
        }
    });
    data.appendChild(menu);
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("aside");
hamburger.addEventListener("click", function () {
    classes = hamburger.className.split(" ");
    if (classes.length == 1) {
        mobileMenu();
    } else {
        closeMenu();
    }
});

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.add("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function contentRender() {
    const pageName = document.title;
    switch (pageName) {
        case "Homepage - Parole In Cammino":
            normalContent(0);
            break;
        case "3 anni - Parole In Cammino":
            ageRangeContent(1);
            break;
        case "3-4 anni - Parole In Cammino":
            ageRangeContent(2);
            break;
        case "4-5 anni - Parole In Cammino":
            ageRangeContent(3);
            break;
        case "5-6 anni - Parole In Cammino":
            ageRangeContent(4);
            break;
        case "Lettura - Parole In Cammino":
            normalContent(5);
            break;
        case "Bilinguismo - Parole In Cammino":
            normalContent(6);
            break;
        case "Device - Parole In Cammino":
            normalContent(7);
            break;
        case "Dove altro guardare - Parole In Cammino":
            normalContent(8);
            break;
    }
}

function normalContent(index) {
    const data = document.querySelector("#data");
    const content = document.createElement("div");
    content.id = "content";
    content.innerHTML = `
        <div id="p1">
            ${indexes[index].content}
        </div>
    `;
    if (indexes[index].image != undefined) {
        content.innerHTML += `
            <div id="image">
                ${indexes[index].image}
            </div>
        `;
    }
    data.appendChild(content);
}

function ageRangeContent(index) {
    const data = document.querySelector("#data");
    const content = document.createElement("div");
    content.className = "destra-contenuto";
    content.innerHTML = `
        <figure class="box-linguaggio">
            <a href="javascript:void(0)" onclick="showText(${index}, 'linguaggio')" id="box">
                ${boxImages.linguaggio}
            </a>
            <figcaption>
                1.${boxNames.linguaggio}
            </figcaption>
        </figure>
        <div id="box-testo"> 
            ${indexes[index].centrale}
        </div>
        <figure class="box-autonomie">
            <a href="javascript:void(0)" onclick="showText(${index}, 'autonomie')" id="box">
                ${boxImages.autonomie}
            </a>
            <figcaption>
                2.${boxNames.autonomie}
            </figcaption>
        </figure>
        <figure class="box-campanelli">
            <a href="javascript:void(0)" onclick="showText(${index}, 'campanelli')" id="box">
                ${boxImages.campanelli}
            </a>
            <figcaption>
                5.${boxNames.campanelli}
            </figcaption>
        </figure>
        <figure class="box-spunti">
            <a href="javascript:void(0)" onclick="showText(${index}, 'spunti')" id="box">
                ${boxImages.spunti}
            </a>
            <figcaption>
                4.${boxNames.spunti}
            </figcaption>
        </figure>
        <figure class="box-gioco">
            <a href="javascript:void(0)" onclick="showText(${index}, 'gioco')" id="box">
                ${boxImages.gioco}
            </a>
            <figcaption>
                3.${boxNames.gioco}
            </figcaption>
        </figure>
    `;
    data.appendChild(content);
}

function showText(index, value) {
    const data = document.body;
    const content = document.createElement("div");
    content.className = "content-years-range";
    disableAllLinks("disabled");
    switch (value) {
        case 'linguaggio':
            content.id = "linguaggio";
            content.innerHTML = `
                ${indexes[index].linguaggio}
            `;
            break;
        case 'autonomie':
            content.id = "autonomie";
            content.innerHTML = `
                ${indexes[index].autonomie}
            `;
            break;
        case 'centrale':
            content.id = "centrale";
            content.innerHTML = `
                ${indexes[index].centrale}
            `;
            break;
        case 'campanelli':
            content.id = "campanelli";
            content.innerHTML = `
                ${indexes[index].campanelli}
            `;
            break;
        case 'spunti':
            content.id = "spunti";
            content.innerHTML = `
                ${indexes[index].spunti}
            `;
            break;
        case 'gioco':
            content.id = "gioco";
            content.innerHTML = `
                ${indexes[index].gioco}
            `;
            break;
    }
    data.appendChild(content);
}

function dontShowText() {
    const content = document.querySelector(".content-years-range");
    content.parentElement.removeChild(content);
    disableAllLinks("enabled");
}

function disableAllLinks(value) {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.className = value;
    });
}

function titleBox(index, value) {
    const content = document.createElement("div");
    switch (value) {
        case 'linguaggio':
            content.innerHTML = `
                <h1 class="sub-title">
                    ${boxNames.linguaggio}
                </h1>
            `;
            break;
        case 'centrale':
            content.innerHTML = `
                <h1 class="sub-title">
                    ${boxNames.centrale[index]}
                </h1>
            `;
            break;
        case 'autonomie':
            content.innerHTML = `
                <h1 class="sub-title">
                    ${boxNames.autonomie}
                </h1>
            `;
            break;
        case 'campanelli':
            content.innerHTML = `
                <h1 class="sub-title">
                    ${boxNames.campanelli}
                </h1>
            `;
            break;
        case 'spunti':
            content.innerHTML = `
                <h1 class="sub-title">
                    ${boxNames.spunti}
                </h1>
            `;
            break;
        case 'gioco':
            content.innerHTML = `
                <h1 class="sub-title">
                    ${boxNames.gioco}
                </h1>
            `;
            break;
    }
    if(value != "centrale") {
        content.innerHTML += `
            <a href="javascript:void(0)" class="close" onclick=dontShowText()></a>
        `;
    }
    return content.innerHTML;
}