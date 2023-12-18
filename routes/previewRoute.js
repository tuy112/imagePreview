const express = require('express');
const router = express.Router();

// 미리보기 POST
router.post('/savePreview', express.json(), (req, res) => {
  const { previewType, content } = req.body;

  // MySQL에 데이터 삽입
  const sql = 'INSERT INTO mvpMapTable (previewType, content) VALUES (?, ?)';
  connection.query(sql, [previewType, content], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error saving preview.' });
    } else {
      res.status(200).json({ success: true, message: 'Preview saved successfully.' });
    }
  });
});

// 미리보기 GET
router.get('/getPreviews', (req, res) => {

    const sql = 'SELECT * FROM mvpMapTable';
    connection.query(sql, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error getting previews.' });
      } else {
        res.status(200).json({ success: true, previews: results });
      }
    });
  });

module.exports = router;