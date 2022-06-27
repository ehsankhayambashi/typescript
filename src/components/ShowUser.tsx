import React, { useState } from "react";
import { User } from "../interfaces";

function ShowUser() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () => {
    setUser({
      name: "ehsan",
      country: "iran",
      address: {
        city: "tehran",
        steet: "amir abad",
        zipCode: 123456,
      },
      isAdmin: false,
    });
  };
  return (
    <div>
      <button onClick={fetchUser}>fetch user</button>
      {user && <p>hello {user.name}</p>}
    </div>
  );
}

export default ShowUser;
