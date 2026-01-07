export const menuData = [
  {
    id: 1,
    label: "Dashboard",
  },
  {
    id: 2,
    label: "Products",
    children: [
      {
        id: 3,
        label: "Electronics",
        children: [
          { id: 4, label: "Mobiles" },
          { id: 5, label: "Laptops" },
          {
            id: 6,
            label: "Accessories",
            children: [
              { id: 7, label: "Chargers" },
              { id: 8, label: "Headphones" },
            ],
          },
        ],
      },
      {
        id: 9,
        label: "Clothing",
        children: [
          { id: 10, label: "Men" },
          { id: 11, label: "Women" },
        ],
      },
    ],
  },
  {
    id: 12,
    label: "Orders",
    children: [
      { id: 13, label: "Pending" },
      { id: 14, label: "Completed" },
    ],
  },
  {
    id: 15,
    label: "Settings",
    children: [
      { id: 16, label: "Profile" },
      {
        id: 17,
        label: "Security",
        children: [
          { id: 18, label: "Change Password" },
          { id: 19, label: "2FA" },
        ],
      },
    ],
  },
];
