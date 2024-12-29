import React, { useMemo } from "react";

const colors = [
  "#FFADAD",
  "#FFD6A5",
  "#CAFFBF",
  "#9BF6FF",
  "#A0C4FF",
  "#BDB2FF",
  "#FFC6FF",
];

const getRandomColor = (name) => {
  if (!name) return colors[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
  }

  const colorIndex = Math.abs(hash) % colors.length;
  return colors[colorIndex];
};

const renderInitials = (name) => {
  if (!name) return ""; // Handle cases where name is undefined or null
  const nameParts = name.trim().split(" ");
  const firstNameInitial = nameParts[0]?.[0]?.toUpperCase() || "";
  const lastNameInitial = nameParts[1]?.[0]?.toUpperCase() || "";
  return `${firstNameInitial}${lastNameInitial}`;
};

const ProfileAvatar = ({ name, profilePic, className }) => {
  const randomColor = useMemo(() => getRandomColor(), []);

  return profilePic ? (
    <img
      src={`https://api.request-sa.com/${profilePic}`}
      alt="avatar"
      className={`rounded-full   w-9 h-9 ${className} object-cover`}
    />
  ) : (
    <div
      className={`user-profile-image flex items-center justify-center w-9 h-9 ${className} rounded-lg text-white font-bold`}
      style={{ backgroundColor: randomColor }}
    >
      {renderInitials(name)}
    </div>
  );
};

export default ProfileAvatar;
