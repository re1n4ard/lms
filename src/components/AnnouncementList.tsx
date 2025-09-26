import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Pin } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "MERN Stack Project Guidelines",
    content: "Updated requirements for the Full Stack Development project. MongoDB and Express.js resources available on portal.",
    author: "Prof. Amol Kamble",
    authorInitials: "AK",
    time: "2 hours ago",
    priority: "high",
    pinned: true,
    category: "Academic"
  },
  {
    id: 2,
    title: "Data Structures Mid-Exam",
    content: "Mid-semester exam on Trees, Graphs, and Sorting algorithms scheduled for next Wednesday in Room 201.",
    author: "Dr. Sashikala Mishra",
    authorInitials: "SM",
    time: "1 day ago", 
    priority: "high",
    pinned: true,
    category: "Academic"
  },
  {
    id: 3,
    title: "Java Programming Workshop",
    content: "Special session on Object-Oriented Programming concepts and design patterns this Friday at 2 PM.",
    author: "Dr. Shwetambari Chiwhane",
    authorInitials: "SC",
    time: "2 days ago",
    priority: "medium",
    pinned: false,
    category: "Event"
  },
  {
    id: 4,
    title: "Office Hours Update",
    content: "Extended office hours for Full Stack Development and Data Structures help available on weekends.",
    author: "Prof. Amol Kamble",
    authorInitials: "AK",
    time: "3 days ago",
    priority: "medium",
    pinned: false,
    category: "Academic"
  }
];

export default function AnnouncementList() {
  const getPriorityColor = (priority: string) => {
    const colorMap = {
      high: "destructive",
      medium: "warning", 
      low: "secondary"
    };
    return colorMap[priority as keyof typeof colorMap] || "secondary";
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      Academic: "primary",
      Facility: "secondary",
      Event: "purple"
    };
    return colorMap[category as keyof typeof colorMap] || "primary";
  };

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {announcements.map((announcement) => (
        <div 
          key={announcement.id}
          className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-all duration-200 space-y-3 group cursor-pointer border border-transparent hover:border-primary/10"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 flex-1">
              {announcement.pinned && (
                <Pin className="h-3 w-3 text-accent flex-shrink-0" fill="currentColor" />
              )}
              <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                {announcement.title}
              </h4>
            </div>
            <Badge 
              variant="outline" 
              className={`ml-2 border-${getPriorityColor(announcement.priority)}/20 text-${getPriorityColor(announcement.priority)} text-xs`}
            >
              {announcement.priority}
            </Badge>
          </div>

          {/* Content */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {announcement.content}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs bg-primary/10 text-primary">
                  {announcement.authorInitials}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{announcement.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge 
                variant="secondary" 
                className={`text-xs bg-${getCategoryColor(announcement.category)}/10 text-${getCategoryColor(announcement.category)}`}
              >
                {announcement.category}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{announcement.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}