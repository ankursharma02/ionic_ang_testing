import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidedemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slidedemo',
  templateUrl: 'slidedemo.html',
})
export class SlidedemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidedemoPage');
  }
  slides = [
    {
      title: "Welcome to the Docs!",
       description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
       image: "assets/imgs/ica-slidebox-img-1.png",
    
    
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  data={"required":["Load_Type","Company Name","Consigner","Dagerous Godds","Take Selection"],
  "properties":{
    "Load_Type":{"lable":"Load Type",
                  "type":"text",
                  "class":'"secondry-content"',
                  "values":["Load1","Load2"],
                  "value":"Enter Load type"
                },
     "Company Name":{"lable":"Company Name",
                  "type":"text",
                  "class":'"secondry-content"',
                  "value":"Enter company name"
              },
    "Consigner":{"lable":"Consigner",
              "type":"text",
              "class":'"secondry-content"',
              "value":"enter consigner"
          },
   "Dagerous Godds":{"lable":"Dagerous Godds",
              "type":"text",
              "class":'"secondry-content"',
              "values":["10","20"],
              "value":"Enter  Dagerous Godds"
          },
   "Take Selection":{"lable":"Take Selection",
              "type":"text",
              "class":"'secondry-content'",
              "values":["10","20"],
              "value":"Enter Take Selection"
          },
    "Ticket Type":{"lable":"Ticket Type",
              "type":"text",
              "class":"'secondry-content'",
              "values":["ticket1","ticket2"],
              "value":"none"
              
          },
      "Product Type":
          {"lable":"Product Type",
          "type":"text",
          "class":"'secondry-content'",
          "values":["Product1","Product2"]
          } , 
     "Arrival Time":
          {"lable":"Arrival Time",
          
          "class":"'secondry-content'",
          
          }  ,
          "Start Time":
          {"lable":"Start Time",
          
          "class":"'secondry-content'",
          
          }  ,
          "Start Guage":
          {"lable":"Start Guage",
          
          "class":"'secondry-content'",
          "values":["Guage1","Guage2"]
          }  ,
          "Finish Guage":
          {"lable":"Finish uage",
          
          "class":"'secondry-content'",
          "values":["FGuage1","FGuage2"]
          }  ,

  }



  
}
data1={"required":["User Name","Password","Gender","Education","Cast"],
"properties":{
  "User Name":{"lable":"User Name",
                "type":"text",
                "class":'"secondry-content"',
                
                "value":"Enter User Name"
              },
   "Password":{"lable":"Password",
              "type":"Password",
              "class":'"secondry-content"',
              "value":"Enter Password",
          },
   "Gender":{"lable":"Gender",
                "type":"text",
                "class":'"secondry-content"',
                "value":"Enter Gender",
                "values":["Male","Female","Other"]
            },
  "Education":{"lable":"Education",
            "type":"text",
            "class":'"secondry-content"',
            "value":"enter Education",
            "values":["B.tech","MCA","Not eligible"]
        },  
 "Cast":{"lable":"Cast",
            "type":"text",
            "class":'"secondry-content"',
            "value":"Enter  Cast",
            "values":["general","OBC","sc/st"]
        },
  

}

}
}
