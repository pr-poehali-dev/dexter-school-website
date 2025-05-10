
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import { motion } from "framer-motion";
import { CheckCircle, Target, Trophy, Users } from "lucide-react";

const featuredCourses: CourseProps[] = [
  {
    id: "1",
    title: "Алгебра для 5-7 классов",
    description: "Базовый курс по алгебре для учеников 5-7 классов. Разбираем основные темы и решаем много задач.",
    level: "beginner",
    price: 5900,
    duration: "3 месяца",
    image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "2",
    title: "Подготовка к ОГЭ по математике",
    description: "Интенсивный курс подготовки к ОГЭ. Разбираем все типы заданий и тренируемся решать варианты.",
    level: "intermediate",
    price: 8900,
    duration: "6 месяцев",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "3",
    title: "Высшая математика для поступающих в ВУЗы",
    description: "Продвинутый курс для абитуриентов и студентов первых курсов. Матанализ, линейная алгебра и аналитическая геометрия.",
    level: "advanced",
    price: 12900,
    duration: "8 месяцев",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  }
];

const features = [
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Индивидуальный подход",
    description: "Каждый ученик получает персональное внимание и учебный план, адаптированный под его потребности."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Опытные преподаватели",
    description: "Наши учителя имеют многолетний опыт преподавания и научные степени в области математики."
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Уникальная методика",
    description: "Мы используем проверенную методику, которая делает изучение математики интересным и эффективным."
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Гарантия результата",
    description: "Наши ученики показывают высокие результаты на экзаменах и олимпиадах по математике."
  }
];

const Index = () => {
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
      
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Почему выбирают Dexter School
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Мы создаем идеальные условия для эффективного изучения математики
            </p>
          </div>

          <motion.div 
            className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Популярные курсы
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Выберите курс, который подходит именно вам
            </p>
          </div>

          <motion.div 
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <a href="/courses">Посмотреть все курсы</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Готовы начать обучение?</span>
              <span className="block text-indigo-200">Запишитесь на бесплатное пробное занятие прямо сейчас.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button variant="secondary" size="lg">
                  Записаться на пробное занятие
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
