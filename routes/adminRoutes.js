const express = require('express');
const mongoose = require('mongoose');
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const argon2 = require('argon2');


const createAdmin = async (req, res) => {
    try {
        console.log({ body: req.body })
        const email = req.body.email;
        const admin = await Admin.findOne({ email: email });
        if (admin) {
            throw new Error("Admin Already Exists.")
        }

        const password = req.body.password;
        const name = req.body.name;
        const hostel = req.body.hostel;
        const role = ['admin'];

        const hash = await argon2.hash(req.body.password);
        const newAdmin = await Admin.create({
            name,
            email,
            password: hash,
            hostel,
            role
        })

        res.status(200).json({ success: true, details: newAdmin });
    } catch (err) {
        res.status(400).json({ error: err.toString() });
    }
}

const adminRouter = express.Router();

adminRouter.post("/newadmin", createAdmin);

module.exports = adminRouter