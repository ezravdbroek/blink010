// ── pSEO Data: Zoekwoorden × Locaties ──

export interface Keyword {
  name: string;
  slug: string;
  category: Category;
}

export interface Location {
  name: string;
  slug: string;
}

export type Category =
  | 'general'
  | 'kantoor'
  | 'oplevering'
  | 'horeca'
  | 'recreatie'
  | 'particulier'
  | 'vve'
  | 'scholen'
  | 'zorg'
  | 'periodiek';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CategoryContent {
  label: string;
  heading: string;
  serviceLink: string;
  serviceLinkText: string;
  heroImage: string;
  usps: Array<{ title: string; description: string }>;
  timelineStep3: string;
  faqs: FaqItem[];
  whatWeOffer: string[];
}

// ── Zoekwoorden ──
export const keywords: Keyword[] = [
  { name: 'Schoonmaakbedrijf inhuren', slug: 'schoonmaakbedrijf-inhuren', category: 'general' },
  { name: 'Schoonmaakbedrijf', slug: 'schoonmaakbedrijf', category: 'general' },
  { name: 'Schoonmaak service', slug: 'schoonmaak-service', category: 'general' },
  { name: 'Schoonmaakdiensten', slug: 'schoonmaakdiensten', category: 'general' },
  { name: 'Zakelijke schoonmaak', slug: 'zakelijke-schoonmaak', category: 'kantoor' },
  { name: 'Kantoor schoonmaak', slug: 'kantoor-schoonmaak', category: 'kantoor' },
  { name: 'Opleveringsschoonmaak', slug: 'opleveringsschoonmaak', category: 'oplevering' },
  { name: 'Periodieke schoonmaak', slug: 'periodieke-schoonmaak', category: 'periodiek' },
  { name: 'Schoonmaak na verbouwing', slug: 'schoonmaak-na-verbouwing', category: 'oplevering' },
  { name: 'Schoonmaakbedrijf voor kantoren', slug: 'schoonmaakbedrijf-voor-kantoren', category: 'kantoor' },
  { name: 'VvE schoonmaak', slug: 'vve-schoonmaak', category: 'vve' },
  { name: 'Schoonmaak horeca', slug: 'schoonmaak-horeca', category: 'horeca' },
  { name: 'Schoonmaak scholen', slug: 'schoonmaak-scholen', category: 'scholen' },
  { name: 'Schoonmaak zorginstellingen', slug: 'schoonmaak-zorginstellingen', category: 'zorg' },
  { name: 'Schoonmaakbedrijf offerte', slug: 'schoonmaakbedrijf-offerte', category: 'general' },
  { name: 'Kosten schoonmaakbedrijf', slug: 'kosten-schoonmaakbedrijf', category: 'general' },
  { name: 'Schoonmaak vakantiehuizen', slug: 'schoonmaak-vakantiehuizen', category: 'recreatie' },
  { name: 'Schoonmaak recreatiewoningen', slug: 'schoonmaak-recreatiewoningen', category: 'recreatie' },
  { name: 'Schoonmaak vakantieparken', slug: 'schoonmaak-vakantieparken', category: 'recreatie' },
  { name: 'Vakantiehuis schoonmaak', slug: 'vakantiehuis-schoonmaak', category: 'recreatie' },
  { name: 'Professioneel schoonmaakbedrijf vakantiehuizen', slug: 'professioneel-schoonmaakbedrijf-vakantiehuizen', category: 'recreatie' },
];

