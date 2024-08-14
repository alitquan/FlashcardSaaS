import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
"Create a set of flashcards to help me study based on a given topic or subject. Each flashcard should include:

1. **Question or Key Term**: The front of each card should feature a question, key term, or concept related to [subject or topic].

2. **Concise Explanation or Answer**: The back of the card should provide a clear and concise explanation, definition, or answer.

3. **Example or Application**: Whenever possible, include an example or real-world application related to the concept or term.

4. **Important Details or Notes**: Add any critical details, formulas, or notes that are essential for understanding the concept.

5. **Mnemonic or Memory Aid**: If applicable, include a mnemonic or memory aid to help remember the information."

Return in the following JSON format
{
"flashcards": [{
    "front": str,
    "back": str
    }]
}
`;

export async function POST(req) {
  const openai = new OpenAI();
  const data = await req.text();

  const completion = await openai.chat.completion.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
  });

  const flashcards = JSON.parse(completion.choices[0].content);

  return NextResponse.json(flashcards.flashcard);
}
