import Image from "next/image";
import Link from "next/link";
import React from "react";

const IngredientsSection = () => {
  const ingredients = [
    {
      id: 1,
      name: "Vitamin C",
      desc: "Vitamin C as ascorbic acid",
      img: "/assets/h2-b1.jpg.png",
      cl: "col-span-2",
      // Ensure the path is correct
    },
    {
      id: 2,
      name: "Vitamin B3",
      desc: "Niacin for healthy gut and skin",
      img: "/assets/bn2-2.jpg.png",
      cl: "col-span-2",
    },
    {
      id: 3,
      name: "Magnesium",
      desc: "Boost energy and support muscle function",
      img: "/assets/bn2-3.jpg.png",
      cl: "col-span-2",
    },
    {
      id: 4,
      name: "Hyaluronic Acid",
      desc: "For smooth, supple and soft skin!",
      img: "/assets/bn2-4.jpg.png",
      cl: "col-span-2",
    },
    {
      id: 5,
      name: "Lactobacillus",
      desc: "Invigorate your gut microbiome",
      img: "/assets/bn2-5.jpg.png",
      cl: "col-span-2",
    },
  ];
  return (
    <div className="max-w-6xl w-full mx-auto  mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-4">
        <div className="col-span-3 space-y-2 ">
          <p className="uppercase sm:text-lg font-medium ">Ingredients</p>
          <h2 className=" text-2xl sm:text-3xl font-bold "> Better Ingredients</h2>
          <p className="text-sm leading-5 ">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!{" "}
          </p>
        </div>
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className={`h-36 sm:h-44 rounded-lg bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden  ${ingredient.cl} `}
          >
            {console.log(ingredient.img)}
            <div className="relative w-full h-full">
              <Image
                src={ingredient.img}
                alt={ingredient.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="absolute h-full  w-full flex flex-col justify-between px-4 py-2 ">
              <div>
                <h3 className="text-lg font-bold">{ingredient.name}</h3>
                <p className="text-sm">{ingredient.desc}</p>
              </div>

              <Link
                href="/"
                className="text-[#013568] underline font-semibold "
              >
                {" "}
                See More
              </Link>
            </div>
          </div>
        ))}
        <div className="h-full w-full relative hidden sm:block ">
          <Image
            src="/assets/b6.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;
