import { GetStaticProps } from "next";
import Link from "next/link";
import { ItemProps } from "./types";

const ResourceCard = ({ item }: ItemProps) => {
  return (
    <li className="card m-2 cursor-pointer text-white flex flex-col bg-black-brand-02 bg-opacity-15 rounded-lg transform hover:-translate-y-1 transition-all duration-200">
      <div className="m-3 flex flex-col flex-1">
        <div className="flex flex-wrap justify-between">
          <div className="w-full flex items-center">
            {item.image ? (
              <div className="w-12 h-12 mx-2 flex items-center justify-center">
                <img className=" h-10 w-10 rounded-full" src={item.image && item.image} />
              </div>
            ) : (
              <div className="bg-black-brand-03 rounded-full h-12 w-12 p-2 mx-2 text-green-brand-01 flex items-center justify-center">{`${item.name[0]}${item.name[1]}`}</div>
            )}
            <h2 className="text-lg break-all mx-1">{item.name}</h2>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          {" "}
          <p className="font-light font-mono text-sm text-dark-700 dark:text-white dark:text-opacity-30 hover:text-gray-900 transition-all duration-200 flex-1 ellipsis">
            {item.description}
          </p>
        </div>
      </div>
      <div className="m-3 flex item-center">
        <div>
          <h2 className="text-sm text-teal-800 text-center font-mono mr-1 bg-green-transparent bg-opacity-75 rounded px-2">
            {item.tag}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default ResourceCard;
