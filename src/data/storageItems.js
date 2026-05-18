// src/data/storageItems.js
//
// Only 3 fields matter for the calculator:
//   w, d  → product width & depth in cm (for fit calculation)
//   h     → product height in cm (to check it fits vertically)
//   name  → shown on the result card
//   img   → product photo from your assets folder
//   url   → link to sortix.se so user can buy it

export const storageItems = {

  drawer: [
    {
      id: 1,
      name: '8-Compartment Drawer Organizer',
      w: 27.5, d: 16.5, h: 9.5,
      img: '/src/assets/products/drawer-organizer1.jpg',
      url: 'https://sortix.se/sv/products/forvaringslada-8-fack',
    },
    {
      id: 2,
      name: 'Acrylic Spice Insert',
      w: 43, d: 33.5, h: 4,
      img: '/src/assets/products/spice-insert.jpg',
      url: 'https://sortix.se/sv/products/kryddladeinsats-i-akryl',
    },
    {
      id: 3,
      name: 'Adjustable bamboo cutlery tray',
      w: 43, d: 35, h: 6.5,
      img: '/src/assets/products/bamboo-insert.jpg',
      url: 'https://sortix.se/sv/products/besticklada-justerbar-i-bambu',
    },
  ],

  fridge: [
    {
      id: 4,
      name: 'Transparent Storage Box Small',
      w: 9.5, d: 25.5, h: 7.6,
      img: '/src/assets/products/fridge-box-small.jpg',
      url: 'https://sortix.se/sv/products/forvaringslada-plast',  	
    },
    {
      id: 5,
      name: 'Transparent Storage Stackable Box Set (2 pcs)',
      w: 25.5, d: 12.5, h: 11,   
      img: '/src/assets/products/fridge-stackable-2box.jpg',
      url: 'https://sortix.se/sv/products/forvaringsladeset-2-delar', 
    },
    {
      id: 6,
      name: 'Storage Box with Colander',
      w: 22.5, d: 17.5, h: 10,
      img: '/src/assets/products/colander-box.jpg',
      url: 'https://sortix.se/sv/products/forvaringslada-med-dubbel-durkslag', 
    },
  ],

  pantry: [
    {
      id: 7,
      name: 'Luna Glass Jar 1.3L',
      w: 10, d: 10, h: 15.5,
      img: '/src/assets/products/luna-jar.jpg',
      url: 'https://sortix.se/sv/products/glasburk-med-tralock-13-l', 
    },
    {
      id: 8,
      name: 'Square Glass Jar Alba',
      w: 10, d: 10, h: 20.5,
      img: '/src/assets/products/alba-jar.jpg',
      url: 'https://sortix.se/sv/products/forvaringsburk-med-bambulock-1150-ml',
    },
    {
      id: 9,
      name: 'Stackable Wooden Storage Box',
      w: 20.5, d: 18.5, h: 16.3,
      img: '/src/assets/products/wood-box.jpg',
      url: 'https://sortix.se/sv/products/stapelbar-forvaringslada-i-tra', 
    },
  ],

  cabinet: [
    {
      id: 10,
      name: 'Stackable Storage Box with Lid',
      w: 22, d: 36.5, h: 19.5,
      img: '/src/assets/products/stack-lid-box.jpg',
      url: 'https://sortix.se/sv/products/stapelbar-forvaringslada-med-lock', 	
    },
    {
      id: 11,
      name: 'Jute Storage Basket',
      w: 16, d: 16, h: 16,
      img: '/src/assets/products/jute-basket.jpg',
      url: 'https://sortix.se/sv/products/jute-forvaringskorg',
    },
    {
      id: 12,
      name: 'Lazy Susan Turntable',
      w: 25, d: 25, h: 5,
      img: '/src/assets/products/lazy-susan.jpg',
      url: 'https://sortix.se/sv/products/snurrbricka-lazy-susan',
    },
  ],
}
