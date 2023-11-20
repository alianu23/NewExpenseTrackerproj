export const array = [
  { name: "Food & Drinks" },
  { name: "Shopping" },
  { name: "Housing" },
  { name: "Transportation" },
  { name: "Life & Entertainment" },
  { name: "Communication, PC" },
  { name: "Financial expenses" },
  { name: "Investments" },
  { name: "Income" },
  { name: "Others" },
];

export const array2 = [
  { name: "All" },
  { name: "Income" },
  { name: "Expense" },
];
export const data = {
  labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 17, 3, 5, 4],
      backgroundColor: [
        "rgba(28, 100, 242, 1)",
        "rgba(231, 70, 148, 1)",
        "rgba(253, 186, 140, 1)",
        "rgba(22, 189, 202, 1)",
        "rgba(242, 144, 28, 1)",
      ],
    },
  ],
};

export const ItemDataMiddle = [
  {
    name: "Bills",
    price: "5'000'000₮",
    percentage: "15,50%",
  },
  {
    name: "Food",
    price: "5'000'000₮",
    percentage: "15,50%",
  },
  {
    name: "Shopping",
    price: "5'000'000₮",
    percentage: "15,50%",
  },
  {
    name: "Insurance",
    price: "5'000'000₮",
    percentage: "15,50%",
  },
  {
    name: "Clothing",
    price: "5'000'000₮",
    percentage: "15,50%",
  },
];

export const DotIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#1C64F2" />
    </svg>
  );
};
export const DotIconRed = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#E74694" />
    </svg>
  );
};
export const DotIconYellow = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#FDBA8C" />
    </svg>
  );
};
export const DotIconSky = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#16BDCA" />
    </svg>
  );
};
export const DotIconOrange = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#F2901C" />
    </svg>
  );
};
