export type Edition = {
  slug: string;
  index: string;
  title: string;
  detailTitle: string[];
  type: string;
  cover: string;
  images: string[];
  paragraphs: string[];
  metadata: string[];
};

export const editions: Edition[] = [
  {
    slug: 'summer-24',
    index: '01',
    title: 'Summer 24',
    detailTitle: ['"Summer 24", Georges Daou'],
    type: 'Zine photographique',
    cover: '/assets/editions/summer-24/cover.jpg',
    images: [
      '/assets/editions/summer-24/cover.jpg',
      '/assets/editions/summer-24/spread-01.webp',
      '/assets/editions/summer-24/spread-02.jpg',
      '/assets/editions/summer-24/spread-03.jpg',
    ],
    paragraphs: [
      'Zine photographique composé d’images et de fragments recueillis par l’artiste autour de la Méditerranée en 2024. Ce recueil se situe entre observation et souvenir.',
      '"La mer, la chaleur et les paysages silencieux deviennent les traces d’un été qui commence déjà à disparaître. Une séquence brève et intime."',
    ],
    metadata: [
      'Paris, Éditions Source Primaire, 2026',
      '24 pages couleur',
      '100 exemplaires signés et numérotés',
    ],
  },
  {
    slug: 'neighbors',
    index: '02',
    title: 'Neighbors',
    detailTitle: ['"Neighbors", Émilie Girault'],
    type: 'Livret d’artiste',
    cover: '/assets/editions/neighbors/cover.jpg',
    images: [
      '/assets/editions/neighbors/cover.jpg',
      '/assets/editions/neighbors/spread-01.jpg',
      '/assets/editions/neighbors/spread-02.jpg',
    ],
    paragraphs: [
      'Ce livret rassemble la série complète des 32 photographies réalisées par l’artiste pendant le confinement du printemps 2020 sous le titre Neighbors.',
      '"Des lieux de vie, éclairés mais dépourvus de vie, aucune présence humaine. Le projet Neighbors recrée un immeuble, mettant en exergue l’isolement de personnes vivant côte à côte, chacun se retrouvant ensemble séparément. Les appartements sont identifiés par des lettres et des chiffres indiquant leur positionnement les uns par rapport aux autres, tout en faisant écho aux positions d’une bataille navale, dans une période qualifiée de guerre. Les décors et les lumières parlent à la place de leurs occupants et laissent libre cours à l’imagination de l’observateur : qui sont-ils ? Que font-ils ? Comment vivent-ils ? Autant de questions qui ramènent chaque individu à sa propre réalité."',
    ],
    metadata: [
      'Paris, Éditions Source Primaire, 2026',
      '40 pages couleur',
      '22 exemplaires signés et numérotés',
    ],
  },
  {
    slug: 'pss01',
    index: '03',
    title: 'Primary Source Sound PSS01',
    detailTitle: ['Primary Source Sound - PSS01', '"The Lost Archives", Daou'],
    type: 'Publication sonore',
    cover: '/assets/editions/pss01/cover.jpg',
    images: [
      '/assets/editions/pss01/cover.jpg',
      '/assets/editions/pss01/spread-01.jpg',
      '/assets/editions/pss01/spread-02.jpg',
      '/assets/editions/pss01/spread-03.jpg',
    ],
    paragraphs: [
      'Primary Source Sound est une collection éditoriale conçue et produite par Source primaire pour le label Primary Source. Chaque volume prolonge une œuvre musicale à travers des photographies, des textes, des conversations et des documents d’archives.',
      'PSS01 ouvre la collection avec "The Lost Archives" de Daou. Cette publication rassemble les personnes, les documents et les souvenirs à l’origine du projet. Pensée comme un prolongement de la musique, elle propose une manière plus lente et plus tactile d’entrer dans son univers.',
    ],
    metadata: [
      'Paris, Éditions Source Primaire, 2026',
      '16 pages couleur',
      '50 exemplaires signés et numérotés',
    ],
  },
];

export function getEdition(slug: string) {
  return editions.find((edition) => edition.slug === slug);
}

export const englishEditions: Edition[] = [
  {
    ...editions[0],
    detailTitle: ['“Summer 24”, Georges Daou'],
    type: 'Photographic zine',
    paragraphs: [
      'A photographic zine composed of images and fragments gathered by the artist around the Mediterranean in 2024. The work sits between observation and memory.',
      '“The sea, the heat and the silent landscapes become traces of a summer that is already beginning to disappear. A brief, intimate sequence.”',
    ],
    metadata: [
      'Paris, Éditions Source Primaire, 2026',
      '24 pages in colour',
      '100 signed and numbered copies',
    ],
  },
  {
    ...editions[1],
    detailTitle: ['“Neighbors”, Émilie Girault'],
    type: 'Artist’s booklet',
    paragraphs: [
      'This booklet brings together the complete series of 32 photographs made by the artist during the spring 2020 lockdown, under the title Neighbors.',
      '“Spaces in which people live, illuminated yet devoid of life; no human presence. The Neighbors project reconstructs an apartment building, highlighting the isolation of people living side by side, together yet separate. The apartments are identified by letters and numbers indicating their positions in relation to one another, while echoing the coordinates of a game of Battleship during a period described in terms of war. The interiors and their lighting speak in place of their occupants and leave the observer free to imagine: who are they? What are they doing? How do they live? Questions that return each individual to their own reality.”',
    ],
    metadata: [
      'Paris, Éditions Source Primaire, 2026',
      '40 pages in colour',
      '22 signed and numbered copies',
    ],
  },
  {
    ...editions[2],
    detailTitle: ['Primary Source Sound - PSS01', '“The Lost Archives”, Daou'],
    type: 'Sound publication',
    paragraphs: [
      'Primary Source Sound is an editorial collection conceived and produced by Source Primaire for the Primary Source label. Each volume extends a musical work through photographs, texts, conversations and archival documents.',
      'PSS01 opens the collection with “The Lost Archives” by Daou. This publication brings together the people, documents and memories behind the project. Conceived as an extension of the music, it offers a slower, more tactile way into its world.',
    ],
    metadata: [
      'Paris, Éditions Source Primaire, 2026',
      '16 pages in colour',
      '50 signed and numbered copies',
    ],
  },
];

export function getEnglishEdition(slug: string) {
  return englishEditions.find((edition) => edition.slug === slug);
}
