import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как проходят занятия?",
      answer:
        "Занятия проходят в формате видеоконференций с использованием нашей образовательной платформы.",
    },
    {
      question: "Сколько стоит обучение?",
      answer:
        "Стоимость зависит от выбранного курса и интенсивности занятий. Подробности можно узнать на странице каждого курса.",
    },
    {
      question: "Можно ли записаться на пробное занятие?",
      answer:
        "Да, первое занятие бесплатное. Вы можете оценить методику преподавания и решить, подходит ли вам наша школа.",
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Часто задаваемые вопросы
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h4 className="font-medium text-gray-900">{faq.question}</h4>
            <p className="text-gray-500">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
