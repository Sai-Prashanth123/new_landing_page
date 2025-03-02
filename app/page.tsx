import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Goodbye from "@/components/Goodbye";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import Corousal from "@/components/Corousal";
import Last from "@/components/Last";
import Flake from "@/components/Flake";
import MasonryCarousel from "@/components/Testimonial";
import Faq from "@/components/Faq";
import type { Metadata } from "next";

// ✅ Move viewport outside metadata
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "JobSpring | AI-Powered Job Search Tools & Career Resources",
  description:
    "Transform your job search with JobSpring's AI-powered tools. Create professional resumes, practice interviews, and track applications - all in one platform.",
  keywords:
    "job search, career tools, AI resume builder, interview practice, job application tracking, career resources",
  openGraph: {
    title: "JobSpring | AI-Powered Job Search Tools & Career Resources",
    description: "Transform your job search with JobSpring's AI-powered tools.",
    type: "website",
    url: "https://jobspring.com",
  },
};

export default function Home() {
  return (
    <main className="font-inter overflow-x-hidden">
      <NavBar />
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:mt-[14.5rem] mt-[10.5rem] ">
        <h1 className="text-center text-[2.17rem] md:text-4xl lg:text-[54px] font-bold mt-16 lg:mt-36 mx-auto max-w-6xl">
          AI for Resumes & Interviews
        </h1>
        <p className="text-center text-base md:text-xl lg:text-2xl mt-4 mx-auto max-w-3xl">
          Create tailored resumes and ace interviews with AI<br className="hidden md:block" />
          tools designed to land your dream job
        </p>

        <div className="flex justify-center mt-8">
          <Button className="lg:w-[188px] lg:h-[73.33px] rounded-[15px] w-[130px] h-[51.5px] bg-[#1B29CB] hover:bg-[#1b2acbc0] text-white font-semibold lg:text-[19.67px] text-[13.55px]">
            Try for free
          </Button>
        </div>
        <center>
          <HeroImage />
        </center>
      </section>

      {/* Features Section */}
      <section className="bg-[#FAFBFE] py-16 lg:py-32">
        <Flake />
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-primaryColor text-center">
            Features
          </h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-center mt-4 mx-auto max-w-4xl leading-10">
            Simplify Every Step of Your Job <br className="hidden lg:block" /> with JobSpring
          </h1>

          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center lg:max-w-[68.62rem] gap-12 mt-16 lg:mx-auto">
            <div className="w-full lg:w-1/2">
              <Image src="/feature1.svg" alt="Resume Builder" width={500} height={500} className="w-[20.77rem] mx-auto h-auto" />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-[6.06rem]">
              <h3 className="text-2xl lg:text-4xl font-bold mb-6 lg:w-[33.5rem]">
                A resume builder tailored to your job description
              </h3>
              <p className="text-base lg:text-xl text-gray-600 mb-8 lg:w-[33.5rem] w-[20rem] mx-auto">
                Effortlessly create AI-powered resumes that align with job descriptions and improve your chances of landing your dream role.
              </p>
              <Button className="bg-primaryColor text-white hover:bg-[#1b2acbe3] px-8 py-3 w-[188px] h-[62px] rounded-xl text-lg">
                Create resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#E8EAFC33] py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl lg:text-3xl text-primaryColor font-semibold">Testimonials</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Hear from our successful users</h2>
          </div>
          <MasonryCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#E8EAFC33] py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primaryColor text-center mb-[82px]">
            Frequently Asked Questions
          </h2>
          <Faq />
        </div>
      </section>

      {/* Last Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <Last />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 pt-16 lg:pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <Footer />
        </div>
      </footer>
    </main>
  );
}
