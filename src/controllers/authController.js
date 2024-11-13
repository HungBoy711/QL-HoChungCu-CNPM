const express = require('express');
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getRegisterPage = async (req, res) => {
    try {
        return res.render('auth/registerPage.ejs')
    } catch (error) {
        res.status(500).json({ error: 'hien thi that bai' });
    }
}
const createRegister = async (req, res) => {
    try {
        const { Username, Password, Role } = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10);
        const user = new User({ Username, Password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Tao user thanh cong' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Tao user that bai' });
    }

}
const getLoginPage = async (req, res) => {
    try {
        return res.render('auth/loginPage.ejs')
    } catch (error) {
        res.status(500).json({ error: 'hien thi that bai' });
    }
}
const Login = async (req, res) => {
    try {
        const { Username, Password } = req.body;
        const user = await User.findOne({ Username });
        if (!user) {
            return res.status(401).json({ error: 'Xac thuc user that bai' });
        }
        const passwordMatch = await bcrypt.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Xac thuc mk that bai' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.cookie('jwt', token, { httpOnly: true, secure: true });
        return res.redirect('/')
    } catch (error) {
        res.status(500).json({ error: 'Dang nhap that bai' });
    }
}
const Logout = async (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/login');
}
module.exports = {
    createRegister, getRegisterPage,
    getLoginPage, Login, Logout
}