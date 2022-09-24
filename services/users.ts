import { query } from "./db";

type UserPayload = {
  name: string;
  surname: string;
  email: string;
};

const getUsers = async () => {
  const data = await query("SELECT * from users");

  return data;
};

const addUser = async ({ name, surname, email }: UserPayload) => {
  console.log(name, surname, email);

  const result = await query(
    `INSERT INTO users (name, surname, email) VALUES ('${name}', '${surname}', '${email}')`
  );

  let message = "Error in creating user";

  if (result) {
    message = "User created successfully";
  }

  return { message };
};

export { addUser, getUsers };
