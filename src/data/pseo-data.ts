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
      { title: 'Ervaren vakmensen', description: 'Al onze medewerkers zijn opgeleid, gescreend en beschikken over jarenlange ervaring in professionele schoonmaak.' },
      { title: 'Flexibel inplanbaar', description: 'Overdag, \u2019s avonds of in het weekend \u2014 wij passen ons aan uw schema aan. Geen vaste contracten vereist.' },
      { title: 'Duurzame middelen', description: 'Wij werken uitsluitend met milieuvriendelijke schoonmaakmiddelen die veilig zijn voor mens, dier en milieu.' },
      { title: 'Tevredenheidsgarantie', description: 'Niet tevreden? Dan komen wij kosteloos terug. Uw tevredenheid is onze hoogste prioriteit.' },
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
        answer: 'De kosten van een schoonmaakbedrijf hangen af van de grootte van de ruimte, de frequentie en het type schoonmaak. Wij bieden altijd een vrijblijvende offerte op maat, zodat u precies weet waar u aan toe bent. Er zijn geen verborgen kosten.',
      },
      {
        question: 'Hoe snel kan een schoonmaakbedrijf starten?',
        answer: 'Na ontvangst van uw aanvraag reageren wij binnen \u00e9\u00e9n werkdag. In de meeste gevallen kunnen wij binnen een week starten met de schoonmaakwerkzaamheden. Bij spoed is het vaak mogelijk om dezelfde week nog te beginnen.',
      },
      {
        question: 'Moet ik een langlopend contract afsluiten?',
        answer: 'Nee, wij werken zonder lange contractverplichtingen. U kunt kiezen voor eenmalige schoonmaak of een periodiek abonnement dat flexibel opzegbaar is. Wij geloven in kwaliteit, niet in kleine lettertjes.',
      },
      {
        question: 'Zijn de schoonmakers verzekerd?',
        answer: 'Ja, al onze medewerkers zijn volledig verzekerd. Wij hebben een bedrijfsaansprakelijkheidsverzekering die eventuele schade dekt. U kunt met een gerust hart onze vakmensen in uw pand laten werken.',
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
      { title: 'Dagelijkse reiniging', description: 'Uw kantoor is elke ochtend spic en span. Wij zorgen voor een frisse start van uw werkdag, elke dag van de week.' },
      { title: 'Flexibel inplanbaar', description: 'Vroeg in de ochtend, laat in de avond of in het weekend \u2014 wij plannen de schoonmaak op uw agenda in.' },
      { title: 'Duurzame middelen', description: 'Wij werken uitsluitend met milieuvriendelijke schoonmaakmiddelen die veilig zijn voor mens, dier en milieu.' },
      { title: 'Gecertificeerd personeel', description: 'Al onze medewerkers zijn gediplomeerd, gescreend en continu bijgeschoold. U kunt ons volledig vertrouwen.' },
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
        answer: 'Wij passen ons volledig aan uw kantooruren aan. De schoonmaak kan vroeg in de ochtend, laat in de avond of in het weekend worden uitgevoerd. Zo wordt uw team niet gestoord tijdens werkuren en start iedereen in een schone omgeving.',
      },
      {
        question: 'Wat omvat de standaard kantoorschoonmaak?',
        answer: 'Onze standaard kantoorschoonmaak omvat het reinigen van werkplekken, bureaus, vergaderruimtes, sanitair, keukens en vloeren. Daarnaast vullen wij dispensers bij en legen wij prullenbakken. Het pakket is volledig aan te passen aan uw wensen.',
      },
      {
        question: 'Kan ik de frequentie van de schoonmaak aanpassen?',
        answer: 'Ja, u kunt op elk moment de frequentie verhogen of verlagen. Of u nu dagelijks, wekelijks of maandelijks schoonmaak nodig heeft, wij zijn flexibel en passen de planning aan op uw behoeften zonder extra kosten.',
      },
      {
        question: 'Werken jullie met een vaste schoonmaker voor ons kantoor?',
        answer: 'Ja, wij koppelen een vast team aan uw kantoor. Zo kent de schoonmaker uw pand, uw voorkeuren en eventuele aandachtspunten. Dit zorgt voor een consistent resultaat en vertrouwde gezichten in uw werkomgeving.',
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
      { title: 'Dieptereiniging', description: 'Van bouwstof tot de laatste details \u2014 wij maken uw woning of pand volledig schoon en klaar voor oplevering.' },
      { title: 'Snelle oplevering', description: 'Wij werken snel en effici\u00ebnt zodat u op tijd kunt opleveren. Ook last-minute aanvragen zijn mogelijk.' },
      { title: 'Inclusief ramen', description: 'Ramen, kozijnen, dorpels en glaswerk worden streeploos gereinigd. Binnen \u00e9n buiten als dat gewenst is.' },
      { title: 'Na verbouwing', description: 'Cement, stof en verfspetters? Geen probleem. Wij hebben de ervaring en middelen om alles vlekkeloos te verwijderen.' },
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
        answer: 'Het beste moment is na afronding van alle bouw- of verbouwingswerkzaamheden en v\u00f3\u00f3r de inspectie of sleuteloverdracht. Wij raden aan om minimaal twee werkdagen van tevoren te boeken, maar ook last-minute aanvragen zijn vaak mogelijk.',
      },
      {
        question: 'Wat is het verschil tussen een opleveringsschoonmaak en een gewone schoonmaak?',
        answer: 'Een opleveringsschoonmaak is veel grondiger dan een reguliere schoonmaak. Wij verwijderen bouwstof, cementsluier, verfspetters en lijmresten die bij een normale schoonmaak niet aan bod komen. Elk detail wordt gecontroleerd zodat het pand er als nieuw uitziet.',
      },
      {
        question: 'Hoe lang duurt een opleveringsschoonmaak?',
        answer: 'De duur hangt af van de grootte van het pand en de mate van vervuiling. Een gemiddeld appartement is binnen 4 tot 6 uur klaar. Grotere panden of zeer vervuilde ruimtes kunnen langer duren. Wij geven van tevoren een indicatie.',
      },
      {
        question: 'Kan ik een schoonmaak na verbouwing combineren met de oplevering?',
        answer: 'Ja, dat kan. Wij bieden een compleet pakket aan waarin zowel het verwijderen van bouwstof als de eindreiniging voor oplevering is inbegrepen. Zo heeft u \u00e9\u00e9n aanspreekpunt en bespaart u tijd en kosten.',
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
      { title: 'HACCP-bewust', description: 'Wij werken volgens HACCP-richtlijnen en gebruiken voedselveilige schoonmaakmiddelen. Veiligheid staat voorop.' },
      { title: 'Dagelijks beschikbaar', description: 'Ook in het weekend en op feestdagen. Wij stemmen onze planning af op uw openingstijden.' },
      { title: 'Keuken specialist', description: 'Van afzuigkappen tot RVS werkbladen \u2014 wij reinigen professionele keukens tot op het hoogste niveau.' },
      { title: 'Hygi\u00ebne garantie', description: 'Wij garanderen een hygi\u00ebnische omgeving die voldoet aan alle voedselveiligheidsnormen.' },
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
        answer: 'Ja, al onze horecaschoonmakers zijn getraind in HACCP-richtlijnen. Wij gebruiken uitsluitend voedselveilige schoonmaakmiddelen en volgen strikte protocollen voor het reinigen van keukens, werkbladen en voedselbereidingsruimtes.',
      },
      {
        question: 'Kunnen jullie ook buiten openingstijden schoonmaken?',
        answer: 'Absoluut. Wij stemmen onze werkzaamheden volledig af op uw openingstijden. Of uw zaak nu om middernacht sluit of vroeg in de ochtend opent, wij zorgen dat alles schoon is voordat de eerste gast binnenkomt.',
      },
      {
        question: 'Reinigen jullie ook de afzuiginstallatie?',
        answer: 'Ja, wij verzorgen de grondige reiniging van afzuigkappen, filters en kanalen. Dit is essentieel voor brandveiligheid en luchtkwaliteit in uw keuken. Wij adviseren dit minimaal twee keer per jaar te laten doen.',
      },
      {
        question: 'Wat kost horecaschoonmaak?',
        answer: 'De kosten zijn afhankelijk van de grootte van uw horecagelegenheid, het type keuken en de gewenste frequentie. Wij bieden altijd een vrijblijvende offerte op maat. Neem contact op voor een persoonlijk voorstel.',
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
      { title: 'Snelle wisselschoonmaak', description: 'Wij reinigen uw woning tussen twee boekingen in \u2014 ook als check-in en check-out op dezelfde dag vallen.' },
      { title: 'Linnengoed service', description: 'Beddengoed en handdoeken wassen, drogen en opmaken inclusief. Uw gasten komen aan in een frisse omgeving.' },
      { title: 'Eindcontrole', description: 'Na elke schoonmaak voeren wij een grondige eindcontrole uit. Zo weet u zeker dat alles perfect is.' },
      { title: 'Flexibele beschikbaarheid', description: 'Wij zijn beschikbaar in het weekend en op feestdagen. Uw verhuurkalender bepaalt onze planning.' },
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
        answer: 'Wij zijn gespecialiseerd in snelle wisselschoonmaak. Een standaard vakantiewoning is binnen 2 tot 3 uur volledig schoon en klaar voor de volgende gasten. Ook als check-out en check-in op dezelfde dag vallen, regelen wij het.',
      },
      {
        question: 'Verzorgen jullie ook het linnengoed?',
        answer: 'Ja, wij bieden een complete linnengoed service aan. Beddengoed en handdoeken worden gewassen, gedroogd en netjes opgemaakt. Uw gasten worden ontvangen in een frisse, hotelachtige omgeving zonder dat u er omkijken naar heeft.',
      },
      {
        question: 'Zijn jullie ook beschikbaar in het weekend en op feestdagen?',
        answer: 'Ja, wij zijn 7 dagen per week beschikbaar, inclusief feestdagen en in het hoogseizoen. Uw verhuurkalender bepaalt onze planning, niet andersom. Zo mist u nooit een boeking door gebrek aan schoonmaak.',
      },
      {
        question: 'Kunnen jullie meerdere vakantiewoningen tegelijk schoonmaken?',
        answer: 'Ja, wij hebben voldoende capaciteit om meerdere woningen op dezelfde dag te schoonmaken. Ideaal voor eigenaren van meerdere verhuurobjecten of beheerders van vakantieparken. Wij stemmen de planning af op uw boekingsschema.',
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
      { title: 'Op maat gemaakt', description: 'Elk huishouden is anders. Wij stemmen onze werkzaamheden af op uw specifieke wensen en behoeften.' },
      { title: 'Vast contactpersoon', description: 'U krijgt altijd dezelfde schoonmaker. Vertrouwd, betrouwbaar en bekend met uw woning.' },
      { title: 'Eigen sleutelservice', description: 'Niet thuis? Geen probleem. Wij bewaren uw sleutel veilig en maken schoon wanneer het u uitkomt.' },
      { title: 'Milieuvriendelijk', description: 'Wij gebruiken groene schoonmaakmiddelen die veilig zijn voor uw gezin en huisdieren.' },
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
        answer: 'Ja, wij koppelen een vaste schoonmaker aan uw woning. Diegene leert uw huis kennen, weet wat uw voorkeuren zijn en waar extra aandacht nodig is. Bij ziekte of vakantie zorgen wij voor een geschikte vervanger die vooraf ge\u00efnstrueerd wordt.',
      },
      {
        question: 'Moet ik zelf schoonmaakmiddelen in huis hebben?',
        answer: 'Nee, dat is niet nodig. Onze schoonmakers nemen hun eigen professionele en milieuvriendelijke middelen en materialen mee. Als u specifieke producten wilt laten gebruiken, is dat uiteraard ook mogelijk.',
      },
      {
        question: 'Hoe werkt de sleutelservice?',
        answer: 'U vertrouwt uw sleutel toe aan ons en wij bewaren deze veilig op een beveiligde locatie. Onze schoonmakers komen op het afgesproken moment en u hoeft niet thuis te zijn. Na de schoonmaak wordt uw woning netjes achtergelaten en afgesloten.',
      },
      {
        question: 'Kan ik de schoonmaak tussentijds pauzeren of wijzigen?',
        answer: 'Ja, u kunt de schoonmaak op elk moment pauzeren, wijzigen of stopzetten. Wij hanteren geen opzegtermijn. Bent u op vakantie of wilt u een keer overslaan? Geen probleem, laat het ons gewoon weten.',
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
      { title: 'Trappenhuizen & hallen', description: 'Wij houden trappenhuizen, entrees en gemeenschappelijke gangen schoon en representatief voor bewoners en bezoekers.' },
      { title: 'Periodiek of wekelijks', description: 'Kies de frequentie die past bij uw VvE. Van wekelijks tot maandelijks \u2014 wij zijn flexibel.' },
      { title: 'Glaswerk & buitenzijde', description: 'Ramen, deuren en kozijnen in gemeenschappelijke ruimtes worden streeploos en grondig gereinigd.' },
      { title: 'Vaste prijsafspraak', description: 'Transparante tarieven zonder verrassingen. Wij maken duidelijke afspraken die passen bij het VvE-budget.' },
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
        answer: 'Wij overleggen met het VvE-bestuur of de beheerder over de gewenste werkzaamheden, frequentie en tijdstippen. Na een vrijblijvende offerte starten wij met een proefperiode. De facturatie gaat rechtstreeks naar de VvE.',
      },
      {
        question: 'Hoe vaak moeten gemeenschappelijke ruimtes worden schoongemaakt?',
        answer: 'Dit hangt af van het aantal bewoners en het gebruik van de ruimtes. Voor de meeste VvE\u2019s adviseren wij wekelijkse of tweewekelijkse schoonmaak. Bij grotere complexen of veel loopverkeer kan dagelijkse schoonmaak raadzaam zijn.',
      },
      {
        question: 'Kunnen jullie ook de buitenruimtes schoonmaken?',
        answer: 'Ja, wij verzorgen ook de reiniging van galerijen, entreegebieden, parkeergarages en buitentrappen. Dit draagt bij aan een nette uitstraling en voorkomt gladheid door vuil en algengroei.',
      },
      {
        question: 'Wat als de VvE niet tevreden is over de schoonmaak?',
        answer: 'Wij bieden een tevredenheidsgarantie. Als de schoonmaak niet aan uw verwachtingen voldoet, komen wij kosteloos terug om het te herstellen. Regelmatige kwaliteitscontroles zorgen voor een consistent hoog niveau.',
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
      { title: 'Hygi\u00ebnisch & veilig', description: 'Wij gebruiken kindvriendelijke en hypoallergene schoonmaakmiddelen die veilig zijn voor leerlingen en personeel.' },
      { title: 'Na schooltijd', description: 'Onze teams werken na de lesuren zodat het onderwijs niet verstoord wordt. Geen overlast, wel resultaat.' },
      { title: 'Sanitair specialist', description: 'Toiletten, wastafels en kleedkamers worden dagelijks grondig gereinigd en gedesinfecteerd.' },
      { title: 'Periodiek & structureel', description: 'Van dagelijkse schoonmaak tot grote beurten in vakanties \u2014 wij bieden een totaalpakket voor scholen.' },
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
        answer: 'Ja, wij gebruiken uitsluitend kindvriendelijke, hypoallergene en milieuvriendelijke schoonmaakmiddelen. Deze zijn vrij van agressieve chemicali\u00ebn en veilig voor leerlingen, personeel en het milieu.',
      },
      {
        question: 'Wanneer wordt de schoonmaak uitgevoerd?',
        answer: 'Onze teams werken na de lesuren, zodat het onderwijs niet verstoord wordt. In overleg kan de schoonmaak ook vroeg in de ochtend worden uitgevoerd, zodat de school er fris bij staat wanneer de leerlingen aankomen.',
      },
      {
        question: 'Verzorgen jullie ook de grote schoonmaak in vakanties?',
        answer: 'Ja, wij bieden grote schoonmaakbeurten aan tijdens schoolvakanties. Dit omvat dieptereiniging van alle lokalen, vloerbehandeling, reiniging van meubilair en een grondige beurt van het hele gebouw.',
      },
      {
        question: 'Kunnen jullie ook de sportzaal en kleedkamers schoonmaken?',
        answer: 'Absoluut. Wij hebben ervaring met het reinigen van sportzalen, kleedkamers en douches. Deze ruimtes vereisen extra aandacht voor hygi\u00ebne en wij zorgen voor een grondige desinfectie na elk gebruik.',
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
      { title: 'Infectiepreventie', description: 'Wij werken volgens strikte hygi\u00ebneprotocollen en desinfecteren contactpunten zorgvuldig en structureel.' },
      { title: 'Gecertificeerd personeel', description: 'Onze medewerkers zijn getraind in schoonmaak voor zorginstellingen en kennen de specifieke eisen.' },
      { title: 'Stille werkmethode', description: 'Wij werken discreet en stil zodat bewoners en pati\u00ebnten niet gestoord worden in hun rust.' },
      { title: 'Flexibele planning', description: 'Wij stemmen onze werkzaamheden af op de dagelijkse routines van de instelling \u2014 7 dagen per week.' },
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
        answer: 'Ja, onze medewerkers zijn speciaal getraind in hygi\u00ebneprotocollen voor de zorgsector. Wij werken met desinfecterende middelen die voldoen aan de eisen van de RIVM en hanteren strikte procedures voor infectiepreventie.',
      },
      {
        question: 'Hoe gaan jullie om met de privacy van bewoners?',
        answer: 'Privacy en discretie staan bij ons voorop. Onze medewerkers zijn getraind in het respectvol omgaan met bewoners en pati\u00ebnten. Wij kloppen altijd aan, werken stil en verlaten de ruimte netjes zonder persoonlijke bezittingen aan te raken.',
      },
      {
        question: 'Kunnen jullie schoonmaken zonder de dagelijkse routines te verstoren?',
        answer: 'Ja, wij stemmen onze werkzaamheden af op de dagplanning van de instelling. Of het nu gaat om maaltijden, therapiesessies of rusttijden, wij passen ons aan zodat bewoners en personeel zo min mogelijk worden gestoord.',
      },
      {
        question: 'Welke desinfectiemiddelen gebruiken jullie?',
        answer: 'Wij gebruiken professionele desinfectiemiddelen die effectief zijn tegen bacteri\u00ebn, virussen en schimmels. Deze middelen voldoen aan alle geldende normen voor zorginstellingen en zijn veilig voor bewoners en personeel.',
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
      { title: 'Vast schema', description: 'Wekelijks, tweewekelijks of maandelijks \u2014 wij komen wanneer het u uitkomt, op vaste dagen en tijden.' },
      { title: 'Dezelfde schoonmaker', description: 'U krijgt een vaste medewerker die uw woning of pand kent en weet wat er verwacht wordt.' },
      { title: 'Geen contractverplichting', description: 'Flexibel opzegbaar. Wij geloven in kwaliteit, niet in kleine lettertjes.' },
      { title: 'Inclusief materialen', description: 'Wij nemen onze eigen professionele middelen en materialen mee. U hoeft niets te regelen.' },
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
        answer: 'Dit hangt af van uw situatie. Voor de meeste huishoudens adviseren wij wekelijkse of tweewekelijkse schoonmaak. Kantoren en bedrijfspanden hebben vaak dagelijkse of wekelijkse schoonmaak nodig. Wij adviseren u graag over de beste frequentie.',
      },
      {
        question: 'Kan ik de frequentie tussentijds aanpassen?',
        answer: 'Ja, u kunt op elk moment de frequentie verhogen of verlagen. Heeft u bijvoorbeeld gasten die komen logeren en wilt u die week een extra schoonmaak? Geen probleem, wij plannen het flexibel in.',
      },
      {
        question: 'Wat als ik een keer wil overslaan?',
        answer: 'Dat is geen probleem. Laat ons minimaal 24 uur van tevoren weten dat u een beurt wilt overslaan en wij passen de planning aan. Er worden geen kosten in rekening gebracht voor tijdig geannuleerde afspraken.',
      },
      {
        question: 'Nemen jullie eigen schoonmaakmiddelen mee?',
        answer: 'Ja, onze schoonmakers nemen alle benodigde professionele middelen en materialen mee. U hoeft niets in huis te halen. Wij gebruiken milieuvriendelijke producten die effectief en veilig zijn voor uw woning.',
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

export function generateIntroText(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const intros: Record<Category, string> = {
    general: `Op zoek naar een schoonmaakbedrijf in ${location.name}? Blink Schoonmaak 010 biedt professionele schoonmaak voor particulieren en bedrijven. Eenmalig of structureel \u2014 wij regelen het.`,
    kantoor: `Blink Schoonmaak 010 verzorgt kantoorschoonmaak in ${location.name}, afgestemd op uw planning. Wij werken buiten kantoortijden zodat uw team elke ochtend fris kan starten.`,
    oplevering: `Na een verbouwing of bij oplevering zorgt Blink Schoonmaak 010 in ${location.name} voor een stralend schoon resultaat. Van bouwstof tot ramen \u2014 wij maken het volledig in orde.`,
    horeca: `Blink Schoonmaak 010 biedt horecaschoonmaak in ${location.name} volgens HACCP-richtlijnen. Keukens, gastenruimtes en sanitair \u2014 hygi\u00ebnisch en op uw openingstijden afgestemd.`,
    recreatie: `Blink Schoonmaak 010 verzorgt de schoonmaak van vakantiewoningen in ${location.name}. Snelle wisselschoonmaak tussen gasten, inclusief linnengoed en eindcontrole.`,
    particulier: `Een schoon huis zonder zorgen? Blink Schoonmaak 010 biedt particuliere schoonmaak in ${location.name}. Vaste schoonmaker, op maat en flexibel inplanbaar.`,
    vve: `Blink Schoonmaak 010 verzorgt VvE schoonmaak in ${location.name}. Trappenhuizen, entrees en gemeenschappelijke ruimtes \u2014 representatief voor bewoners en bezoekers.`,
    scholen: `Professionele schoonmaak voor scholen in ${location.name}. Blink Schoonmaak 010 werkt met kindvriendelijke middelen en komt na schooltijd \u2014 geen overlast, wel resultaat.`,
    zorg: `Blink Schoonmaak 010 biedt schoonmaak voor zorginstellingen in ${location.name}. Getraind personeel, strikte hygi\u00ebneprotocollen en een stille werkmethode.`,
    periodiek: `Structurele schoonmaak in ${location.name} op een vast schema. Vaste schoonmaker, geen contractverplichting en alle materialen inbegrepen.`,
  };
  return intros[cat];
}

export function generateExtraText(keyword: Keyword, location: Location): string {
  const cat = keyword.category;
  const extras: Record<Category, string> = {
    general: `Onze schoonmakers zijn in dienst bij ons \u2014 niet via een uitzendbureau. Zo garanderen wij de kwaliteit bij elke klant in ${location.name}. Geen verborgen kosten, altijd een heldere offerte vooraf.`,
    kantoor: `Van kleine bedrijfsruimtes tot grote kantoorpanden in ${location.name} \u2014 wij luisteren naar uw wensen en stellen een plan op dat past bij uw bedrijf. Getraind personeel, discreet en betrouwbaar.`,
    oplevering: `Nieuwbouw, renovatie of verbouwing in ${location.name}? Wij weten precies welke aandachtspunten belangrijk zijn. Van bouwstof tot het polijsten van kranen \u2014 wij laten niets aan het toeval over.`,
    horeca: `Blink Schoonmaak 010 begrijpt de dynamiek van de horeca in ${location.name}: onregelmatige tijden, hoge druk en strenge eisen. Wij passen ons aan op uw openingstijden en bedrijfsvoering.`,
    recreatie: `Blink Schoonmaak 010 werkt samen met verhuurders in heel Zuid-Holland en Zeeland. Of u nu \u00e9\u00e9n woning verhuurt in ${location.name} of een heel park beheert \u2014 wij schalen op naar uw behoefte.`,
    particulier: `Onze schoonmakers in ${location.name} zijn grondig, betrouwbaar en discreet. U krijgt een vaste medewerker die uw woning leert kennen en weet waar extra aandacht nodig is.`,
    vve: `Blink Schoonmaak 010 ondersteunt VvE\u2019s in ${location.name} met transparante tarieven zonder verrassingen. Wij denken mee over de optimale frequentie en het meest effici\u00ebnte schoonmaakplan.`,
    scholen: `Blink Schoonmaak 010 heeft ervaring met basisscholen en middelbare scholen in ${location.name}. Onze teams werken na schooltijd en tijdens vakanties, zodat het onderwijs niet wordt verstoord.`,
    zorg: `Blink Schoonmaak 010 is gespecialiseerd in zorginstellingen in ${location.name}. Onze medewerkers respecteren de privacy en rust van bewoners en zijn 7 dagen per week beschikbaar.`,
    periodiek: `Onze vaste schoonmaker kent uw ruimte in ${location.name} en weet precies waar aandacht nodig is. U kiest zelf de frequentie \u2014 geen verplichtingen, geen kleine lettertjes.`,
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
