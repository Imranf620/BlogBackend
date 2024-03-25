const infoService = require('../services/info');

const infoController = {
  // Create a new info document
  createInfo: async (req, res) => {
    try {
      let newInfo = { ...req.body };
      
      // Handling file uploads
      if (req.files) {
        if (req.files.image1 && req.files.image1[0]) {
          newInfo.image1 = req.files.image1[0].path;
        }
        if (req.files.image2 && req.files.image2[0]) {
          newInfo.image2 = req.files.image2[0].path;
        }
        if (req.files.image3 && req.files.image3[0]) {
          newInfo.image3 = req.files.image3[0].path;
        }
        if (req.files.image4 && req.files.image4[0]) {
          newInfo.image4 = req.files.image4[0].path;
        }
        if (req.files.image5 && req.files.image5[0]) {
          newInfo.image5 = req.files.image5[0].path;
        }
      }

      // Create new info document
      const info = await infoService.createInfo(newInfo);
      
      res.status(201).json(info);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all info documents
  getAllInfos: async (req, res) => {
    try {
      const infos = await infoService.getAllInfos();
      res.status(200).json(infos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific info document by ID
  getInfoById: async (req, res) => {
    try {
      const info = await infoService.getInfoById(req.params.id);
      if (!info) {
        return res.status(404).json({ error: 'Info not found' });
      }
      res.status(200).json(info);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific info document by ID
  updateInfo: async (req, res) => {
    try {
      let updatedInfo = { ...req.body };
  
      if (req.files) {
        if (req.files.image1 && req.files.image1[0]) {
          updatedInfo.image1 = req.files.image1[0].path;
        }
        if (req.files.image2 && req.files.image2[0]) {
          updatedInfo.image2 = req.files.image2[0].path;
        }
        if (req.files.image3 && req.files.image3[0]) {
          updatedInfo.image3 = req.files.image3[0].path;
        }
        if (req.files.image4 && req.files.image4[0]) {
          updatedInfo.image4 = req.files.image4[0].path;
        }
        if (req.files.image5 && req.files.image5[0]) {
          updatedInfo.image5 = req.files.image5[0].path;
        }
      }
  
      const info = await infoService.updateInfo(req.params.id, updatedInfo);
  
      if (!info) {
        return res.status(404).json({ error: 'Info not found' });
      }
  
      res.status(200).json(info);
    } catch (error) {
      console.error('Error in updateInfo:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  

  // Delete a specific info document by ID
  deleteInfo: async (req, res) => {
    try {
      const info = await infoService.deleteInfo(req.params.id);
      if (!info) {
        return res.status(404).json({ error: 'Info not found' });
      }
      res.status(200).json({ message: 'Info deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = infoController;