// ── Locaties ──
export const locations: Location[] = [
  { name: 'Alblasserdam', slug: 'alblasserdam' },
  { name: 'Barendrecht', slug: 'barendrecht' },
  { name: 'Berkel en Rodenrijs', slug: 'berkel-en-rodenrijs' },
  { name: 'Bleiswijk', slug: 'bleiswijk' },
  { name: 'Botlek', slug: 'botlek' },
  { name: 'Delft', slug: 'delft' },
  { name: 'Dordrecht', slug: 'dordrecht' },
  { name: 'Gouda', slug: 'gouda' },
  { name: 'Heinenoord', slug: 'heinenoord' },
  { name: 'Hoogvliet', slug: 'hoogvliet' },
  { name: 'Krimpen a/d IJssel', slug: 'krimpen-ad-ijssel' },
  { name: 'Maasland', slug: 'maasland' },
  { name: 'Maassluis', slug: 'maassluis' },
  { name: 'Moordrecht', slug: 'moordrecht' },
  { name: 'Nieuwerkerk a/d IJssel', slug: 'nieuwerkerk-ad-ijssel' },
  { name: 'Oud-Beijerland', slug: 'oud-beijerland' },
  { name: 'Pijnacker', slug: 'pijnacker' },
  { name: 'Rhoon', slug: 'rhoon' },
  { name: 'Ridderkerk', slug: 'ridderkerk' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Schiedam', slug: 'schiedam' },
  { name: 'Sliedrecht', slug: 'sliedrecht' },
  { name: 'Spijkenisse', slug: 'spijkenisse' },
  { name: 'Vlaardingen', slug: 'vlaardingen' },
  { name: 'Zwijndrecht', slug: 'zwijndrecht' },
  { name: 'Brielle', slug: 'brielle' },
  { name: 'Oostvoorne', slug: 'oostvoorne' },
  { name: 'Ouddorp', slug: 'ouddorp' },
  { name: 'Hellevoetsluis', slug: 'hellevoetsluis' },
  { name: 'Rockanje', slug: 'rockanje' },
  { name: 'Stellendam', slug: 'stellendam' },
  { name: 'Middelharnis', slug: 'middelharnis' },
  { name: 'Renesse', slug: 'renesse' },
  { name: 'Brouwershaven', slug: 'brouwershaven' },
  { name: 'Westenschouwen', slug: 'westenschouwen' },
  { name: 'Zonnemaire', slug: 'zonnemaire' },
  { name: 'Bruinisse', slug: 'bruinisse' },
  { name: 'Oude-Tonge', slug: 'oude-tonge' },
  { name: 'Nieuwe-Tonge', slug: 'nieuwe-tonge' },
  { name: 'Zierikzee', slug: 'zierikzee' },
  { name: 'Burgh-Haamstede', slug: 'burgh-haamstede' },
];

// ── Content per categorie ──
export const categoryContent: Record<Category, CategoryContent> = {
  general: {
    label: 'Professionele schoonmaak',
    heading: 'Betrouwbare schoonmaak op maat',
    serviceLink: '/particuliere-schoonmaak',
    serviceLinkText: 'Bekijk onze schoonmaakdiensten',
    heroImage: 'foto2',
    usps: [
      { title: 'Ervaren vakmensen', description: 'Al onze medewerkers zijn opgeleid, gescreend en beschikken over jarenlange ervaring in professionele schoonmaak. Zij worden regelmatig bijgeschoold in de nieuwste technieken en veiligheidsvoorschriften.' },
      { title: 'Flexibel inplanbaar', description: 'Overdag, \u2019s avonds of in het weekend \u2014 wij passen ons aan uw schema aan. Geen vaste contracten vereist. Zo heeft u altijd de vrijheid om de planning aan te passen zoals het u uitkomt.' },
      { title: 'Duurzame middelen', description: 'Wij werken uitsluitend met milieuvriendelijke schoonmaakmiddelen die veilig zijn voor mens, dier en milieu. Deze middelen zijn even effectief als traditionele producten, maar een stuk beter voor de wereld om ons heen.' },
      { title: 'Tevredenheidsgarantie', description: 'Niet tevreden? Dan komen wij kosteloos terug. Uw tevredenheid is onze hoogste prioriteit. Wij staan voor ons werk en lossen eventuele opmerkingen altijd snel en vriendelijk op.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat aansluit bij uw wensen en situatie.',
    whatWeOffer: [
      'Eenmalige of structurele schoonmaak voor particulieren en bedrijven',
      'Grondige reiniging van alle ruimtes, sanitair, keukens en vloeren',
      'Professionele behandeling van diverse vloersoorten zoals laminaat, tegels en hout',
      'Ramen, kozijnen en glaswerk streeploos schoonmaken',
      'Flexibele planning: overdag, \u2019s avonds of in het weekend',
      'Gebruik van professionele, milieuvriendelijke schoonmaakmiddelen',
    ],
    faqs: [
      {
        question: 'Wat kost het inhuren van een schoonmaakbedrijf?',
        answer: 'De kosten van een schoonmaakbedrijf hangen af van de grootte van de ruimte, de frequentie en het type schoonmaak. Wij bieden altijd een vrijblijvende offerte op maat, zodat u precies weet waar u aan toe bent. Er zijn geen verborgen kosten. Zo kunt u rustig vergelijken en een weloverwogen keuze maken.',
      },
      {
        question: 'Hoe snel kan een schoonmaakbedrijf starten?',
        answer: 'Na ontvangst van uw aanvraag reageren wij binnen \u00e9\u00e9n werkdag. In de meeste gevallen kunnen wij binnen een week starten met de schoonmaakwerkzaamheden. Bij spoed is het vaak mogelijk om dezelfde week nog te beginnen. Neem gerust contact op en wij kijken samen naar de mogelijkheden.',
      },
      {
        question: 'Moet ik een langlopend contract afsluiten?',
        answer: 'Nee, wij werken zonder lange contractverplichtingen. U kunt kiezen voor eenmalige schoonmaak of een periodiek abonnement dat flexibel opzegbaar is. Wij geloven in kwaliteit, niet in kleine lettertjes. Ons doel is dat u blijft omdat u tevreden bent, niet omdat u vastzit.',
      },
      {
        question: 'Zijn de schoonmakers verzekerd?',
        answer: 'Ja, al onze medewerkers zijn volledig verzekerd. Wij hebben een bedrijfsaansprakelijkheidsverzekering die eventuele schade dekt. U kunt met een gerust hart onze vakmensen in uw pand laten werken. Mocht er toch iets misgaan, dan lossen wij het direct en transparant op.',
      },
    ],
  },
  kantoor: {
    label: 'Professionele kantoorschoonmaak',
    heading: 'Een schone werkplek voor uw team',
    serviceLink: '/kantoren-schoonmaak',
    serviceLinkText: 'Meer over kantoorschoonmaak',
    heroImage: 'foto2',
    usps: [
      { title: 'Dagelijkse reiniging', description: 'Uw kantoor is elke ochtend spic en span. Wij zorgen voor een frisse start van uw werkdag, elke dag van de week. Een nette werkomgeving draagt aantoonbaar bij aan productiviteit en werkplezier.' },
      { title: 'Flexibel inplanbaar', description: 'Vroeg in de ochtend, laat in de avond of in het weekend \u2014 wij plannen de schoonmaak op uw agenda in. Zo wordt uw team nooit gestoord en verloopt uw bedrijfsvoering zonder onderbreking.' },
      { title: 'Duurzame middelen', description: 'Wij werken uitsluitend met milieuvriendelijke schoonmaakmiddelen die veilig zijn voor mens, dier en milieu. Dit is bewust beleid: goed voor uw kantoomgeving en goed voor de planeet.' },
      { title: 'Gecertificeerd personeel', description: 'Al onze medewerkers zijn gediplomeerd, gescreend en continu bijgeschoold. U kunt ons volledig vertrouwen. Vaste koppeling aan uw pand zorgt bovendien voor vertrouwde gezichten en consistent resultaat.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat naadloos aansluit bij uw bedrijfsvoering.',
    whatWeOffer: [
      'Dagelijkse, wekelijkse of maandelijkse kantoorschoonmaak op maat',
      'Schoonmaak van werkplekken, bureaus, vergaderruimtes en ontvangstruimtes',
      'Sanitaire voorzieningen reinigen en bijvullen van dispensers',
      'Vloeronderhoud: stofzuigen, dweilen en periodiek machinaal reinigen',
      'Keuken en pantry schoonmaken inclusief apparatuur',
      'Periodieke dieptereiniging en grote beurt op afspraak',
    ],
    faqs: [
      {
        question: 'Op welke tijden wordt de kantoorschoonmaak uitgevoerd?',
        answer: 'Wij passen ons volledig aan uw kantooruren aan. De schoonmaak kan vroeg in de ochtend, laat in de avond of in het weekend worden uitgevoerd. Zo wordt uw team niet gestoord tijdens werkuren en start iedereen in een schone omgeving. De gewenste tijden leggen we eenmalig vast, zodat het daarna vanzelf loopt.',
      },
      {
        question: 'Wat omvat de standaard kantoorschoonmaak?',
        answer: 'Onze standaard kantoorschoonmaak omvat het reinigen van werkplekken, bureaus, vergaderruimtes, sanitair, keukens en vloeren. Daarnaast vullen wij dispensers bij en legen wij prullenbakken. Het pakket is volledig aan te passen aan uw wensen. Zo betaalt u alleen voor wat u daadwerkelijk nodig heeft.',
      },
      {
        question: 'Kan ik de frequentie van de schoonmaak aanpassen?',
        answer: 'Ja, u kunt op elk moment de frequentie verhogen of verlagen. Of u nu dagelijks, wekelijks of maandelijks schoonmaak nodig heeft, wij zijn flexibel en passen de planning aan op uw behoeften zonder extra kosten. Een simpel berichtje of telefoontje is voldoende om de wijziging door te voeren.',
      },
      {
        question: 'Werken jullie met een vaste schoonmaker voor ons kantoor?',
        answer: 'Ja, wij koppelen een vast team aan uw kantoor. Zo kent de schoonmaker uw pand, uw voorkeuren en eventuele aandachtspunten. Dit zorgt voor een consistent resultaat en vertrouwde gezichten in uw werkomgeving. Bij afwezigheid zorgen wij voor een goed ingewerkte vervanger zodat de kwaliteit geborgd blijft.',
      },
    ],
  },
  oplevering: {
    label: 'Opleveringsschoonmaak',
    heading: 'Stralend schoon bij oplevering',
    serviceLink: '/opleveringsschoonmaak',
    serviceLinkText: 'Meer over opleveringsschoonmaak',
    heroImage: 'opleveringschoonmaak',
    usps: [
      { title: 'Dieptereiniging', description: 'Van bouwstof tot de laatste details \u2014 wij maken uw woning of pand volledig schoon en klaar voor oplevering. Geen hoek of spleet wordt overgeslagen, zodat de inspectie zonder opmerkingen verloopt.' },
      { title: 'Snelle oplevering', description: 'Wij werken snel en effici\u00ebnt zodat u op tijd kunt opleveren. Ook last-minute aanvragen zijn mogelijk. Dankzij onze ervaring weten wij precies wat er nodig is om een pand snel en grondig gereed te maken.' },
      { title: 'Inclusief ramen', description: 'Ramen, kozijnen, dorpels en glaswerk worden streeploos gereinigd. Binnen \u00e9n buiten als dat gewenst is. Helder glas geeft direct de juiste eerste indruk bij de oplevering.' },
      { title: 'Na verbouwing', description: 'Cement, stof en verfspetters? Geen probleem. Wij hebben de ervaring en middelen om alles vlekkeloos te verwijderen. Zo levert u een pand op dat er werkelijk als nieuw uitziet.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat aansluit bij uw opleverdatum.',
    whatWeOffer: [
      'Volledige opleveringsschoonmaak van woningen, appartementen en bedrijfspanden',
      'Verwijdering van bouwstof, cementsluier, verfspetters en lijmresten',
      'Streeploos reinigen van alle ramen, kozijnen en dorpels (binnen en buiten)',
      'Grondige reiniging van sanitair, keuken en alle inbouwapparatuur',
      'Vloeren schoonmaken, ontvetten en indien nodig behandelen',
      'Eindcontrole om te garanderen dat alles perfect is voor oplevering',
    ],
    faqs: [
      {
        question: 'Wanneer moet ik een opleveringsschoonmaak inplannen?',
        answer: 'Het beste moment is na afronding van alle bouw- of verbouwingswerkzaamheden en v\u00f3\u00f3r de inspectie of sleuteloverdracht. Wij raden aan om minimaal twee werkdagen van tevoren te boeken, maar ook last-minute aanvragen zijn vaak mogelijk. Hoe eerder u plant, hoe meer zekerheid u heeft over de gewenste datum en het team.',
      },
      {
        question: 'Wat is het verschil tussen een opleveringsschoonmaak en een gewone schoonmaak?',
        answer: 'Een opleveringsschoonmaak is veel grondiger dan een reguliere schoonmaak. Wij verwijderen bouwstof, cementsluier, verfspetters en lijmresten die bij een normale schoonmaak niet aan bod komen. Elk detail wordt gecontroleerd zodat het pand er als nieuw uitziet. Daarmee voldoet u direct aan de eisen van makelaars, aannemers en kopers.',
      },
      {
        question: 'Hoe lang duurt een opleveringsschoonmaak?',
        answer: 'De duur hangt af van de grootte van het pand en de mate van vervuiling. Een gemiddeld appartement is binnen 4 tot 6 uur klaar. Grotere panden of zeer vervuilde ruimtes kunnen langer duren. Wij geven van tevoren een indicatie. Zo kunt u de inspectie of sleuteloverdracht goed op de schoonmaak afstemmen.',
      },
      {
        question: 'Kan ik een schoonmaak na verbouwing combineren met de oplevering?',
        answer: 'Ja, dat kan. Wij bieden een compleet pakket aan waarin zowel het verwijderen van bouwstof als de eindreiniging voor oplevering is inbegrepen. Zo heeft u \u00e9\u00e9n aanspreekpunt en bespaart u tijd en kosten. Wij stemmen de planning af op de bouwoplevering zodat alles soepel verloopt.',
      },
    ],
  },
  horeca: {
    label: 'Horeca schoonmaak',
    heading: 'Hygi\u00ebnische horeca, blije gasten',
    serviceLink: '/restaurant-schoonmaak',
    serviceLinkText: 'Meer over horecaschoonmaak',
    heroImage: 'foto15',
    usps: [
      { title: 'HACCP-bewust', description: 'Wij werken volgens HACCP-richtlijnen en gebruiken voedselveilige schoonmaakmiddelen. Veiligheid staat voorop. Zo voldoet uw keuken altijd aan de eisen bij een onverwachte inspectie.' },
      { title: 'Dagelijks beschikbaar', description: 'Ook in het weekend en op feestdagen. Wij stemmen onze planning af op uw openingstijden. Of uw zaak vroeg opent of laat sluit, wij zorgen dat alles klaar is voor de eerste gast.' },
      { title: 'Keuken specialist', description: 'Van afzuigkappen tot RVS werkbladen \u2014 wij reinigen professionele keukens tot op het hoogste niveau. Hardnekkig vet, aankoeksel en kalkaanslag pakken wij aan met de juiste professionele middelen.' },
      { title: 'Hygi\u00ebne garantie', description: 'Wij garanderen een hygi\u00ebnische omgeving die voldoet aan alle voedselveiligheidsnormen. Regelmatige controles en rapportages geven u altijd inzicht in de staat van uw horecagelegenheid.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat aansluit bij uw openingstijden en horecaconcepten.',
    whatWeOffer: [
      'Dagelijkse keukenschoonmaak volgens HACCP-richtlijnen',
      'Reiniging van afzuigkappen, frituren, ovens en RVS werkbladen',
      'Gastenruimte en terras schoonmaken inclusief meubilair',
      'Sanitaire voorzieningen grondig reinigen en desinfecteren',
      'Vloeren ontvetten en machinaal reinigen',
      'Periodieke dieptereiniging van de gehele horecagelegenheid',
    ],
    faqs: [
      {
        question: 'Werken jullie volgens HACCP-normen?',
        answer: 'Ja, al onze horecaschoonmakers zijn getraind in HACCP-richtlijnen. Wij gebruiken uitsluitend voedselveilige schoonmaakmiddelen en volgen strikte protocollen voor het reinigen van keukens, werkbladen en voedselbereidingsruimtes. Zo staat u altijd sterk bij een inspectie van de NVWA of gemeente.',
      },
      {
        question: 'Kunnen jullie ook buiten openingstijden schoonmaken?',
        answer: 'Absoluut. Wij stemmen onze werkzaamheden volledig af op uw openingstijden. Of uw zaak nu om middernacht sluit of vroeg in de ochtend opent, wij zorgen dat alles schoon is voordat de eerste gast binnenkomt. Uw gasten merken niets van de schoonmaak, alleen van het resultaat.',
      },
      {
        question: 'Reinigen jullie ook de afzuiginstallatie?',
        answer: 'Ja, wij verzorgen de grondige reiniging van afzuigkappen, filters en kanalen. Dit is essentieel voor brandveiligheid en luchtkwaliteit in uw keuken. Wij adviseren dit minimaal twee keer per jaar te laten doen. Een schone afzuiginstallatie draait efficiënter en verlengt de levensduur van uw apparatuur.',
      },
      {
        question: 'Wat kost horecaschoonmaak?',
        answer: 'De kosten zijn afhankelijk van de grootte van uw horecagelegenheid, het type keuken en de gewenste frequentie. Wij bieden altijd een vrijblijvende offerte op maat. Neem contact op voor een persoonlijk voorstel. Wij denken graag mee over de meest kostenefficiënte aanpak voor uw situatie.',
      },
    ],
  },
  recreatie: {
    label: 'Vakantiewoning schoonmaak',
    heading: 'Altijd een perfecte eerste indruk',
    serviceLink: '/schoonmaak-recreatiewoning',
    serviceLinkText: 'Meer over recreatiewoning schoonmaak',
    heroImage: 'recreatieschoonmaak',
    usps: [
      { title: 'Snelle wisselschoonmaak', description: 'Wij reinigen uw woning tussen twee boekingen in \u2014 ook als check-in en check-out op dezelfde dag vallen. Onze ervaren teams werken efficiënt en grondig, zonder dat gasten hier iets van merken.' },
      { title: 'Linnengoed service', description: 'Beddengoed en handdoeken wassen, drogen en opmaken inclusief. Uw gasten komen aan in een frisse omgeving. Een hotelachtige presentatie verhoogt de gastervaring en uw beoordelingen direct.' },
      { title: 'Eindcontrole', description: 'Na elke schoonmaak voeren wij een grondige eindcontrole uit. Zo weet u zeker dat alles perfect is. Eventuele ontbrekende of beschadigde items signaleren wij direct aan u, zodat u tijdig kunt handelen.' },
      { title: 'Flexibele beschikbaarheid', description: 'Wij zijn beschikbaar in het weekend en op feestdagen. Uw verhuurkalender bepaalt onze planning. Ook tijdens piekseizoenen met meerdere wisselingen per dag zorgen wij voor continuïteit.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat synchroniseert met uw boekingskalender.',
    whatWeOffer: [
      'Snelle wisselschoonmaak tussen gasten op dezelfde dag',
      'Volledige linnengoed service: wassen, drogen, opmaken van bedden',
      'Keuken en badkamer grondig reinigen en desinfecteren',
      'Stofzuigen, dweilen en algemene reiniging van alle vertrekken',
      'Eindcontrole met checklist voor een gastklare woning',
      'Seizoensgebonden dieptereiniging voor het begin en einde van het verhuurseizoen',
    ],
    faqs: [
      {
        question: 'Hoe snel kunnen jullie een wisselschoonmaak uitvoeren?',
        answer: 'Wij zijn gespecialiseerd in snelle wisselschoonmaak. Een standaard vakantiewoning is binnen 2 tot 3 uur volledig schoon en klaar voor de volgende gasten. Ook als check-out en check-in op dezelfde dag vallen, regelen wij het. U hoeft zich geen zorgen te maken over de overgang tussen gasten.',
      },
      {
        question: 'Verzorgen jullie ook het linnengoed?',
        answer: 'Ja, wij bieden een complete linnengoed service aan. Beddengoed en handdoeken worden gewassen, gedroogd en netjes opgemaakt. Uw gasten worden ontvangen in een frisse, hotelachtige omgeving zonder dat u er omkijken naar heeft. Dit verhoogt de gastbeleving en draagt direct bij aan betere beoordelingen op verhuurplatforms.',
      },
      {
        question: 'Zijn jullie ook beschikbaar in het weekend en op feestdagen?',
        answer: 'Ja, wij zijn 7 dagen per week beschikbaar, inclusief feestdagen en in het hoogseizoen. Uw verhuurkalender bepaalt onze planning, niet andersom. Zo mist u nooit een boeking door gebrek aan schoonmaak. Koppel uw boekingskalender aan onze planning en alles wordt automatisch afgestemd.',
      },
      {
        question: 'Kunnen jullie meerdere vakantiewoningen tegelijk schoonmaken?',
        answer: 'Ja, wij hebben voldoende capaciteit om meerdere woningen op dezelfde dag te schoonmaken. Ideaal voor eigenaren van meerdere verhuurobjecten of beheerders van vakantieparken. Wij stemmen de planning af op uw boekingsschema. Vraag naar onze voordelige tarieven voor beheerders met meerdere objecten.',
      },
    ],
  },
  particulier: {
    label: 'Particuliere schoonmaak',
    heading: 'Een schoon huis zonder zorgen',
    serviceLink: '/particuliere-schoonmaak',
    serviceLinkText: 'Meer over particuliere schoonmaak',
    heroImage: 'particulieren_schoonmaak',
    usps: [
      { title: 'Op maat gemaakt', description: 'Elk huishouden is anders. Wij stemmen onze werkzaamheden af op uw specifieke wensen en behoeften. Of u nu extra aandacht wilt voor de badkamer of juist de keuken, wij passen het plan aan.' },
      { title: 'Vast contactpersoon', description: 'U krijgt altijd dezelfde schoonmaker. Vertrouwd, betrouwbaar en bekend met uw woning. Dat vertrouwen bouwen wij op met consistente kwaliteit en open communicatie.' },
      { title: 'Eigen sleutelservice', description: 'Niet thuis? Geen probleem. Wij bewaren uw sleutel veilig en maken schoon wanneer het u uitkomt. Uw sleutel wordt bewaard op een beveiligde locatie en nooit zonder toestemming gebruikt.' },
      { title: 'Milieuvriendelijk', description: 'Wij gebruiken groene schoonmaakmiddelen die veilig zijn voor uw gezin en huisdieren. Zo draagt u ook thuis bij aan een duurzamere wereld, zonder in te leveren op reinheid.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat aansluit bij uw leven en schema.',
    whatWeOffer: [
      'Wekelijkse, tweewekelijkse of maandelijkse huishoudelijke schoonmaak',
      'Badkamer en toilet grondig reinigen en ontkalken',
      'Keuken schoonmaken inclusief apparatuur en werkbladen',
      'Stofzuigen, dweilen en stof afnemen in alle kamers',
      'Bedden verschonen en wasgoed opvouwen op verzoek',
      'Sleutelservice zodat wij kunnen schoonmaken als u niet thuis bent',
    ],
    faqs: [
      {
        question: 'Krijg ik altijd dezelfde schoonmaker?',
        answer: 'Ja, wij koppelen een vaste schoonmaker aan uw woning. Diegene leert uw huis kennen, weet wat uw voorkeuren zijn en waar extra aandacht nodig is. Bij ziekte of vakantie zorgen wij voor een geschikte vervanger die vooraf ge\u00efnstrueerd wordt. Zo ervaart u altijd dezelfde kwaliteit, ongeacht wie er langs komt.',
      },
      {
        question: 'Moet ik zelf schoonmaakmiddelen in huis hebben?',
        answer: 'Nee, dat is niet nodig. Onze schoonmakers nemen hun eigen professionele en milieuvriendelijke middelen en materialen mee. Als u specifieke producten wilt laten gebruiken, is dat uiteraard ook mogelijk. U hoeft dus nooit meer op te letten of er genoeg schoonmaakmiddelen in huis zijn.',
      },
      {
        question: 'Hoe werkt de sleutelservice?',
        answer: 'U vertrouwt uw sleutel toe aan ons en wij bewaren deze veilig op een beveiligde locatie. Onze schoonmakers komen op het afgesproken moment en u hoeft niet thuis te zijn. Na de schoonmaak wordt uw woning netjes achtergelaten en afgesloten. U ontvangt desgewenst een berichtje als de schoonmaak is afgerond.',
      },
      {
        question: 'Kan ik de schoonmaak tussentijds pauzeren of wijzigen?',
        answer: 'Ja, u kunt de schoonmaak op elk moment pauzeren, wijzigen of stopzetten. Wij hanteren geen opzegtermijn. Bent u op vakantie of wilt u een keer overslaan? Geen probleem, laat het ons gewoon weten. Wij passen de planning direct aan zonder administratieve rompslomp.',
      },
    ],
  },
  vve: {
    label: 'VvE schoonmaak',
    heading: 'Schone gemeenschappelijke ruimtes',
    serviceLink: '/kantoren-schoonmaak',
    serviceLinkText: 'Bekijk onze zakelijke schoonmaak',
    heroImage: 'foto15',
    usps: [
      { title: 'Trappenhuizen & hallen', description: 'Wij houden trappenhuizen, entrees en gemeenschappelijke gangen schoon en representatief voor bewoners en bezoekers. Een verzorgde entree verhoogt de uitstraling van het hele complex.' },
      { title: 'Periodiek of wekelijks', description: 'Kies de frequentie die past bij uw VvE. Van wekelijks tot maandelijks \u2014 wij zijn flexibel. De planning kan ook worden aangepast aan het seizoen of bijzondere omstandigheden.' },
      { title: 'Glaswerk & buitenzijde', description: 'Ramen, deuren en kozijnen in gemeenschappelijke ruimtes worden streeploos en grondig gereinigd. Helder glaswerk geeft het pand direct een frisse en goed onderhouden uitstraling.' },
      { title: 'Vaste prijsafspraak', description: 'Transparante tarieven zonder verrassingen. Wij maken duidelijke afspraken die passen bij het VvE-budget. Zo kan het bestuur eenvoudig plannen en hoeft er nooit onverwacht bijbetaald te worden.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op in overleg met uw VvE-bestuur.',
    whatWeOffer: [
      'Schoonmaak van trappenhuizen, entrees en gemeenschappelijke hallen',
      'Reiniging van liften, brievenbussen en intercom panelen',
      'Streeploos wassen van ramen en glazen deuren in gemeenschappelijke ruimtes',
      'Vloeren stofzuigen, dweilen en periodiek machinaal reinigen',
      'Verwijdering van spinnenwebben, stof en vuil op moeilijk bereikbare plekken',
      'Periodieke buitenreiniging van entreegebieden en galerijen',
    ],
    faqs: [
      {
        question: 'Hoe wordt de VvE schoonmaak georganiseerd?',
        answer: 'Wij overleggen met het VvE-bestuur of de beheerder over de gewenste werkzaamheden, frequentie en tijdstippen. Na een vrijblijvende offerte starten wij met een proefperiode. De facturatie gaat rechtstreeks naar de VvE. Zo verloopt de administratie soepel en hoeven individuele bewoners niets te regelen.',
      },
      {
        question: 'Hoe vaak moeten gemeenschappelijke ruimtes worden schoongemaakt?',
        answer: 'Dit hangt af van het aantal bewoners en het gebruik van de ruimtes. Voor de meeste VvE\u2019s adviseren wij wekelijkse of tweewekelijkse schoonmaak. Bij grotere complexen of veel loopverkeer kan dagelijkse schoonmaak raadzaam zijn. Tijdens een intakegesprek geven wij u een concreet advies op maat.',
      },
      {
        question: 'Kunnen jullie ook de buitenruimtes schoonmaken?',
        answer: 'Ja, wij verzorgen ook de reiniging van galerijen, entreegebieden, parkeergarages en buitentrappen. Dit draagt bij aan een nette uitstraling en voorkomt gladheid door vuil en algengroei. Een goed onderhouden buitenruimte verhoogt bovendien de waarde en aantrekkelijkheid van het complex.',
      },
      {
        question: 'Wat als de VvE niet tevreden is over de schoonmaak?',
        answer: 'Wij bieden een tevredenheidsgarantie. Als de schoonmaak niet aan uw verwachtingen voldoet, komen wij kosteloos terug om het te herstellen. Regelmatige kwaliteitscontroles zorgen voor een consistent hoog niveau. Feedback van bewoners en het bestuur nemen wij altijd serieus en verwerken wij direct in onze aanpak.',
      },
    ],
  },
  scholen: {
    label: 'Schoonmaak voor scholen',
    heading: 'Een schone leeromgeving',
    serviceLink: '/kantoren-schoonmaak',
    serviceLinkText: 'Bekijk onze zakelijke schoonmaak',
    heroImage: 'foto9',
    usps: [
      { title: 'Hygi\u00ebnisch & veilig', description: 'Wij gebruiken kindvriendelijke en hypoallergene schoonmaakmiddelen die veilig zijn voor leerlingen en personeel. Zo minimaliseert u het risico op allergische reacties en huidirritaties op school.' },
      { title: 'Na schooltijd', description: 'Onze teams werken na de lesuren zodat het onderwijs niet verstoord wordt. Geen overlast, wel resultaat. De volgende ochtend start iedereen in een frisse, hygiënische omgeving.' },
      { title: 'Sanitair specialist', description: 'Toiletten, wastafels en kleedkamers worden dagelijks grondig gereinigd en gedesinfecteerd. Goed onderhouden sanitair is essentieel voor de gezondheid en het welzijn van leerlingen.' },
      { title: 'Periodiek & structureel', description: 'Van dagelijkse schoonmaak tot grote beurten in vakanties \u2014 wij bieden een totaalpakket voor scholen. Zo heeft u één betrouwbare partner voor alle schoonmaakbehoeften het hele schooljaar door.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat aansluit bij het schoolrooster en de vakanties.',
    whatWeOffer: [
      'Dagelijkse schoonmaak van klaslokalen, gangen en aula\u2019s',
      'Grondige reiniging en desinfectie van sanitaire voorzieningen',
      'Vloeronderhoud: stofzuigen, dweilen en periodiek machinaal reinigen',
      'Reiniging van sportzalen, kleedkamers en douches',
      'Grote schoonmaakbeurten tijdens schoolvakanties',
      'Gebruik van kindvriendelijke en hypoallergene schoonmaakmiddelen',
    ],
    faqs: [
      {
        question: 'Zijn de schoonmaakmiddelen veilig voor kinderen?',
        answer: 'Ja, wij gebruiken uitsluitend kindvriendelijke, hypoallergene en milieuvriendelijke schoonmaakmiddelen. Deze zijn vrij van agressieve chemicali\u00ebn en veilig voor leerlingen, personeel en het milieu. Dit geeft ouders en schoolleiding de zekerheid dat de gezondheid van kinderen centraal staat.',
      },
      {
        question: 'Wanneer wordt de schoonmaak uitgevoerd?',
        answer: 'Onze teams werken na de lesuren, zodat het onderwijs niet verstoord wordt. In overleg kan de schoonmaak ook vroeg in de ochtend worden uitgevoerd, zodat de school er fris bij staat wanneer de leerlingen aankomen. Wij stemmen de planning altijd af met de schoolleiding zodat het naadloos aansluit op het rooster.',
      },
      {
        question: 'Verzorgen jullie ook de grote schoonmaak in vakanties?',
        answer: 'Ja, wij bieden grote schoonmaakbeurten aan tijdens schoolvakanties. Dit omvat dieptereiniging van alle lokalen, vloerbehandeling, reiniging van meubilair en een grondige beurt van het hele gebouw. Zo start het nieuwe schooljaar of kwartaal in een volledig frisse en hygiënische omgeving.',
      },
      {
        question: 'Kunnen jullie ook de sportzaal en kleedkamers schoonmaken?',
        answer: 'Absoluut. Wij hebben ervaring met het reinigen van sportzalen, kleedkamers en douches. Deze ruimtes vereisen extra aandacht voor hygi\u00ebne en wij zorgen voor een grondige desinfectie na elk gebruik. Schimmel en bacteriën krijgen geen kans dankzij onze gespecialiseerde aanpak voor vochtige ruimtes.',
      },
    ],
  },
  zorg: {
    label: 'Schoonmaak voor zorginstellingen',
    heading: 'Hygi\u00ebne waar het er het meest toe doet',
    serviceLink: '/kantoren-schoonmaak',
    serviceLinkText: 'Bekijk onze zakelijke schoonmaak',
    heroImage: 'foto15',
    usps: [
      { title: 'Infectiepreventie', description: 'Wij werken volgens strikte hygi\u00ebneprotocollen en desinfecteren contactpunten zorgvuldig en structureel. Dit verlaagt aantoonbaar het risico op verspreiding van ziektekiemen binnen de instelling.' },
      { title: 'Gecertificeerd personeel', description: 'Onze medewerkers zijn getraind in schoonmaak voor zorginstellingen en kennen de specifieke eisen. Zij worden regelmatig bijgeschoold om te voldoen aan de laatste richtlijnen van het RIVM en de sector.' },
      { title: 'Stille werkmethode', description: 'Wij werken discreet en stil zodat bewoners en pati\u00ebnten niet gestoord worden in hun rust. Onze medewerkers zijn getraind in respectvol en zorgzaam gedrag in gevoelige omgevingen.' },
      { title: 'Flexibele planning', description: 'Wij stemmen onze werkzaamheden af op de dagelijkse routines van de instelling \u2014 7 dagen per week. Of het nu gaat om vroege ochtenden, middagen of avonden, wij passen ons naadloos aan.' },
    ],
    timelineStep3: 'We stellen een passend schoonmaakplan op dat aansluit bij de protocollen van uw instelling.',
    whatWeOffer: [
      'Dagelijkse reiniging van kamers, gangen, recreatieruimtes en ontvangstruimtes',
      'Desinfectie van contactpunten zoals deurklinken, leuningen en liftknoppen',
      'Sanitaire voorzieningen grondig reinigen volgens hygi\u00ebneprotocollen',
      'Vloeronderhoud met antistatische en antibacteri\u00eble behandelingen',
      'Periodieke dieptereiniging van de gehele instelling',
      'Stille werkmethode: schoonmaken zonder bewoners of pati\u00ebnten te storen',
    ],
    faqs: [
      {
        question: 'Werken jullie volgens de hygi\u00ebneprotocollen voor zorginstellingen?',
        answer: 'Ja, onze medewerkers zijn speciaal getraind in hygi\u00ebneprotocollen voor de zorgsector. Wij werken met desinfecterende middelen die voldoen aan de eisen van de RIVM en hanteren strikte procedures voor infectiepreventie. Op verzoek kunnen wij schoonmaakrapportages aanleveren als onderdeel van uw kwaliteitsdossier.',
      },
      {
        question: 'Hoe gaan jullie om met de privacy van bewoners?',
        answer: 'Privacy en discretie staan bij ons voorop. Onze medewerkers zijn getraind in het respectvol omgaan met bewoners en pati\u00ebnten. Wij kloppen altijd aan, werken stil en verlaten de ruimte netjes zonder persoonlijke bezittingen aan te raken. Het welzijn van bewoners staat altijd centraal bij alles wat wij doen.',
      },
      {
        question: 'Kunnen jullie schoonmaken zonder de dagelijkse routines te verstoren?',
        answer: 'Ja, wij stemmen onze werkzaamheden af op de dagplanning van de instelling. Of het nu gaat om maaltijden, therapiesessies of rusttijden, wij passen ons aan zodat bewoners en personeel zo min mogelijk worden gestoord. Wij bespreken dit vooraf met de teamleider of zorgcoördinator zodat iedereen op de hoogte is.',
      },
      {
        question: 'Welke desinfectiemiddelen gebruiken jullie?',
        answer: 'Wij gebruiken professionele desinfectiemiddelen die effectief zijn tegen bacteri\u00ebn, virussen en schimmels. Deze middelen voldoen aan alle geldende normen voor zorginstellingen en zijn veilig voor bewoners en personeel. Op verzoek verstrekken wij een overzicht van de gebruikte producten en hun certificeringen.',
      },
    ],
  },
  periodiek: {
    label: 'Periodieke schoonmaak',
    heading: 'Structureel schoon, zonder omkijken',
    serviceLink: '/particuliere-schoonmaak',
    serviceLinkText: 'Bekijk onze schoonmaakdiensten',
    heroImage: 'foto2',
    usps: [
      { title: 'Vast schema', description: 'Wekelijks, tweewekelijks of maandelijks \u2014 wij komen wanneer het u uitkomt, op vaste dagen en tijden. Zo weet u altijd wanneer de schoonmaak plaatsvindt en kunt u er op rekenen.' },
      { title: 'Dezelfde schoonmaker', description: 'U krijgt een vaste medewerker die uw woning of pand kent en weet wat er verwacht wordt. Dat zorgt voor vertrouwen, consistentie en een resultaat dat elke keer aan uw verwachtingen voldoet.' },
      { title: 'Geen contractverplichting', description: 'Flexibel opzegbaar. Wij geloven in kwaliteit, niet in kleine lettertjes. U bent vrij om te stoppen wanneer u wilt, want wij verdienen uw vertrouwen door ons werk, niet door juridische verplichtingen.' },
      { title: 'Inclusief materialen', description: 'Wij nemen onze eigen professionele middelen en materialen mee. U hoeft niets te regelen. Zo bent u verlost van het aanschaffen, bijhouden en opbergen van schoonmaakspullen.' },
    ],
    timelineStep3: 'We stellen een vast schoonmaakschema op dat past bij uw ritme en voorkeuren.',
    whatWeOffer: [
      'Structurele schoonmaak op een vast schema: wekelijks, tweewekelijks of maandelijks',
      'Volledige reiniging van woning of kantoor inclusief sanitair en keuken',
      'Stofzuigen, dweilen en stof afnemen in alle ruimtes',
      'Vaste schoonmaker die uw pand kent en weet wat er nodig is',
      'Alle professionele middelen en materialen worden door ons meegenomen',
      'Flexibel opzegbaar: geen langlopende contracten of opzegtermijn',
    ],
    faqs: [
      {
        question: 'Hoe vaak moet ik periodieke schoonmaak inplannen?',
        answer: 'Dit hangt af van uw situatie. Voor de meeste huishoudens adviseren wij wekelijkse of tweewekelijkse schoonmaak. Kantoren en bedrijfspanden hebben vaak dagelijkse of wekelijkse schoonmaak nodig. Wij adviseren u graag over de beste frequentie. Tijdens een vrijblijvend kennismakingsgesprek kijken wij samen naar wat het beste bij uw situatie past.',
      },
      {
        question: 'Kan ik de frequentie tussentijds aanpassen?',
        answer: 'Ja, u kunt op elk moment de frequentie verhogen of verlagen. Heeft u bijvoorbeeld gasten die komen logeren en wilt u die week een extra schoonmaak? Geen probleem, wij plannen het flexibel in. U betaalt alleen voor wat u daadwerkelijk gebruikt, zonder vaste verplichtingen.',
      },
      {
        question: 'Wat als ik een keer wil overslaan?',
        answer: 'Dat is geen probleem. Laat ons minimaal 24 uur van tevoren weten dat u een beurt wilt overslaan en wij passen de planning aan. Er worden geen kosten in rekening gebracht voor tijdig geannuleerde afspraken. Wij waarderen uw openheid en verwachten hetzelfde van onze kant.',
      },
      {
        question: 'Nemen jullie eigen schoonmaakmiddelen mee?',
        answer: 'Ja, onze schoonmakers nemen alle benodigde professionele middelen en materialen mee. U hoeft niets in huis te halen. Wij gebruiken milieuvriendelijke producten die effectief en veilig zijn voor uw woning. Zo bespaart u ook op de aanschaf van schoonmaakmiddelen en hoeft u die niet langer bij te houden.',
      },
    ],
  },
};

// ── Content generators ──

export function generateTitle(keyword: Keyword, location: Location): string {
  return `${keyword.name} ${location.name}`;
}

export function generateMetaDescription(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const descriptions: Record<Category, string> = {
    general: `Op zoek naar een ${keyword.name.toLowerCase()} in ${location.name}? Blink Schoonmaak 010 biedt professionele schoonmaakdiensten. Vraag vrijblijvend een offerte aan.`,
    kantoor: `Professionele ${keyword.name.toLowerCase()} in ${location.name}. Dagelijks, wekelijks of op maat. Blink Schoonmaak 010 \u2014 uw partner voor een schone werkplek.`,
    oplevering: `${keyword.name} in ${location.name}? Blink Schoonmaak 010 zorgt voor een stralend schone oplevering. Snel, grondig en betrouwbaar.`,
    horeca: `${keyword.name} in ${location.name}. HACCP-bewuste reiniging voor restaurants, caf\u00e9s en hotels. Blink Schoonmaak 010 \u2014 hygi\u00ebne gegarandeerd.`,
    recreatie: `${keyword.name} in ${location.name}. Wisselschoonmaak tussen gasten, linnengoed service en eindcontrole. Blink Schoonmaak 010 regelt het.`,
    particulier: `Professionele ${keyword.name.toLowerCase()} in ${location.name}. Op maat, betrouwbaar en milieuvriendelijk. Vraag een offerte aan bij Blink Schoonmaak 010.`,
    vve: `${keyword.name} in ${location.name}. Schone trappenhuizen, entrees en gemeenschappelijke ruimtes. Blink Schoonmaak 010 \u2014 betrouwbaar en betaalbaar.`,
    scholen: `${keyword.name} in ${location.name}. Hygi\u00ebnische leeromgeving met kindvriendelijke middelen. Blink Schoonmaak 010 werkt na schooltijd.`,
    zorg: `${keyword.name} in ${location.name}. Gecertificeerde schoonmaak volgens hygi\u00ebneprotocollen. Blink Schoonmaak 010 \u2014 specialist in zorgschoonmaak.`,
    periodiek: `${keyword.name} in ${location.name}. Vast schema, vaste schoonmaker, geen contractverplichting. Blink Schoonmaak 010 \u2014 structureel schoon.`,
  };
  return descriptions[cat];
}

export function generateUspSubtext(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const texts: Record<Category, string> = {
    general: `Al meer dan 500 klanten in ${location.name} en omgeving gingen u voor. Ontdek waarom zij kiezen voor Blink Schoonmaak 010 als hun vaste schoonmaakpartner.`,
    kantoor: `Van kleine bedrijfsruimtes tot grote kantoorpanden in ${location.name} — wij luisteren naar uw wensen en stellen een plan op dat past bij uw bedrijf.`,
    oplevering: `Nieuwbouw, renovatie of verbouwing in ${location.name}? Onze opleveringsschoonmaak voldoet aan de strengste eisen van makelaars, aannemers en woningcorporaties.`,
    horeca: `Wij begrijpen de dynamiek van de horeca in ${location.name}: onregelmatige tijden, hoge druk en strenge eisen. Daarom passen wij ons volledig aan op uw bedrijfsvoering.`,
    recreatie: `Of u één woning verhuurt in ${location.name} of een heel park beheert — wij schalen flexibel op naar uw behoefte. Ook in het hoogseizoen.`,
    particulier: `Onze schoonmakers in ${location.name} zijn grondig, betrouwbaar en discreet. U krijgt een vaste medewerker die uw woning door en door leert kennen.`,
    vve: `Wij ondersteunen VvE's in ${location.name} met een helder schoonmaakplan, transparante tarieven en een persoonlijk aanspreekpunt voor het bestuur.`,
    scholen: `Blink Schoonmaak 010 heeft ruime ervaring met basisscholen, middelbare scholen en kinderopvanglocaties in ${location.name} en omgeving.`,
    zorg: `Wij passen onze planning aan op de dagindeling van uw instelling in ${location.name}. Zo wordt het dagelijks leven van bewoners en patiënten zo min mogelijk verstoord.`,
    periodiek: `Onze vaste schoonmaker kent uw ruimte in ${location.name} en weet precies waar aandacht nodig is. U kiest zelf de frequentie — zonder kleine lettertjes.`,
  };
  return texts[cat];
}

export function generateGalleryText(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const texts: Record<Category, string> = {
    general: `Als uw schoonmaakpartner in ${location.name} staan wij altijd klaar. Of het nu gaat om een spoedklus of een structurele samenwerking — u kunt op ons rekenen. Wij komen indien gewenst langs voor een vrijblijvende kennismaking op locatie, zodat u precies weet met wie u te maken krijgt. Neem vandaag nog contact op en ervaar het verschil.`,
    kantoor: `Getraind personeel, discreet en betrouwbaar — dat is waar kantoorschoonmaak in ${location.name} om draait. Onze schoonmakers werken zelfstandig met een eigen sleutel zodat u er geen omkijken naar heeft. Wij bieden ook aanvullende diensten aan zoals ramen-, vloer- en dieptereiniging. Alles bespreekbaar, alles op maat voor uw bedrijf.`,
    oplevering: `Het resultaat van onze opleveringsschoonmaak in ${location.name} is een volledig instapklare ruimte die klaar is voor gebruik of verkoop. Heeft u een deadline? Geen probleem — wij plannen onze schoonmaak op het moment dat het u uitkomt, ook op korte termijn. Onze kwaliteit wordt gegarandeerd door een uitgebreide eindcontrole.`,
    horeca: `Naast dagelijkse schoonmaak bieden wij in ${location.name} ook periodieke dieptereiniging aan: het ontvetten van keukenapparatuur, het grondig reinigen van tegelvloeren en het desinfecteren van werkoppervlakken. Alles om uw horecazaak op het hoogste niveau te houden. Wij documenteren onze werkzaamheden zodat u bij controles altijd voorbereid bent.`,
    recreatie: `Wij werken samen met verhuurders in heel Zuid-Holland en Zeeland. In het hoogseizoen zorgen wij voor extra capaciteit in ${location.name} zodat ook bij piekdrukte elke woning op tijd gastenklaar is. Aanvullend bieden wij welkomstpakketten, linnengoed-service en onderhoud van terrassen en buitenruimtes.`,
    particulier: `Heeft u een feestje gehad of wilt u de frequentie tijdelijk verhogen? Geen probleem. Onze schoonmakers in ${location.name} zijn flexibel en werken altijd volgens een duidelijk schoonmaakplan dat in overleg met u is opgesteld. Wekelijks, tweewekelijks of maandelijks — u bepaalt het ritme, wij leveren de kwaliteit.`,
    vve: `Onze schoonmakers werken op vaste dagen en tijden in ${location.name}. Bij klachten of bijzonderheden is er één vast aanspreekpunt — geen anoniem callcenter, maar een persoonlijke contactpersoon die uw complex kent. Op verzoek verzorgen wij ook aanvullende diensten zoals glazenwassen, gevelreiniging en groenonderhoud.`,
    scholen: `Tijdens schoolvakanties bieden wij uitgebreide dieptereiniging aan in ${location.name}: het grondig reinigen van vloeren, het wassen van gordijnen en het behandelen van stoffering. Zo start elk nieuw schooljaar in een volledig schone, frisse omgeving. Onze teams werken zelfstandig met een vast contactpersoon voor de schoolleiding.`,
    zorg: `In de zorgsector gaat schoonmaak verder dan esthetiek — het is essentieel voor infectiepreventie en patiëntveiligheid. Onze medewerkers in ${location.name} zijn getraind in de juiste protocollen en werken met speciale desinfectiemiddelen. Bij uitbraken van infectieziekten handelen wij snel en adequaat met crisisschoonmaak.`,
    periodiek: `Blink Schoonmaak 010 stelt samen met u een schoonmaakplan op in ${location.name}. U bepaalt de frequentie, de dagen en de tijdstippen — wij voeren het uit. Onze vaste schoonmaker signaleert proactief wanneer extra aandacht nodig is, bijvoorbeeld bij seizoenswisselingen of na drukke periodes. Kwaliteit is onze garantie.`,
  };
  return texts[cat];
}

export function generateHeroSubtitle(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const subtitles: Record<Category, string> = {
    general: `Professionele schoonmaakdiensten voor particulieren en bedrijven in ${location.name}. Betrouwbaar, grondig en altijd op maat — vraag vandaag nog een vrijblijvende offerte aan.`,
    kantoor: `Professionele kantoorschoonmaak in ${location.name}, afgestemd op uw planning. Elke ochtend een frisse werkplek voor uw medewerkers — zonder overlast.`,
    oplevering: `Stralend schoon opleveren na verbouwing of verhuizing in ${location.name}. Van bouwstof tot een perfect eindresultaat — grondig, snel en zonder zorgen.`,
    horeca: `HACCP-conforme horecaschoonmaak in ${location.name} voor restaurants, cafés en hotels. Hygiënisch, grondig en volledig afgestemd op uw openingstijden.`,
    recreatie: `Professionele schoonmaak van vakantiewoningen in ${location.name}. Snelle wisselschoonmaak tussen gasten — altijd gastenklaar, altijd betrouwbaar.`,
    particulier: `Betrouwbare huishoudelijke hulp in ${location.name}. Vaste schoonmaker, flexibel inplanbaar en met alle materialen inbegrepen.`,
    vve: `Professionele VvE schoonmaak in ${location.name}. Schone trappenhuizen, entrees en gemeenschappelijke ruimtes — voor tevreden bewoners en bezoekers.`,
    scholen: `Professionele schoonmaak voor scholen en onderwijsinstellingen in ${location.name}. Veilig, kindvriendelijk en altijd na schooltijd.`,
    zorg: `Gespecialiseerde schoonmaak voor zorginstellingen in ${location.name}. Discreet, hygiënisch en beschikbaar 7 dagen per week.`,
    periodiek: `Structurele periodieke schoonmaak in ${location.name}. Vast schema, vaste schoonmaker, flexibele frequentie en geen contractverplichtingen.`,
  };
  return subtitles[cat];
}

export function generateIntroText(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const intros: Record<Category, string> = {
    general: `Op zoek naar een betrouwbaar schoonmaakbedrijf in ${location.name}? Blink Schoonmaak 010 biedt professionele schoonmaakdiensten voor particulieren en bedrijven. Eenmalig of structureel — wij stemmen alles af op uw wensen. Onze schoonmakers zijn in vaste dienst, werken met milieuvriendelijke middelen en leveren altijd een heldere offerte zonder verborgen kosten.`,
    kantoor: `Blink Schoonmaak 010 verzorgt kantoorschoonmaak in ${location.name}, volledig afgestemd op uw planning. Wij werken buiten kantoortijden zodat uw team elke ochtend een frisse werkplek aantreft. Van werkplekken en vergaderruimtes tot sanitair en entreegebieden — wij zorgen voor een representatieve uitstraling.`,
    oplevering: `Na een verbouwing of bij oplevering in ${location.name} zorgt Blink Schoonmaak 010 voor een stralend schoon resultaat. Bouwstof, cementsluier, verfspetters — onze specialisten verwijderen alles vakkundig zonder schade. Vloeren, ramen, kozijnen, sanitair en keukens: wij maken het volledig in orde.`,
    horeca: `Blink Schoonmaak 010 biedt horecaschoonmaak in ${location.name} volgens HACCP-richtlijnen. Onze schoonmakers zijn getraind in voedselgerelateerde omgevingen en gebruiken voedselveilige reinigingsmiddelen. Van keuken en bereidingsruimtes tot gastenruimte, bar en toiletten — alles grondig en efficiënt.`,
    recreatie: `Blink Schoonmaak 010 verzorgt de schoonmaak van vakantiewoningen in ${location.name}. Snelle wisselschoonmaak tussen gasten, inclusief het reinigen van alle kamers, badkamers en keuken, het verschonen van linnengoed en een uitgebreide eindcontrole. Altijd op tijd klaar voor de volgende gast.`,
    particulier: `Een schoon huis zonder zorgen? Blink Schoonmaak 010 biedt particuliere schoonmaak in ${location.name}. U krijgt een vaste schoonmaker die uw woning leert kennen. Wij werken met milieuvriendelijke middelen en brengen al het materiaal zelf mee. Flexibel inplanbaar en zonder verplichtingen.`,
    vve: `Blink Schoonmaak 010 verzorgt VvE schoonmaak in ${location.name}. Trappenhuizen, entrees, liften, gangen en buitenruimtes — wij reinigen alles op een vast schema. Transparante tarieven zonder verrassingen en een vast aanspreekpunt voor het bestuur.`,
    scholen: `Professionele schoonmaak voor scholen in ${location.name}. Wij werken met kindvriendelijke, niet-toxische middelen en komen na schooltijd. Klaslokalen, gangen, aula's, toiletten en kantoren — met extra aandacht voor contactpunten zoals deurklinken en tafels.`,
    zorg: `Blink Schoonmaak 010 biedt schoonmaak voor zorginstellingen in ${location.name}. Speciaal opgeleid personeel dat werkt volgens strikte hygiëneprotocollen. Bewonerskamers, behandelkamers, sanitair en gemeenschappelijke ruimtes — discreet, zorgvuldig en 7 dagen per week beschikbaar.`,
    periodiek: `Structurele schoonmaak in ${location.name} op een vast schema. Vaste schoonmaker, flexibele frequentie en alle materialen inbegrepen. Dagelijks, wekelijks of maandelijks — u bepaalt het ritme, zonder langlopende contractverplichtingen.`,
  };
  return intros[cat];
}

export function generateExtraText(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const extras: Record<Category, string> = {
    general: `Wat ons onderscheidt in ${location.name} is onze persoonlijke aanpak. Wij bespreken vooraf uw wensen en stellen een schoonmaakplan op dat past bij uw situatie. Al onze schoonmakers zijn in vaste dienst, volledig verzekerd en worden regelmatig bijgeschoold. Neem contact op voor een vrijblijvend adviesgesprek.`,
    kantoor: `Een schoon kantoor is het visitekaartje van uw bedrijf in ${location.name}. Wij reinigen niet alleen zichtbare oppervlakken, maar ook toetsenborden, ventilatieroosters en lichtschakelaars. Na elke beurt voeren wij een kwaliteitscontrole uit. Alles bespreekbaar, alles op maat.`,
    oplevering: `Bij een opleveringsschoonmaak in ${location.name} werken wij systematisch van boven naar beneden. Alle oppervlakken worden behandeld met de juiste techniek om beschadigingen te voorkomen. Na afloop inspecteren wij alles met een gedetailleerde checklist — pas als alles perfect is, tekenen wij af.`,
    horeca: `Gasten verwachten een smetteloze omgeving en de NVWA hanteert strikte normen. Onze schoonmakers in ${location.name} weten precies hoe zij moeten omgaan met afzuigkappen, koelinstallaties en vloeren met vetafzetting. Wij documenteren alles zodat u bij een controle altijd kunt aantonen dat de hygiëne op orde is.`,
    recreatie: `Een schone woning bij aankomst zorgt voor positieve reviews en herhaalde boekingen. Onze teams in ${location.name} werken met gedetailleerde checklists per woning. Wij signaleren ook beschadigingen en technische problemen. Aanvullend bieden wij linnengoed-service en onderhoud van buitenruimtes.`,
    particulier: `Onze schoonmakers in ${location.name} besteden aandacht aan details: plinten, deurkozijnen, de bovenkant van kasten. Zij zijn volledig verzekerd en beschikken over een VOG. U kunt hen met een gerust hart ontvangen, ook als u niet thuis bent. Alle middelen en materialen nemen wij mee.`,
    vve: `Een goed onderhouden complex in ${location.name} verhoogt het woongenot én de woningwaarde. Onze schoonmakers werken op vaste dagen zodat bewoners weten wat ze kunnen verwachten. Eén vast aanspreekpunt, transparante maandtarieven en op verzoek aanvullende diensten zoals glazenwassen en gevelreiniging.`,
    scholen: `Onze teams in ${location.name} gebruiken desinfecterende middelen op veelgebruikte contactpunten. Voor basisscholen extra aandacht voor lage oppervlakken en speelgoed, bij middelbare scholen voor praktijklokalen en computerruimtes. Tijdens vakanties bieden wij uitgebreide dieptereiniging aan.`,
    zorg: `Onze medewerkers in ${location.name} zijn getraind volgens WIP-richtlijnen en werken met kleurcodering om kruisbesmetting te voorkomen. Zij werken discreet en respectvol, met oog voor de kwetsbare doelgroep. Bij uitbraken van infectieziekten bieden wij crisisschoonmaak en desinfectie aan.`,
    periodiek: `Regelmatig onderhoud voorkomt dat vuil zich ophoopt in uw ruimte in ${location.name}. Onze vaste schoonmaker signaleert proactief wanneer extra aandacht nodig is. Alle materialen zijn inbegrepen, er zijn geen langlopende verplichtingen. Kwaliteit is de reden om te blijven, niet een contract.`,
  };
  return extras[cat];
}

// ── Generate all page entries ──
export interface PseoPage {
  slug: string;
  keyword: Keyword;
  location: Location;
}

export function generateAllPages(): PseoPage[] {
  const pages: PseoPage[] = [];
  for (const keyword of keywords) {
    for (const location of locations) {
      pages.push({
        slug: `${keyword.slug}-${location.slug}`,
        keyword,
        location,
      });
    }
  }
  return pages;
}

// ── Related pages (internal linking) ──
export function getRelatedLocationPages(keyword: Keyword, currentLocation: Location, count = 6): PseoPage[] {
  const otherLocations = locations.filter((l) => l.slug !== currentLocation.slug);
  const seed = (keyword.slug + currentLocation.slug).length;
  const shuffled = [...otherLocations].sort((a, b) => {
    const hashA = (a.slug.charCodeAt(0) * 31 + seed) % 1000;
    const hashB = (b.slug.charCodeAt(0) * 31 + seed) % 1000;
    return hashA - hashB;
  });
  return shuffled.slice(0, count).map((loc) => ({
    slug: `${keyword.slug}-${loc.slug}`,
    keyword,
    location: loc,
  }));
}

export function getRelatedKeywordPages(currentKeyword: Keyword, location: Location, count = 4): PseoPage[] {
  const otherKeywords = keywords.filter((k) => k.slug !== currentKeyword.slug);
  const seed = (currentKeyword.slug + location.slug).length;
  const shuffled = [...otherKeywords].sort((a, b) => {
    const hashA = (a.slug.charCodeAt(0) * 31 + seed) % 1000;
    const hashB = (b.slug.charCodeAt(0) * 31 + seed) % 1000;
    return hashA - hashB;
  });
  return shuffled.slice(0, count).map((kw) => ({
    slug: `${kw.slug}-${location.slug}`,
    keyword: kw,
    location,
  }));
}
