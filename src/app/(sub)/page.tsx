import Hero from "@/components/hero";
import homeSrc from "../../../public/images/home.jpeg";
export default function Home() {
  return (
    <Hero content="Model Training Platform" imgSrc={homeSrc} imgAlt="home" />
  );
}