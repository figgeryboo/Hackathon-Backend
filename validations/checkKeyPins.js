const checkName = (req, res, next) => {
	if (req.body.name) {
	  next();
	} else {
	  res.status(400).json({ error: 'A location name is required' });
	}
  };
  
  const checkColor = (req, res, next) => {
	if (req.body.color) {
	  return next();
	} else {
	  res.status(400).json({ error: 'The color theme of the location is required' });
	}
  };
  
  const checkAddress = (req, res, next) => {
    if (req.body.address) {
        return next();
      } else {
        res.status(400).json({ error: 'The address of the location is required' });
      }
    };
  
  const checkComment = (req, res, next) => {
    if (req.body.comment) {
        return next();
      } else {
        res.status(400).json({ error: 'A comment is required' });
      }
    };
  
  
  module.exports = {
    checkName,
    checkColor,
    checkAddress,
    checkComment,
  };
  