// communicationController.js

exports.getMessages = async (req, res) => {
  try {
    const messages = [
      { id: 1, to: 'John', message: 'Rent is due' },
      { id: 2, to: 'Jane', message: 'Maintenance completed' }
    ];
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
