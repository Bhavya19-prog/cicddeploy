import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  useAuth();

  return (
    <div>
      <h1>Fleet Management Dashboard</h1>
      <p>Authenticated view</p>
    </div>
  );
};

export default Dashboard;