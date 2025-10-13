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
import { Link } from "react-router-dom";
import SubjectCard from "./SubjectCard";
import ProgressBar from "./ProgressBar";
import AssignmentList from "./AssignmentList";
import AnnouncementList from "./AnnouncementList";

const subjects = [
  {
    id: 1,
    name: "Full Stack Development",
    instructor: "Prof. Amol Kamble",
    progress: 85,
    color: "primary",
    totalLessons: 8,
    completedLessons: 7,
    nextClass: "Today at 2:00 PM",
    assignments: 2,
    grade: "A-"
  },
  {
    id: 2,
    name: "Data Structures",
    instructor: "Dr. Sashikala Mishra",
    progress: 65,
    color: "secondary", 
    totalLessons: 8,
    completedLessons: 5,
    nextClass: "Tomorrow at 10:00 AM",
    assignments: 3,
    grade: "B+"
  },
  {
    id: 3,
    name: "Programming Paradigms",
    instructor: "Dr. Shwetambari Chiwhane",
    progress: 40,
    color: "accent",
    totalLessons: 8,
    completedLessons: 3,
    nextClass: "Friday at 1:30 PM",
    assignments: 1,
    grade: "B"
  }
];

const stats = [
  {
    title: "Course Progress",
    value: "63%",
    icon: TrendingUp,
    color: "primary",
    description: "Across all 3 subjects"
  },
  {
    title: "Attendance",
    value: "92%",
    icon: Users,
    color: "secondary",
    description: "This semester"
  },
  {
    title: "Study Hours",
    value: "24h",
    icon: Clock,
    color: "accent",
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
                Full Stack Development Course
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Master HTML, CSS, JavaScript, and React - Units 1-3
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative" asChild>
                <Link to="/announcements" aria-label="Open announcements">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-accent">
                    3
                  </Badge>
                </Link>
              </Button>
              <Button className="gradient-primary" asChild>
                <Link to="/achievements" aria-label="View achievements">
                  <Award className="h-4 w-4 mr-2" />
                  View Achievements
                </Link>
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
                Your Course Units
              </h2>
              <Button variant="outline" asChild>
                <Link to="/subjects" aria-label="View all subjects">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>

            {/* Recent Assignments */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold flex items-center mb-6">
                <ClipboardCheck className="h-6 w-6 mr-2 text-accent" />
                Current Assignments
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
                      <p className="font-medium">Full Stack Development</p>
                      <p className="text-sm text-muted-foreground">2:00 PM - Room 305</p>
                    </div>
                    <Badge variant="secondary">Today</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">Data Structures</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - Lab 201</p>
                    </div>
                    <Badge variant="outline">Tomorrow</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10">
                    <div>
                      <p className="font-medium">Programming Paradigms</p>
                      <p className="text-sm text-muted-foreground">1:30 PM - Room 102</p>
                    </div>
                    <Badge variant="outline">Friday</Badge>
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