import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export interface TeacherProps {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface TeacherCardProps {
  teacher: TeacherProps;
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={teacher.image} alt={teacher.name} />
          <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          {teacher.name}
        </h3>
        <p className="text-primary text-sm mb-4">{teacher.position}</p>
        <p className="text-gray-500 text-sm">{teacher.bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
