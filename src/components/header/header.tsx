import Image from "next/image";
import userImage from "../../../public/eu.jpeg";
import { Button, ButtonGroup } from "@nextui-org/button";

function Header() {
  return (
    <div className="flex flex-row p-4 bg-background">
      <div className="flex flex-row items-center">
        <Image
          width={32}
          height={32}
          style={{ borderRadius: 32 }}
          alt="Picture of the author"
          src={userImage}
        />
        <p className="ml-2">Igor</p>
      </div>
      <div className="flex flex-1 flex-row  justify-center items-center">
        <Button className="mx-6 bg-transparent hover:bg-gray-200" radius="full">
          Home
        </Button>
        <Button className="mx-6 bg-transparent hover:bg-gray-200" radius="full">
          About
        </Button>
        <Button className="mx-6 bg-transparent hover:bg-gray-200" radius="full">
          Portifolio
        </Button>
      </div>
      <div className="flex flex-row items-center">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-red-500 to-yellow-500 text-white shadow-lg"
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
export default Header;
