import { z } from "zod";

export const ProductReviewSchema = z.object({
  summary: z.string(),
  sentiment: z.enum(["positive", "negative", "neutral"]),
  score: z.number().min(0).max(1),
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  recommendedActions: z.array(z.string()),
});

export type ProductReview = z.infer<typeof ProductReviewSchema>;
