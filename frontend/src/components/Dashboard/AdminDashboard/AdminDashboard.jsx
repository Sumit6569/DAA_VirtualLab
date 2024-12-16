// import React, { useEffect, useState } from "react";
// import {
//   AcademicCapIcon,
//   ClipboardIcon,
//   UserGroupIcon,
//   DocumentTextIcon,
// } from "@heroicons/react/24/outline"; // Import additional icons as needed
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Popup from "../../Popup.jsx";
// import Loader from "../../Loader/Loader.jsx";

// const performanceData = [
//   { month: "Jan", avgGrade: 80 },
//   { month: "Feb", avgGrade: 82 },
//   { month: "Mar", avgGrade: 78 },
//   { month: "Apr", avgGrade: 85 },
//   { month: "May", avgGrade: 88 },
//   { month: "Jun", avgGrade: 90 },
//   { month: "Jul", avgGrade: 87 },
//   { month: "Aug", avgGrade: 89 },
//   { month: "Sep", avgGrade: 91 },
//   { month: "Oct", avgGrade: 93 },
//   { month: "Nov", avgGrade: 95 },
//   { month: "Dec", avgGrade: 94 },
// ];

// const recentAssignments = [
//   {
//     id: 1,
//     title: "Assignment 1: Introduction to Machine Learning",
//     dueDate: "2023-10-15",
//     status: "Submitted",
//   },
//   {
//     id: 2,
//     title: "Assignment 2: Data Analysis with Python",
//     dueDate: "2023-10-20",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     title: "Assignment 3: Deep Learning Basics",
//     dueDate: "2023-10-25",
//     status: "Pending",
//   },
// ];

// const teachers = [
//   { id: 1, name: "Jane Smith", totalClasses: 4, pendingAssignments: 3 },
//   { id: 2, name: "John Doe", totalClasses: 3, pendingAssignments: 2 },
//   // Add more teachers as needed
// ];

// const students = [
//   { id: 1, name: "Alice Johnson", assignmentId: 1, status: "Submitted" },
//   { id: 2, name: "Bob Smith", assignmentId: 2, status: "Pending" },
//   { id: 3, name: "Charlie Brown", assignmentId: 2, status: "Pending" },
//   { id: 4, name: "David Wilson", assignmentId: 1, status: "Submitted" },
//   { id: 5, name: "Eva Green", assignmentId: 3, status: "Pending" },
//   // Add more students as needed
// ];

// function AdminDashboard() {
//   const [loader, setLoader] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [message, setMessage] = useState("");

//   // Simulate data fetching
//   useEffect(() => {
//     setLoader(true);
//     const timer = setTimeout(() => {
//       setLoader(false);
//       // Uncomment the lines below to simulate an error
//       // setMessage("Failed to load data. Please try again.");
//       // setShowPopup(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loader && <Loader />}
//       {showPopup && (
//         <Popup
//           message={message}
//           setShowPopup={setShowPopup}
//           showPopup={showPopup}
//           type="error"
//         />
//       )}
//       <div className="min-h-screen bg-gray-100 p-6">
//         {/* Header */}
//         <header className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
//           <nav className="flex space-x-4">
//             <a
//               href="/admin/dashboard"
//               className="text-gray-600 hover:text-gray-800"
//             >
//               Dashboard
//             </a>
//             <a
//               href="/admin/teachers"
//               className="text-gray-600 hover:text-gray-800"
//             >
//               Manage Teachers
//             </a>
//             <a
//               href="/admin/students"
//               className="text-gray-600 hover:text-gray-800"
//             >
//               Manage Students
//             </a>
//             <a href="/logout" className="text-red-600 hover:text-red-800">
//               Logout
//             </a>
//           </nav>
//         </header>

//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           {/* Total Teachers */}
//           <div className="bg-white shadow rounded-lg p-6 flex items-center transform transition duration-300 hover:scale-105">
//             <UserGroupIcon className="h-12 w-12 text-blue-500 mr-4" />
//             <div>
//               <p className="text-2xl font-semibold text-gray-800">
//                 {teachers.length}
//               </p>
//               <p className="text-gray-500">Total Teachers</p>
//             </div>
//           </div>

          

//           <div className="bg-white shadow rounded-lg p-6 flex items-center transform transition duration-300 hover:scale-105">
//             <AcademicCapIcon className="h-12 w-12 text-green-500 mr-4" />
//             <div>
//               <p className="text-2xl font-semibold text-gray-800">120</p>
//               <p className="text-gray-500">Total Students</p>
//             </div>
//           </div>

//           {/* Pending Assignments */}
//           <div className="bg-white shadow rounded-lg p-6 flex items-center transform transition duration-300 hover:scale-105">
//             <ClipboardIcon className="h-12 w-12 text-yellow-500 mr-4 animate-pulse" />
//             <div>
//               <p className="text-2xl font-semibold text-gray-800">
//                 {
//                   recentAssignments.filter(
//                     (assignment) => assignment.status === "Pending"
//                   ).length
//                 }
//               </p>
//               <p className="text-gray-500">Pending Assignments</p>
//             </div>
//           </div>

