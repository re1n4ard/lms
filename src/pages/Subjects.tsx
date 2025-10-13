import { useEffect } from "react";
import SubjectCard from "@/components/SubjectCard";
import Navbar from "@/components/Navbar";

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
    grade: "A-",
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
    grade: "B+",
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
    grade: "B",
  },
];

const Subjects = () => {
  useEffect(() => {
    document.title = "Subjects | Course Dashboard";
    const el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (el) el.content = "Browse all subjects and continue learning";
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">All Subjects</h1>
        <section className="grid grid-cols-1 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Subjects;
