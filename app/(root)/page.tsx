import Layout from "@/components/Layout";
import ShineBorder from "@/components/magicui/ShineBoarder";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <Layout>
      <section className="flex min-h-[95vh] flex-col items-center justify-center">
        <h1 className="mb-4 bg-gradient-to-br from-neutral-200 to-primary-300 bg-clip-text text-center text-6xl font-bold text-transparent md:w-3/4">
          ContentBoost - The Ultimate Platform for Creators
        </h1>
        <p className="mb-3 text-center md:w-1/2">
          Create engaging quizzes, manage your audience, and transform your
          passion into profit with our powerful suite of tools designed just for
          you.
        </p>
        <Link href="/dashboard" className="mb-10">
          <Button>Get Started</Button>
        </Link>

        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <Image
            src="/dashboard.png"
            alt=""
            height={1000}
            width={1000}
            className="h-full w-full"
          />
        </ShineBorder>
      </section>
      <section className="h-screen"></section>
    </Layout>
  );
}

export default Home;
