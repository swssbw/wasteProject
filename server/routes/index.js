const express = require('express');
const Sorting = require('../models/Sorting')
const router = express.Router();

// 분리수거 항목 검색
// api/search
router.post('/search', async(req,res) => {
  const result = await Sorting.find( { "item" : new RegExp(req.body.sword)});
  res.json(result);
});

// 사용자가 직접 항목 추가
// api/add
router.post('/add', async(req,res) => {
  const {item, how, category} = req.body.Input
  const sorting = new Sorting({
    item,
    how,
    category
  });

  await sorting.save();
  res.json({success: true});
})

// api/all
router.get('/all', async(req,res) => {
  const result = await Sorting.find({});
    res.json(result);
});



module.exports = router;