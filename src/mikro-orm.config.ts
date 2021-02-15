import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern fo,r the migration files
  },
  dbName: "postgres",
  user: "rm",
  password: "password",
  debug: !__prod__,
  type: "postgresql",
  entities: [Post, User],
} as Parameters<typeof MikroORM.init>[0];
