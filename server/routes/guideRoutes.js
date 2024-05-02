// server/routes/guideRoutes.js

const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guideController');

// Route to fetch all guides
router.get('/guides', guideController.getAllGuides);

// Route to create a new guide
router.post('/guides', guideController.createGuide);

// Route to update a guide
router.put('/guides/:id', guideController.updateGuide);

// Route to delete a guide
router.delete('/guides/:id', guideController.deleteGuide);

module.exports = router;
