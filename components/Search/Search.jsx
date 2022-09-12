import { useState } from "react";

import Image from "next/image";
import camera from "../../public/camera-icon.png";
import glass from "../../public/glass-icon.png";

const Search = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="max-w-6xl my-0 mx-auto pt-6 pb-2 px-2">
      <div
        className={`max-w-screen-md my-0 mx-auto w-full border border-blue ${
          active ? "rounded-[30px] rounded-b-none" : "rounded-full shadow-slate-500 shadow-lg"
        } p-4 md:p-5`}
      >
        <div className="flex items-center">
          <div className="w-full">
            <input
              className="w-full border-none outline-0"
              type="text"
              placeholder="Napište název, kategorii, značku a nebo nahrajte produkt..."
              onClick={(e) => setActive(true)}
            />
          </div>
          <div className="flex items-center">
            <div className="flex justify-center items-center pr-2.5 border-r-2 border-blue cursor-pointer">
              <Image src={camera} alt="camera" width={32} height={30} />
            </div>
            <div className="flex justify-center items-center pl-2.5 cursor-pointer">
              <Image src={glass} alt="glass" width={22} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${ active ? "max-w-screen-md my-0 mx-auto w-full border border-blue px-8 pb-4 rounded-b-lg shadow-slate-500 shadow-lg" : 'hidden' }`}>
        <div className="text-pink text-center pt-6">
          <span className="border-b-2 pb-0.5">
            Hledat <span className="font-semibold">&quot;sedač&quot;</span> v
            produktech
          </span>
        </div>
        <div className="font-medium pt-6 text-lg">Kategorie</div>
        <div className="text-gray pt-4">
          <span className="font-medium">Sedací</span> soupravy
        </div>
        <div className="text-gray pt-4">Potahy na <span className="font-medium">sedací</span> soupravy</div>
        <div className="text-gray pt-4"><span className="font-medium">Sedáky</span> a podsedáky</div>
        <div className="text-gray pt-4">Rohové <span className="font-medium">sedací</span> soupravy</div>
        <div className="text-gray pt-4"><span className="font-medium">Sedací</span> vaky a pytle</div>
        <div className="text-gray pt-4"><span className="font-medium">Sedací</span> soupravy do U</div>
        <div className="text-gray pt-4"><span className="font-medium">Dětské sedací vaky</span></div>
      </div>
    </div>
  );
};

export default Search;
