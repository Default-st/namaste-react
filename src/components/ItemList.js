import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, title, expandCategory }) => {
  return (
    <div className={` ${expandCategory === title ? "visible" : "hidden"}`}>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="border-b-2 border-gray-200  p-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{item.card.info.name}</h3>
              <p className="mx-2">{item.card.info.isVeg === 1 ? "🟢" : "🔴"}</p>
              <p className="text-lg font-semibold flex flex-grow justify-end">
                Rs{" "}
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </p>
            </div>
            <div className="flex py-2 gap-2">
              <p className="text-sm w-9/12 text-left">
                {item.card.info.description}
              </p>{" "}
              <div className="relative w-3/12">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className=" rounded-lg"
                />
                <button className="cursor-pointer left-0 right-0 rounded border bottom-0  p-1 bg-white shadow-lg absolute">
                  Add +
                </button>{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
