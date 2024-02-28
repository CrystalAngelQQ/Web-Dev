export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  prod_link: string;
  rating: number;
  likes: number;
}

export class Category {
  name: string;
  prod_list: Product[];

  constructor(name: string, prod_item: Product[]) {
    this.name = name;
    this.prod_list = prod_item;
  }
}

export const categories: Category[] = [new Category("mouse", [
  {
    id: 1,
    name: 'Мышь Logitech Logitech G Pro X Superlight Red Limited Edition красный',
    price: 79999,
    description: 'Игровая мышь беспроводная Logitech G Pro X Superlight, Red',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h27/84940388204574.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/logitech-logitech-g-pro-x-superlight-red-limited-edition-krasnyi-115964235/?c=353220100',
    rating: 7,
    likes : 0
  },
  {
    id: 2,
    name: 'Logitech G Pro X Superlight 2 черный',
    price: 99999,
    description: 'Мышь Logitech Logitech G Pro X Superlight 2 ',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=353220100',
    rating: 8,
    likes : 0
  },
  {
    id: 3,
    name: 'Logitech G Pro X Superlight 2 розовый',
    price: 90000,
    description: 'Мышь Logitech Logitech G Pro X Superlight 2 ',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h6b/84212513603614.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-rozovyi-113957944/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 5,
    likes : 0
  },
  {
    id: 4,
    name: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    price: 65000,
    description: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hb4/69586377375774.jpg?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/razer-deathadder-v3-pro-rz01-04630100-r3u1-chernyi-109149097/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10,
    likes : 0
  },
  {
    id: 5,
    name: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    price: 65000,
    description: 'Мышь Razer DeathAdder V3 Pro RZ01-04630100-R3U1 черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hb4/69586377375774.jpg?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/razer-deathadder-v3-pro-rz01-04630100-r3u1-chernyi-109149097/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10,
    likes : 0
  }
]),
new Category("Notebooks", [
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Pro 16 2023 Z1AF001AF темно-серый',
    price: 23000000,
    description: 'Ноутбук Apple MacBook Pro 16 2023 Z1AF001AF темно-серый',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h32/85013694644254.jpg?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-z1af001af-temno-seryi-116216398/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 5,
    likes : 0
  },
  {
    id: 7,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    price: 24000000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h4b/85260736266270.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag003urk-chernyi-116932168/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10,
    likes : 0
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    price: 24500000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG003URK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h4b/85260736266270.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag003urk-chernyi-116932168/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10,
    likes : 0
  },
  {
    id: 9,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    price: 3450000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h56/85156619878430.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag001jrk-chernyi-116580486/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10,
    likes : 0
  },
  {
    id: 10,
    name: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    price: 45600000,
    description: 'Ноутбук Lenovo Legion 9 16IRX8 83AG001JRK черный',
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h56/85156619878430.png?format=gallery-medium',
    prod_link: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag001jrk-chernyi-116580486/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
    rating: 10,
    likes : 0
  }
]),new Category("Phones", [
    {
      id: 11,
      name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
      price: 629185,
      description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 12,
      name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
      price: 629185,
      description: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 13,
      name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
      price: 829185,
      description: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 14,
      name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
      price: 629185,
      description: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium',
      prod_link: 'ahttps://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 15,
      name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
      price: 629185,
      description: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    }
  ]),new Category("Pc", [
    {
      id: 16,
      name: 'Системный блок REALTECH 37455530 белый',
      price: 3000000,
      description: 'Системный блок REALTECH 37455530 белый',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h48/84690345918494.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/realtech-37455530-belyi-115260839/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 17,
      name: 'Системный блок REALTECH 37455530 белый',
      price: 5100000,
      description: 'Системный блок REALTECH 37455530 белый',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h48/84690345918494.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/realtech-37455530-belyi-115260839/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 18,
      name: 'Системный блок IT-Factory Pro MAX 4090 черный',
      price: 3000000,
      description: 'Системный блок IT-Factory Pro MAX 4090 черный',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h66/84977162256414.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/it-factory-pro-max-4090-chernyi-116095275/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 19,
      name: 'Системный блок Silk Way Treasures Predator X3 черный',
      price: 3000000,
      description: 'Системный блок Silk Way Treasures Predator X3 черный',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/h4b/84662681010206.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/silk-way-treasures-predator-x3-chernyi-114174511/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    },
    {
      id: 20,
      name: 'Системный блок Silk Way Treasures Predator X3 черный',
      price: 3000000,
      description: 'Системный блок Silk Way Treasures Predator X3 черный',
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/h4b/84662681010206.jpg?format=gallery-medium',
      prod_link: 'https://kaspi.kz/shop/p/silk-way-treasures-predator-x3-chernyi-114174511/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMIzMPy-8vQhAMV5VSRBR2E8QkXEAAYASAAEgLAZvD_BwE',
      rating: 10,
      likes : 0
    }


  ])]



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
