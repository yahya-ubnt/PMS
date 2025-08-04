// unitsController.js

exports.getUnits = async (req, res) => {
  try {
    const units = [
      { id: 1, name: 'Unit A1', status: 'Occupied' },
      { id: 2, name: 'Unit B2', status: 'Vacant' }
    ];
    res.json(units);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch units' });
  }
};
