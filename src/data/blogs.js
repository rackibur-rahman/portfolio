export const blogs = [
  {
    slug: "how-i-test-a-new-feature-before-release",

    title: "How I Test a New Feature Before Release",

    excerpt:
      "A practical walkthrough of how I approach feature testing before giving release sign-off.",

    category: "Manual Testing",

    date: "September 2, 2026",

    readTime: "7 min read",

    featured: true,

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",

    tags: [
      "Manual Testing",
      "QA Mindset",
      "Functional Testing",
      "Regression Testing",
    ],

    content: [
      {
        type: "paragraph",
        text:
          "When a new feature reaches QA, my first instinct is not to start clicking buttons. Before testing the feature itself, I want to understand what the feature is supposed to achieve, who will use it, and what could go wrong.",
      },

      {
        type: "heading",
        text: "1. Understand the Requirement First",
      },

      {
        type: "paragraph",
        text:
          "I start by reviewing the requirement, acceptance criteria, design, and any related API or business logic. This gives me a clear understanding of the intended behavior before I begin execution.",
      },

      {
        type: "list",
        items: [
          "What problem is the feature solving?",
          "Who is the target user?",
          "What is the expected happy path?",
          "What are the validation rules?",
          "What happens when something goes wrong?",
          "Does the feature affect any existing functionality?",
        ],
      },

      {
        type: "heading",
        text: "2. Start With the Happy Path",
      },

      {
        type: "paragraph",
        text:
          "Once I understand the requirement, I first verify the primary user journey. The goal is to confirm that the feature works as intended under normal conditions.",
      },

      {
        type: "paragraph",
        text:
          "For example, if a new profile-editing feature is introduced, I would verify that a user can open the profile, update valid information, save the changes, and see the updated information consistently across the application.",
      },

      {
        type: "heading",
        text: "3. Challenge the Feature With Negative Scenarios",
      },

      {
        type: "paragraph",
        text:
          "A feature that works only when everything goes perfectly is not necessarily production-ready. After validating the happy path, I deliberately try to make the feature fail.",
      },

      {
        type: "list",
        items: [
          "Enter invalid data.",
          "Leave required fields empty.",
          "Use minimum and maximum allowed values.",
          "Repeat the same action multiple times.",
          "Navigate away during an operation.",
          "Refresh the page at unexpected points.",
          "Test with slow or unstable network conditions.",
        ],
      },

      {
        type: "heading",
        text: "4. Think About Edge Cases",
      },

      {
        type: "paragraph",
        text:
          "Edge cases are often where meaningful defects appear. I try to think beyond the exact examples provided in the requirement and consider how a real user might behave differently.",
      },

      {
        type: "paragraph",
        text:
          "For example, a button may work perfectly with a single click but behave incorrectly when a user taps it repeatedly. A form may work with normal input but break when the maximum character limit is reached.",
      },

      {
        type: "heading",
        text: "5. Verify Error Handling",
      },

      {
        type: "paragraph",
        text:
          "I also verify whether the application communicates failures properly. Error messages should be understandable, relevant, and presented at the right time.",
      },

      {
        type: "heading",
        text: "6. Perform Regression Testing",
      },

      {
        type: "paragraph",
        text:
          "A new feature rarely exists in isolation. Once feature-level testing is complete, I identify the existing areas that could have been affected and perform focused regression testing around those areas.",
      },

      {
        type: "heading",
        text: "7. Test Like a Real User",
      },

      {
        type: "paragraph",
        text:
          "Finally, I step away from the test case mindset and use the feature like an actual user. This often exposes usability problems, unexpected flows, confusing messages, or inconsistencies that formal test cases may not cover.",
      },

      {
        type: "callout",
        title: "QA Perspective",
        text:
          "A feature is not ready just because the happy path works. Good QA asks what happens when real users behave unexpectedly.",
      },

      {
        type: "heading",
        text: "Final Thoughts",
      },

      {
        type: "paragraph",
        text:
          "My approach to feature testing is a combination of requirement analysis, functional validation, negative testing, edge-case exploration, regression testing, and user thinking. The objective is not simply to find bugs. It is to build confidence that the feature is ready for real users.",
      },
    ],
  },

  {
    slug: "how-i-approach-api-testing",

    title: "How I Approach API Testing",

    excerpt:
      "What I verify when testing an API beyond simply checking whether the response status is 200.",

    category: "API Testing",

    date: "Coming Soon",

    readTime: "5 min read",

    featured: false,

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",

    tags: ["API Testing", "Postman", "Backend Testing"],

    content: [
      {
        type: "paragraph",
        text:
          "API testing is one of the areas I rely on heavily when validating modern web and mobile applications. A successful API response is about much more than receiving HTTP 200.",
      },

      {
        type: "heading",
        text: "What I Usually Verify",
      },

      {
        type: "list",
        items: [
          "Request method and endpoint",
          "Authentication and authorization",
          "Request headers",
          "Request body validation",
          "Response status code",
          "Response schema",
          "Business logic",
          "Error handling",
          "Response time",
        ],
      },

      {
        type: "callout",
        title: "Coming Soon",
        text:
          "I'm preparing a practical article covering my API testing workflow with real-world examples.",
      },
    ],
  },

  {
    slug: "what-i-check-when-testing-a-mobile-app",

    title: "What I Check When Testing a Mobile App",

    excerpt:
      "A practical checklist covering functionality, interruptions, devices, network conditions, and real-world mobile behavior.",

    category: "Mobile Testing",

    date: "Coming Soon",

    readTime: "6 min read",

    featured: false,

    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",

    tags: ["Mobile Testing", "Android", "iOS"],

    content: [
      {
        type: "paragraph",
        text:
          "Mobile applications have challenges that do not always exist on the web. Device differences, interruptions, permissions, network changes, and operating-system behavior can all affect the user experience.",
      },

      {
        type: "heading",
        text: "Areas I Usually Cover",
      },

      {
        type: "list",
        items: [
          "Installation and update behavior",
          "Different screen sizes",
          "App background and foreground behavior",
          "Network switching",
          "Permissions",
          "Push notifications",
          "Keyboard behavior",
          "Orientation changes",
          "Low battery and resource conditions",
        ],
      },

      {
        type: "callout",
        title: "Coming Soon",
        text:
          "A detailed mobile testing checklist and practical examples will be added here.",
      },
    ],
  },
];

export const getBlogBySlug = (slug) => {
  return blogs.find((blog) => blog.slug === slug);
};