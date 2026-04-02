import ollama from "ollama";
import { parseAI } from "schema-llm";
import { ProductReviewSchema } from "../zod/basic-schema.js";

const prompt = [
  "Analyze the user review and return a JSON object.",
  "Use these keys exactly: summary, sentiment, score, strengths, weaknesses, recommendedActions.",
  "Respond with JSON only.",
].join(" ");

const response = await ollama.chat({
  model: "llama3.1",
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
