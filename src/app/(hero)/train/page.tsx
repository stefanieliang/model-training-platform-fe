import Hero from "@/components/hero";
import trainSrc from "../../../../public/images/train.jpeg";
export default function Home() {
  return (
    <Hero content="train" imgSrc={trainSrc} imgAlt="train" />
  );
}
