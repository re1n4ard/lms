import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Clock, Upload } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "HTML/CSS Portfolio Page",
    subject: "Web Development Fundamentals",
    dueDate: "Tomorrow",
    timeLeft: "1 day",
    status: "pending",
    priority: "high",
    type: "Project"
  },
  {
    id: 2,
    title: "JavaScript Calculator",
    subject: "JavaScript Programming", 
    dueDate: "Jan 18",
    timeLeft: "3 days",
    status: "in-progress",
    priority: "high",
    type: "Project"
  },
  {
    id: 3,
    title: "Form Validation",
    subject: "Web Development Fundamentals",
    dueDate: "Jan 12",
    timeLeft: "completed",
    status: "submitted",
    priority: "medium",
    type: "Exercise"
  },
  {
    id: 4,
    title: "React Component Library",
    subject: "Front-End with ReactJS",
    dueDate: "Jan 25",
    timeLeft: "1 week",
    status: "pending",
    priority: "medium",
    type: "Project"
  },
  {
    id: 5,
    title: "DOM Manipulation",
    subject: "JavaScript Programming",
    dueDate: "Jan 20",
    timeLeft: "5 days",
    status: "pending",
    priority: "low",
    type: "Exercise"
  },
  {
    id: 6,
    title: "CSS Grid Layout",
    subject: "Web Development Fundamentals",
    dueDate: "Jan 14",
    timeLeft: "2 days",
    status: "in-progress",
    priority: "medium",
    type: "Project"
  }
];

export default function AssignmentList() {
  const getStatusColor = (status: string) => {
    const statusMap = {
      pending: "warning",
      "in-progress": "accent", 
      submitted: "success",
      overdue: "destructive"
    };
    return statusMap[status as keyof typeof statusMap] || "secondary";
  };

  const getPriorityColor = (priority: string) => {
    const priorityMap = {
      high: "destructive",
      medium: "warning",
      low: "secondary"
    };
    return priorityMap[priority as keyof typeof priorityMap] || "secondary";
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    const variantMap: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      pending: "secondary",
      "in-progress": "default",
      submitted: "outline",
      overdue: "destructive"
    };
    return variantMap[status] || "secondary";
  };

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <Card 
          key={assignment.id} 
          className="gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group"
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    {assignment.title}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    {assignment.type}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium">{assignment.subject}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Due {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{assignment.timeLeft} left</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant={getStatusVariant(assignment.status)}>
                    {assignment.status.replace("-", " ")}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`border-${getPriorityColor(assignment.priority)}/20 text-${getPriorityColor(assignment.priority)}`}
                  >
                    {assignment.priority} priority
                  </Badge>
                </div>
              </div>

              <div className="ml-4">
                {assignment.status === "pending" && (
                  <Button size="sm" className="gradient-primary">
                    <Upload className="h-3 w-3 mr-1" />
                    Submit
                  </Button>
                )}
                {assignment.status === "in-progress" && (
                  <Button size="sm" variant="secondary">
                    Continue
                  </Button>
                )}
                {assignment.status === "submitted" && (
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}