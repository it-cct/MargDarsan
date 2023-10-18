import React from 'react'
import { Link } from 'react-router-dom';

const useProducts = () => {
  


  
  const product = [
    // logo img
    {
      id: 1, 
      type: "logo",
      img:"/img/newlogo2.png",
     
    },
    // Landing page/home-page-section
    {
      id: 2,
      type:["landingPage","furnitures"], 
      img : "/img/header/home-img-1.jpg",
      name:"Live Comfortably",
      
    },
   {
      id: 3, 
      type:["landingPage","skinCare"],
      img: "/img/header/home-img-2.jpg",
      name:"Skin Care",
    },
    {
      id: 4, 
      type:["landingPage","kitchen"],
      img: "/img/header/home-img-3.jpg",
      name: "Kitchen",
    },
    {
      id: 5, 
      type:["landingPage","tech"],
      img: "/img/header/home-img-4.jpg",
      name:"Electronic",
    },
    //Proud page 
    {
      id: 6, 
      type:["ProudContents","chair"],
      img: "/img/products/1.jpg",
      allimg:[ "/img/products/otherProducts/other1.jpg", "/img/products/1.jpg","/img/products/otherProducts/other2.jpg"],
      name:"Little Petra VB1 Armchair Sheepskin",
      dis:"Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.",
      price:986,
      properties:[{texture:"Sheep Skin"},{weight:"7.4kg"},{size:"90cm * 80cm * 120cm"}],
      noofSale: 40
    },
    {
      id: 7, 
      type:["ProudContents","kitchen"],
      img: "/img/products/2.jpg",
      allimg:["/img/products/2.jpg","/img/products/otherProducts/toster1.jpg", "/img/products/otherProducts/toster2.jpg"],
      name:"Pop-Up Toaster, White, 45cm",
      dis: "The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.",
      properties:[{size: "W 25 x D 16.5 x H 19.5 (cm) Max"},{headSize: "W 12.5 x D 1.5 3 x H 10 (cm)"},{weight: "1.1kg"},{cord: "140cm"}],
      price:49,
      noofSale: 30

    },
    {
      id: 8, 
      type:["ProudContents","lamp"],
      img: "/img/products/3.png",
      allimg:["/img/products/otherProducts/lampblue1.webp","/img/products/otherProducts/lampblue2.webp","/img/products/3.png",],
      name:"Flowerpot VP1 Pendant Light Blue",
      dis:"The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions.",
      properties: [{manufacturer: "&tradition"},{lightSource: "1 piece. E27 Max 40W"},{designer: "Verner Panton for &tradition"},{cordlength: "3 Meter Yellow Fabric Cord"}],
      price:254,
      noofSale: 35

    },
    {
      id: 9, 
      type:["ProudContents","furnitures"],
      img: "/img/products/4.jpg",
      allimg:["/img/products/4.jpg","/img/products/otherProducts/pulpunit1.jpg","/img/products/otherProducts/pulpunit2.jpg"],
      name:"Pulp Unit - 5 Compartments",
      dis: "Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, angle files and ring binders fit neatly inside.",
      properties:[{"Max Shelf Load" : "15kg"},{"Outer Dimensions" :"w37.5 x d29 x h180cm"},{'Inside Compartment' : "w34 x d27.5 x h34cm"},{ Assembly : "Approx. 15 minutes, requires screwdriver"}],
      price:79,
      noofSale: 30
    },
    {
      id: 10, 
      type:["ProudContents","lamp"],
      img: "/img/products/5.jpg",
      allimg: ["/img/products/5.jpg","/img/products/otherProducts/moderngold1.webp","/img/products/otherProducts/modergold2.webp"], 
      name:"Tom Dixon Melt Pendant Gold",
      dis: "Tom Dixon and FRONT have created an incredibly beautiful pendant, in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The first of its kind. the lamp is transparent when its on and you can see the exciting play of colors.",
      properties: [{Manufacturer : "Tom Dixion"},{Dimensiones: "50cm * 50cm"},{Materials: "Polycarbonate & Metal",}],
      price:847,
      noofSale: 25

    },
    {
      id: 11, 
      type:["ProudContents","skinCare"],
      img: "/img/products/6.jpg",
      allimg:["/img/products/6.jpg"],
      name:"Oil Cleansing 200ml",
      dis: "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.",
      properties:[{"Country of Origin": "japan"},{"Weight": "240kg"},{"User Manuals" : "no manuals found"}],       
      price:65,
      noofSale: 20

    },
    {
      id: 12, 
      type:["ProudContents","lamp"],
      img: "/img/products/7.jpg",
      allimg:["/img/products/7.jpg", "/img/products/otherProducts/blackandwhite1.webp","/img/products/otherProducts/blackandwhite2.webp",],
      name:"Woud Dot Pendant Large Black",
      dis: "Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off. Dot comes in 3 different sizes, which allows the lamp to stand alone, but also exploit its full potential by combining the family into a cluster of pendants in different shapes, which create a sculptural look in the home.",
      properties:[{"Manufacturer" : "WOUD"},{"Ligt Source" : "1 pc E14 max 25W"},{"Cord length" : "3 meter"},{"Height": "21cm"}],
      price:120,
      noofSale: 15
    },
    {
      id: 13, 
      type:["skinCare"],
      img: "/img/products/20r.jpg",
      allimg:[ "/img/products/20r.jpg"],
      name:"Oil Cleasing 50ml",
      dis:"Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.",
      properties:[{"Country of origin": "Japan", },{"Weight":"60g",},{"User Manuals" : "no manuals found",}],
      price:55,
      noofSale: 15
    },
    {
      id: 14, 
      type:["furnitures"],
      img: "/img/products/9.png",
      allimg:["/img/products/9.png","img/products/otherProducts/vase1.webp","img/products/otherProducts/vase2.webp",],
      name:"Cube Lolo Vase Black",
      dis: "Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassen's 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision.",
      properties:[{"Design" : "Søren Lassen for By Lassen"},{"Manufacturer" : "By Lassen"},{"Material": "Metal"},{"Dimensions": "24cm * 12cm * 12cm"}],
      price:161,
      noofSale: 15
    },
    {
      id: 15, 
      type:["chair"],
      img: "/img/products/10.jpg",
      allimg:["/img/products/10.jpg","/img/products/otherProducts/chairboom1.webp",
      "/img/products/otherProducts/chairboom2.webp"], 
      name:"Traditional Boomerang",
      dis:"Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home.",
      properties:[{ Manufacturer:"tradition"},{"Designer":"Hvidt & Mølgaard for &Tradition"},{"Colour":"Oiled oak and upholstery in Duke 004"},{"Material":"Oak, plastic, steel, HR foam and upholstery in Duke 004",}],
      price:989,
      noofSale: 15
    },
    {
      id: 16, 
      type:["lamp"],
      allimg:["/img/products/11.jpg","/img/products/otherProducts/blacklamps1.webp"],
      img: "/img/products/11.jpg", 
      name:"The Sun Pendant Black",
      dis: "The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting . Heres Comes The Sun pendants are available in four different coulours and in five sizes.",
      properties:[{"Manufacture": "Here Comes The Sun"},{"Light source": "1 x E14 Max 40W"},{"Materials:": "Aluminium"},{"Designer":"Bertrand Balas for Here Comes The Sun"}],
      price:160,
      noofSale: 15
    },
    {
      id: 17, 
      type:["lamp"],
      img: "/img/products/12.png",
      allimg:["/img/products/12.png","/img/products/otherPrducts/goldenlamp1.webp","/img/products/otherPrducts/goldenlamp2.webp"],
      name:"Flowerpot VP1 Pendant Polished Brass",
      dis: "Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years.",
      properties:[{"Manufacture": "tradition"},{"Light source": "1 pcs. E27 Max 40W"},{"Cord Length": "3 Metre Black Fabric Covered Cable"},{"Designer":"Verner Panton for &tradition"}],
      price:354,
      noofSale: 15
    },
    {
      id: 18, 
      type:["furnitures"],
      allimg:["/img/products/8.jpg","/img/products/otherPrducts/shelf1.webp","/img/products/otherPrducts/shelf2.webp"],
      img: "/img/products/8.jpg",
      name:"Gejst Nivo Shelf A Black Ash/Black",
      dis:"Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf.",
      properties:[{"Manufacturer:":"Gest"},{"Dimentions":"42cm * 16cm * 64cm"},{"Materials:": "Ash and steel"}],
      price:135,
      noofSale: 15
    },
    {
      id: 19, 
      type:["skinCare"],
      img: "/img/products/13.jpg",
      allimg:["/img/products/13.jpg","/img/products/otherProducts/cotton1.jpg"],
      name:"TraditionaUnbleached Cotton Pads 180",
      dis: "Cotton pads made from soft, unbleached cotton. These are made in Japan and made from 100% cotton.",
      properties:[{"Material" :"Cotton 100%"},{"Weight": "110g"},{"Country of origin:":"Japan"}],
      price:33,
      noofSale: 15
    },
    {
      id: 20, 
      type:["chair"],
      img: "/img/products/14.png",
      allimg:["/img/products/14.png","/img/products/otherProducts/woodchair1.webp","/img/products/otherProducts/woodchair2.webp"],
      name:"The Spanish Chair Soaped Oak/Natural Saddle Leather",
      dis:"When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.",
      properties:[{"Manufacture": "Fredericia Furniture"},{"Designer": "Børge Mogensen for Fredericia Furniture"},{"Color:": "Soap-treated oak and natural"},{"Materials":"Oak and saddle leather"}],
      price:688,
      noofSale: 15
    },
    {
      id: 21, 
      type:["lamp"],
      img: "/img/products/11.jpg",
      allimg:["/img/products/11.jpg","/img/products/otherProducts/blacklamps1.webp","The Sun Pendant Black"],
      dis: "The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting . Heres Comes The Sun pendants are available in four different coulours and in five sizes.",
      properties:[{"Manufacture": "Here Comes The Sun"},{"Light source": "1 x E14 Max 40W"},{"Materials:": "Aluminium"},{"Designer":"Bertrand Balas for Here Comes The Sun"}],
      price:160,
      noofSale: 15
    },
    {
      id: 22, 
      type:["chair"],
      allimg:["/img/products/15.jpg","/img/products/otherProducts/copenhagen1.webp","/img/products/otherProducts/copenhagen2.webp"],
      img: "/img/products/15.jpg",
      name:"Normann Copenhagen Hyg Armchair",
      dis:"The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs. Hygge is about creating a warm atmosphere and enjoying life's simple pleasures with good friends and family - Exactly that is the core of Danish culture.",
      properties:[{"Manufacturer:":"Normann Copenhagen"},{"Designer:" :"Simon Legald, 2018"},{"Material:":"Shell: Hard molded PU foam and steel. Cushion Hard molded PU foam. Legs: Oak. Upholstery: Leather in ULTRA41574"}],
      price:585,
      noofSale: 15
    },
    {
      id: 23, 
      type:["electronic"],
      img: "/img/products/16.jpg",
      allimg:["/img/products/16.jpg","/img/products/otherProducts/cam1.webp"], 
      name:"Antidark Easy Mini W75 Wall Light LED Black",
      dis:"Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling",
      properties:[{"Manufacturer":"Antidark"},{"Product type": "Wall lights"},{"Delivery time":"Delivery 7-10 days"}],
      price:134,
      noofSale: 15
    },
    {
      id: 24, 
      type:["lamp"],
      img: "/img/products/17.png",
      allimg:["/img/products/17.png","/img/products/otherProducts/tablelamp1.webp","/img/products/otherProducts/tablelamp2.webp"],
      name:"Flowerpot VP9 Table Lamp Portable Gray Beige",
      dis:"the lamp has also become popular in private homes and has especially made a comeback in recent years. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
      price:184,
      noofSale: 15
    },
    {
      id: 25, 
      type:["lamp"],
      img: "/img/products/18.png",
      allimg:[ "/img/products/18.png","/img/products/otherProducts/mat1.webp","/img/products/otherProducts/mat2.webp"],
      name:"Traditional Flowerpot Lamp",
      dis:"Unique offer We give you a special discount when you put this product in the basket. *Only applies to specific products.",
      properties:[{"Color":"Black"},{"Weight":"0.3kg"},{"Delivery Time":"2-3 Days"}],
      price:77,
      noofSale: 15
    },
    {
      id: 26, 
      type:["chair"],
      img: "/img/products/19.jpg",
      allimg:["/img/products/otherProducts/comfy1.webp","/img/products/otherProducts/comfy2.webp","/img/products/19.jpg"],
      name:"Normann Copenhagen Sum Armchair",
      dis:"Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
      price:968,
      noofSale: 15
    },
    

  ]
  return product;
}

export default useProducts