//           {/* Total Students */}
          
//         </div>

//         {/* Recent Assignments */}
//         <div className="bg-white shadow rounded-lg p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Recent Assignments
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Assignment
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Due Date
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {recentAssignments.map((assignment) => (
//                   <tr key={assignment.id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                       {assignment.title}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {assignment.dueDate}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <span
//                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           assignment.status === "Submitted"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {assignment.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Manage Teachers */}
//         <div className="bg-white shadow rounded-lg p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Manage Teachers
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Teacher Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Total Classes
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Pending Assignments
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {teachers.map((teacher) => (
//                   <tr key={teacher.id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                       {teacher.name}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {teacher.totalClasses}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {teacher.pendingAssignments}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Students Performance Chart */}
//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Student Performance Over Time
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={performanceData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" stroke="#a0aec0" />
//               <YAxis stroke="#a0aec0" domain={[70, 100]} />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="avgGrade"
//                 stroke="#3182ce"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminDashboard;




import React, { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  ClipboardIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Popup from "../../Popup.jsx";
import Loader from "../../Loader/Loader.jsx";
import "./AdminDashboard.css";

const performanceData = [
  { month: "Jan", avgGrade: 80 },
  { month: "Feb", avgGrade: 82 },
  { month: "Mar", avgGrade: 78 },
  { month: "Apr", avgGrade: 85 },
  { month: "May", avgGrade: 88 },
  { month: "Jun", avgGrade: 90 },
  { month: "Jul", avgGrade: 87 },
  { month: "Aug", avgGrade: 89 },
  { month: "Sep", avgGrade: 91 },
  { month: "Oct", avgGrade: 93 },
  { month: "Nov", avgGrade: 95 },
  { month: "Dec", avgGrade: 94 },
];

const recentAssignments = [
  { id: 1, title: "Assignment 1: Intro to Machine Learning", dueDate: "2023-10-15", status: "Submitted" },
  { id: 2, title: "Assignment 2: Data Analysis with Python", dueDate: "2023-10-20", status: "Pending" },
  { id: 3, title: "Assignment 3: Deep Learning Basics", dueDate: "2023-10-25", status: "Pending" },
];

const teachers = [
  { id: 1, name: "Jane Smith", totalClasses: 4, pendingAssignments: 3 },
  { id: 2, name: "John Doe", totalClasses: 3, pendingAssignments: 2 },
];

function AdminDashboard() {
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {showPopup && (
        <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} type="error" />
      )}
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>Admin Dashboard</h1>
          <nav className={styles.nav}>
            <a href="/admin/dashboard" className={styles.navLink}>Dashboard</a>
            <a href="/admin/teachers" className={styles.navLink}>Manage Teachers</a>
            <a href="/admin/students" className={styles.navLink}>Manage Students</a>
            <a href="/logout" className="text-red-600 hover:text-red-800">Logout</a>
          </nav>
        </header>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Total Teachers */}
          <div className={`${styles.card} transform transition duration-300 hover:scale-105`}>
            <UserGroupIcon className={`${styles.cardIcon} text-blue-500`} />
            <div>
              <p className={`${styles.cardText} text-2xl font-semibold`}>{teachers.length}</p>
              <p className={styles.cardSubText}>Total Teachers</p>
            </div>
          </div>

          {/* Total Students */}
          <div className={`${styles.card} transform transition duration-300 hover:scale-105`}>
            <AcademicCapIcon className={`${styles.cardIcon} text-green-500`} />
            <div>
              <p className={`${styles.cardText} text-2xl font-semibold`}>120</p>
              <p className={styles.cardSubText}>Total Students</p>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className={`${styles.card} transform transition duration-300 hover:scale-105`}>
            <ClipboardIcon className={`${styles.cardIcon} text-yellow-500 animate-pulse`} />
            <div>
              <p className={`${styles.cardText} text-2xl font-semibold`}>
                {recentAssignments.filter((assignment) => assignment.status === "Pending").length}
              </p>
              <p className={styles.cardSubText}>Pending Assignments</p>
            </div>
          </div>
        </div>

        {/* Recent Assignments Table */}
        <div className={styles.tableContainer}>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Assignments</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className={styles.tableHeader}>Assignment</th>
                <th className={styles.tableHeader}>Due Date</th>
                <th className={styles.tableHeader}>Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentAssignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className={styles.tableCell}>{assignment.title}</td>
                  <td className={styles.tableCell}>{assignment.dueDate}</td>
                  <td className={styles.tableCell}>
                    <span className={`${styles.statusBadge} ${
                      assignment.status === "Submitted" ? styles.statusSubmitted : styles.statusPending
                    }`}>{assignment.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Student Performance Chart */}
        <div className={styles.chartContainer}>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Student Performance Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#a0aec0" />
              <YAxis stroke="#a0aec0" />
              <Tooltip />
              <Line type="monotone" dataKey="avgGrade" stroke="#4a5568" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
