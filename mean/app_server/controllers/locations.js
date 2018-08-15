
module.exports.homelist = function(req, res){
    res.render('location-list',{
        title: 'home',
        pageHeader:{
            title: 'Loc8R',
            strapline: 'find places to work with wifi'
        },
        sidebar:'lookin for wifi and seat? we help you find places to work when out and about. perhaps with coffe or a pint. let we help you find the place you\'re looking for.',
        locations:[
            {
                name:'Starcup',
                address:'125 hight street, h.12',
                rating:3,
                facilities:['hot drinks','food','premium wifi'],
                distance:'100m'
            },
            {
                name:'Cafe hero',
                address:'125 hight street, h.12',
                rating:4,
                facilities:['hot drinks','food','premium wifi'],
                distance:'200m'
            },
            {
                name:'Birger Queen',
                address:'125 hight street, h.12',
                rating:2,
                facilities:['hot drinks','food','premium wifi'],
                distance:'250m'
            }
        ]
    });
}

module.exports.locationInfo = function(req, res){
    res.render('location-info',{
        itle: 'Starcups',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
}

module.exports.addReview = function(req, res){
    res.render('location-review-form',{title:'Add review'});
}