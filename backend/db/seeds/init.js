/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//refacter to await

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();

  // Inserts seed entries
  await knex("user").insert([
    {
      first_name: "bob",
      last_name: "dylan",
      email: "bobdylan@mail.com",
      username: "john",
      password_hash: "hashed_password_1",
    },
    {
      first_name: "bob",
      last_name: "dylan",
      email: "bobdylan2@mail.com",
      username: "jose",
      password_hash: "hashed_password_1",
    },
    {
      first_name: "bob",
      last_name: "dylan",
      email: "bobdylan3@mail.com",
      username: "timmy",
      password_hash: "hashed_password_1",
    },
  ]);
};
