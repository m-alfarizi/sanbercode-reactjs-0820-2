import React from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ width: 450, borderColor: "black", borderStyle: "solid", borderWidth: 1, borderRadius: 10, padding: 20, margin: 10 }}>
        <h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
        <form style={{ textAlign: "left" }}>
          <p><label><b>Nama Pelanggan</b></label>
          <input type="text" style={{ marginLeft: 50, width: 170}} /></p>
          <input type="checkbox" style={{ marginLeft: 170  }}/> Semangka <br />
          <input type="checkbox" style={{ marginLeft: 170 }}/> Jeruk <br />
          <input type="checkbox" style={{ marginLeft: 170 }}/> Nanas <br />
          <input type="checkbox" style={{ marginLeft: 170 }}/> Salak <br />
          <label><b>Daftar Item</b></label>
          <input type="checkbox" style={{ marginLeft: 89 }}/> Anggur <br /><br />
          <input type="submit" value="Kirim" style={{ borderRadius: 15, height: 30 }} />
        </form>
      </div>
    </div>
  );
}

export default App;
