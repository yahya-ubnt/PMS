// financialsController.js

exports.getFinancialSummary = async (req, res) => {
  try {
    // Mock financial data (replace with DB queries later)
    const summary = {
      totalRentCollected: 75000,
      totalPendingRent: 15000,
      totalExpenses: 20000,
      netIncome: 55000
    };

    res.json(summary);
  } catch (error) {
    console.error('Error fetching financial summary:', error);
    res.status(500).json({ error: 'Failed to fetch financial data' });
  }
};
