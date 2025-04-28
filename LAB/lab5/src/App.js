import React, { useState } from "react";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const add = () => {
    if (!title || !desc) return;
    setIssues([...issues, { id: issues.length + 1, title, desc, status: "Open" }]);
    setTitle(""); setDesc("");
  };

  const toggle = (id) => {
    setIssues(issues.map(i => i.id === id ? { ...i, status: i.status === "Open" ? "Closed" : "Open" } : i));
  };

  const del = (id) => setIssues(issues.filter(i => i.id !== id));

  return (
    <div>
      <h1>Issues</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {issues.map(i => (
          <li key={i.id}>
            {i.title} - {i.desc} <button onClick={() => toggle(i.id)}>{i.status}</button> <button onClick={() => del(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return <IssueList />;
}