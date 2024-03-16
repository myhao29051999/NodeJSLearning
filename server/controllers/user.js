import User from '../models/user';

const createUser = async (req, res) => {
  try {
    // {
    //     "age": 18,
    //     "name": "hung"
    // }
    let user = new User(req.fields); // Khoi tao user vs gtri tuong ung vs cac key trong userSchema
    await user.save();
    res.send("Create user successfully!");
  } catch (error) {
    res.status(500).send(err);
  }
}

const getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.userId;
    let user = await User.findById(id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

const updateUserById = async (req, res) => {
  try {
    const id = req.params.userId;
    let updateUser = req.fields;
    let result = await User.updateOne({_id: id}, {$set: updateUser});
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

const deleteUserById = async(req, res) => {
  try {
    const id = req.params.userId;
    await User.deleteOne({_id: id});
    res.send(`delete userId=${id} successfully!`);
  } catch (error) {
    res.status(500).send(error);
  }
}

export {createUser, getAllUsers, getUserById, updateUserById, deleteUserById}
