const contactService = require('../services/contact');

const contactController = {
  // Create a new contact document
  createContact: async (req, res) => {
    try {
      const contact = await contactService.createContact(req.body);
      res.status(201).json(contact);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all contact documents
  getAllContacts: async (req, res) => {
    try {
      const contacts = await contactService.getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a specific contact document by ID
  getContactById: async (req, res) => {
    try {
      const contact = await contactService.getContactById(req.params.id);
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a specific contact document by ID
  updateContact: async (req, res) => {
    try {
      const contact = await contactService.updateContact(req.params.id, req.body);
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.status(200).json(contact);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a specific contact document by ID
  deleteContact: async (req, res) => {
    try {
      const contact = await contactService.deleteContact(req.params.id);
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = contactController;
