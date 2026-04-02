# schema-llm templates

Copy these files into your app and customize the schema, prompt, and model choice.

- `parseAI/openai.ts` — OpenAI Responses API example
- `parseAI/google.ts` — Google Gen AI SDK example
- `parseAI/anthropic.ts` — Anthropic Messages API example
- `parseAI/ollama.ts` — Ollama JavaScript library example
- `zod/basic-schema.ts` — reusable Zod schema and inferred type

The provider templates all import the shared schema from `zod/basic-schema.ts`, so the fastest path is to copy the whole `templates/` folder.
