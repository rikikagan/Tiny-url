import UsersModel from "../Models/UsersModel.js";

const UsersController = {
  getList: async (req, res) => {
    try {
      const users = await UsersModel.find();
      res.json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersModel.findById(id).populate('links');
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  add: async (req, res) => {
    const { name, email, password ,links} = req.body;
    try {
      const newUser = await UsersModel.create({ name, email, password,links });
      res.json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await UsersModel.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await UsersModel.findByIdAndDelete(id);
      res.json(deletedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default UsersController;
