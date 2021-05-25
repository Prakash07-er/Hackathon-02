const express = require("express")
    // const axios = require("axios").default;
const request = require('request');
const cheerio = require('cheerio');

const app = express();
app.use(express.json())
const port = process.env.port  || 2701;

app.get('/', (req,res) => {
         
     var $;
       request('https://www.amazon.in/s?bbn=1389401031&rh=n%3A1389401031%2Cp_89%3AOnePlus&dc&qid=1621862932&rnid=3837712031&ref=lp_1389401031_nr_p_89_2', (error, response, html) => {
        if (!error && response.statusCode == 200) {
             $ = cheerio.load(html);
            //  console.log($.html())
            //  res.send($.html())

             var title=[]
             var rating = []
             var price = []
             var offePrice=[]
             var image = []
             var allItems = $(".s-main-slot").children();
             allItems.each(function(index) {
                title.push($(".s-main-slot").children().eq(index).children().eq(0).find("h2.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-4").text())
                rating.push($(".s-main-slot").children().eq(index).children().eq(0).find("i.a-icon.a-icon-star-small.a-icon-star-small-4-5").text())
                price.push($(".s-main-slot").children().eq(index).children().eq(0).find("span.a-price-whole").text())
                offePrice.push($(".s-main-slot").children().eq(index).children().eq(0).find("span.a-offscreen").text())
                image.push($(".s-main-slot").children().eq(index).children().eq(0).find("div.s-main-slot").html())
             })

             console.log(title) 
             res.status(200).send({title,price,offePrice})
             console.log(rating)
             console.log(price)
             res.status(200).send(price)
             console.log(offePrice)
             console.log(image)
       
        }
    })
    })

app.get('/' , (req , res)=>{

    var $;
    request('https://www.flipkart.com/search?sid=tyy%2C4io&otracker=CLP_Filters&p%5B%5D=facets.brand%255B%255D%3DAPPLE', (error, response, html) => {
          if (!error && response.statusCode == 200) {
             $=cheerio.load(html)

             var flipTitle=[]
             var flipPrice = []
             var flipOfferPrice=[]
             var flipAllItems =$("._1fQZEK").children();
             flipAllItems.each(function(index) {
                 flipTitle.push($("._1fQZEK").children().eq(index).children().eq(0).find("div._4rR01T").text())
                 flipPrice.push($("._1fQZEK").children().eq(index).children().eq(0).find("div._30jeq3._1_WHN1").text())
                 flipOfferPrice.push($("._1fQZEK").children().eq(index).children().eq(0).find("div._3I9_wc._27UcVY").text())

             })
                 console.log(flipTitle) 
                 console.log(flipPrice)
                 console.log(flipOfferPrice)
                 res.status(200).send({flipTitle,flipPrice,flipOfferPrice})
          }
        })
})   

app.get('/' , (req , res)=>{

    var $;
    request('https://www.snapdeal.com/products/mobiles-mobile-phones/filters/Form_s~Smartphones?sort=plrty&q=Form_s%3ASmartphones%7C', (error, response, html) => {
          if (!error && response.statusCode == 200) {
             $=cheerio.load(html)

             var snapTitle=[]
             var snapPrice = []
             var snapOfferPrice=[]
             var snapAllItems =$(".col-xs-6").children();
             snapAllItems.each(function(index) {
                snapTitle.push($(".col-xs-6").children().eq(index).children().eq(0).find("p.product-title").text())
                snapPrice.push($(".col-xs-6").children().eq(index).children().eq(0).find("div#display-price-641812650061.lfloat.product-price").text())
                snapOfferPrice.push($(".col-xs-6").children().eq(index).children().eq(0).find("span.lfloat.product-desc-price.strike").text())

             })
                 console.log(snapTitle) 
                 console.log(snapPrice)
                 console.log(snapOfferPrice)
                 res.status(200).send({snapTitle,snapPrice,snapOfferPrice}).trim()
          }
        })
})

app.listen(port, () => console.log("Your server runnig with " + " " + port))    

