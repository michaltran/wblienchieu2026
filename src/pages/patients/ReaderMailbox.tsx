import { useState, useMemo } from "react";
import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import PatientPostList from "../../components/blocks/PatientPostList";
import SimplePagination from "../../components/ui/SimplePagination";
import MailboxForm from "../../components/blocks/MailboxForm";
import { patientPosts } from "../../data/patientPosts";

const POSTS_PER_PAGE = 10;

export default function ReaderMailbox() {
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Hộp thư bạn đọc" },
  ];

  // Filter & Pagination for related posts
  const mailboxPosts = useMemo(() => {
    return patientPosts.filter(p => p.categoryKey === "mailbox");
  }, []);

  const totalPages = Math.ceil(mailboxPosts.length / POSTS_PER_PAGE);
  const currentPosts = mailboxPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <PatientCategoryLayout
      title="Hộp thư bạn đọc"
      description="Tiếp nhận ý kiến đóng góp, phản hồi và câu hỏi của người bệnh. Mọi thông tin của bạn sẽ được bảo mật và phản hồi sớm nhất."
      breadcrumbs={breadcrumbs}
    >
      {/* 1. Contact Form */}
      <section className="mb-12">
           <MailboxForm />
      </section>

      <div className="w-full h-px bg-slate-100 my-10" />

      {/* 2. Latest Posts List (Public Q&A) */}
      <section>
          <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#1E73BE] rounded-full" />
              <h2 className="text-xl font-bold text-slate-800">Bài đọc mới nhất</h2>
          </div>
          
          <PatientPostList posts={currentPosts} categorySlug="hop-thu-ban-doc" />

          <div className="mt-8 pt-8 border-t border-slate-100">
              <SimplePagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
          </div>
      </section>
    </PatientCategoryLayout>
  );
}
