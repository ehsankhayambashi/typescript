import React from "react";
interface WelcomeProps {
  name: string;
  lastname?: string;
}

function Welcome({ name, lastname = "khayam" }: WelcomeProps) {
  return (
    <div>
      Welcome {name} {lastname}
    </div>
  );
}

export default Welcome;
