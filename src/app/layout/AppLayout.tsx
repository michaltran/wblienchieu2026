import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import FloatingCornerButtons from "../../components/ui/FloatingCornerButtons";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <FloatingCornerButtons />
    </div>
  );
}
