import Image, { StaticImageData } from "next/image";

interface PropsType {
    imgSrc: StaticImageData;
    imgAlt: string;
    content: string;
}
export default function Home(props: PropsType) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          fill
          style={{objectFit: "cover"}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      {/* <div className="flex justify-center pt-48">
        <h1 className="text-6xl">{props.content}</h1>
      </div> */}
    </div>
  );
}