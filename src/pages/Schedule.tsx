import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const Schedule = () => {
  useEffect(() => {
    document.title = "Schedule | Course Dashboard";
    const el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (el) el.content = "View your upcoming classes and schedule";
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Schedule</h1>
      <section className="space-y-4">
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
      </section>
    </main>
  );
};

export default Schedule;
