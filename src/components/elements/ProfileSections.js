import React, { useState } from "react";

const ProfileSections = () => {
  const [state, setState] = useState({
    elements: [
      { id: "0", title: "Rate" , className:"btnRate"},
      { id: "1", title: "Overview", className:"btnOverview" },
      { id: "2", title: "Reports", className:"btnReport" },
      { id: "3", title: "Settings" , className:"btnSettings"}
    ]
  });

  const handleClick = (id) => {
    // Aktualizuj stan lub wykonaj inne operacje w zależności od potrzeb
    console.log("Clicked element ID:", id);
  };

  return (
    <>
      <ul>
        {state.elements.map((element) => (
          <li key={element.id}>
            <button className={element.className} onClick={() => handleClick(element.id)}>
              {element.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfileSections;
