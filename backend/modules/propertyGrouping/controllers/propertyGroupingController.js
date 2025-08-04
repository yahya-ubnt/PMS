// propertyGroupingController.js

exports.getPropertyGroups = (req, res) => {
  res.status(200).json([
    { id: 1, name: "Apartments" },
    { id: 2, name: "Townhouses" },
    { id: 3, name: "Commercial Units" },
  ]);
};
