import Image from "next/image";
import avatar from "../../public/cat.jpg";

const Creator = () => {
  return (
    <div className="max-w-6xl my-0 mx-auto pt-8 px-8">
      <div className="flex flex-col md:flex-row md:justify-around border border-orange rounded-lg">
        <div className="flex flex-row p-4 items-center">
          <div>
            <Image
              className="rounded-full"
              src={avatar}
              alt="avatar"
              width={72}
              height={72}
            />
          </div>
          <div className="pl-6">
            <p className="font-semibold text-base md:text-2xl">privet</p>
            <p className="text-gray text-xs md:text-sm">Úroveň Bronz</p>
            <p className="text-gray text-xs md:text-sm">
              Registrovaný 9.8.2021
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center border-y md:border-y-0 md:border-x border-yellow">
          <div className="p-4 flex flex-col justify-around items-center text-xs md:text-sm basis-1/3">
            <p className="text-gray">Body</p>
            <p className="text-violet font-medium">375 b.</p>
          </div>
          <div className="p-4 flex flex-col justify-around items-center text-xs md:text-sm basis-1/3 border-x border-yellow">
            <p className="text-gray">Projekty</p>
            <p className="text-violet font-medium">3</p>
          </div>
          <div className="p-4 flex flex-col justify-around items-center text-xs md:text-sm basis-1/3">
            <p className="text-gray">Přátelé</p>
            <p className="text-violet font-medium">5</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="bg-pink m-4 px-10 h-10 rounded-3xl text-white w-full md:min-w-44">
            Sledovat uživatele
          </button>
        </div>
      </div>
    </div>
  );
};

export default Creator;
