"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const Category_1 = require("../models/Category");
class CategoryController {
    static getCategories(req, res, next) {
        Category_1.Category.find({}, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Categories found!', data: result });
            }
        });
    }
    static saveCategories(req, res, next) {
        const categories = req.body;
        Category_1.Category.insertMany(categories, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Categories Added!', data: result });
            }
        });
    }
}
exports.CategoryController = CategoryController;
