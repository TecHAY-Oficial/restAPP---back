module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tables', 'restaurant_id', {
      type: Sequelize.INTEGER,
      references: { model: 'restaurants', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('tables', 'restaurant_id');
  },
};
