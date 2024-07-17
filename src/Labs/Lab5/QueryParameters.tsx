import React, { useState } from 'react';

export default function QueryParameters() {
  const [a, setA] = useState('');  // Initialize as empty string
  const [b, setB] = useState('');  // Initialize as empty string

  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input id="wd-query-parameter-a"
             className="form-control mb-2"
             value={a} type="number"
             onChange={(e) => setA(e.target.value)} />
      <input id="wd-query-parameter-b"
             className="form-control mb-2"
             value={b} type="number"
             onChange={(e) => setB(e.target.value)} />
      <a id="wd-query-parameter-add"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a || 0}&b=${b || 0}`}>
        Add {a || 0} + {b || 0}
      </a>
      <a id="wd-query-parameter-subtract"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a || 0}&b=${b || 0}`}>
        Subtract {a || 0} - {b || 0}
      </a>
      <a id="wd-query-parameter-multiply"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a || 0}&b=${b || 0}`}>
        Multiply {a || 0} × {b || 0}
      </a>
      <a id="wd-query-parameter-divide"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a || 0}&b=${b || 0}`}>
        Divide {a || 0} ÷ {b || 0}
      </a>
      <hr />
    </div>
  );
}
