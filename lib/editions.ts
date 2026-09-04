export type Edition = {
  slug: string;
  index: string;
  title: string;
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
    type: 'Photography zine',
    cover: '/assets/editions/summer-24/cover.jpg',
    images: [
      '/assets/editions/summer-24/cover.jpg',
      '/assets/editions/summer-24/spread-01.webp',
      '/assets/editions/summer-24/spread-02.jpg',
      '/assets/editions/summer-24/spread-03.jpg',
    ],
    paragraphs: [
      'Summer 24 est un zine photographique de Georges Daou, publié par Source primaire. Composé d’images et de fragments recueillis autour de la Méditerranée en 2024, il se situe entre observation et souvenir.',
      'La mer, la chaleur et les paysages silencieux deviennent les traces d’un été qui commence déjà à disparaître. Une séquence brève et intime, imprimée à 100 exemplaires.',
    ],
    metadata: ['ISBN 978-2-3546187-9-4'],
  },
  {
    slug: 'neighbors',
    index: '02',
    title: 'Neighbors',
    type: 'Photo book',
    cover: '/assets/editions/neighbors/cover.jpg',
    images: [
      '/assets/editions/neighbors/cover.jpg',
      '/assets/editions/neighbors/spread-01.jpg',
      '/assets/editions/neighbors/spread-02.jpg',
    ],
    paragraphs: [
      'Neighbors rassemble une série de 32 photographies réalisées par Émilie Girault pendant le confinement du printemps 2020.',
      'Des lieux de vie, éclairés mais dépourvus de vie, aucune présence humaine. Le projet Neighbors recrée un immeuble, mettant en exergue l’isolement de personnes vivant côte à côte, chacun se retrouvant ensemble séparément. Les appartements sont identifiés par des lettres et des chiffres indiquant leur positionnement les uns par rapport aux autres, tout en faisant écho aux positions d’une bataille navale, dans une période qualifiée de guerre. Les décors et les lumières parlent à la place de leurs occupants et laissent libre cours à l’imagination de l’observateur : qui sont-ils ? Que font-ils ? Comment vivent-ils ? Autant de questions qui ramènent chaque individu à sa propre réalité.',
    ],
    metadata: ['ISBN 491-3-3574186-8-1'],
  },
  {
    slug: 'pss01',
    index: '03',
    title: 'Primary Source Sound PSS01',
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
      'PSS01 ouvre la collection avec The Lost Archives de Daou. Le livre rassemble les personnes, les documents et les souvenirs à l’origine du projet. Pensé comme un prolongement de la musique, il propose une manière plus lente et plus tactile d’entrer dans son univers.',
    ],
    metadata: ['ISBN 675-2-2956189-0-1'],
  },
  {
    slug: 'ce-qui-reste',
    index: '04',
    title: 'Ce qui reste',
    type: 'Exposition photographie',
    cover: '/assets/editions/ce-qui-reste/cover.jpg',
    images: [
      '/assets/editions/ce-qui-reste/cover.jpg',
      '/assets/editions/ce-qui-reste/spread-01.jpg',
      '/assets/editions/ce-qui-reste/spread-02.jpg',
      '/assets/editions/ce-qui-reste/detail-01.jpg',
      '/assets/editions/ce-qui-reste/detail-02.jpg',
      '/assets/editions/ce-qui-reste/detail-03.jpg',
      '/assets/editions/ce-qui-reste/detail-04.jpg',
      '/assets/editions/ce-qui-reste/detail-05.jpg',
      '/assets/editions/ce-qui-reste/detail-06.jpg',
      '/assets/editions/ce-qui-reste/detail-07.jpg',
      '/assets/editions/ce-qui-reste/detail-08.jpg',
    ],
    paragraphs: [
      'Ce qui reste est un projet d’identité visuelle conçu pour une exposition photographique fictive de Léonie Vaurel à la Maison Européenne de la Photographie.',
      'La série observe des présences fragiles : un regard filtré par le verre, une lumière sur un mur, un arbre isolé dans la brume, un intérieur presque désert. Le dépliant à quatre volets se construit comme une séquence, alternant photographies, fragments de planche contact et espaces silencieux.',
      'Une palette pâle de bleus, de gris et de rouges atténués accompagne un système typographique sobre. L’ensemble explore la mémoire comme une matière instable, prise entre apparition, effacement et retour.',
    ],
    metadata: [
      'Projet conceptuel',
      'Direction artistique, identité visuelle et conception éditoriale',
      'Dépliant accordéon, 396 × 210 mm ouvert',
      '2026',
    ],
  },
];

export function getEdition(slug: string) {
  return editions.find((edition) => edition.slug === slug);
}
