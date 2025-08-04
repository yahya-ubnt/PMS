// settingsController.js

exports.getSettings = async (req, res) => {
  try {
    const settings = {
      siteName: 'My Property Manager',
      currency: 'KES',
      language: 'English'
    };
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};
