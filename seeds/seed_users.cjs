exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
            email: 'email-1',
            password: 'pwd-1'
          },
          {
            id: 2,
            email: 'email-2',
            password: 'pwd-2'
          },
          {
            id: 3,
            email: 'email-3',
            password: 'pwd-3'
          },
        ]);
      });
  };