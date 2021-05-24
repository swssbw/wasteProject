const express = require('express');
const Sorting = require('../models/Sorting')
const router = express.Router();

// 전체 목록 조회
router.get('/all', async(req,res) => {
  const result = await Sorting.find({})
    res.json(result);
});

// 분리수거 항목 검색1
// router.get('/:sword', async(req,res) => {
//   const result = await Sorting.find({"item":req.params.sword});
//   res.json(result[0].category);
// });

// 분리수거 항목 검색2
router.post('/search', async(req,res) => {
  //const result = await Sorting.find({"item":req.body.sword});
  const result = await Sorting.find( { "item" : new RegExp(req.body.sword)});
 
  res.json(result);
});

// 사용자가 직접 항목 추가
router.post('/add', async(req,res) => {
  const {item, how} = req.body.Input
  const sorting = new Sorting({
    item,
    how 
  });
  
  await sorting.save();
  res.json({success: true});
})


module.exports = router;