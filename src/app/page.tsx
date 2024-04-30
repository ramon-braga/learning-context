"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import { PostProvider } from "@/contexts/PostContext";

function Page() {
  return (
    <div className="container mx-auto max-w-screen-md">
      <PostProvider>
          <Header />
          <PostList />
          <Footer />
      </PostProvider>
    </div>
  );
}

export default Page;