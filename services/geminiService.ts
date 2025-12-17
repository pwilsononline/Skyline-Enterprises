
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async checkEligibility(businessContext: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this business situation for funding eligibility: ${businessContext}.
        Skyline Enterprises offers $50k-$1M+ funding, often at 0% interest, no upfront costs, pay-only-if-funded. 
        They serve all industries.
        Provide a professional, encouraging summary of how Skyline can help.`,
        config: {
          systemInstruction: "You are a professional funding consultant for Skyline Enterprises. Be concise, expert, and highly motivating. Use markdown.",
          temperature: 0.7,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I'm having trouble analyzing that right now. Please reach out to our team directly for a custom quote.";
    }
  }
}

export const geminiService = new GeminiService();
