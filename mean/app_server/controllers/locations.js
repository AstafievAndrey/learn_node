
module.exports.homelist = function(req, res){
    res.render('index',{title:'home'});
}

module.exports.locationInfo = function(req, res){
    res.render('index',{title:'Location Info'});
}

module.exports.addReview = function(req, res){
    res.render('index',{title:'Add review'});
}