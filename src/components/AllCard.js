import React from "react";
import {
  ClipboardCopyIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

const AllCard = ({ data }) => {
  return (
    <div>
      <div className="rounded-md bg-blue-50 p-4 mb-5">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon
              className="h-5 w-5 text-blue-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-700">
              Les boutons ne sont pour l'instant pas fonctionnels.
            </p>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 min-h-screen">
        {data.map((card) => (
          <li
            key={card.id}
            className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent  hover:bg-green-200">
                    <ThumbUpIcon
                      className="w-5 h-5 text-gray-400 "
                      aria-hidden="true"
                    />
                    <span className="ml-3"></span>
                  </button>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent  hover:bg-blue-200">
                    <ClipboardCopyIcon
                      className="w-5 h-5 text-gray-400 "
                      aria-hidden="true"
                    />
                    <span className="ml-3"></span>
                  </button>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent  hover:bg-red-200">
                    <ThumbDownIcon
                      className="w-5 h-5 text-gray-400 "
                      aria-hidden="true"
                    />
                    <span className="ml-3"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 overflow-y-auto">
                <p className="mt-1 text-gray-500 text-sm ">{card.details}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCard;
