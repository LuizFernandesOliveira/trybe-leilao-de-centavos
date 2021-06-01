'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      name: 'Celular',
      price: 20,
      img: 'https://s2.glbimg.com/cBRrW_1Pnr_Mjsf_9vMr2fWWr3g=/0x0:695x400/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/4/Q/UfOgNWQJAiZq0DLEKiRQ/mi-tv-e.jpg',
    },{
      name: 'Tv',
      price: 90,
      img: 'https://www.eletrosom.com/media/catalog/product/cache/a993071877238ba83e5c418c85b48faf/c/e/celular_samsung_galaxy_a01_core_3__1.jpg',
    },{
      name: 'Notebook',
      price: 50,
      img: 'https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
