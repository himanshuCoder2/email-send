export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Total Campaigns</h3>
          <p className="text-2xl mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Total Emails Sent</h3>
          <p className="text-2xl mt-2">1,240</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold">Open Rate</h3>
          <p className="text-2xl mt-2">68%</p>
        </div>
      </div>
    </div>
  );
}