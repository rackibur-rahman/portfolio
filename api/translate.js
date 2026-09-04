import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const protectedTerms = [
  "QA",
  "SQA",
  "Quality Assurance",
  "QA Engineer",
  "Software Testing",
  "Manual Testing",
  "Automation Testing",
  "API Testing",
  "Performance Testing",
  "Load Testing",
  "Regression Testing",
  "Smoke Testing",
  "Sanity Testing",
  "Functional Testing",
  "Integration Testing",
  "UAT",
  "Test Case",
  "Test Plan",
  "Test Strategy",
  "Test Scenario",
  "Bug",
  "Defect",
  "Issue",
  "Severity",
  "Priority",
  "Acceptance Criteria",
  "User Story",
  "Requirement",
  "Feature",
  "Release",
  "Build",
  "Deployment",
  "Production",
  "Staging",
  "Development",
  "API",
  "Endpoint",
  "Request",
  "Response",
  "Status Code",
  "JSON",
  "Database",
  "Frontend",
  "Backend",
  "UI",
  "UX",
  "User Journey",
  "Workflow",
  "Mobile App",
  "Web App",
  "iOS",
  "Android",
  "TestFlight",
  "Play Store",
  "App Store",
  "Jira",
  "Postman",
  "Playwright",
  "Maestro",
  "BrowserStack",
  "LambdaTest",
  "GitHub",
  "CI/CD",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { article } = req.body;

    if (!article) {
      return res.status(400).json({
        error: "Article content is required",
      });
    }

    const response = await client.responses.create({
      model: "gpt-5-mini",
      instructions: `
You are a professional English-to-Bangla translator for a Software QA Engineer's technical blog.

Translate the provided article from English into natural, professional Bangla.

IMPORTANT RULES:

1. Preserve the original meaning, structure, and professional tone.
2. Translate normal English text into natural Bangla.
3. Keep QA, software testing, engineering, technical, tool, framework, API, product, and industry-specific terminology in English.
4. Never transliterate protected technical terms into Bangla.
5. Keep protected terms exactly in English whenever possible.
6. Do not translate code.
7. Preserve paragraph structure.
8. Preserve heading structure.
9. Preserve list structure.
10. Preserve callout structure.
11. Do not add explanations.
12. Do not remove any content.
13. Return ONLY valid JSON.
14. The JSON must have exactly these properties:
   title,
   excerpt,
   content

The content property must be an array containing objects with the same type as the original content.

For:
- heading: translate only the "text"
- paragraph: translate only the "text"
- list: translate each item in "items"
- callout: translate "title" and "text"
- code: keep "code" exactly unchanged

Protected terminology:
${protectedTerms.join(", ")}
      `,
      input: JSON.stringify(article),
      text: {
        format: {
          type: "json_object",
        },
      },
    });

    const translatedArticle = JSON.parse(response.output_text);

    return res.status(200).json({
      article: translatedArticle,
    });
  } catch (error) {
    console.error("Translation error:", error);

    return res.status(500).json({
      error: "Translation failed",
    });
  }
}