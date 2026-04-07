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

export interface CategoryContent {
  label: string;
  heading: string;
  serviceLink: string;
  serviceLinkText: string;
  heroImage: string;
  usps: Array<{ title: string; description: string }>;
  timelineStep3: string;
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
    general: `Bent u op zoek naar een betrouwbaar schoonmaakbedrijf in ${location.name}? Blink Schoonmaak 010 biedt professionele schoonmaakdiensten voor zowel particulieren als bedrijven in ${location.name} en omgeving. Onze ervaren vakmensen zorgen voor een stralend schoon resultaat, afgestemd op uw specifieke wensen. Of het nu gaat om een eenmalige schoonmaakbeurt of structureel onderhoud \u2014 wij staan voor u klaar.`,
    kantoor: `Een schone werkplek is essentieel voor de productiviteit en het welzijn van uw medewerkers. Blink Schoonmaak 010 verzorgt professionele kantoorschoonmaak in ${location.name}, volledig afgestemd op uw wensen en planning. Wij werken buiten kantoortijden zodat uw team elke ochtend in een frisse omgeving kan starten.`,
    oplevering: `Bij een oplevering of na een verbouwing is een grondige schoonmaak onmisbaar. Blink Schoonmaak 010 verzorgt professionele opleveringsschoonmaak in ${location.name}. Van bouwstof en cementsluier tot ramen en sanitair \u2014 wij maken uw pand volledig schoon en klaar voor gebruik of overdracht.`,
    horeca: `Hygi\u00ebne is in de horeca geen luxe, maar een absolute noodzaak. Blink Schoonmaak 010 biedt gespecialiseerde horecaschoonmaak in ${location.name}. Wij reinigen keukens, gastenruimtes en sanitair volgens HACCP-richtlijnen, zodat u zich kunt richten op uw gasten.`,
    recreatie: `Een schone vakantiewoning zorgt voor tevreden gasten en positieve reviews. Blink Schoonmaak 010 verzorgt de schoonmaak van recreatiewoningen en vakantiehuizen in ${location.name}. Wij zorgen voor een snelle wisselschoonmaak tussen gasten, inclusief linnengoed en een grondige eindcontrole.`,
    particulier: `Een schoon huis zonder er zelf tijd aan te besteden? Blink Schoonmaak 010 biedt particuliere schoonmaak in ${location.name}, volledig op maat. U krijgt een vaste schoonmaker die uw woning kent en precies weet wat er nodig is.`,
    vve: `Schone gemeenschappelijke ruimtes dragen bij aan een prettig woonklimaat en de waarde van uw pand. Blink Schoonmaak 010 verzorgt VvE schoonmaak in ${location.name}. Trappenhuizen, entrees, gangen en glaswerk \u2014 wij houden het representatief voor bewoners en bezoekers.`,
    scholen: `Een schone school is belangrijk voor de gezondheid en concentratie van leerlingen. Blink Schoonmaak 010 biedt professionele schoonmaak voor scholen in ${location.name}. Wij werken met kindvriendelijke middelen en komen na schooltijd, zodat het onderwijs niet verstoord wordt.`,
    zorg: `In zorginstellingen is hygi\u00ebne van levensbelang. Blink Schoonmaak 010 biedt gespecialiseerde schoonmaak voor zorginstellingen in ${location.name}. Onze medewerkers zijn getraind in infectiepreventie en werken volgens strikte hygi\u00ebneprotocollen.`,
    periodiek: `Met periodieke schoonmaak hoeft u zich nooit meer zorgen te maken over een schone woning of kantoor. Blink Schoonmaak 010 biedt structurele schoonmaak in ${location.name} op een vast schema. U krijgt een vaste schoonmaker, en u bepaalt zelf de frequentie.`,
  };
  return intros[cat];
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
  // Deterministic shuffle based on keyword+location
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
