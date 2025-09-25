import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Pin } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Midterm Schedule Released",
    content: "Check your student portal for the complete midterm examination schedule.",
    author: "Academic Office",
    authorInitials: "AO",
    time: "2 hours ago",
    priority: "high",
    pinned: true,
    category: "Academic"
  },
  {
    id: 2,
    title: "Library Hours Extended",
    content: "The library will remain open until midnight during finals week.",
    author: "Library Staff",
    authorInitials: "LS",
    time: "1 day ago", 
    priority: "medium",
    pinned: false,
    category: "Facility"
  },
  {
    id: 3,
    title: "Guest Lecture: AI in Education",
    content: "Join us for an exciting guest lecture on AI applications in modern education.",
    author: "Dr. Sarah Johnson",
    authorInitials: "SJ",
    time: "2 days ago",
    priority: "low",
    pinned: false,
    category: "Event"
  },
  {
    id: 4,
    title: "Assignment Deadline Extension",
    content: "The Computer Science project deadline has been extended by 48 hours.",
    author: "Prof. Michael Chen",
    authorInitials: "MC",
    time: "3 days ago",
    priority: "medium",
    pinned: true,
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