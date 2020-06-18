module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'restAPP',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
