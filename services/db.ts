import mysql from "mysql2/promise";
import { config } from "../config";

const query = async (sql: string, params?: string) => {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results;
};

export { query };
