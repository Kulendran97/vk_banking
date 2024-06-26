import React from "react";
import HeaderBox from "@/components/ui/HeaderBox";

const Home = () => {
  const loggedIn = ["vinoth", "kule"];
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.[0] || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>{" "}
      </div>
    </section>
  );
};

export default Home;
