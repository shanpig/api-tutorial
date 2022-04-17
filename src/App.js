import logo from './logo.svg';
import './App.css';
import getList from './api/api';
import { useState } from 'react';

function App() {
  const [list, setList] = useState({});
  const [text, setText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="number"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getList(0, text).then((data) => {
              console.log(data);
              setList(data);
            });
          }}
        >
          查詢
        </button>
        {list.data?.map((item, index) => {
          return (
            <ul key={index}>
              <li style={{ textAlign: 'left' }}>{item?.['名稱']}</li>
              <li style={{ textAlign: 'left' }}>{item?.['營業人名稱']}</li>
              <li style={{ textAlign: 'left' }}>{item?.['營業地址']}</li>
              <li style={{ textAlign: 'left' }}>{item?.['登記之負責人']}</li>
            </ul>
          );
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
