import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const Achievements = () => {
  useEffect(() => {
    document.title = "Achievements | Course Dashboard";
    const el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (el) el.content = "View your course milestones and achievements";
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-primary/10">
          <h3 className="font-semibold">Top Performer - Full Stack</h3>
          <p className="text-sm text-muted-foreground">Awarded by Prof. Amol Kamble</p>
          <Badge variant="secondary" className="mt-2">A- Grade</Badge>
        </div>
        <div className="p-4 rounded-lg bg-accent/10">
          <h3 className="font-semibold">Algorithm Ace</h3>
          <p className="text-sm text-muted-foreground">Recognized by Dr. Sashikala Mishra</p>
          <Badge variant="outline" className="mt-2">B+ Grade</Badge>
        </div>
      </section>
    </main>
  );
};

export default Achievements;
