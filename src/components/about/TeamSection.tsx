import TeacherCard, { TeacherProps } from "./TeacherCard";

const teachers: TeacherProps[] = [
  {
    id: 1,
    name: "Александр Иванов",
    position: "Ведущий преподаватель, кандидат физ.-мат. наук",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bio: "Александр более 15 лет преподает математику. Закончил механико-математический факультет МГУ, имеет степень кандидата физико-математических наук. Специализируется на подготовке к ЕГЭ и олимпиадам.",
  },
  {
    id: 2,
    name: "Елена Петрова",
    position: "Преподаватель математики для начальной и средней школы",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    bio: "Елена имеет 10-летний опыт работы с детьми. Выпускница педагогического университета. Находит индивидуальный подход к каждому ребенку и умеет объяснить сложные вещи простым языком.",
  },
  {
    id: 3,
    name: "Михаил Сидоров",
    position: "Преподаватель высшей математики, PhD",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Михаил — выпускник МФТИ, имеет степень PhD по математике. Специализируется на высшей математике для студентов и абитуриентов. Автор ряда научных публикаций и учебных пособий.",
  },
  {
    id: 4,
    name: "Анна Козлова",
    position: "Преподаватель геометрии, методист",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Анна — специалист по геометрии, более 8 лет опыта преподавания. Методист, автор собственной методики преподавания геометрии. Помогает ученикам развить пространственное мышление.",
  },
];

const TeamSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Наши преподаватели
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
