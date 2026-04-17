const formData = new FormData();
formData.append('studentNameEn', 'Test User');
fetch('http://localhost:3000/api/submit-application', { method: 'POST', body: formData }).then(r=>r.text()).then(console.log);
