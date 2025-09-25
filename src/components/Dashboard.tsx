import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calendar, 
  ClipboardCheck, 
  TrendingUp, 
  Bell,
  Users,
  Clock,
  Award
} from "lucide-react";
import SubjectCard from "./SubjectCard";
import ProgressBar from "./ProgressBar";
import AssignmentList from "./AssignmentList";
import AnnouncementList from "./AnnouncementList";

const subjects = [
  {
    id: 1,
    name: "Mathematics",
    instructor: "Dr. Sarah Johnson",
    progress: 78,
    color: "primary",
    totalLessons: 24,
    completedLessons: 18,
    nextClass: "Tomorrow at 10:00 AM",
    assignments: 3,
    grade: "A-"
  },
  {
    id: 2,
    name: "Computer Science",
    instructor: "Prof. Michael Chen",
    progress: 92,
    color: "secondary",
    totalLessons: 20,
    completedLessons: 18,
    nextClass: "Today at 2:00 PM",
    assignments: 1,
    grade: "A+"
  },
  {
    id: 3,
    name: "Physics",
    instructor: "Dr. Elena Rodriguez",
    progress: 65,
    color: "accent",
    totalLessons: 22,
    completedLessons: 14,
    nextClass: "Wednesday at 9:00 AM",
    assignments: 5,
    grade: "B+"
  },
  {
    id: 4,
    name: "Literature",
    instructor: "Ms. Amanda Wright",
    progress: 88,
    color: "purple",
    totalLessons: 18,
    completedLessons: 16,
    nextClass: "Friday at 11:00 AM",
    assignments: 2,
    grade: "A"
  }
];

const stats = [
  {
    title: "Overall Progress",
    value: "81%",
    icon: TrendingUp,
    color: "primary",
    description: "Across all subjects"
  },
  {
    title: "Attendance Rate",
    value: "94%",
    icon: Users,
    color: "secondary",
    description: "This semester"
  },
  {
    title: "Assignments Due",
    value: "11",
    icon: ClipboardCheck,
    color: "accent",
    description: "Next 7 days"
  },
  {
    title: "Study Hours",
    value: "42h",
    icon: Clock,
    color: "purple",
    description: "This week"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Welcome back, Alex!
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-accent">
                  3
                </Badge>
              </Button>
              <Button className="gradient-primary">
                <Award className="h-4 w-4 mr-2" />
                View Achievements
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subjects Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Your Subjects
              </h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>

            {/* Recent Assignments */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold flex items-center mb-6">
                <ClipboardCheck className="h-6 w-6 mr-2 text-accent" />
                Recent Assignments
              </h2>
              <AssignmentList />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/10">
                    <div>
                      <p className="font-medium">Computer Science</p>
                      <p className="text-sm text-muted-foreground">2:00 PM - Room 301</p>
                    </div>
                    <Badge variant="secondary">Soon</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">Study Group</p>
                      <p className="text-sm text-muted-foreground">4:00 PM - Library</p>
                    </div>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-accent" />
                  Latest Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnnouncementList />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}