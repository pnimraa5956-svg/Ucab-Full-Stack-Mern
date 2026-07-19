import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function DashboardChart({ stats }) {

    const data = [
        {
            name: "Users",
            total: stats.users
            
        },
        {
            name: "Cars",
            total: stats.cars
        },
        {
            name: "Bookings",
            total: stats.bookings
        }
    ];

    return (

        <div className="card shadow-lg border-0 mt-5 p-4">

            <h3 className="text-center mb-4">
                📊 Dashboard Analytics
            </h3>

            <div className="d-flex justify-content-center">
                <div style={{
                    width: "380px",
                    height: "250px"
                }}>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>

                    

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="total"
                        fill="#2563eb"
                        
                        barSize={50}
                        
                    />

                   </BarChart>
                </ResponsiveContainer>

            </div>
        </div>

        </div>

    );

}

export default DashboardChart;