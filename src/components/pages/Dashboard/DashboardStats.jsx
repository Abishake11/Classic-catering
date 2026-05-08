import dayjs from "dayjs";

const StatCard = ({ title, value }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-bold mt-1">{value}</h2>
  </div>
);

const DashboardStats = ({ data = [] }) => {
  const today = dayjs().startOf("day");
  const week = dayjs().startOf("week");
  const month = dayjs().startOf("month");

  const getDate = (d) => d.createdAt || d.created_at;

  const stats = {
    total: data.length,
    today: data.filter((d) => dayjs(getDate(d)).isAfter(today)).length,
    week: data.filter((d) => dayjs(getDate(d)).isAfter(week)).length,
    month: data.filter((d) => dayjs(getDate(d)).isAfter(month)).length,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard title="Total Submissions" value={stats.total} />
      <StatCard title="Today" value={stats.today} />
      <StatCard title="This Week" value={stats.week} />
      <StatCard title="This Month" value={stats.month} />
    </div>
  );
};

export default DashboardStats;