module.exports = function (sequelize, Sequelize) {
  const PostCount = sequelize.define('postCount', {
    count: { type: Sequelize.INTEGER, default: '0' },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: 'Users',
        // This is the column name of the referenced model
        key: 'id',
      },
    },
  });
  return PostCount;
};