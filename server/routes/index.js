const express = require('express');
const Sorting = require('../models/Sorting')
const router = express.Router();

// 전체 목록 조회
router.get('/all', async(req,res) => {
  const result = await Sorting.find({})
    res.json(result);
});

// 분리수거 항목 검색
router.get('/:sword', async(req,res) => {
  const result = await Sorting.find({"item":req.params.sword});
  res.json(result[0].category);
});


// 사용자가 직접 항목 추가



module.exports = router;