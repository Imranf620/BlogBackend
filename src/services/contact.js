const Contact = require('../models/contact');

const contactService = {
  // Create a new contact document
  createContact: async (contactData) => {
    try {
      const contact = new Contact(contactData);
      await contact.save();
      return contact;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get all contact documents
  getAllContacts: async () => {
    try {
      return await Contact.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a specific contact document by ID
  getContactById: async (id) => {
    try {
      return await Contact.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Update a specific contact document by ID
  updateContact: async (id, updatedData) => {
    try {
      return await Contact.findByIdAndUpdate(id, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Delete a specific contact document by ID
  deleteContact: async (id) => {
    try {
      return await Contact.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = contactService;
