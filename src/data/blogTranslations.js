export const blogTranslations = {
  "how-i-test-a-new-feature-before-release": {
    title: "Release-এর আগে আমি কীভাবে একটি নতুন Feature Test করি",

    excerpt:
      "Release sign-off দেওয়ার আগে আমি কীভাবে একটি নতুন feature test করি—তার একটি practical walkthrough.",

    content: [
      {
        type: "paragraph",
        text:
          "যখন একটি নতুন feature QA-এর জন্য ready হয়, তখন কাজটি শুধু application open করে happy path follow করা এবং সবকিছু কাজ করছে কিনা confirm করা নয়। একজন QA Engineer হিসেবে আমাকে বুঝতে হয় feature-টি কীভাবে কাজ করার কথা, কোথায় সমস্যা হতে পারে, real users কীভাবে feature-টির সাথে interact করতে পারে এবং feature-টি release করার জন্য safe কিনা। এই article-এ একটি practical example-এর মাধ্যমে release-এর আগে আমি কীভাবে একটি নতুন feature test করি তা দেখাব।",
      },

      {
        type: "paragraph",
        text:
          "এই article-এ একটি practical example-এর মাধ্যমে release-এর আগে আমি কীভাবে একটি নতুন feature test করি তা দেখাব।",
      },

      {
        type: "paragraph",
        text:
          "একজন QA Engineer হিসেবে আমাকে বুঝতে হয় feature-টি কীভাবে কাজ করার কথা, কোথায় সমস্যা হতে পারে, real users কীভাবে feature-টির সাথে interact করতে পারে এবং feature-টি release করার জন্য safe কিনা।",
      },

      {
        type: "heading",
        text: "1. প্রথমে Requirement বুঝি",
      },

      {
        type: "paragraph",
        text:
          "আমি প্রথমে requirement, acceptance criteria, design এবং প্রয়োজন অনুযায়ী related API বা business logic review করি। এতে execution শুরু করার আগেই feature-টির intended behavior সম্পর্কে পরিষ্কার ধারণা পাওয়া যায়।",
      },

      {
        type: "paragraph",
        text:
          "আমি requirement, acceptance criteria, design এবং related API বা business logic review করি। এতে execution শুরু করার আগেই feature-টির intended behavior সম্পর্কে পরিষ্কার ধারণা পাওয়া যায়।",
      },

      {
        type: "list",
        items: [
          "Feature-টি কোন problem solve করছে?",
          "Target user কারা?",
          "Expected happy path কী?",
          "Validation rules কী?",
          "কিছু ভুল হলে কী হওয়ার কথা?",
          "Feature-টি কি existing কোনো functionality-কে affect করছে?",
        ],
      },

      {
        type: "heading",
        text: "2. Happy Path দিয়ে শুরু করি",
      },

      {
        type: "paragraph",
        text:
          "Requirement বোঝার পর আমি প্রথমে primary user journey verify করি। এখানে লক্ষ্য হলো normal condition-এ feature-টি intended behavior অনুযায়ী কাজ করছে কিনা নিশ্চিত করা।",
      },

      {
        type: "paragraph",
        text:
          "উদাহরণস্বরূপ, যদি একটি নতুন profile-editing feature introduce করা হয়, তাহলে আমি verify করব user profile open করতে পারছে কিনা, valid information update করতে পারছে কিনা, changes save করতে পারছে কিনা এবং updated information application-এর বিভিন্ন জায়গায় consistently দেখা যাচ্ছে কিনা।",
      },

      {
        type: "heading",
        text: "3. Negative Scenarios দিয়ে Feature-কে Challenge করি",
      },

      {
        type: "paragraph",
        text:
          "সবকিছু perfectly কাজ করলেই একটি feature production-ready—এমন নয়। Happy path validate করার পর আমি ইচ্ছাকৃতভাবে feature-টিকে fail করানোর চেষ্টা করি।",
      },

      {
        type: "list",
        items: [
          "Invalid data enter করি।",
          "Required fields empty রাখি।",
          "Minimum এবং maximum allowed values test করি।",
          "একই action একাধিকবার করি।",
          "কোনো operation চলাকালীন অন্য জায়গায় navigate করি।",
          "Unexpected point-এ page refresh করি।",
          "Slow বা unstable network condition-এ test করি।",
        ],
      },

      {
        type: "heading",
        text: "4. Edge Cases নিয়ে চিন্তা করি",
      },

      {
        type: "paragraph",
        text:
          "Meaningful defects অনেক সময় edge case-এর মধ্যে পাওয়া যায়। তাই requirement-এ দেওয়া exact example-এর বাইরে গিয়ে একজন real user কীভাবে আলাদাভাবে আচরণ করতে পারে সেটাও বিবেচনা করি।",
      },

      {
        type: "paragraph",
        text:
          "উদাহরণস্বরূপ, একটি button single click-এ perfectly কাজ করতে পারে, কিন্তু user repeatedly tap করলে incorrect behavior করতে পারে। একইভাবে, একটি form normal input-এর ক্ষেত্রে ঠিকভাবে কাজ করলেও maximum character limit-এ পৌঁছালে break করতে পারে।",
      },

      {
        type: "heading",
        text: "5. Error Handling Verify করি",
      },

      {
        type: "paragraph",
        text:
          "Application কোনো failure হলে সেটি properly communicate করছে কিনা তাও আমি verify করি। Error message understandable, relevant এবং সঠিক সময়ে display হওয়া উচিত।",
      },

      {
        type: "heading",
        text: "6. Regression Testing করি",
      },

      {
        type: "paragraph",
        text:
          "একটি নতুন feature সাধারণত isolation-এ থাকে না। Feature-level testing শেষ হওয়ার পর কোন existing functionality affected হতে পারে তা identify করি এবং সেই areas-এর উপর focused regression testing করি।",
      },

      {
        type: "heading",
        text: "7. Real User-এর মতো Test করি",
      },

      {
        type: "paragraph",
        text:
          "সবশেষে আমি test case mindset থেকে কিছুটা বের হয়ে একজন actual user-এর মতো feature-টি ব্যবহার করি। এর মাধ্যমে usability problems, unexpected flows, confusing messages অথবা এমন inconsistencies পাওয়া যায় যা formal test cases-এ নাও থাকতে পারে।",
      },

      {
        type: "callout",
        title: "QA Perspective",
        text:
          "শুধু happy path কাজ করলেই একটি feature ready নয়। একজন ভালো QA চিন্তা করে real users unexpectedভাবে behave করলে কী হবে।",
      },

      {
        type: "heading",
        text: "Final Thoughts",
      },

      {
        type: "paragraph",
        text:
          "Feature testing-এর ক্ষেত্রে আমার approach হলো requirement analysis, functional validation, negative testing, edge-case exploration, regression testing এবং real-user thinking-এর combination। উদ্দেশ্য শুধু bugs খুঁজে বের করা নয়। বরং feature-টি real users-এর জন্য release করার মতো ready কিনা সে বিষয়ে confidence তৈরি করা।",
      },
    ],
  },

  "how-i-approach-api-testing": {
    title: "আমি কীভাবে API Testing করি: QA Engineers-এর জন্য একটি Practical Guide",

    excerpt:
      "শুধু status code নয়—request validation, negative testing, data consistency এবং real-world failure scenarios সহ আমি কীভাবে API validate করি।",

    content: [
      {
        type: "paragraph",
        text:
          "একটি modern web বা mobile application test করার সময় user interface system-এর শুধুমাত্র একটি অংশ।",
      },

      {
        type: "paragraph",
        text:
          "প্রায় প্রতিটি screen-এর পেছনে authentication handle করা, data retrieve করা, records create করা, information update করা, transactions process করা এবং backend services-এর সাথে communicate করার জন্য APIs কাজ করে।",
      },

      {
        type: "paragraph",
        text:
          "এর অর্থ হলো UI-তে একটি feature perfectly ঠিক দেখালেও API বা backend level-এ সমস্যা থাকতে পারে।",
      },

      {
        type: "paragraph",
        text:
          "একজন QA Engineer হিসেবে API testing আমাকে interface-এর পেছনে কী ঘটছে তা validate করতে সাহায্য করে—শুধু user যা দেখতে পাচ্ছে তা নয়।",
      },

      {
        type: "paragraph",
        text:
          "এই article-এ একটি practical real-world scenario ব্যবহার করে আমি কীভাবে API testing করি তা দেখাব।",
      },

      {
        type: "heading",
        text: "একটি Real-World Scenario",
      },

      {
        type: "paragraph",
        text:
          "ধরুন একটি mobile application-এ users post create করতে পারে।",
      },

      {
        type: "paragraph",
        text:
          "User content enter করে, Create button tap করে এবং application backend-এ একটি request পাঠায়।",
      },

      {
        type: "paragraph",
        text:
          "Basic flow-টি এমন:",
      },

      {
        type: "paragraph",
        text:
          "User Input → API Request → Backend Processing → API Response → UI Update",
      },

      {
        type: "paragraph",
        text:
          "User-এর দৃষ্টিতে flow-টি simple মনে হতে পারে। কিন্তু একজন QA Engineer হিসেবে আমাকে communication-এর প্রতিটি গুরুত্বপূর্ণ অংশ validate করতে হয়।",
      },

      {
        type: "list",
        items: [
          "Correct endpoint call হচ্ছে কিনা?",
          "HTTP method সঠিক কিনা?",
          "সব required parameters পাঠানো হচ্ছে কিনা?",
          "Authentication সঠিকভাবে handle হচ্ছে কিনা?",
          "API invalid input validate করছে কিনা?",
          "Required data missing হলে কী হচ্ছে?",
          "Correct status code return হচ্ছে কিনা?",
          "Response body সঠিক কিনা?",
          "Created data সত্যিই store হচ্ছে কিনা?",
          "Server error return করলে কী হচ্ছে?",
          "Unauthorized user endpoint access করতে পারছে কিনা?",
        ],
      },

      {
        type: "paragraph",
        text:
          "এখানেই API testing valuable হয়ে ওঠে।",
      },

      {
        type: "heading",
        text: "1. API Contract বুঝি",
      },

      {
        type: "paragraph",
        text:
          "Request পাঠানোর আগে আমি প্রথমে API-টি কীভাবে কাজ করার কথা তা বোঝার চেষ্টা করি।",
      },

      {
        type: "paragraph",
        text:
          "আমি API documentation, requirements, acceptance criteria, request ও response examples এবং business rules review করি।",
      },

      {
        type: "paragraph",
        text:
          "উদাহরণস্বরূপ, আমাদের endpoint যদি হয়:",
      },

      {
        type: "code",
        language: "http",
        code: "POST /api/posts",
      },

      {
        type: "paragraph",
        text:
          "Request এমন হতে পারে:",
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
          "Successful response এমন হতে পারে:",
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
          "Testing শুরু করার আগে আমি বুঝতে চাই কোন fields mandatory, কোনগুলো optional, expected data types কী, কোন values allowed, কী authentication required এবং validation fail করলে কী হওয়ার কথা।",
      },

      {
        type: "paragraph",
        text:
          "API contract বোঝা testing-এর জন্য একটি baseline তৈরি করে।",
      },

      {
        type: "heading",
        text: "2. Positive Scenario দিয়ে শুরু করি",
      },

      {
        type: "paragraph",
        text:
          "আমি সাধারণত expected successful behavior verify করার মাধ্যমে শুরু করি।",
      },

      {
        type: "paragraph",
        text:
          "Test Scenario: Verify that an authenticated user can successfully create a post.",
      },

      {
        type: "list",
        items: [
          "Valid account দিয়ে login করি।",
          "Create Post screen-এ যাই।",
          "Valid post content enter করি।",
          "Required visibility option select করি।",
          "Post submit করি।",
          "API request capture ও validate করি।",
          "API response verify করি।",
          "Application-এ post দেখা যাচ্ছে কিনা verify করি।",
        ],
      },

      {
        type: "paragraph",
        text:
          "API request accept করবে, expected success status code return করবে, post successfully create করবে, newly created post-এর information return করবে এবং correct data backend-এ store করবে—এগুলো verify করি।",
      },

      {
        type: "paragraph",
        text:
          "শুধু successful HTTP response পেলেই আমি test শেষ করি না। Response body এবং resulting application state-ও validate করি।",
      },

      {
        type: "heading",
        text: "3. Request Validate করি",
      },

      {
        type: "paragraph",
        text:
          "আমি প্রথমেই check করি application সঠিক request পাঠাচ্ছে কিনা।",
      },

      {
        type: "paragraph",
        text:
          "আমি HTTP method, endpoint, request headers, authentication information, request body, field names, values এবং data types verify করি।",
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
          "Unnecessary বা unexpected fields পাঠানো হচ্ছে কিনা এবং request API contract-এর সাথে match করছে কিনা তাও check করি।",
      },

      {
        type: "heading",
        text: "4. Required এবং Optional Fields Test করি",
      },

      {
        type: "paragraph",
        text:
          "এরপর API-এর validation rules test করি।",
      },

      {
        type: "paragraph",
        text:
          "যদি content mandatory হয়, তাহলে missing, empty, null এবং incorrectly typed values test করি।",
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
          "API-এর উচিত invalid input reject করা এবং appropriate response দেওয়া। API testing-এর মাধ্যমে এমন validation gaps পাওয়া যায় যা UI testing-এর মাধ্যমে সবসময় obvious হয় না।",
      },

      {
        type: "heading",
        text: "5. Boundary Values Test করি",
      },

      {
        type: "paragraph",
        text:
          "Input length বা numerical values-এর উপর restriction থাকলে boundary testing বিশেষভাবে useful।",
      },

      {
        type: "paragraph",
        text:
          "ধরুন requirement অনুযায়ী post content 1 থেকে 500 characters-এর মধ্যে হতে হবে।",
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
          "শুধু 500 characters কাজ করে কিনা সেটাই গুরুত্বপূর্ণ নয়। 0 এবং 501 characters-এ কী হয় সেটাও জানতে চাই।",
      },

      {
        type: "paragraph",
        text:
          "Boundary conditions defects-এর common source।",
      },

      {
        type: "heading",
        text: "6. Invalid এবং Unexpected Values Test করি",
      },

      {
        type: "paragraph",
        text:
          "Application সাধারণত যে values পাঠাবে না, সেগুলোও আমি চেষ্টা করি।",
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
          "Backend যেন blindly invalid data accept না করে সেটি verify করি। API contract অনুযায়ী server-এর উচিত invalid input process না করে appropriate client-error response দেওয়া।",
      },

      {
        type: "heading",
        text: "7. Authentication এবং Authorization Test করি",
      },

      {
        type: "paragraph",
        text:
          "Authentication testing API testing-এর অন্যতম গুরুত্বপূর্ণ অংশ।",
      },

      {
        type: "paragraph",
        text:
          "আমি valid token, missing token, invalid token এবং expired token-এর মতো scenarios test করি।",
      },

      {
        type: "code",
        language: "http",
        code: "Authorization: Bearer invalid_token",
      },

      {
        type: "paragraph",
        text:
          "Valid authentication credentials ছাড়া API request reject করা উচিত।",
      },

      {
        type: "heading",
        text: "Authentication বনাম Authorization",
      },

      {
        type: "paragraph",
        text:
          "এই দুইটি concept সহজেই mix up করা যায়।",
      },

      {
        type: "paragraph",
        text:
          "Authentication-এর প্রশ্ন: তুমি কে?",
      },

      {
        type: "paragraph",
        text:
          "Authorization-এর প্রশ্ন: তুমি কী করতে পারবে?",
      },

      {
        type: "paragraph",
        text:
          "উদাহরণস্বরূপ, একজন user successfully authenticated হতে পারে, কিন্তু অন্য user-এর post delete করার permission তার নাও থাকতে পারে।",
      },

      {
        type: "heading",
        text: "8. Different User Roles Test করি",
      },

      {
        type: "paragraph",
        text:
          "ধরুন application-এ Regular User, Moderator এবং Admin role আছে।",
      },

      {
        type: "code",
        language: "http",
        code: "DELETE /api/posts/{id}",
      },

      {
        type: "paragraph",
        text:
          "প্রতিটি role-এর appropriate permission আছে কিনা verify করব।",
      },

      {
        type: "list",
        items: [
          "Regular User → নিজের post delete করতে পারবে।",
          "Regular User → অন্য user-এর post delete করতে পারবে না।",
          "Moderator → Eligible content moderate করতে পারবে।",
          "Admin → Administrative permissions থাকবে।",
        ],
      },

      {
        type: "paragraph",
        text:
          "UI-এর বাইরে API-কে independently এই rules enforce করতে হবে। UI থেকে একটি button hide করাই sufficient authorization নয়।",
      },

      {
        type: "heading",
        text: "9. Response Structure Validate করি",
      },

      {
        type: "paragraph",
        text:
          "শুধু response এসেছে কিনা তা check করি না। Response-এর content-ও validate করি।",
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
          "Required fields আছে কিনা, field names correct কিনা, data types সঠিক কিনা, values request-এর সাথে match করছে কিনা, IDs সঠিকভাবে generate হচ্ছে কিনা, status values valid কিনা এবং unexpected sensitive information expose হচ্ছে কিনা—সব verify করি।",
      },

      {
        type: "heading",
        text: "10. শুধু Status Code-এর উপর Trust করি না",
      },

      {
        type: "paragraph",
        text:
          "এটি API testing-এর সবচেয়ে গুরুত্বপূর্ণ lessons-এর একটি।",
      },

      {
        type: "paragraph",
        text:
          "ধরুন API 200 OK return করল, কিন্তু response-এ failed status আছে অথবা requested data আসলে create হয়নি।",
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
          "Technically request একটি successful HTTP response পেয়েছে। কিন্তু functionally কিছু ভুল হয়েছে।",
      },

      {
        type: "paragraph",
        text:
          "তাই আমি শুধু status code নয়, বরং Status Code + Response Body + Business Logic + Backend State validate করি।",
      },

      {
        type: "heading",
        text: "11. Error Handling Test করি",
      },

      {
        type: "paragraph",
        text:
          "Real systems fail। তাই system fail করলে API কীভাবে behave করে সেটাও test করি।",
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
          "API appropriate HTTP status code, meaningful error response, consistent response structure, useful error message এবং unnecessary internal information expose না করে কিনা verify করি।",
      },

      {
        type: "paragraph",
        text:
          "একটি ভালো API graceful এবং predictableভাবে fail করা উচিত।",
      },

      {
        type: "heading",
        text: "12. Duplicate Requests এবং Idempotency Test করি",
      },

      {
        type: "paragraph",
        text:
          "ধরুন application slow মনে হওয়ায় user Create Post button একাধিকবার tap করল।",
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
          "System একটি post create করবে নাকি multiple duplicate records তৈরি করবে তা verify করি।",
      },

      {
        type: "paragraph",
        text:
          "Expected behavior business requirement-এর উপর নির্ভর করবে। কিন্তু গুরুত্বপূর্ণ বিষয় হলো এটি intentionally test করা।",
      },

      {
        type: "paragraph",
        text:
          "Payments, orders বা অন্য critical transactions-এর মতো APIs-এর ক্ষেত্রে duplicate-request handling বিশেষভাবে গুরুত্বপূর্ণ।",
      },

      {
        type: "heading",
        text: "13. Data Consistency Verify করি",
      },

      {
        type: "paragraph",
        text:
          "ধরুন API বলল post successfully created হয়েছে।",
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
          "আমি সবসময় এখানেই test complete মনে করি না। Created record-টি আবার retrieve করলে সত্যিই available কিনা verify করি।",
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
          "GET request থেকে পাওয়া data এবং create করার সময় পাঠানো data consistent কিনা verify করি।",
      },

      {
        type: "heading",
        text: "14. UI-এর মাধ্যমেও API Test করি",
      },

      {
        type: "paragraph",
        text:
          "API testing এবং UI testing-কে সবসময় completely separate activity হিসেবে দেখা উচিত নয়।",
      },

      {
        type: "paragraph",
        text:
          "অনেক সময় application-এর মাধ্যমে একটি action perform করে তার পেছনে হওয়া API request validate করি।",
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
          "এতে feature-এর একটি end-to-end view পাওয়া যায় এবং issue frontend, API request, backend logic নাকি data persistence-এর কোথায় হচ্ছে তা identify করা সহজ হয়।",
      },

      {
        type: "heading",
        text: "15. আমার Practical API Testing Checklist",
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
          "Exact testing scope API-এর purpose, risk এবং business impact-এর উপর নির্ভর করে।",
      },

      {
        type: "heading",
        text: "API Testing-এর সময় আমি যে Bug পেতে পারি",
      },

      {
        type: "paragraph",
        text:
          "ধরুন requirement বলছে: একজন user শুধুমাত্র নিজের post delete করতে পারবে।",
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
          "যদি post 12345 অন্য একজন user-এর হয়, তাহলে API request reject করা উচিত।",
      },

      {
        type: "paragraph",
        text:
          "Actual Result: API 200 OK return করে এবং post delete হয়ে যায়।",
      },

      {
        type: "paragraph",
        text:
          "Expected Result: Authenticated user postটির owner না হওয়ায় API request reject করা উচিত।",
      },

      {
        type: "paragraph",
        text:
          "এটি শুধু একটি UI bug নয়। UI-তে Delete button hidden থাকলেও insecure API operation-টি allow করতে পারে।",
      },

      {
        type: "heading",
        text: "API Testing-এর জন্য আমি যেসব Tools ব্যবহার করি",
      },

      {
        type: "list",
        items: [
          "Postman",
          "Browser Developer Tools",
          "Swagger / OpenAPI",
          "Proxy এবং network inspection tools",
          "Application logs",
          "Database বা backend validation tools, যেখানে access available থাকে",
        ],
      },

      {
        type: "paragraph",
        text:
          "Tool কোনটি ব্যবহার করছি সেটাই সবচেয়ে গুরুত্বপূর্ণ নয়। গুরুত্বপূর্ণ হলো কী validate করতে হবে এবং কেন করতে হবে তা জানা।",
      },

      {
        type: "heading",
        text: "API Testing-এর পেছনে QA Mindset",
      },

      {
        type: "paragraph",
        text:
          "আমার কাছে API testing মানে শুধু: একটি request পাঠানো এবং response check করা নয়।",
      },

      {
        type: "paragraph",
        text:
          "আমি complete interaction নিয়ে চিন্তা করি:",
      },

      {
        type: "paragraph",
        text:
          "Request → Validation → Authentication → Business Logic → Response → Data Persistence → User Experience",
      },

      {
        type: "paragraph",
        text:
          "এবং continuously প্রশ্ন করি: Invalid data হলে কী হবে? Authentication ছাড়া কী হবে? User authorized না হলে কী হবে? Resource exist না করলে কী হবে? Request repeat হলে কী হবে? Server fail করলে কী হবে?",
      },

      {
        type: "paragraph",
        text:
          "এই প্রশ্নগুলোর মধ্যেই অনেক meaningful defects পাওয়া যায়।",
      },

      {
        type: "callout",
        title: "QA Perspective",
        text:
          "Successful API response মানেই feature সঠিকভাবে কাজ করছে—এমন নয়। একজন QA Engineer হিসেবে আমি status code-এর বাইরে গিয়ে request validation, authorization, response structure, data persistence, error handling এবং UI-এর সাথে consistency validate করি। লক্ষ্য শুধু API কাজ করছে কিনা verify করা নয়; বরং users-এর আগে API কোথায় fail করতে পারে তা খুঁজে বের করা।",
      },

      {
        type: "heading",
        text: "Final Thoughts",
      },

      {
        type: "paragraph",
        text:
          "API testing QA Engineers-কে application-এর এমন একটি layer সম্পর্কে visibility দেয় যা users সরাসরি দেখতে পায় না।",
      },

      {
        type: "paragraph",
        text:
          "একটি strong API testing approach শুধু endpoint 200 OK return করছে কিনা তা check করার মধ্যে সীমাবদ্ধ নয়।",
      },

      {
        type: "paragraph",
        text:
          "এটি Request + Response + Business Rules + Authentication + Authorization + Error Handling + Data Consistency validate করে।",
      },

      {
        type: "paragraph",
        text:
          "লক্ষ্য শুধু API response করছে কিনা verify করা নয়। বরং expected এবং unexpected—উভয় condition-এ API correct, secure, consistent এবং reliableভাবে behave করছে কিনা determine করা।",
      },

      {
        type: "paragraph",
        text:
          "Ultimately, একজন QA Engineer-এর জন্য API testing হলো user যা দেখতে পাচ্ছে তার বাইরে গিয়ে system আসলে কী করছে তা validate করার অন্যতম effective উপায়।",
      },
    ],
  },

  "what-i-check-when-testing-a-mobile-app": {
    title: "একটি Mobile App Test করার সময় আমি কী কী Check করি",

    excerpt:
      "Functionality, interruptions, devices, network conditions এবং real-world mobile behavior নিয়ে একটি practical testing checklist।",

    content: [
      {
        type: "paragraph",
        text:
          "Mobile application শুধু কয়েকটি screen এবং button-এর collection নয়। একটি ভালো mobile app-কে বিভিন্ন devices, operating systems, screen sizes, network conditions এবং real-world usage patterns-এর মধ্যে reliableভাবে কাজ করতে হয়। Mobile application test করার সময় আমি শুধু feature কাজ করছে কিনা verify করি না। Users unexpectedভাবে interact করলে application কীভাবে behave করে সেটাও দেখি।",
      },

      {
        type: "heading",
        text: "1. Core User Journey দিয়ে শুরু করি",
      },

      {
        type: "paragraph",
        text:
          "Edge cases explore করার আগে আমি প্রথমে primary user journey শুরু থেকে শেষ পর্যন্ত কাজ করছে কিনা নিশ্চিত করি। User-এর সবচেয়ে গুরুত্বপূর্ণ actions identify করে complete flow কোনো interruption ছাড়া কাজ করছে কিনা verify করি।",
      },

      {
        type: "list",
        items: [
          "App installation এবং first launch",
          "Registration এবং login",
          "Onboarding এবং permissions",
          "Major screens-এর মধ্যে navigation",
          "Important data create, edit বা delete করা",
          "Logout এবং re-login",
          "Flow complete করার পর app relaunch",
        ],
      },

      {
        type: "paragraph",
        text:
          "এটি আমাকে একটি baseline দেয়। Core journey-ই যদি unstable হয়, তাহলে সঙ্গে সঙ্গে deep exploratory testing-এ যাওয়ার খুব বেশি value নেই।",
      },

      {
        type: "heading",
        text: "2. Different Devices এবং Screen Sizes Test করি",
      },

      {
        type: "paragraph",
        text:
          "একটি mobile application device অনুযায়ী ভিন্নভাবে behave করতে পারে। Screen dimensions, aspect ratios, OS versions, hardware capabilities এবং manufacturer-specific behavior user experience-কে affect করতে পারে।",
      },

      {
        type: "list",
        items: [
          "Different screen sizes এবং resolutions",
          "Different Android এবং iOS versions",
          "Small এবং large devices",
          "Different device orientations",
          "Different performance capabilities-এর devices",
          "Notch, Dynamic Island এবং safe-area behavior",
        ],
      },

      {
        type: "paragraph",
        text:
          "বিশেষভাবে আমি দেখি কোনো layout একটি device-এ ঠিক থাকলেও অন্য device-এ clipped, misaligned বা inaccessible হয়ে যাচ্ছে কিনা।",
      },

      {
        type: "heading",
        text: "3. App Lifecycle Behavior Check করি",
      },

      {
        type: "paragraph",
        text:
          "Mobile users প্রায়ই application switch করে, phone lock করে, notifications receive করে অথবা application unexpectedly terminate করে। তাই application lifecycle-এর বিভিন্ন stage-এ behavior কেমন তা আমি সবসময় test করি।",
      },

      {
        type: "list",
        items: [
          "Fresh state থেকে app launch করা",
          "App background-এ পাঠিয়ে আবার return করা",
          "App ব্যবহার করার সময় device lock এবং unlock করা",
          "Force close করে আবার app open করা",
          "Multiple applications-এর মধ্যে switch করা",
          "Device restart করে আবার app launch করা",
        ],
      },

      {
        type: "paragraph",
        text:
          "এই actions-এর পর application user state সঠিকভাবে preserve বা reset করছে কিনা তাও verify করি। Unexpected data loss বা navigation change serious usability issue তৈরি করতে পারে।",
      },

      {
        type: "heading",
        text: "4. Network Conditions Test করি",
      },

      {
        type: "paragraph",
        text:
          "একটি mobile application-এর উচিত সবসময় user-এর fast এবং stable internet connection আছে ধরে না নেওয়া। তাই network behavior আমার testing-এর গুরুত্বপূর্ণ একটি অংশ।",
      },

      {
        type: "list",
        items: [
          "Stable Wi-Fi connection",
          "Mobile data",
          "Slow network conditions",
          "Temporary network interruption",
          "Wi-Fi থেকে mobile data-তে switch করা",
          "API request চলাকালীন network off করা",
          "Offline state-এর পর connectivity restore করা",
        ],
      },

      {
        type: "paragraph",
        text:
          "User meaningful error message পাচ্ছে কিনা, loading states properly handle হচ্ছে কিনা এবং connectivity ফিরে আসার পর application correctly recover করছে কিনা check করি।",
      },

      {
        type: "heading",
        text: "5. Permissions Validate করি",
      },

      {
        type: "paragraph",
        text:
          "Mobile applications প্রায়ই camera, location, notifications, contacts, photos অথবা microphone-এর মতো permissions-এর উপর depend করে। আমি permission granted এবং permission denied—দুই ধরনের scenario test করি।",
      },

      {
        type: "list",
        items: [
          "Permission request এলে Allow করা",
          "Permission Deny করা",
          "একাধিকবার permission Deny করা",
          "Device settings থেকে permission আবার enable করা",
          "Permission status পরিবর্তনের পর feature ব্যবহার করা",
          "Permission unavailable হলে application-এর behavior check করা",
        ],
      },

      {
        type: "paragraph",
        text:
          "লক্ষ্য শুধু permission prompt আসছে কিনা verify করা নয়। প্রতিটি permission state application gracefully handle করছে কিনা সেটিও নিশ্চিত করা।",
      },

      {
        type: "heading",
        text: "6. Interruptions এবং Real-World Scenarios Test করি",
      },

      {
        type: "paragraph",
        text:
          "Real users controlled testing environment-এ application ব্যবহার করে না। Call, notification, alarm, system dialog, screenshot এবং অন্যান্য interruptions যেকোনো সময় ঘটতে পারে।",
      },

      {
        type: "list",
        items: [
          "App ব্যবহার করার সময় phone call receive করা",
          "Active flow-এর সময় notification receive করা",
          "Notification panel open করা",
          "Transaction বা form submission-এর সময় device lock করা",
          "যেখানে applicable সেখানে screenshot নেওয়া",
          "Long-running operation-এর সময় application switch করা",
        ],
      },

      {
        type: "paragraph",
        text:
          "Interruption-এর পরে application correctly resume করছে কিনা এবং entered data, transaction state অথবা navigation state unexpectedly lost হচ্ছে কিনা verify করি।",
      },

      {
        type: "heading",
        text: "7. UI, Usability এবং Accessibility Check করি",
      },

      {
        type: "paragraph",
        text:
          "Functional correctness mobile quality-এর শুধুমাত্র একটি অংশ। Interface clear, consistent এবং বিভিন্ন devices-এ usable কিনা তাও evaluate করি।",
      },

      {
        type: "list",
        items: [
          "Text clipping এবং overlapping elements",
          "Incorrect spacing বা alignment",
          "যেসব buttons tap করা কঠিন",
          "Keyboard input fields cover করছে কিনা",
          "Unexpected scrolling behavior",
          "Landscape এবং portrait layout issues",
          "Inconsistent typography এবং icons",
          "Poor contrast বা unreadable text",
          "Missing loading, empty বা error states",
        ],
      },

      {
        type: "paragraph",
        text:
          "Accessibility-এর basic বিষয়গুলোও বিবেচনা করি—যেমন readable text, sufficient touch targets, meaningful labels এবং important information শুধু color-এর উপর নির্ভর করে communicate করা হচ্ছে কিনা।",
      },

      {
        type: "heading",
        text: "8. Data Persistence Validate করি",
      },

      {
        type: "paragraph",
        text:
          "Data persistence-এর দিকেও আমি বিশেষভাবে নজর দিই। Application close, restart বা temporarily interrupted হওয়ার কারণে user যেন unexpectedly information হারিয়ে না ফেলে।",
      },

      {
        type: "list",
        items: [
          "Application close এবং reopen করা",
          "Logout এবং আবার login করা",
          "Screen change করে আবার ফিরে আসা",
          "Existing information edit করা",
          "Data create করে relaunch-এর পর verify করা",
          "Data delete করে সেটি deleted অবস্থায় আছে কিনা verify করা",
        ],
      },

      {
        type: "paragraph",
        text:
          "প্রতিটি transition-এর পরে expected state এবং actual state compare করি। Local storage, caching বা background synchronization-এর উপর heavily dependent applications-এর ক্ষেত্রে এটি বিশেষভাবে গুরুত্বপূর্ণ।",
      },

      {
        type: "heading",
        text: "9. Performance এবং Stability Test করি",
      },

      {
        type: "paragraph",
        text:
          "একটি application functionally correct হলেও slow, unstable অথবা resource-heavy হলে user experience খারাপ হতে পারে। তাই functional testing-এর সময়ও performance-related issues খেয়াল করি।",
      },

      {
        type: "list",
        items: [
          "Slow screen loading",
          "Long API response handling",
          "Freezing বা UI unresponsiveness",
          "Unexpected crashes",
          "Excessive loading indicators",
          "Slow scrolling বা animations",
          "Repeated actions-এর কারণে instability",
          "Memory বা battery-related concerns",
        ],
      },

      {
        type: "paragraph",
        text:
          "Performance শুধু testing-এর শেষে test করার বিষয় নয়। Functional testing-এর সময় abnormal behavior দেখলে একই test cycle-এর অংশ হিসেবে আমি সেটি investigate করি।",
      },

      {
        type: "heading",
        text: "10. Error Handling Verify করি",
      },

      {
        type: "paragraph",
        text:
          "আমি ইচ্ছাকৃতভাবে application-কে fail করানোর চেষ্টা করি। এর মাধ্যমে বোঝা যায় product শুধু successful scenarios-এর জন্য design করা হয়েছে কিনা, নাকি কিছু ভুল হলে users-কে safely guide করতে পারে।",
      },

      {
        type: "list",
        items: [
          "Invalid input",
          "Missing required fields",
          "Incorrect credentials",
          "Failed API requests",
          "Network timeout",
          "Server errors",
          "Expired sessions",
          "Unauthorized actions",
          "Unexpected বা unavailable data",
        ],
      },

      {
        type: "paragraph",
        text:
          "Good error handling-এর মাধ্যমে user কী হয়েছে এবং এখন কী করতে পারে তা বুঝতে পারবে। Generic, misleading অথবা missing error message একটি recoverable problem-কে frustrating experience-এ পরিণত করতে পারে।",
      },

      {
        type: "callout",
        title: "QA Perspective",
        text:
          "Mobile app test করার সময় আমি শুধু test case-এর মধ্যে সীমাবদ্ধ থাকি না। আমি প্রশ্ন করি: User network হারালে কী হবে? ঠিক এই মুহূর্তে app close করলে কী হবে? Permission deny করলে কী হবে? Button repeatedly tap করলে কী হবে? Device slow হলে কী হবে? এই প্রশ্নগুলো প্রায়ই এমন issues uncover করে যা happy-path testing কখনো খুঁজে পায় না।",
      },

      {
        type: "heading",
        text: "11. Regression Testing করি",
      },

      {
        type: "paragraph",
        text:
          "যখন নতুন feature বা bug fix introduce করা হয়, তখন আমি শুধু changed area test করি না। কোন features potentially affected হতে পারে তা identify করে targeted regression tests চালাই।",
      },

      {
        type: "list",
        items: [
          "Previously working critical flows",
          "Related features",
          "Affected screens-এর মধ্যে navigation",
          "API-dependent functionality",
          "Authentication এবং session behavior",
          "Data creation এবং persistence",
          "Platform-specific functionality",
        ],
      },

      {
        type: "paragraph",
        text:
          "লক্ষ্য হলো একটি problem fix করতে গিয়ে অন্য কোথাও নতুন problem introduce হয়েছে কিনা নিশ্চিত করা।",
      },

      {
        type: "heading",
        text: "12. Real User-এর মতো Test করি",
      },

      {
        type: "paragraph",
        text:
          "সবশেষে আমি test cases থেকে কিছুটা বের হয়ে application-টি একজন real user-এর মতো ব্যবহার করি। Naturally product explore করি, features-এর মধ্যে move করি, mistakes করি, flows interrupt করি এবং unexpected actions try করি।",
      },

      {
        type: "paragraph",
        text:
          "এই exploratory mindset-এর মাধ্যমে প্রায়ই সবচেয়ে interesting issues পাওয়া যায়। Test case আমাকে বলে কী হওয়ার কথা, কিন্তু real-user testing আমাকে বুঝতে সাহায্য করে product বাস্তবে কেমন feel এবং behave করে।",
      },

      {
        type: "heading",
        text: "Final Thoughts",
      },

      {
        type: "paragraph",
        text:
          "Mobile testing শুধু buttons কাজ করছে কিনা বা screens correctly load হচ্ছে কিনা check করা নয়। এটি এমন একটি unpredictable environment-এ software কীভাবে behave করে তা বোঝার বিষয় যেখানে real users application-এর সাথে interact করে।",
      },

      {
        type: "paragraph",
        text:
          "আমার approach হলো structured functional testing-এর সাথে exploratory testing, negative scenarios, device coverage, lifecycle testing, network validation, regression testing এবং real-world usage combine করা। লক্ষ্য simple: শুধু feature কাজ করছে কিনা verify করা নয়; real users unexpectedভাবে interact করলেও feature-টি কাজ করতে থাকে কিনা verify করা।",
      },
    ],
  },
};