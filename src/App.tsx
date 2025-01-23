import RetentionDashboard from './RetentionDashboard';

function App() {
  const retentionData = [
    {cohort: "Jan", month6: 59.4, totalUsers: 2854},
    {cohort: "Feb", month6: 55.7, totalUsers: 2960}
  ];

  return <RetentionDashboard data={retentionData} title="Monthly User Retention" />;
}

export default App;