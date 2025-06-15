const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const supabase = require('../supabaseClient');

const tableMap = {
    home: 'dp'
}

router.post('/:category/upload', upload.single('media'), async (req, res) => {
  try {
    const { category } = req.params;
    const table = tableMap[category];
    if (!table) {
      return res.status(400).json({ success: false, error: 'Invalid category or table' });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No media file uploaded' });
    }

    const { name } = req.body;
    const { path, mimetype } = req.file;

    const insertData = {
      name,
      url: path,
      category,
      filetype: mimetype,
      created_at: new Date().toISOString()
    };

    const filteredData = Object.fromEntries(
      Object.entries(insertData).filter(([_, v]) => v !== undefined && v !== null && v !== '')
    );

    console.log('Filtered data to insert:', filteredData);

    const { data, error } = await supabase.from(table).insert([filteredData]);

    if (error) {
      console.error('Supabase insert error:', error.message || error);
      return res.status(500).json({ success: false, error: 'Failed to insert data into Supabase' });
    }

    res.json({ success: true, data });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, error: 'Upload failed due to server error' });
  }
});

// Express GET endpoint
router.get('/:category/media', async (req, res) => {
  const { category } = req.params;
  const table = tableMap[category];
  if (!table) return res.status(400).json({ error: 'Invalid category' });

  const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: 'Failed to fetch media' });

  res.json(data);
});


module.exports = router;