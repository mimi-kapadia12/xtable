import { useState } from "react";
import "./App.css";

const content = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [sortedContent, setSortedContent] = useState(content);

  const HandleSortByDate = () => {
    const sortedByDate = [...content].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedContent(sortedByDate);
  };

  const HandleSortByViews = () => {
    const sortedByViews = [...content].sort((a, b) => b.views - a.views);
    setSortedContent(sortedByViews);
  };

  return (
    <div className="">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={HandleSortByDate}>Sort by Date</button>
        <button onClick={HandleSortByViews}>Sort by Views</button>
      </div>
      <div>
        <table>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
          <tbody>
            {sortedContent.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
