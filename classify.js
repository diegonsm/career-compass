const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: "vR0nVApuMU47iHqNQmoXDP8K9cZ8TNAhjMcvhoRh",
});

(async () => {
  const classify = await cohere.classify({
    examples: [
        { text: "I am looking for jobs that consider diversity", label: "Job" },
        { text: "What are the latest job openings in the tech industry?", label: "Job" },
        { text: "How can I find remote job opportunities?", label: "Job" },
        { text: "Are there any part-time job opportunities available for students?", label: "Job" },
        { text: "Where can I find internships in marketing?", label: "Job" },
        { text: "I need financial aid. Are there any scholarships available for undergraduate students?", label: "Scholarship" },
        { text: "How do I apply for scholarships for graduate studies abroad?", label: "Scholarship" },
        { text: "Are there any scholarships specifically for STEM majors?", label: "Scholarship" },
        { text: "What scholarships are available for minority students?", label: "Scholarship" },
        { text: "Can I get a scholarship for sports achievements?", label: "Scholarship" },
        { text: "I want to volunteer. How can I join local environmental organizations?", label: "Organization" },
        { text: "Are there any organizations in my area focused on mental health advocacy?", label: "Organization" },
        { text: "Which organizations provide support for LGBTQ+ youth?", label: "Organization" },
        { text: "How can I become a member of a professional networking organization?", label: "Organization" },
        { text: "Is there an upcoming tech conference in my city?", label: "Event" },
        { text: "Where can I find workshops on entrepreneurship?", label: "Event" },
        { text: "Are there any cultural festivals happening next month?", label: "Event" },
        { text: "I'm interested in attending a music concert. Any recommendations?", label: "Event" },
        { text: "What are some upcoming art exhibitions in the area?", label: "Event" },
        { text: "How can I find entry-level positions in the healthcare industry?", label: "Job" },
        { text: "Are there any job fairs happening in the next month?", label: "Job" },
        { text: "What are the requirements for applying to software engineering internships?", label: "Job" },
        { text: "I'm a recent graduate looking for finance-related jobs. Any suggestions?", label: "Job" },
        { text: "Where can I find scholarships for studying abroad in Europe?", label: "Scholarship" },
        { text: "Are there any scholarships for first-generation college students?", label: "Scholarship" },
        { text: "How do I renew my scholarship for the next academic year?", label: "Scholarship" },
        { text: "I'm interested in environmental conservation. How can I volunteer for wildlife organizations?", label: "Organization" },
        { text: "Which organizations offer mentorship programs for young entrepreneurs?", label: "Organization" },
        { text: "Are there any organizations hosting community clean-up events this weekend?", label: "Organization" },
        { text: "What are some upcoming literary festivals in the area?", label: "Event" },
        { text: "I want to attend a professional development workshop. Any recommendations?", label: "Event" },
        { text: "How can I get involved in charity events in my community?", label: "Event" },
        { text: "Are there any clubs for photography enthusiasts in the area?", label: "Organization" },
        { text: "I'm interested in joining societies focused on environmental sustainability. Any recommendations?", label: "Organization" },
        { text: "Which foundation provides grants for community development projects?", label: "Organization" },
        { text: "Are there any foundations supporting initiatives for underprivileged children?", label: "Organization" },
        { text: "How can I get involved in volunteering for animal welfare clubs?", label: "Organization" },
        { text: "I'm looking for societies promoting cultural exchange and diversity. Where can I find them?", label: "Organization" },
        { text: "Which foundation offers scholarships for students pursuing careers in healthcare?", label: "Organization" },
        { text: "Are there any local clubs organizing hiking trips?", label: "Organization" },
        { text: "I'm interested in joining a foundation focused on women's rights advocacy. Any suggestions?", label: "Organization" },
        { text: "Where can I find information about societies dedicated to promoting mental health awareness?", label: "Organization" },
    ],
      inputs: [
          "where can i find a job",
          "are there any upcoming diversity hackathons?",
          "which clubs can i join for black students?",
          "how can i get extra funding?",
          "internships for blacks"
      ],
  })

  console.log(classify);
})();