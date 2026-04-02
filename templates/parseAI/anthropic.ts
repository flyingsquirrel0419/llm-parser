import Anthropic from "@anthropic-ai/sdk";
import { parseAI } from "schema-llm";
import { ProductReviewSchema } from "../zod/basic-schema.js";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const prompt = [
  "Analyze the user review and return a JSON object.",
  "Use these keys exactly: summary, sentiment, score, strengths, weaknesses, recommendedActions.",
  "Respond with JSON only.",
].join(" ");

const response = await client.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 800,
  messages: [
    {
      role: "user",
      content: `${prompt}\n\nReview: The app is fast and polished, but search filters are confusing.`,
    },
  ],
});

const parsed = await parseAI(response, ProductReviewSchema);

console.log(parsed.summary);
console.log(parsed.recommendedActions);
