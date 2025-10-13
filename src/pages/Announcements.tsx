import { useEffect } from "react";
import AnnouncementList from "@/components/AnnouncementList";
import Navbar from "@/components/Navbar";

const Announcements = () => {
  useEffect(() => {
    document.title = "Announcements | Course Dashboard";
    const el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (el) el.content = "Latest announcements and updates from faculty";
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Announcements</h1>
        <AnnouncementList />
      </main>
    </>
  );
};

export default Announcements;
