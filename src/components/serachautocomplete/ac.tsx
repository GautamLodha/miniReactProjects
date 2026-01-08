import React, { useEffect, useState } from "react";

type UserApiResponse = {
  users: { firstName: string }[];
};

const AutoComplete: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data: UserApiResponse = await res.json();

      if (data.users.length > 0) {
        setUsers(data.users.map((u) => u.firstName));
      }
    } catch (error) {
      console.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value.toLowerCase();
    setInput(query);

    if (query.length >= 1) {
      const result = users.filter((u) =>
        u.toLowerCase().includes(query)
      );
      setFiltered(result);
      setShow(true);
    } else {
      setShow(false);
      setFiltered([]);
    }
  };

  return (
    <div className="flex items-start justify-center w-screen h-screen p-10 bg-gray-100">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Type a name..."
          value={input}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Dropdown */}
        {show && filtered.length > 0 && (
          <div className="absolute w-full mt-1 overflow-y-auto bg-white border rounded-md shadow-lg max-h-40">
            {filtered.map((u, i) => (
              <div
                key={i}
                className="px-3 py-2 cursor-pointer hover:bg-blue-100"
              >
                {u}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
