/* eslint-disable camelcase */
import express from 'express';
import * as dotenv from 'dotenv';

import User from '../mongodb/models/user.js';

dotenv.config();

const router = express.Router();

// GET ALL USERS
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      res.status(200).json({ success: true, data: users });
    } else {
      res.status(200).json({ success: true, message: 'No users found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err, source: 'get all users' });
  }
});

// GET USER BY ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json({ success: true, data: user });
    } else {
      res.status(200).json({ success: true, message: 'No user found' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err, source: 'get user by id' });
  }
});

// CREATE USER
router.post('/', async (req, res) => {
  try {
    const {
      user_id, email, full_name, imageUrl,
    } = req.body;
    const user = await User.create({
      user_id,
      email,
      full_name,
      imageUrl,
    });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err, source: 'create user' });
  }
});

export default router;
