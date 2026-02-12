export default async function generateContent(prompt) {
  console.log("Function called with prompt:", prompt);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GOOGLE_GEMINI_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are a senior code reviewer with 7+ years of experience.

Review the following code and provide:
- ❌ Issues
- ✅ Suggested Fix
- 💡 Improvements

Code:
${prompt}
`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Gemini API Error:", data);
      return "⚠️ Gemini API Error. Check console.";
    }

    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("❌ Error generating content:", error);
    return "⚠️ Failed to generate AI review.";
  }
}
