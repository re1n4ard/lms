import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, FileText, User, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

interface Subject {
  id: number;
  name: string;
  instructor: string;
  progress: number;
  color: string;
  totalLessons: number;
  completedLessons: number;
  nextClass: string;
  assignments: number;
  grade: string;
}

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const navigate = useNavigate();
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "gradient-primary",
      secondary: "gradient-secondary", 
      accent: "gradient-accent",
      purple: "gradient-purple"
    };
    return colorMap[color as keyof typeof colorMap] || "gradient-primary";
  };

  const getBadgeVariant = (color: string): "default" | "secondary" | "destructive" | "outline" => {
    const variantMap: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      primary: "default",
      secondary: "secondary",
      accent: "destructive",
      purple: "outline"
    };
    return variantMap[color] || "default";
  };

  return (
    <Card
      onClick={() => navigate(`/subjects`)}
      role="button"
      tabIndex={0}
      className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 animate-fade-in"
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getColorClasses(subject.color)}`} />
              <h3 className="font-semibold text-lg">{subject.name}</h3>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-3 w-3 mr-1" />
              {subject.instructor}
            </div>
          </div>
          <Badge variant={getBadgeVariant(subject.color)} className="font-medium">
            {subject.grade}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Course Progress</span>
            <span className="text-sm text-muted-foreground">
              {subject.completedLessons}/{subject.totalLessons} lessons
            </span>
          </div>
          <ProgressBar 
            value={subject.progress} 
            className="h-2" 
            color={subject.color}
          />
          <div className="text-right">
            <span className="text-sm font-semibold text-primary">
              {subject.progress}% Complete
            </span>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
            <Calendar className="h-4 w-4 text-primary" />
            <div>
              <p className="font-medium">Next Class</p>
              <p className="text-xs text-muted-foreground">{subject.nextClass}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
            <FileText className="h-4 w-4 text-accent" />
            <div>
              <p className="font-medium">Assignments</p>
              <p className="text-xs text-muted-foreground">{subject.assignments} pending</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full group-hover:shadow-medium transition-all duration-300" 
          variant="outline"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Continue Learning
          <ChevronRight className="h-4 w-4 ml-auto transform group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </CardContent>
    </Card>
  );
}