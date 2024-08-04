import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Crie uma lista dos 10 países mais ricos do mundo." }],
        model: "gpt-4o-mini",
    });

    console.log(completion.choices[0]);
}

main();