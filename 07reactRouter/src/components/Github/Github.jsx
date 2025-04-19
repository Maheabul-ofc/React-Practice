import React from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();   //This is the optimise method to call an Api  // the function of this methode is on the bottom


//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Maheabul-ofc")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="bg-gray-100 rounded-lg shadow-md max-w-full mx-auto p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <img
            src={data.avatar_url}
            className="rounded-full w-24 h-24 border-4 border-white shadow"
            alt="Profile avatar"
          />
          <h2 className="text-xl font-bold mt-3 text-gray-800">{data.login}</h2>
          <h3 className="text-lg text-gray-600">{data.name}</h3>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <div className="text-center">
            <span className="block text-lg font-bold text-gray-800">
              {data.followers}
            </span>
            <span className="text-sm text-gray-500">Followers</span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-bold text-gray-800">
              {data.following}
            </span>
            <span className="text-sm text-gray-500">Following</span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-bold text-gray-800">
              {data.public_repos}
            </span>
            <span className="text-sm text-gray-500">Repository</span>
          </div>
        </div>
        {data.bio && (
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 text-center italic">{data.bio}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Github;



export const GithubInfoLoader = async () => {
   const response =  await fetch('https://api.github.com/users/Maheabul-ofc')
   return response.json()
}