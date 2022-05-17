'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const books = await queryInterface.bulkInsert('Books', [
      {
        title: 'O Nome do Vento',
        author: 'Patrick Rothfuss',
        page_quantity: 743,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'Mistborn: o Império Final',
        author: 'Brandon Sanderson',
        page_quantity: 608,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'A Guerra dos Tronos',
        author: 'George R. R. Martin',
        page_quantity: 592,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'It: a Coisa',
        author: 'Stephen King',
        page_quantity: 1103,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'O Último Desejo',
        author: 'Andrzej Sapkowski',
        page_quantity: 318,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ]);

    return books;
  },

  async down (queryInterface, _Sequelize) {
    const books = await queryInterface.bulkDelete('Books', null, {});

    return books;
  }
};
