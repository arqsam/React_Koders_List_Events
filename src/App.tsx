import React, { useState } from "react";
import KoderItem from "./components/KoderItem";

/* const koders = [
  {
    firstName: "Samantha",
    lastName: "Castillo",
  },
  {
    firstName: "Rob",
    lastName: "Cruz",
  },
]; */

export default function App() {
  const [koders, setKoders] = useState<
    Array<{ name: string; lastname: string }>
  >([]);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  function onAddItem() {
    setKoders([{ name, lastname }, ...koders]);
    setName("");
    setLastName("");
  }

  function onDelete(indexToDelete: number) {
    koders.splice(indexToDelete, 1);
    setKoders([...koders]);
  }

  function empty() {
    setKoders([]);
  }

  return (
    <>
      <div className="container mx-auto p-0 m-0 flex-col gap-4">
        <section className="flex-row border-2 justify-evenly border-[rgb(20,18,19,1)] rounded-[30px] mt-3 bg-[rgb(236,255,186)] ">
          <h2 className="flex justify-center mt-5 p-5 text-justify font-display font-normal text-[25px] text-[rgbrgb(20,18,19,0.5)] tracking-[0.5rem]">
            {" "}
            KODERS REGISTRATION{" "}
          </h2>
          <div className="flex justify-center align-middle p-4 space-x-5">
            <input
              type="text"
              name="Firstname"
              id="text"
              placeholder="First Name"
              className="border-[1px] border-[rgb(20,18,19,1)] bg-[rgb(254,254,254)] rounded-[15px] h-9 p-3 m-3 font-display"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <input
              type="text"
              name="Lastname"
              placeholder="Last Name"
              className="border-[1px] border-[rgb(20,18,19,1)] bg-[rgb(254,254,254)] rounded-[16px] h-9 p-3 m-3 mr-3 font-display"
              onChange={(event) => setLastName(event.target.value)}
              value={lastname}
            />
            <button
              type="submit"
              className="bg-[rgb(221,252,67,1)] border border-[rgb(20,18,19,1)] rounded-[18px] h-[2.2rem] w-[4.5rem] text-[13px] m-[12px] mt-3 hover:bg-[rgb(20,18,19,0.9)] hover:text-[rgb(226,233,194)] font-semibold font-display "
              onClick={onAddItem}
            >
              {" "}
              Add
            </button>
          </div>
        </section>
        <section className="m-50px p-5 flex-row flex-wrap  justify-center">
          <h1 className="flex justify-center p-7 text-center font-display font-bold text-[70px] text-[rgb(40,40,40)] tracking-[2rem]">
            {" "}
            KODERS CARDS{" "}
          </h1>
          <div className="w-full flex flex-row flex-wrap gap-3">
            {koders.map((koder, index) => {
              return (
                <KoderItem
                  key={`koder-${index}`}
                  firstName={koder.name}
                  lastName={koder.lastname}
                  onDelete={() => onDelete(index)}
                />
              );
            })}
          </div>
          <div className="flex justify-center p-20">
            <button
              className="bg-[rgb(169,254,0,1)] border-2 border-[rgb(20,18,19,1)] w-full max-w-md p-3 rounded-[3rem] align-middle justify-center font-display font-semibold text-black  hover:bg-[rgb(20,18,19,0.9)] hover:text-[rgb(226,233,194)] tracking-[1rem]"
              onClick={empty}
            >
              DELETE ALL
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

/* rgb(169,254,0,1)] */
