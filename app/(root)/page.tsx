import React from "react";
import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "John" }; // Replace with actual logic to get logged in user

  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access your account and see your balance"
          >
            
          </HeaderBox>
        </header>
      </div>
    </section>
  );
};

export default Home;
