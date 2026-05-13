export const albums = [
  {
    title: 'Anari',
    year: '1997',
    label: 'Esan Ozenki',
    tracks: ['Gure Mundura', 'Minaren Funtsa', 'Galderak 1', '(H)erra Kanta', 'Eszeptikoarena', 'Tren Bat Zure Barrura', 'Desnúdame, Desdúdame', 'Galderak 2', 'Hegoekira Begira']
  },
  {
    title: 'Habiak',
    year: '2000',
    label: 'Esan Ozenki',
    tracks: ['Habiak', 'Bihotza Galdu Dut', 'Denbora', 'Geuk Piztutako Suak', 'Aztarnak', 'Zubiak', 'Aztia', 'Zuganako Bideak', 'Amultsu Dator Iluna', 'Ekilibristak', 'Itsas-Erauntsiak']
  },
  {
    title: 'Zebra',
    year: '2005',
    label: 'Metak',
    tracks: ['Aingura Hegodunak', 'Naufragoak', 'Sustraiak', 'Zebra', '(H)egoak', 'Ateak', 'Desertua', 'Txori Beltzak', 'Harresia', 'Gu']
  },
  {
    title: 'Irla Izan',
    year: '2009',
    label: 'Bidehuts',
    tracks: ['Zure Ertza', 'Iceberga', 'Harriak', 'Isla', 'Bidea Eta Denbora', 'Ihia', 'Eskuineko Bihotza', 'Distantzia', 'Zuhaitzena', 'Amua']
  },
  {
    title: 'Bidea eta Denbora',
    year: '2013',
    label: 'Bidehuts',
    tracks: []
  },
  {
    title: 'Zure Aurrekari Penalak',
    year: '2015',
    label: 'Bidehuts',
    tracks: ['Ametsen Eraiste Neurtua', 'Orfidentalak', 'Luizia', 'Arquimedes', 'Oreinak', 'Nola Galdu', 'Hareago', 'Otzanak', 'Armagabetzea']
  },
  {
    title: 'Epilogo bat',
    year: '2016',
    label: 'Bidehuts',
    tracks: ['Intro (Geure Alde)', 'Laugarren Azalberritzea', 'Parentesian Arteak', 'Autodefinitua', 'Piromania']
  },
  {
    title: 'Giza zarata',
    year: '2024',
    label: 'Bidehuts / Bandcamp',
    tracks: ['Troiako Zaldia', 'Ez Nengoen Han', 'Tigrea', 'Kontinente Zaharra', 'Bunkerra I', 'Edertasun Arraroa']
  },
  {
    title: 'TXIKIZIO HAU DENA',
    year: '2025',
    label: 'Bandcamp',
    tracks: []
  }
];

export function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
