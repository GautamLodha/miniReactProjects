import React, { useState } from "react";
import DynamicTabs from "./dt";

const CustomTabs = () => {
  const tabs = [
    {
      label: "Profile",
      content: "This is your profile information. You can view and edit your personal details here."
    },
    {
      label: "Settings",
      content: "Manage your account settings, preferences, and privacy options here."
    },
    {
      label: "Notifications",
      content: "View all your recent notifications and alerts in this section."
    },
  ];

  const [curIdx, setCurIdx] = useState(5);

  return (
    <div className="flex items-start justify-center w-screen h-screen p-10 bg-gray-100">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl">
        
        {/* Tabs */}
        <div className="flex border-b">
          {tabs.map((t, index) => (
            <button
              key={index}
              onClick={() => setCurIdx(index)}
              className={`px-6 py-3 text-sm font-medium transition-all
                ${
                  curIdx === index
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <DynamicTabs tabscontent={tabs[curIdx]?.content} />

      </div>
    </div>
  );
};

export default CustomTabs;
