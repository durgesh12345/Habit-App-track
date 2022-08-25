// controller for home.ejs to show the data in page for today list
module.exports.home = function(req,res){
    return res.render('home',{
        title:"home"
    })
}

// last week data controller to show the data in page
module.exports.daydata = function(req,res){
    return res.render('7daydata',{
        title:"home"
    })
}