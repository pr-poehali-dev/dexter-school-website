
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  price: number;
  duration: string;
  image: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  const levelColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-blue-100 text-blue-800",
    advanced: "bg-purple-100 text-purple-800",
  };

  const levelLabels = {
    beginner: "Начальный",
    intermediate: "Средний",
    advanced: "Продвинутый",
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="aspect-video relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <Badge 
          className={`absolute top-2 right-2 ${levelColors[course.level]}`}
          variant="outline"
        >
          {levelLabels[course.level]}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <span>
            Длительность: {course.duration}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{course.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="font-bold text-lg">
          {course.price} ₽
        </div>
        <Button>Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
