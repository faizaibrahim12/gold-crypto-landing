import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Swiss Crypto Club?",
      answer:
        "The Swiss Crypto Club (ISCC) is a premium cryptocurrency community founded in Switzerland. We provide trading signals, educational resources, and a network of like-minded investors to help you succeed in the crypto market.",
    },
    {
      question: "How do I join the club?",
      answer:
        "Joining is simple! Select a membership plan that suits your needs, complete the registration process, and you'll immediately gain access to our community, resources, and trading signals.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, bank transfers, and select cryptocurrencies including Bitcoin, Ethereum, and USDT. All payments are processed securely through our encrypted payment system.",
    },
    {
      question: "Can I cancel my membership at any time?",
      answer:
        "Yes, you can cancel your membership at any time. Your access will remain active until the end of your current billing period. We offer a 14-day money-back guarantee for new members.",
    },
    {
      question: "Are the trading signals guaranteed to be profitable?",
      answer:
        "While our signals have a proven track record with an 87% success rate, cryptocurrency trading always carries risk. We provide analysis and recommendations, but profits are never guaranteed. Always invest responsibly.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email, live chat, or through our community Discord server. Premium members have access to priority support with faster response times.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services and membership.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-card border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "border-primary/50 shadow-gold" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle
                      size={20}
                      className={`flex-shrink-0 transition-colors ${
                        openIndex === index ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span className="font-display font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed pl-14">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
