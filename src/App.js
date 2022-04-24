import './App.css';
import getList from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [registerList, setRegisterList] = useState([]);
  const [query, setQuery] = useState('');
  const [queryText, setQueryText] = useState('');

  useEffect(() => {
    getList({ q: query }).then((res) => {
      setRegisterList(res.data);
    });
  }, [query]);

  return (
    <div className="app">
      <div className="data">
        <input
          type="text"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
        <button onClick={() => setQuery(queryText)}>查詢</button>
        <table>
          <thead>
            <th>名稱</th>
            <th>營業人名稱</th>
            <th>營業地址</th>
            <th>登記之負責人</th>
            <th>組織別名稱</th>
            <th>統一編號</th>
            <th>行業代號</th>
          </thead>
          <tbody>
            {registerList.map(
              ({
                seq,
                名稱,
                營業人名稱,
                營業地址,
                登記之負責人,
                組織別名稱,
                統一編號,
                行業代號,
              }) => {
                return (
                  <tr key={seq}>
                    <td>{名稱}</td>
                    <td>{營業人名稱}</td>
                    <td>{營業地址}</td>
                    <td>{登記之負責人}</td>
                    <td>{組織別名稱}</td>
                    <td>{統一編號}</td>
                    <td>{行業代號}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
