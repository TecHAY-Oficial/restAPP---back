module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'restaurant_id', {
      type: Sequelize.INTEGER,
      references: { model: 'restaurants', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('categories', 'restaurant_id');
  },
};
