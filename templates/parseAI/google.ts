import { GoogleGenAI } from "@google/genai";
import { parseAI } from "schema-llm";
import { ProductReviewSchema } from "../zod/basic-schema.js";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const prompt = [
  "Analyze the user review and return a JSON object.",
  "Use these keys exactly: summary, sentiment, score, strengths, weaknesses, recommendedActions.",
  "Respond with JSON only.",
  "",
  "Review: The app is fast and polished, but search filters are confusing.",
].join("\n");

const response = await client.models.generateContent({
  model: "gemini-2.5-flash",
  contents: prompt,
});

const parsed = await parseAI(response, ProductReviewSchema);

console.log(parsed.summary);
console.log(parsed.recommendedActions);
