import { useEffect } from "react";
import AssignmentList from "@/components/AssignmentList";
import Navbar from "@/components/Navbar";

const Assignments = () => {
  useEffect(() => {
    document.title = "Assignments | Course Dashboard";
    const el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (el) el.content = "View and manage your course assignments";
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Assignments</h1>
        <AssignmentList />
      </main>
    </>
  );
};

export default Assignments;
