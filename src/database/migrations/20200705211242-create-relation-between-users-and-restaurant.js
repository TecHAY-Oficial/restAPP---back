module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'restaurant_id', {
      type: Sequelize.INTEGER,
      references: { model: 'restaurants', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'restaurant_id');
  },
};
