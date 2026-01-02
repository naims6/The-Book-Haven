import React, { useState } from "react";
import { MessageSquare, ChevronDown, ChevronUp } from "lucide-react";
import Title2 from "../../Components/Title2";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I add books to my reading list?",
      answer:
        "Simply search for any book in our extensive database and click the 'Add to Reading List' button. You can organize your lists by genre, priority, or custom categories. All your lists sync across devices automatically.",
    },
    {
      question: "Is The Book Haven completely free to use?",
      answer:
        "Yes! Our core features are completely free. You can create an account, add books, write reviews, join discussions, and participate in reading challenges at no cost. We offer premium features for power users who want advanced analytics and exclusive content.",
    },
    {
      question: "How does the community rating system work?",
      answer:
        "Our rating system is community-driven. Each book receives an average rating based on reviews from our users. Ratings are weighted by review quality and user credibility. You can rate books on a 1-5 star scale and optionally write detailed reviews.",
    },
    {
      question: "Can I join or create book clubs?",
      answer:
        "Absolutely! You can join existing book clubs based on your interests or create your own. Book clubs can be public or private, and they include discussion forums, reading schedules, and member management tools.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "We take community safety seriously. You can report any content by clicking the three-dot menu next to the post and selecting 'Report'. Our moderation team reviews all reports within 24 hours and takes appropriate action.",
    },
    {
      question: "Are my reading habits private?",
      answer:
        "Your reading lists and progress are private by default. You control what you share publicly through your privacy settings. We never sell your personal data or reading history to third parties.",
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container2 mx-auto px-4">
        <div className="text-center mb-12">
          <Title2>Frequently Asked Questions</Title2>
          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Find quick answers to common questions about The Book Haven
          </p>
        </div>

        <div className="">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 rounded-xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{ color: "var(--color-text-primary)" }}
              >
                <span className="text-lg font-semibold pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp
                    className="w-5 h-5 shrink-0"
                    style={{ color: "var(--color-primary)" }}
                  />
                ) : (
                  <ChevronDown
                    className="w-5 h-5 shrink-0"
                    style={{ color: "var(--color-text-muted)" }}
                  />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "pb-4" : "max-h-0"
                }`}
              >
                <p style={{ color: "var(--color-text-secondary)" }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
