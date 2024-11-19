const User = require('../models/User');

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  readUser
};

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    
    res.status(201).json(user); // Status code for Created resource
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    
    const deletedUser = await User.findByIdAndDelete(id);
    
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(204).send(); // Status code for No Content
  } catch (err) {
    res.status(500).json('Server Error');
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json('Server Error');
  }
}

async function readUser(req, res) {
  try {
    const { id } = req.params;
    
    const user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json('Server Error');
  }
}

