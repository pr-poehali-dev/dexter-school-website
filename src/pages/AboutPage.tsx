
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const teachers = [
  {
    id: 1,
    name: "Александр Иванов",
    position: "Ведущий преподаватель, кандидат физ.-мат. наук",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bio: "Александр более 15 лет преподает математику. Закончил механико-математический факультет МГУ, имеет степень кандидата физико-математических наук. Специализируется на подготовке к ЕГЭ и олимпиадам."
  },
  {
    id: 2,
    name: "Елена Петрова",
    position: "Преподаватель математики для начальной и средней школы",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    bio: "Елена имеет 10-летний опыт работы с детьми. Выпускница педагогического университета. Находит индивидуальный подход к каждому ребенку и умеет объяснить сложные вещи простым языком."
  },
  {
    id: 3,
    name: "Михаил Сидоров",
    position: "Преподаватель высшей математики, PhD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Михаил — выпускник МФТИ, имеет степень PhD по математике. Специализируется на высшей математике для студентов и абитуриентов. Автор ряда научных публикаций и учебных пособий."
  },
  {
    id: 4,
    name: "Анна Козлова",
    position: "Преподаватель геометрии, методист",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "Анна — специалист по геометрии, более 8 лет опыта преподавания. Методист, автор собственной методики преподавания геометрии. Помогает ученикам развить пространственное мышление."
  }
];

const milestones = [
  {
    year: 2018,
    title: "Основание школы",
    description: "Dexter School начинает свою работу с небольшой команды энтузиастов и нескольких десятков учеников."
  },
  {
    year: 2019,
    title: "Запуск онлайн-платформы",
    description: "Мы создали собственную образовательную платформу для проведения занятий и отслеживания прогресса учеников."
  },
  {
    year: 2020,
    title: "Расширение команды",
    description: "К нам присоединились новые преподаватели, мы разработали новые курсы и программы обучения."
  },
  {
    year: 2021,
    title: "Первые высокие результаты",
    description: "Наши ученики показали отличные результаты на ЕГЭ и ОГЭ, многие поступили в престижные вузы."
  },
  {
    year: 2022,
    title: "1000 учеников",
    description: "Мы преодолели отметку в 1000 учеников и продолжаем расти, сохраняя индивидуальный подход к каждому."
  },
  {
    year: 2023,
    title: "Международное признание",
    description: "Наша методика получила признание на международной конференции по образованию."
  }
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <header className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            О школе Dexter
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Мы помогаем ученикам полюбить математику и достичь высоких результатов
          </motion.p>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="mission">
            <TabsList className="mb-8 w-full grid grid-cols-3">
              <TabsTrigger value="mission">Миссия</TabsTrigger>
              <TabsTrigger value="team">Команда</TabsTrigger>
              <TabsTrigger value="history">История</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    В Dexter School мы верим, что каждый ученик может полюбить математику и достичь высоких результатов при правильном подходе к обучению.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Наша миссия — сделать изучение математики понятным, интересным и эффективным. Мы стремимся разрушить стереотип о том, что математика — это скучный и сложный предмет.
                  </p>
                  <p className="text-lg text-gray-700">
                    Мы развиваем логическое мышление, применяем индивидуальный подход к каждому ученику и создаем дружественную атмосферу, в которой ученики не боятся задавать вопросы и совершать ошибки.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" 
                    alt="Студенты изучают математику"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="team">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Наши преподаватели</h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {teachers.map((teacher) => (
                    <motion.div key={teacher.id} variants={itemVariants}>
                      <Card className="h-full overflow-hidden">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <Avatar className="w-24 h-24 mb-4">
                            <AvatarImage src={teacher.image} alt={teacher.name} />
                            <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <h3 className="text-lg font-medium text-gray-900 mb-1">{teacher.name}</h3>
                          <p className="text-primary text-sm mb-4">{teacher.position}</p>
                          <p className="text-gray-500 text-sm">{teacher.bio}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">История школы</h2>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
                  <motion.div 
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {milestones.map((milestone, index) => (
                      <motion.div 
                        key={milestone.year} 
                        className={`relative flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:gap-8`}
                        variants={itemVariants}
                      >
                        <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                          <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md">
                            <div className="text-primary text-xl font-bold mb-2">{milestone.year}</div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{milestone.title}</h3>
                            <p className="text-gray-500">{milestone.description}</p>
                          </div>
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10"></div>

                        <div className="md:hidden bg-white p-6 rounded-lg shadow-md w-full ml-8">
                          <div className="text-primary text-xl font-bold mb-2">{milestone.year}</div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-500">{milestone.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
