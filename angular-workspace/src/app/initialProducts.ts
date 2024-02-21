export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  prod_link: string;
  rating: number;
}

export const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Мышь Logitech Logitech G Pro X Superlight Red Limited Edition красный',
    price: 79999,
    description: 'Игровая мышь беспроводная Logitech G Pro X Superlight, Red',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h27/84940388204574.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/logitech-logitech-g-pro-x-superlight-red-limited-edition-krasnyi-115964235/?c=353220100',
    rating: 7
  },
  {
    id: 2,
    name: 'Logitech G Pro X Superlight 2 черный',
    price: 99999,
    description: 'Мышь Logitech Logitech G Pro X Superlight 2 ',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=353220100',
    rating: 8
  },
  {
    id: 3,
    name: 'Logitech G Pro X Superlight 2 розовый',
    price: 90000,
    description: 'Мышь Logitech Logitech G Pro X Superlight 2 ',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h6b/84212513603614.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-rozovyi-113957944/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 5
  },
  {
    id: 4,
    name: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    price: 65000,
    description: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hb4/69586377375774.jpg?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/razer-deathadder-v3-pro-rz01-04630100-r3u1-chernyi-109149097/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10
  },
  {
    id: 5,
    name: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    price: 65000,
    description: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hb4/69586377375774.jpg?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/razer-deathadder-v3-pro-rz01-04630100-r3u1-chernyi-109149097/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Pro 16 2023 Z1AF001AF темно-серый',
    price: 23000000,
    description: 'Ноутбук Apple MacBook Pro 16 2023 Z1AF001AF темно-серый',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h32/85013694644254.jpg?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-z1af001af-temno-seryi-116216398/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 5
  },
  {
    id: 7,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    price: 24000000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h4b/85260736266270.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag003urk-chernyi-116932168/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    price: 24500000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h4b/85260736266270.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag003urk-chernyi-116932168/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10
  },
  {
    id: 9,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    price: 3450000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h56/85156619878430.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag001jrk-chernyi-116580486/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10
  },
  {
    id: 10,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    price: 45600000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h56/85156619878430.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag001jrk-chernyi-116580486/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10
  }
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
