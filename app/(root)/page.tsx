import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

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
          />
          <TotalBalanceBox 
            accounts={[] }
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
