
// import React, { useState, useEffect } from "react";

// const IssueList = () => {
//   const [issues, setIssues] = useState(() => {
//     const saved = localStorage.getItem("issues");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           {
//             id: 1,
//             title: "Bug in login",
//             description: "Users cannot log in with Google OAuth.",
//             status: "Open",
//           },
//           {
//             id: 2,
//             title: "UI issue on dashboard",
//             description: "Buttons are misaligned on the mobile view.",
//             status: "Closed",
//           },
//           {
//             id: 3,
//             title: "Slow API response",
//             description: "Fetching user data takes too long.",
//             status: "Open",
//           },
//         ];
//   });

//   const [filter, setFilter] = useState("All");
//   const [newTitle, setNewTitle] = useState("");
//   const [newDescription, setNewDescription] = useState("");

//   useEffect(() => {
//     localStorage.setItem("issues", JSON.stringify(issues));
//   }, [issues]);

//   const addIssue = () => {
//     if (!newTitle || !newDescription) return;

//     const newIssue = {
//       id: issues.length + 1,
//       title: newTitle,
//       description: newDescription,
//       status: "Open",
//     };

//     setIssues([...issues, newIssue]);
//     setNewTitle("");
//     setNewDescription("");
//   };

//   const toggleStatus = (id) => {
//     setIssues(
//       issues.map((issue) =>
//         issue.id === id
//           ? {
//               ...issue,
//               status: issue.status === "Open" ? "Closed" : "Open",
//             }
//           : issue
//       )
//     );
//   };

//   const deleteIssue = (id) => {
//     setIssues(issues.filter((issue) => issue.id !== id));
//   };

//   const filteredIssues =
//     filter === "All"
//       ? issues
//       : issues.filter((issue) => issue.status === filter);

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl">
//       <h1 className="text-2xl font-bold mb-4">Issue Tracker</h1>

//       <div className="mb-4 space-x-2">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => setFilter("All")}
//         >
//           All
//         </button>
//         <button
//           className="px-4 py-2 bg-red-500 text-white rounded"
//           onClick={() => setFilter("Open")}
//         >
//           Open
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded"
//           onClick={() => setFilter("Closed")}
//         >
//           Closed
//         </button>
//       </div>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newTitle}
//           onChange={(e) => setNewTitle(e.target.value)}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newDescription}
//           onChange={(e) => setNewDescription(e.target.value)}
//           className="border p-2"
//         />
//         <button
//           className="px-4 py-2 bg-purple-500 text-white rounded ml-2"
//           onClick={addIssue}
//         >
//           Add Issue
//         </button>
//       </div>

//       <ul>
//         {filteredIssues.map((issue) => (
//           <li
//             key={issue.id}
//             className="border-b py-3 flex justify-between items-center"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">{issue.title}</h2>
//               <p className="text-gray-600">{issue.description}</p>
//               <button
//                 className={`px-2 py-1 text-sm font-bold rounded-md ${
//                   issue.status === "Open"
//                     ? "bg-red-500 text-white"
//                     : "bg-green-500 text-white"
//                 }`}
//                 onClick={() => toggleStatus(issue.id)}
//               >
//                 {issue.status}
//               </button>
//             </div>
//             <button
//               className="px-3 py-1 bg-gray-300 text-black rounded"
//               onClick={() => deleteIssue(issue.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <IssueList />
//     </div>
//   );
// }

import React, { useState } from "react";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState("All");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addIssue = () => {
    if (!newTitle || !newDescription) return;
    const newIssue = {
      id: issues.length + 1,
      title: newTitle,
      description: newDescription,
      status: "Open",
    };
    setIssues([...issues, newIssue]);
    setNewTitle("");
    setNewDescription("");
  };

  const toggleStatus = (id) => {
    setIssues(
      issues.map((issue) =>
        issue.id === id
          ? { ...issue, status: issue.status === "Open" ? "Closed" : "Open" }
          : issue
      )
    );
  };

  const deleteIssue = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  };

  const filteredIssues =
    filter === "All" ? issues : issues.filter((issue) => issue.status === filter);

  const getButtonStyle = (type) => ({
    marginRight: "8px",
    padding: "6px 12px",
    border: "1px solid gray",
    backgroundColor: filter === type ? "#ccc" : "white",
    fontWeight: filter === type ? "bold" : "normal",
    cursor: "pointer",
  });

  return (
    <div>
      <h1>Issue Tracker</h1>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setFilter("All")} style={getButtonStyle("All")}>
          All
        </button>
        <button onClick={() => setFilter("Open")} style={getButtonStyle("Open")}>
          Open
        </button>
        <button onClick={() => setFilter("Closed")} style={getButtonStyle("Closed")}>
          Closed
        </button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={addIssue}>Add</button>
      </div>

      <ul>
        {filteredIssues.map((issue) => (
          <li key={issue.id} style={{ marginBottom: "8px" }}>
            <strong>{issue.title}</strong> - {issue.description}{" "}
            <button onClick={() => toggleStatus(issue.id)}>
              {issue.status}
            </button>{" "}
            <button onClick={() => deleteIssue(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <IssueList />
    </div>
  );
}