import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardStats from "../components/pages/Dashboard/DashboardStats";
import SubmissionTable from "../components/pages/Dashboard/SubmissionTable";
import { useSubmissions } from "../api/ContactApi";
const Dashboard = () => {

  const { data = [], isLoading } = useSubmissions();
  console.log(data);

  return (
    <DashboardLayout>

      <div className="p-6 space-y-6">

        {/* 🔥 Stats */}
        <DashboardStats data={data} isLoading={isLoading} />
        <SubmissionTable data={data} isLoading={isLoading} />

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;