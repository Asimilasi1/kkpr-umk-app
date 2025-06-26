import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});
  const [records, setRecords] = useState([]);

  const questions = [
    { name: 'rtrw', label: 'Apakah kegiatan usaha telah sesuai dengan RTRW?' },
    { name: 'zona', label: 'Apakah lokasi usaha berada di zona budidaya?' },
    { name: 'kkpr', label: 'Sudahkah memiliki KKPR?' },
    { name: 'pernyataan', label: 'Apakah pelaku usaha sudah mengisi pernyataan mandiri?' },
    { name: 'catatan', label: 'Catatan Tambahan' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setRecords([...records, { ...formData, waktu: new Date().toLocaleString() }]);
    setFormData({});
  };

  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-xl font-bold'>Form Penilaian KKPR & UMK</h1>
      {questions.map((q, idx) => (
        <div key={idx}>
          <label>{q.label}</label>
          <input
            name={q.name}
            value={formData[q.name] || ''}
            onChange={handleChange}
            className='border p-2 w-full'
          />
        </div>
      ))}
      <button onClick={handleSubmit} className='bg-blue-600 text-white p-2 rounded'>Simpan</button>
      <h2 className='text-lg font-semibold mt-6'>Hasil Penilaian</h2>
      {records.map((rec, idx) => (
        <div key={idx} className='border p-2 mt-2 bg-gray-100'>
          <p><strong>Waktu:</strong> {rec.waktu}</p>
          {questions.map((q) => (
            <p key={q.name}><strong>{q.label}</strong>: {rec[q.name]}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
