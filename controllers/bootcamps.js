// @desc  Get all bootcamps
// @route GET api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: 'Show all the bootcamps' });
}

// @desc  Get single bootcamp
// @route GET api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show single bootcamp ${req.params.id}`});
}

// @desc  update bootcamp
// @route PUT api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update a bootcamp ${req.params.id}`});
}

// @desc  delete bootcamp
// @route DELETE api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete a bootcamp ${req.params.id}`});
}

// @desc  create bootcamp
// @route POST api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Create a bootcamp`});
}

