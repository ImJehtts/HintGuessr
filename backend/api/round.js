import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateHint(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await client.responses.create({
          model: "gpt-5-nano",
          input: `
            Return JSON only.
            You are creating hints and answers for a game inspired by "In a Nutshell" by Confident Games.
            Generate a list of 7-10 single hint words and a single word answer for a guessing game. The 7-10 hint words should relate to the answer word. First word is question word. 
            Example;
            Hints: what, company, has, the, slogan, just, do, it
            Answer: Nike
            Another example;
            Hints: which, creamy, white, condiment, is, made, from, eggs, and, oil
            Answer: Mayonnaise
            Format exactly like. If you have less than 10 hint words, still return 10 elements in the array hints and leave them as blank strings:
            {
            "hints": ["hint1", "hint2", "..."],
            "answer": "answerword"
            }
          `,
        });
    
        const text = response.output_text;
        const data = JSON.parse(text);
    
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate hints and answers" });
      }
}