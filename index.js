const express = require("express")
    // const axios = require("axios").default;
const request = require('request');
const cheerio = require('cheerio');

const app = express();
app.use(express.json())
const port = process.env.port  || 2701;

app.get('/', (req,res) => {
    //    res.send("Hi there")
       
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
                image.push($(".s-main-slot").children().eq(index).children().eq(0).find("img.s-image").html())
             })

             console.log(title) 
             res.status(200).send({title,price})
             console.log(rating)
             console.log(price)
            //  res.status(200).send(price)
             console.log(offePrice)
             console.log(image)

            // const siteHeading = $ (".sg-col-4-of-12")
            // console.log(siteHeading.html())
            // res.send($.siteHeading.text())
            // const output = siteHeading.find('h3').text();
            // console.log(output)
        }
    })
    })

   

app.listen(port, () => console.log("Your server runnig with " + " " + port))    

// div id= "a-page" >
    // div id = search
        // div class="s-desktop-width-max"

        // < span class= "rush-component"
        // div class="s-main-slot" 
            // div class= "sg-col-4-of-12" (index 4) - total index 26
