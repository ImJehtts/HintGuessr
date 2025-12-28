import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const response = await openai.responses.create({
          model: "gpt-4.1-mini",
          input:         
        `
        Return ONLY valid JSON. Do not include any extra text, explanations, or formatting.
        You are creating hints and answers for a guessing game inspired by "In a Nutshell" by Confident Games. Generate a list of 7-10 hint words and a single-word answer. The hints should relate to the answer word. The first hint must be a question word.
        Capitalize the first letter of EVERY Hint. The answer should be a single word that is a noun, proper noun, or brand name (Lion, Rolex, Heart). The hints should tie together/form a sentence (last hint can't be 'and' for example)
        Example:
        {
          "hints": ["What", "Company", "Has", "The", "Slogan", "Just", "Do", "It", "", ""],
          "answer": "Nike"
        }
        Another example:
        {
          "hints": ["Which", "Creamy", "White", "Condiment", "Is", "Made", "From", "Eggs", "And", "Oil"],
          "answer": "Mayonnaise"
        }
        If you cannot generate 10 hints, fill the remaining elements with empty strings ("").
        `,
        });

        const textOutput = response.output
        ?.flatMap(item => item.content)
        ?.find(content => content.type === "output_text")
        ?.text;
  
      if (!textOutput) {
        throw new Error("No text output returned from OpenAI");
      }
  
      const data = JSON.parse(textOutput.trim());
  
      return res.status(200).json(data);
    } catch (error) {
      console.error("OpenAI error:", error);
      return res.status(500).json({
        error: "Failed to generate hints and answers",
        details: error.message,
      });
    }
  }