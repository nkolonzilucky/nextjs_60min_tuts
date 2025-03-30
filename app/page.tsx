import Image from "next/image";
import Greet from "./components/Greet";
import Counter from "./components/Count";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-4">

    <Greet />
    <Counter />
    </div>
  );
}
