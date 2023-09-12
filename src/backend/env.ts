import { type } from "arktype";

export const envSchema = type({
  "PORT?": "string",
  GAMES_API_URL: "string",
  POSTGRES_URL: "string",
});
const { data, problems } = envSchema(process.env);
if (problems) {
  throw new Error(`Environment schema invalid. ${problems.summary}`);
}
export const environmentVariables = data;
