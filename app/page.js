import ChatBot from "@/components/Chatbot";
import Header from "@/components/Header";
import SkillsBalls from "@/components/Skillballs";
import Image from "next/image";

const Home = function () {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* <Image
        src="/images/cloud-img.avif"
        alt="cloud bg"
        width={1920}
        height={1080}
        className="block w-full absolute top-0 left-0 h-full object-cover object-center"
      /> */}
      <Header />

      <main></main>
    </div>
  );
};

export default Home;
