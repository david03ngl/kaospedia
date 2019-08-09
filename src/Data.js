// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Kaos Eiffel Tower - Paris",
    category: "Kaos Travel",
    price: 6,
    description:
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: true,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/498/89498_m.jpg",
    ]
  },
  {
    id: 2,
    name: "Kaos Indonesia Merdeka 4",
    category: "Kaos Indonesia",
    price: 6,
    description:
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/225/3705225_m.jpg",
    ]
  },
  {
    id: 3,
    name: "Kaos Indonesia Merdeka 3",
    category: "Kaos Indonesia",
    price: 6,
    description:
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/153/3705153_l.jpg",
    ]
  },
  {
    id: 4,
    name: "Kaos Spring Valey - Huskies",
    category: "Kaos Binatang",
    price: 7,
    description:
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: true,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/547/3746547_l.jpg"
    ]
  },
  {
    id: 5,
    name: "Kaos Sia - Chandelier",
    category: "Kaos Musik",
    price: 6,
    description:
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: true,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/725/3319725_l.jpg",
    ]
  },

  {
    id: 7,
    name: "Kaos Indonesia Merdeka 2",
    category: "Kaos Indonesia",
    price: 6,
    description: 
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/958/3704958_l.jpg"
    ]
  },
  {
    id: 8,
    name: "Kaos Thien Mu Pagoda 2 - Vietnam",
    category: "Kaos Travel",
    price: 6,
    description: 
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/548/3535548_l.jpg"
    ]
  },
  {
    id: 9,
    name: "Kaos Kata-kata - Music is a Good Idea",
    category: "Kaos Musik",
    price: 6,
    description: 
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/022/164022_l.jpg"
    ]
  },
  {
    id: 10,
    name: "Kaos My Trip My Adventure",
    category: "Kaos Indonesia",
    price: 6,
    description: 
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/780/3420780_l.jpg"
    ]
  },
  {
    id: 11,
    name: "Kaos Headphones & Iphone",
    category: "Kaos Musik",
    price: 6,
    description:
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/880/163880_l.jpg"
    ]
  },
  {
    id: 12,
    name: "Kaos Indonesia is Awesome - Grunge",
    category: "Kaos Indonesia",
    price: 6,
    description:
      "Kaos O-Neck Unisex, Cotton Combed 24s, kualitas premium standar Distro Bandung." +
      "Gambar disablon menggunakan teknologi Direct To Garment (DTG) terbaru.",
    popular: false,
    imageUrls: [
      "https://www.satubaju.com/img/editor/img_iscums/607/1163607_l.jpg",
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "Kaos Travel",
  },
  {
    name: "Kaos Indonesia",
  },
  {
    name: "Kaos Binatang",
  },
  {
    name: "Kaos Musik",
  }
];

// Generate data for rendering menu on the left.
const dataForRenderingMenu = ((categories) => {
  let menuData = [
    { type: "item", name: "Kaos Populer", url: "/", id: 0},
    { type: "title", name: "Kategori Kaos", id: 1 }
  ];

  let initialLength = menuData.length;

  menuData = menuData.concat(
    categories.map((x, i) => {
      return {
        name: x.name,
        url: "/search/?category=" + x.name,
        id: initialLength + i,
        type: "item",
        parentID: 1,
        icon: x.icon
      };
    })
  );

  return menuData;
})(categories)

export { sampleProducts, categories, dataForRenderingMenu };
