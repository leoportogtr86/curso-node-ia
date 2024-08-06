import { encoding_for_model } from 'tiktoken';

function encodePrompt() {
    const prompt = "How are you today?";
    const encoder = encoding_for_model('gpt-3.5-turbo');
    const tokens = encoder.encode(prompt);
    console.log(tokens);
    console.log(`Number of tokens: ${tokens.length}`);
}

encodePrompt();
