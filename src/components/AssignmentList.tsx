import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Clock, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const assignments = [
  {
    id: 1,
    title: "MERN Stack Project",
    subject: "Full Stack Development",
    dueDate: "Tomorrow",
    timeLeft: "1 day",
    status: "pending",
    priority: "high",
    type: "Project"
  },
  {
    id: 2,
    title: "Binary Search Trees Implementation",
    subject: "Data Structures", 
    dueDate: "Jan 18",
    timeLeft: "3 days",
    status: "in-progress",
    priority: "high",
    type: "Assignment"
  },
  {
    id: 3,
    title: "OOP Concepts - Java",
    subject: "Programming Paradigms",
    dueDate: "Jan 12",
    timeLeft: "completed",
    status: "submitted",
    priority: "medium",
    type: "Exercise"
  },
  {
    id: 4,
    title: "API Development with Node.js",
    subject: "Full Stack Development",
    dueDate: "Jan 25",
    timeLeft: "1 week",
    status: "pending",
    priority: "medium",
    type: "Project"
  },
  {
    id: 5,
    title: "Graph Algorithms",
    subject: "Data Structures",
    dueDate: "Jan 20",
    timeLeft: "5 days",
    status: "pending",
    priority: "low",
    type: "Assignment"
  },
  {
    id: 6,
    title: "Functional Programming Lab",
    subject: "Programming Paradigms",
    dueDate: "Jan 14",
    timeLeft: "2 days",
    status: "in-progress",
    priority: "medium",
    type: "Lab"
  }
];

export default function AssignmentList() {
  const navigate = useNavigate();
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
          onClick={() => navigate('/assignments')}
          className="gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer"
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
                  <Button size="sm" className="gradient-primary" onClick={() => navigate('/assignments')}>
                    <Upload className="h-3 w-3 mr-1" />
                    Submit
                  </Button>
                )}
                {assignment.status === "in-progress" && (
                  <Button size="sm" variant="secondary" onClick={() => navigate('/assignments')}>
                    Continue
                  </Button>
                )}
                {assignment.status === "submitted" && (
                  <Button size="sm" variant="outline" onClick={() => navigate('/assignments')}>
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