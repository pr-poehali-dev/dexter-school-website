import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const courses: CourseProps[] = [
  {
    id: "1",
    title: "Алгебра для 5-7 классов",
    description:
      "Базовый курс по алгебре для учеников 5-7 классов. Разбираем основные темы и решаем много задач.",
    level: "beginner",
    price: 5900,
    duration: "3 месяца",
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "2",
    title: "Подготовка к ОГЭ по математике",
    description:
      "Интенсивный курс подготовки к ОГЭ. Разбираем все типы заданий и тренируемся решать варианты.",
    level: "intermediate",
    price: 8900,
    duration: "6 месяцев",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "3",
    title: "Высшая математика для поступающих в ВУЗы",
    description:
      "Продвинутый курс для абитуриентов и студентов первых курсов. Матанализ, линейная алгебра и аналитическая геометрия.",
    level: "advanced",
    price: 12900,
    duration: "8 месяцев",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: "4",
    title: "Геометрия для 7-9 классов",
    description:
      "Полный курс геометрии для средней школы. Планиметрия, стереометрия, доказательства теорем.",
    level: "intermediate",
    price: 6900,
    duration: "4 месяца",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "5",
    title: "Подготовка к ЕГЭ по математике (профиль)",
    description:
      "Полная подготовка к профильному ЕГЭ по математике. Разбор всех типов заданий, стратегии решения.",
    level: "advanced",
    price: 12900,
    duration: "9 месяцев",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "6",
    title: "Математика для начальной школы",
    description:
      "Курс математики для учеников 1-4 классов. Основы арифметики, решение текстовых задач, геометрических фигур.",
    level: "beginner",
    price: 4900,
    duration: "4 месяца",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
  },
];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "" || course.level === levelFilter;

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <header className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Наши курсы</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Выберите курс, который подходит вашему уровню и целям обучения
          </p>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <Label htmlFor="search" className="mb-2 block">
                Поиск курсов
              </Label>
              <Input
                id="search"
                placeholder="Введите название курса..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="level" className="mb-2 block">
                Уровень сложности
              </Label>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger id="level">
                  <SelectValue placeholder="Все уровни" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все уровни</SelectItem>
                  <SelectItem value="beginner">Начальный</SelectItem>
                  <SelectItem value="intermediate">Средний</SelectItem>
                  <SelectItem value="advanced">Продвинутый</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <div key={course.id}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Курсы не найдены
              </h3>
              <p className="text-gray-500">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;
