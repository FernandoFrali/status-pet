import Image from "next/image";
import catPic from "../../../public/cat.png";
import dogPic from "../../../public/dog.png";

const Main = () => (
  <main className=" grid grid-cols-3 ">
    <Image src={catPic} alt="A cat image" />
    <Image src={dogPic} alt="A dog image" />
  </main>
);

export default Main;