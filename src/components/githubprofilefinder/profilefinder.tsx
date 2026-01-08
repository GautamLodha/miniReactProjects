import React, { useState } from "react";

type GithubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
};

const ProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<GithubUser | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        throw new Error("User not found");
      }

      const d: GithubUser = await res.json();
      setData(d);
    } catch (err) {
        if(err instanceof Error){
            setError(err.message);
        }else{
            setError("something went wrong")
        }
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center w-screen h-screen p-10 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        
        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter GitHub username"
            className="flex-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="mt-4 text-blue-500">Loading...</p>
        )}

        {/* Error */}
        {error && (
          <p className="mt-4 text-red-500">{error}</p>
        )}

        {/* Profile Card */}
        {data && (
          <div className="flex flex-col items-center mt-6 text-center">
            <img
              src={data.avatar_url}
              alt="avatar"
              className="w-24 h-24 mb-3 rounded-full"
            />
            <h2 className="text-lg font-semibold">{data.login}</h2>
            <a
              href={data.html_url}
              target="_blank"
              className="text-sm text-blue-500"
            >
              View Profile
            </a>

            <div className="flex gap-6 mt-4 text-sm">
              <div>
                <p className="font-semibold">{data.public_repos}</p>
                <p>Repos</p>
              </div>
              <div>
                <p className="font-semibold">{data.followers}</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="font-semibold">{data.following}</p>
                <p>Following</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProfileFinder;
