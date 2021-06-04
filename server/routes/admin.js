const express = require('express');
const Sorting = require('../models/Sorting')
const router = express.Router();

// 전체 목록 조회 API
// GET api/admin/all
router.get('/all', async(req,res) => {
  const result = await Sorting.find({});
    res.json(result);
});

// 관리자가 아이템 추가
// POST api/admin/add POST
router.post('/add', async(req,res) => {
  const {item, how, category} = req.body.Input
  const sorting = new Sorting({
    item,
    how,
    category,
  });

  await sorting.save();
  res.json({success: true});
})

// 개별 아이템 조회
// GET api/admin/update/:id
router.get('/update/:id', async(req,res) => {
  const result = await Sorting.find({"_id" : req.params.id });
  res.json(result);
});


// 아이템 수정
// PUT api/admin/update/:id 
router.put('/update/:id', async(req, res) => {
  // const {item, how, category} = req.body.Input
  let id = req.params.id;
  console.log("!!!!!!!!!!!!req.body.item는", req.body.item);
  const result = await Sorting.findByIdAndUpdate({"_id" : id }, { 
    item: req.body.item,
    how: req.body.how,
    category: req.body.category,
  });
  res.json(result);
})

// 아이템 삭제 
// DELETE api/admin/delete/:id 
router.delete('/delete/:id', async(req, res) => {
  let id = req.params.id;
  const result = await Sorting.findByIdAndRemove(id);
  res.json(result);
})

module.exports = router;