import { ItemProps } from "./types";

const ResourceCard = ({ item }: ItemProps) => {
  return (
    <li className="font-mono card cursor-pointer text-gray-brand-02 flex flex-col border border-black-brand-06 bg-black-brand-08 rounded-lg transform hover:-translate-y-1 transition-all duration-200">
      <div className="p-3 flex flex-col flex-1">
        <div className="flex flex-wrap justify-between">
          <div className="w-full flex items-center">
            {item.image ? (
              <div className="w-12 h-12 mx-2 flex items-center justify-center">
                <img className=" h-10 w-10 rounded-full" src={item.image && item.image} />
              </div>
            ) : (
              <div className="bg-black-brand-03 rounded-full h-12 w-12 p-2 mx-2 text-green-brand-01 flex items-center justify-center">{`${item.name[0]}${item.name[1]}`.toUpperCase()}</div>
            )}
            <h2 className="text-lg break-all mx-1 text-white">{item.name}</h2>
          </div>
        </div>
        <div className="flex flex-col flex-1 px-2 my-2">
          {" "}
          <p className="font-normal text-base text-opacity-50 flex-1">
            {item.description}
          </p>
        </div>
      </div>
      <div className="px-4 py-2 flex flex-col items-end">
        <div>
          <span className="text-sm flex items-center font-medium text-gray-brand-02 resource-card-tag capitalize"> {item.tag}</span>
        </div>
      </div>
    </li>
  );
};

export default ResourceCard;
