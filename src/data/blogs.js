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
      "https://plus.unsplash.com/premium_photo-1774469143134-f2bfa271f5ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

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
          "When a new feature is ready for QA, the job is not simply to open the application, follow the happy path, and confirm that everything works. As a QA Engineer, I need to understand what the feature is supposed to do, identify what could go wrong, think about how real users might interact with it, and determine whether the feature is safe to release. In this article, I’ll walk through how I approach testing a new feature before release using a practical example."
      },

      {
        type: "paragraph",
        text:
          "In this article, I’ll walk through how I approach testing a new feature before release using a practical example."
      },

      {
        type: "paragraph",
        text:
          "As a QA Engineer, I need to understand what the feature is supposed to do, identify what could go wrong, think about how real users might interact with it, and determine whether the feature is safe to release. In this article, I’ll walk through how I approach testing a new feature before release using a practical example."
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

    title: "How I Approach API Testing: A Practical Guide for QA Engineers",

    excerpt:
      "How I validate APIs beyond status codes—from request validation and negative testing to data consistency and real-world failure scenarios.",

    category: "API Testing",

    date: "September 3, 2026",

    readTime: "9 mins read",

    featured: false,

    image:
      "https://images.unsplash.com/photo-1670057046254-3b5095eb4b66?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tags: ["API Testing", "Postman", "Backend Testing"],

    content: [
          {
            type: "paragraph",
            text:
              "When testing a modern web or mobile application, the user interface is only one part of the system.",
          },

          {
            type: "paragraph",
            text:
              "Behind almost every screen, there are APIs handling authentication, retrieving data, creating records, updating information, processing transactions, and communicating with backend services.",
          },

          {
            type: "paragraph",
            text:
              "That means a feature can look perfectly fine on the UI while something is still wrong at the API or backend level.",
          },

          {
            type: "paragraph",
            text:
              "As a QA Engineer, API testing helps me validate what is happening behind the interface—not just what the user can see.",
          },

          {
            type: "paragraph",
            text:
              "In this article, I'll walk through how I approach API testing using a practical real-world scenario.",
          },

          {
            type: "heading",
            text: "A Real-World Scenario",
          },

          {
            type: "paragraph",
            text:
              "Imagine a mobile application where users can create a post.",
          },

          {
            type: "paragraph",
            text:
              "The user enters some content, taps Create, and the application sends a request to the backend.",
          },

          {
            type: "paragraph",
            text:
              "The basic flow looks like this:",
          },

          {
            type: "paragraph",
            text:
              "User Input → API Request → Backend Processing → API Response → UI Update",
          },

          {
            type: "paragraph",
            text:
              "From the user's perspective, it may look simple. But as a QA Engineer, I need to validate every important part of that communication.",
          },

          {
            type: "list",
            items: [
              "Is the correct endpoint being called?",
              "Is the HTTP method correct?",
              "Are all required parameters being sent?",
              "Is authentication handled correctly?",
              "Does the API validate invalid input?",
              "What happens when required data is missing?",
              "Does the API return the correct status code?",
              "Is the response body correct?",
              "Is the created data actually stored?",
              "What happens if the server returns an error?",
              "Can an unauthorized user access the endpoint?",
            ],
          },

          {
            type: "paragraph",
            text:
              "This is where API testing becomes valuable.",
          },

          {
            type: "heading",
            text: "1. Understand the API Contract",
          },

          {
            type: "paragraph",
            text:
              "Before sending requests, I first try to understand what the API is supposed to do.",
          },

          {
            type: "paragraph",
            text:
              "I review the available API documentation, requirements, acceptance criteria, request and response examples, and business rules.",
          },

          {
            type: "paragraph",
            text:
              "For example, suppose we have the following endpoint:",
          },

          {
            type: "code",
            language: "http",
            code: "POST /api/posts",
          },

          {
            type: "paragraph",
            text:
              "The request may look like:",
          },

          {
            type: "code",
            language: "json",
            code: `{
        "content": "This is my first post",
        "visibility": "public"
      }`,
          },

          {
            type: "paragraph",
            text:
              "And a successful response might look like:",
          },

          {
            type: "code",
            language: "json",
            code: `{
        "id": 12345,
        "content": "This is my first post",
        "visibility": "public",
        "status": "published"
      }`,
          },

          {
            type: "paragraph",
            text:
              "Before testing, I want to understand which fields are mandatory, which fields are optional, what data types are expected, what values are allowed, what authentication is required, and what should happen when validation fails.",
          },

          {
            type: "paragraph",
            text:
              "Understanding the contract gives me a baseline for testing.",
          },

          {
            type: "heading",
            text: "2. Start with the Positive Scenario",
          },

          {
            type: "paragraph",
            text:
              "I normally start by verifying the expected successful behavior.",
          },

          {
            type: "paragraph",
            text:
              "Test Scenario: Verify that an authenticated user can successfully create a post.",
          },

          {
            type: "list",
            items: [
              "Log in with a valid account.",
              "Navigate to the Create Post screen.",
              "Enter valid post content.",
              "Select the required visibility option.",
              "Submit the post.",
              "Capture and validate the API request.",
              "Verify the API response.",
              "Verify that the post appears in the application.",
            ],
          },

          {
            type: "paragraph",
            text:
              "The API should accept the request, return the expected success status code, create the post successfully, return the newly created post information, and store the correct data in the backend.",
          },

          {
            type: "paragraph",
            text:
              "I don't stop at checking whether I received a successful HTTP response. I also validate the response body and the resulting application state.",
          },

          {
            type: "heading",
            text: "3. Validate the Request",
          },

          {
            type: "paragraph",
            text:
              "One of the first things I check is whether the application is sending the correct request.",
          },

          {
            type: "paragraph",
            text:
              "I verify the HTTP method, endpoint, request headers, authentication information, request body, field names, values, and data types.",
          },

          {
            type: "code",
            language: "http",
            code: `POST /api/posts
      Authorization: Bearer <token>
      Content-Type: application/json`,
          },

          {
            type: "code",
            language: "json",
            code: `{
        "content": "Hello",
        "visibility": "public"
      }`,
          },

          {
            type: "paragraph",
            text:
              "I also check whether unnecessary or unexpected fields are being sent and whether the request matches the API contract.",
          },

          {
            type: "heading",
            text: "4. Test Required and Optional Fields",
          },

          {
            type: "paragraph",
            text:
              "Next, I test the API's validation rules.",
          },

          {
            type: "paragraph",
            text:
              "If content is mandatory, I would test missing, empty, null, and incorrectly typed values.",
          },

          {
            type: "code",
            language: "json",
            code: `{
        "visibility": "public"
      }`,
          },

          {
            type: "code",
            language: "json",
            code: `{
        "content": ""
      }`,
          },

          {
            type: "code",
            language: "json",
            code: `{
        "content": null
      }`,
          },

          {
            type: "code",
            language: "json",
            code: `{
        "content": 12345
      }`,
          },

          {
            type: "paragraph",
            text:
              "The API should reject invalid input with an appropriate response. This is where API testing can uncover validation gaps that may not be obvious through the UI.",
          },

          {
            type: "heading",
            text: "5. Test Boundary Values",
          },

          {
            type: "paragraph",
            text:
              "Boundary testing is particularly useful when an API has restrictions on input length or numerical values.",
          },

          {
            type: "paragraph",
            text:
              "Suppose the requirement says that post content must contain between 1 and 500 characters.",
          },

          {
            type: "list",
            items: [
              "0 characters",
              "1 character",
              "2 characters",
              "499 characters",
              "500 characters",
              "501 characters",
            ],
          },

          {
            type: "paragraph",
            text:
              "The important question isn't simply whether 500 characters work. I also want to know what happens at 0 and 501.",
          },

          {
            type: "paragraph",
            text:
              "Boundary conditions are common places for defects.",
          },

          {
            type: "heading",
            text: "6. Test Invalid and Unexpected Values",
          },

          {
            type: "paragraph",
            text:
              "I also try values that the application should not normally send.",
          },

          {
            type: "code",
            language: "json",
            code: `{
        "content": "Hello",
        "visibility": "something_invalid"
      }`,
          },

          {
            type: "code",
            language: "json",
            code: `{
        "content": "Hello",
        "visibility": 123
      }`,
          },

          {
            type: "paragraph",
            text:
              "I want to verify that the backend does not blindly accept invalid data. Depending on the API contract, the server should return an appropriate client-error response rather than processing invalid input.",
          },

          {
            type: "heading",
            text: "7. Test Authentication and Authorization",
          },

          {
            type: "paragraph",
            text:
              "Authentication testing is one of the most important areas of API testing.",
          },

          {
            type: "paragraph",
            text:
              "I would test scenarios such as valid tokens, missing tokens, invalid tokens, and expired tokens.",
          },

          {
            type: "code",
            language: "http",
            code: "Authorization: Bearer invalid_token",
          },

          {
            type: "paragraph",
            text:
              "The API should reject requests that do not contain valid authentication credentials.",
          },

          {
            type: "heading",
            text: "Authentication vs Authorization",
          },

          {
            type: "paragraph",
            text:
              "These two concepts are easy to mix up.",
          },

          {
            type: "paragraph",
            text:
              "Authentication answers: Who are you?",
          },

          {
            type: "paragraph",
            text:
              "Authorization answers: What are you allowed to do?",
          },

          {
            type: "paragraph",
            text:
              "For example, a user may be successfully authenticated but still not have permission to delete another user's post.",
          },

          {
            type: "heading",
            text: "8. Test Different User Roles",
          },

          {
            type: "paragraph",
            text:
              "Suppose the application has Regular User, Moderator, and Admin roles.",
          },

          {
            type: "code",
            language: "http",
            code: "DELETE /api/posts/{id}",
          },

          {
            type: "paragraph",
            text:
              "I would verify whether each role has the appropriate permissions.",
          },

          {
            type: "list",
            items: [
              "Regular User → Can delete their own post.",
              "Regular User → Cannot delete another user's post.",
              "Moderator → Can moderate eligible content.",
              "Admin → Has administrative permissions.",
            ],
          },

          {
            type: "paragraph",
            text:
              "The API should enforce these rules independently of the UI. Hiding a button from a user is not sufficient authorization.",
          },

          {
            type: "heading",
            text: "9. Validate Response Structure",
          },

          {
            type: "paragraph",
            text:
              "I don't only check whether a response exists. I validate the response itself.",
          },

          {
            type: "code",
            language: "json",
            code: `{
        "id": 12345,
        "content": "This is my first post",
        "visibility": "public",
        "status": "published"
      }`,
          },

          {
            type: "paragraph",
            text:
              "I verify that required fields are present, field names are correct, data types are correct, values match the request, IDs are generated correctly, status values are valid, and no unexpected sensitive information is exposed.",
          },

          {
            type: "heading",
            text: "10. Don't Trust the Status Code Alone",
          },

          {
            type: "paragraph",
            text:
              "This is one of the most important lessons in API testing.",
          },

          {
            type: "paragraph",
            text:
              "Imagine the API returns 200 OK, but the response contains a failed status or the requested data was not actually created.",
          },

          {
            type: "code",
            language: "json",
            code: `{
        "status": "failed"
      }`,
          },

          {
            type: "paragraph",
            text:
              "Technically, the request received a successful HTTP response. Functionally, something is wrong.",
          },

          {
            type: "paragraph",
            text:
              "Therefore, I validate Status Code + Response Body + Business Logic + Backend State rather than relying on the status code alone.",
          },

          {
            type: "heading",
            text: "11. Test Error Handling",
          },

          {
            type: "paragraph",
            text:
              "Real systems fail. So I also test how the API behaves when things go wrong.",
          },

          {
            type: "list",
            items: [
              "Invalid request",
              "Unauthorized request",
              "Forbidden action",
              "Resource not found",
              "Duplicate request",
              "Server error",
              "Request timeout",
              "Service unavailable",
            ],
          },

          {
            type: "paragraph",
            text:
              "I verify whether the API returns an appropriate HTTP status code, meaningful error response, consistent response structure, useful error message, and no unnecessary internal information.",
          },

          {
            type: "paragraph",
            text:
              "A good API should fail gracefully and predictably.",
          },

          {
            type: "heading",
            text: "12. Test Duplicate Requests and Idempotency",
          },

          {
            type: "paragraph",
            text:
              "Consider a user tapping Create Post multiple times because the application appears slow.",
          },

          {
            type: "code",
            language: "text",
            code: `Request 1 → Create Post
      Request 2 → Create Post
      Request 3 → Create Post`,
          },

          {
            type: "paragraph",
            text:
              "I would verify whether the system creates one post or multiple duplicate records.",
          },

          {
            type: "paragraph",
            text:
              "The expected behavior depends on the business requirement, but the important point is to test it intentionally.",
          },

          {
            type: "paragraph",
            text:
              "For APIs involving payments, orders, or other critical transactions, duplicate-request handling becomes especially important.",
          },

          {
            type: "heading",
            text: "13. Verify Data Consistency",
          },

          {
            type: "paragraph",
            text:
              "Suppose the API says the post was successfully created.",
          },

          {
            type: "code",
            language: "json",
            code: `{
        "id": 12345,
        "status": "published"
      }`,
          },

          {
            type: "paragraph",
            text:
              "I don't necessarily consider the test complete. I would verify that the created record is actually available when retrieved again.",
          },

          {
            type: "code",
            language: "text",
            code: `POST /api/posts
              ↓
      Create Post
              ↓
      GET /api/posts/12345
              ↓
      Verify Stored Data`,
          },

          {
            type: "paragraph",
            text:
              "The data returned from the GET request should be consistent with what was created.",
          },

          {
            type: "heading",
            text: "14. Test APIs Through the UI as Well",
          },

          {
            type: "paragraph",
            text:
              "API testing and UI testing should not always be treated as completely separate activities.",
          },

          {
            type: "paragraph",
            text:
              "Sometimes I perform an action through the application and then validate the API request behind it.",
          },

          {
            type: "code",
            language: "text",
            code: `UI: User creates a post
              ↓
      API: POST /api/posts
              ↓
      Backend: Post stored
              ↓
      UI: New post displayed`,
          },

          {
            type: "paragraph",
            text:
              "This gives me an end-to-end view of the feature and helps determine whether an issue originates from the frontend, API request, backend logic, or data persistence.",
          },

          {
            type: "heading",
            text: "15. My Practical API Testing Checklist",
          },

          {
            type: "list",
            items: [
              "Endpoint validated",
              "HTTP method validated",
              "Request headers validated",
              "Authentication tested",
              "Authorization tested",
              "Required fields tested",
              "Optional fields tested",
              "Invalid inputs tested",
              "Boundary values tested",
              "Data types validated",
              "Positive scenarios tested",
              "Negative scenarios tested",
              "Response structure validated",
              "Status codes validated",
              "Error handling tested",
              "Duplicate requests tested",
              "Data persistence verified",
              "UI-to-API behavior validated",
            ],
          },

          {
            type: "paragraph",
            text:
              "The exact scope depends on the API's purpose, risk, and business impact.",
          },

          {
            type: "heading",
            text: "A Bug I Might Find During API Testing",
          },

          {
            type: "paragraph",
            text:
              "Imagine the requirement says: A user can only delete their own posts.",
          },

          {
            type: "code",
            language: "http",
            code: `DELETE /api/posts/12345
      Authorization: Bearer <regular-user-token>`,
          },

          {
            type: "paragraph",
            text:
              "If post 12345 belongs to another user, the API should reject the request.",
          },

          {
            type: "paragraph",
            text:
              "Actual Result: The API returns 200 OK and the post is deleted.",
          },

          {
            type: "paragraph",
            text:
              "Expected Result: The API should reject the request because the authenticated user does not own the post.",
          },

          {
            type: "paragraph",
            text:
              "This is more than a UI bug. Even if the Delete button is hidden from the user interface, an insecure API could still allow the operation.",
          },

          {
            type: "heading",
            text: "Tools I Use for API Testing",
          },

          {
            type: "list",
            items: [
              "Postman",
              "Browser Developer Tools",
              "Swagger / OpenAPI",
              "Proxy and network inspection tools",
              "Application logs",
              "Database or backend validation tools, where access is available",
            ],
          },

          {
            type: "paragraph",
            text:
              "The tool itself is not the most important part. The important part is knowing what to validate and why.",
          },

          {
            type: "heading",
            text: "The QA Mindset Behind API Testing",
          },

          {
            type: "paragraph",
            text:
              "For me, API testing is not simply: Send a request and check the response.",
          },

          {
            type: "paragraph",
            text:
              "I think about the complete interaction:",
          },

          {
            type: "paragraph",
            text:
              "Request → Validation → Authentication → Business Logic → Response → Data Persistence → User Experience",
          },

          {
            type: "paragraph",
            text:
              "And I continuously ask: What happens with invalid data? What happens without authentication? What happens when the user isn't authorized? What happens when the resource doesn't exist? What happens when the request is repeated? What happens when the server fails?",
          },

          {
            type: "paragraph",
            text:
              "These questions are often where meaningful defects are discovered.",
          },

          {
        type: "callout",
        title: "QA Perspective",
        text:
          "A successful API response doesn’t always mean the feature is working correctly. As a QA Engineer, I look beyond status codes and validate the complete behavior—from request validation and authorization to response structure, data persistence, error handling, and consistency with the UI. The goal is not just to verify that an API works, but to find where it can fail before users do.",
      },

          {
            type: "heading",
            text: "Final Thoughts",
          },

          {
            type: "paragraph",
            text:
              "API testing gives QA Engineers visibility into a layer of the application that users cannot directly see.",
          },

          {
            type: "paragraph",
            text:
              "A strong API testing approach goes beyond checking whether an endpoint returns 200 OK.",
          },

          {
            type: "paragraph",
            text:
              "It validates Request + Response + Business Rules + Authentication + Authorization + Error Handling + Data Consistency.",
          },

          {
            type: "paragraph",
            text:
              "The goal is not simply to verify that an API responds. The goal is to determine whether the API behaves correctly, securely, consistently, and reliably under both expected and unexpected conditions.",
          },

          {
            type: "paragraph",
            text:
              "Ultimately, I see API testing as one of the most effective ways for a QA Engineer to move beyond testing what the user sees and start validating what the system actually does.",
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