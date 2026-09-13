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
