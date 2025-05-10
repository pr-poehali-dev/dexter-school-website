import MilestoneItem, { MilestoneProps } from "./MilestoneItem";

const milestones: MilestoneProps[] = [
  {
    year: 2018,
    title: "Основание школы",
    description:
      "Dexter School начинает свою работу с небольшой команды энтузиастов и нескольких десятков учеников.",
  },
  {
    year: 2019,
    title: "Запуск онлайн-платформы",
    description:
      "Мы создали собственную образовательную платформу для проведения занятий и отслеживания прогресса учеников.",
  },
  {
    year: 2020,
    title: "Расширение команды",
    description:
      "К нам присоединились новые преподаватели, мы разработали новые курсы и программы обучения.",
  },
  {
    year: 2021,
    title: "Первые высокие результаты",
    description:
      "Наши ученики показали отличные результаты на ЕГЭ и ОГЭ, многие поступили в престижные вузы.",
  },
  {
    year: 2022,
    title: "1000 учеников",
    description:
      "Мы преодолели отметку в 1000 учеников и продолжаем расти, сохраняя индивидуальный подход к каждому.",
  },
  {
    year: 2023,
    title: "Международное признание",
    description:
      "Наша методика получила признание на международной конференции по образованию.",
  },
];

const HistorySection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        История школы
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <MilestoneItem
              key={milestone.year}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
