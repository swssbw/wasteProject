const express = require('express');
const Sorting = require('../models/Sorting')
const router = express.Router();

// 전체 목록 조회 API
router.get('/all', async(req,res) => {
  const result = await Sorting.find({});
    res.json(result);
});

// 관리자가 아이템 추가
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

// 아이템 수정
router.put('/:id', async(req, res) => {
  let id = req.params._id;
  const result = await Sorting.findByIdAndUpdate(id, req.body);
  res.json(result);
})

// 아이템 삭제 
router.delete('/:id', async(req, res) => {
  let id = req.params._id;
  const result = await Sorting.findByIdAndRemove(id);
  res.json(result);
})

module.exports = router;