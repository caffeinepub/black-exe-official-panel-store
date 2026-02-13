export interface PanelPrice {
  duration: string;
  price: number;
}

export interface Panel {
  id: string;
  name: string;
  prices: PanelPrice[];
}

export const PANELS: Panel[] = [
  {
    id: 'basic',
    name: 'BASIC',
    prices: [
      { duration: '1 DAY', price: 80 },
      { duration: '2 DAYS', price: 150 },
      { duration: '7 DAYS', price: 300 },
      { duration: '1 MONTH', price: 700 },
      { duration: 'PERMANENT', price: 2000 }
    ]
  },
  {
    id: 'brutal',
    name: 'BRUTAL',
    prices: [
      { duration: '1 DAY', price: 90 },
      { duration: '2 DAYS', price: 170 },
      { duration: '7 DAYS', price: 330 },
      { duration: '1 MONTH', price: 770 },
      { duration: 'PERMANENT', price: 2200 }
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    prices: [
      { duration: '1 DAY', price: 100 },
      { duration: '2 DAYS', price: 190 },
      { duration: '7 DAYS', price: 360 },
      { duration: '1 MONTH', price: 850 },
      { duration: 'PERMANENT', price: 2400 }
    ]
  },
  {
    id: 'aimkill',
    name: 'AIMKILL',
    prices: [
      { duration: '1 DAY', price: 110 },
      { duration: '2 DAYS', price: 210 },
      { duration: '7 DAYS', price: 400 },
      { duration: '1 MONTH', price: 930 },
      { duration: 'PERMANENT', price: 2600 }
    ]
  },
  {
    id: 'silent-aim',
    name: 'SILENT AIM',
    prices: [
      { duration: '1 DAY', price: 120 },
      { duration: '2 DAYS', price: 230 },
      { duration: '7 DAYS', price: 450 },
      { duration: '1 MONTH', price: 1000 },
      { duration: 'PERMANENT', price: 2800 }
    ]
  },
  {
    id: 'aimbot-visible',
    name: 'AIMBOT VISIBLE',
    prices: [
      { duration: '1 DAY', price: 130 },
      { duration: '2 DAYS', price: 250 },
      { duration: '7 DAYS', price: 500 },
      { duration: '1 MONTH', price: 1100 },
      { duration: 'PERMANENT', price: 3000 }
    ]
  },
  {
    id: 'internal',
    name: 'INTERNAL',
    prices: [
      { duration: '1 DAY', price: 140 },
      { duration: '2 DAYS', price: 270 },
      { duration: '7 DAYS', price: 550 },
      { duration: '1 MONTH', price: 1200 },
      { duration: 'PERMANENT', price: 3200 }
    ]
  },
  {
    id: 'uid-bypass',
    name: 'UID BYPASS',
    prices: [
      { duration: '1 DAY', price: 150 },
      { duration: '2 DAYS', price: 300 },
      { duration: '7 DAYS', price: 600 },
      { duration: '1 MONTH', price: 1300 },
      { duration: 'PERMANENT', price: 3500 }
    ]
  },
  {
    id: 'streamer',
    name: 'STREAMER',
    prices: [
      { duration: '1 DAY', price: 160 },
      { duration: '2 DAYS', price: 330 },
      { duration: '7 DAYS', price: 700 },
      { duration: '1 MONTH', price: 1500 },
      { duration: 'PERMANENT', price: 3800 }
    ]
  },
  {
    id: 'silent-aim-cover',
    name: 'SILENT AIM COVER',
    prices: [
      { duration: '1 DAY', price: 180 },
      { duration: '2 DAYS', price: 350 },
      { duration: '7 DAYS', price: 800 },
      { duration: '1 MONTH', price: 1700 },
      { duration: 'PERMANENT', price: 4000 }
    ]
  }
];
