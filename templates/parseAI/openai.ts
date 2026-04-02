import OpenAI from "openai";
import { parseAI } from "schema-llm";
import { ProductReviewSchema } from "../zod/basic-schema.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = [
  "Analyze the user review and return a JSON object.",
  "Use these keys exactly: summary, sentiment, score, strengths, weaknesses, recommendedActions.",
  "Respond with JSON only.",
].join(" ");

const response = await client.responses.create({
  model: "gpt-5",
  input: `${prompt}\n\nReview: The app is fast and polished, but search filters are confusing.`,
});

const parsed = await parseAI(response, ProductReviewSchema);

console.log(parsed.summary);
console.log(parsed.recommendedActions);
