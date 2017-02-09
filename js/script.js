
//getty images apikey
var apiKey = 'hj76uu4mz63gee298cjjpyue';


//function to call the getty images research.
//Event is the parameter bound in the function to generate the "onclick" event on each <tr>, when printing the table (function print)
//It consists of Type + Breed
//The getty call returns only the first image, as for demo purposed I believe it's enough.
function getty(event){
var breed=event.data.param;
$.ajax(
    {
        type:'GET',
        url: "https://api.gettyimages.com/v3/search/images/creative?phrase="+breed, //query getty images for Type + Breed
         beforeSend: function (request)
            {
                request.setRequestHeader("Api-Key", apiKey);
            }})
    .done(function(data){
        console.log("Success with data")
          $(".modal-content").empty(); //empty the modal window each time a new image is loaded. Forced clear to make sure it's emptied
          if ( typeof data.images[0] == 'undefined')
            { alert("Sorry! No image available at the moment"); //if getty doesn't return any images, display an alert
              return;
              }
           $(".modal-content").append("<img src='" + data.images[0].display_sizes[0].uri + "'/>");//append the image with the <img> tag to the modal window
           $('#modal1').modal('open');//open the modal window when ready. It is delayed because of the response time of getty.
    })
    .fail(function(data){
        alert(JSON.stringify(data,2))
    });
}

//Trigger research when pressing ENTER
function trigg_ent(evt){
if (evt.keyCode === 13) 
  {fire();}
}

//function to empty the table displayed in the page whenever a new research is done.
function empty_table()
{
  var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
  tableRef.innerHTML = "";

}
//function added just to avoid typing the cell+append code each time.
function add_cell(value)
{
  newCell  = newRow.insertCell(-1);
  newText  = document.createTextNode(value);
  newCell.appendChild(newText);
};
//first instance of the research "fired" on each request. It checks the connection to the xml file and passes it through the real research function.
 function fire () 
    {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() 
        {
        if (this.readyState == 4 && this.status == 200) 
          {
          search_init(this);
          }
        };
    xhttp.open("GET", "animals.xml", true);
    xhttp.send(); 
    };
//research query, split in different sections in order to use the same function to cycle through all the possible combinations of fields.
//src_type defines the number of input fields which have been filled in. This goes through the switch cases.
//len defines the length of the cycle to be performed.
function search_query(xmlDoc, src_type, item1, item2, item3, item4, item5, len, type1, type2, type3, type4, type5)
{
  var check1, check2, check3, check4, check5;
  var n1, n2, n3, n4, n5;
  var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
  switch (src_type){
    case 1:
          for (i=0; i<len; i++)
          {
              check1 = xmlDoc.getElementsByTagName(item1)[i].childNodes[0].nodeValue;;
              n1=check1.includes(type1);
              if (n1==true)
                {print(xmlDoc, tableRef, i, 0, 0);}
          }
          break;
    case 2:
          for (i=0; i<len; i++)
            {
            check1 = xmlDoc.getElementsByTagName(item1)[i].childNodes[0].nodeValue;;
            check2 = xmlDoc.getElementsByTagName(item2)[i].childNodes[0].nodeValue;;
              n1=check1.includes(type1);
              n2=check2.includes(type2);
              if (n1==true && n2 ==true)
                {
                print(xmlDoc, tableRef, i, 0, 0);
              }
            }break;
    case 3:
          for (i=0; i<len; i++)
            {
            check1 = xmlDoc.getElementsByTagName(item1)[i].childNodes[0].nodeValue;;
            check2 = xmlDoc.getElementsByTagName(item2)[i].childNodes[0].nodeValue;;
            check3 = xmlDoc.getElementsByTagName(item3)[i].childNodes[0].nodeValue;;
              n1=check1.includes(type1);
              n2=check2.includes(type2);
              n3=check3.includes(type3);
              if (n1==true && n2==true && n3== true)
                {print(xmlDoc, tableRef, i, 0, 0);}
            }break;
    case 4:
          for (i=0; i<len; i++)
            {
            check1 = xmlDoc.getElementsByTagName(item1)[i].childNodes[0].nodeValue;;
            check2 = xmlDoc.getElementsByTagName(item2)[i].childNodes[0].nodeValue;;
            check3 = xmlDoc.getElementsByTagName(item3)[i].childNodes[0].nodeValue;;
            check4 = xmlDoc.getElementsByTagName(item4)[i].childNodes[0].nodeValue;;
              n1=check1.includes(type1);
              n2=check2.includes(type2);
              n3=check3.includes(type3);
              n4=check4.includes(type4);
              if (n1==true && n2==true && n3==true && n4==true)
                {print(xmlDoc, tableRef, i, 0, 0);}
            }break;
    case 5:
          for (i=0; i<len; i++)
            {
            check1 = xmlDoc.getElementsByTagName(item1)[i].childNodes[0].nodeValue;;
            check2 = xmlDoc.getElementsByTagName(item2)[i].childNodes[0].nodeValue;;
            check3 = xmlDoc.getElementsByTagName(item3)[i].childNodes[0].nodeValue;;
            check4 = xmlDoc.getElementsByTagName(item4)[i].childNodes[0].nodeValue;;
            check5 = xmlDoc.getElementsByTagName(item5)[i].childNodes[0].nodeValue;;
              n1=check1.includes(type1);
              n2=check2.includes(type2);
              n3=check3.includes(type3);
              n4=check4.includes(type4);
              n5=check5.includes(type5);
              if (n1==true && n2==true && n3==true && n4==true && n5==true)
                {
                print(xmlDoc, tableRef, i, 0, 0);
                }
            }break;
  } 
};
//middle researchh function. This defines the lenght of the research and the case to be applied in the core reserach function.
//By filterin the research in three steps I'm able to identify which fields have been filled in and which ones should be used against the research query.
      function search_init(xml)
      {
        empty_table();
        var item, item1, item2, item3, item4, item5;
        var id, name, type, gender, breed, color;
        type = document.getElementById("search_type").value;
        id = document.getElementById("search_id").value;
        name = document.getElementById("search_name").value;
        gender = document.getElementById("search_gender").value;
        breed = document.getElementById("search_breed").value;
        color = document.getElementById("search_color").value;

        var xmlDoc = xml.responseXML;
        var len = xmlDoc.getElementsByTagName("Animal_ID").length;

        //Single Search Cases

        if (name =="" && type == "" && gender =="" && breed =="" && color =="")
        { item = "Animal_ID"; search_query(xmlDoc, 1, item, "", "", "", "", len, id, "", "", "", ""); return;} // search by Animal ID
        if (id =="" && type == "" && gender =="" && breed =="" && color =="")
        {item = "Animal_Name";search_query(xmlDoc, 1, item, "", "", "", "", len, name, "", "", "", "");return;} //search by Animal Name
        if ( name =="" && gender =="" && breed =="" && color =="")
        {item = "animal_type"; search_query(xmlDoc, 1, item, "", "", "", "", len, type, "", "", "", "");return;} //search by Animal Type
        if ( name =="" && type =="" && breed =="" && color =="")
        {item = "Animal_Gender";search_query(xmlDoc, 1, item, "", "", "", "", len, gender, "", "", "", "");return;} // search by Animal Gender
        if ( name =="" && type =="" && gender =="" && color =="")
        {item = "Animal_Breed"; search_query(xmlDoc, 1, item, "", "", "", "", len, breed, "", "", "", "");return;} // search by Animal Breed
        if ( name =="" && type =="" && gender =="" && breed =="")
        {item = "Animal_Color";search_query(xmlDoc, 1, item, "", "", "", "", len, color, "", "", "", "");return;} // saerch by Animal Color


        //Search Cases by 5 items
          if ( name !=="" && type!=="" && gender!=="" && breed !== "" && color!=="")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Breed"; item5="Animal_Color"; 
          search_query(xmlDoc, 5, item1, item2, item3, item4, item5, len, name, type, gender, breed, color);
          return;
          }
        //Search Cases by 4 items
        //search by Name, Type, Gender and Breed
          if ( name !=="" && type!=="" && gender!=="" && breed !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Breed"; 
          search_query(xmlDoc, 4, item1, item2, item3, item4, "", len, name, type, gender, breed, "");
          return;
          }
          //search by Name, Type, Gender and Color
          if ( name !=="" && type!=="" && gender!=="" && color !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Color"; 
          search_query(xmlDoc, 4, item1, item2, item3, item4, "", len, name, type, gender, color, "");
          return;
          } 
          // Search by type, gender, breed, color
          if ( breed !=="" && type!=="" && gender!=="" && color !== "")
          {item1="Animal_Breed"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Color"; 
          search_query(xmlDoc, 4, item1, item2, item3, item4, "", len, breed, type, gender, color, "");
          return;
          }
          // Search by type, gender, breed, color
          if ( breed !=="" && name!=="" && gender!=="" && color !== "")
          {item1="Animal_Breed"; item2="Animal_Name"; item3="Animal_Gender"; item4="Animal_Color"; 
           search_query(xmlDoc, 4, item1, item2, item3, item4, "", len, breed, name, gender, color, "");
          return;
          }  

          //Double Search Cases
          //search by Type and Gender
        if (name =="" && breed =="" && color =="")
          {item1="animal_type"; item2="Animal_Gender";  
          search_query(xmlDoc, 2, item1, item2, "", "", "", len, type, gender, "", "", "");
          return;} 
          //search by Type and Breed
        if (name =="" && gender =="" && color =="")
          {item1="animal_type"; item2="Animal_Breed"; 
          search_query(xmlDoc, 2, item1, item2, "", "", "", len, type, breed, "", "", "");
          return;} 

          //search by Type and Color
        if (name =="" && gender =="" && breed =="")
          {item1="animal_type"; item2="Animal_Color"; 
          search_query(xmlDoc, 2, item1, item2, "", "", "", len, type, color, "", "", "");
          return;} 

          //search by Name and type
        if (gender =="" && breed =="" && color =="")
          {item1="Animal_Name"; item2="animal_type"; 
          search_query(xmlDoc, 2, item1, item2, "", "", "", len, name, type, "", "", "");
          return;}

          //search by Name and Color
          if (gender =="" && breed =="" && type =="")
          {item1="Animal_Name"; 
          item2="Animal_Color"; 
          search_query(xmlDoc, 2, item1, item2, "", "", "", len, name, color, "", "", "");
          return;} 

          //search by Name and Breed
          if (gender =="" && type =="" && color =="")
          {item1="Animal_Name"; item2="Animal_Breed"; 
            search_query(xmlDoc, 2, item1, item2, "", "", "", len, name, breed, "", "", "");
          return;} 
          
          // Search by Name and Gender
          if (type =="" && breed =="" && color =="")
          {item1="Animal_Name"; item2="Animal_Gender"; 
          search_query(xmlDoc, 2, item1, item2, "", "", "", len, name, gender, "", "", "");
          return;} 
          
          // Search by Gender and Breed
          if (type =="" && name =="" && color =="")
          {item1="Animal_Breed"; item2="Animal_Gender"; 
        search_query(xmlDoc, 2, item1, item2, "", "", "", len, breed, gender, "", "", "");
          return;} 
          
          // Search by Color and Gender
          if (type =="" && breed =="" && name =="")
          {item1="Animal_Color"; item2="Animal_Gender"; 
        search_query(xmlDoc, 2, item1, item2, "", "", "", len, color, gender, "", "", "");
          return;} 

          // Triple Search Cases
           //search by Name, Type and Gender
        if ( name !=="" && type !== "" && gender !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; 
          search_query(xmlDoc, 3, item1, item2, item3, "", "", len, name, type, gender, "", "");
          return;}
          //search by Name, Type and Breed
        if ( name !=="" && type !== "" && breed !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Breed"; 
        search_query(xmlDoc, 3, item1, item2, item3, "", "", len, name, type, breed, "", "");
          return;} 

          //search by Name, Type and Color
        if ( name !=="" && type !== "" && color !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Color";
        search_query(xmlDoc, 3, item1, item2, item3, "", "", len, name, type, color, "", "");
          return;} 

          //search by Name, Gender and Breed
        if ( name !=="" && gender !== "" && breed !== "")
          {item1="Animal_Name"; item2="Animal_Gender"; item3="Animal_Breed"; 
          search_query(xmlDoc, 3, item1, item2, item3, "", "", len, name, gender, breed, "", "");
          return;} 

          //search by Name, Gender and Color
        if ( name !=="" && gender !== "" && color !== "")
          {item1="Animal_Name"; item2="Animal_Gender"; item3="Animal_Color"; 
          search_query(xmlDoc, 3, item1, item2, item3, "", "", len, name, gender, color, "", "");
          return;} 

          //search by Name, Breed and Color
        if ( name !=="" && breed !== "" && color !== "")
          {item1="Animal_Name"; item2="Animal_Breed"; item3="Animal_Color"; 
        search_query(xmlDoc, 3, item1, item2, item3, "", "", len, name, breed, color, "", "");
          return;} 
          //search by Type, Gender and Breed
        if ( type !=="" && gender !== "" && breed !== "")
          {item1="animal_type"; item2="Animal_Gender"; item3="Animal_Breed"; 
        search_query(xmlDoc, 3, item1, item2, item3, "", "", len, type, gender, breed, "", "");
          return;} 
         
      
    }; 
    //function to populate the datalist, used to fill in the autocomplete.
    //This function has been created because the datalist needs to be populated only once and I wanted to use only one function to print the table.

  function populate_datalist(value, listname)
{ 
        var z;
        z = document.createElement("option");
        z.setAttribute("value", value);
        y = document.getElementById(listname);
        len = y.options.length;
        for (i=0; i<len; i++)
        {
          
          if (y.options[i].value == value) //checks and excludes duplicates
          {
            return;
          }
        }
        document.getElementById(listname).appendChild(z);
}
//function used to define which table to print on every instance/page
//the type variable is used on the html page to define which page to print.
//if the type are dogs, cats or birds, the print function gets the parameter for the animal, preventing it to pring the type and populating the datalist.
function print_table(xml, type) 
{
    var i=0;
    var newRow, newCell, newText, value, a, an_id, an_type;
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

    var xmlDoc = xml.responseXML;
    
    var len = xmlDoc.getElementsByTagName("Animal_ID").length;


    switch (type) {
    case "all":
        for (i=0; i<len; i++)
    {
        print(xmlDoc, tableRef, i, 1, 0);
    }break;
    case "dogs":
        for (i=0; i<len; i++)
    {   
        type= value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;; 
        if (type =="Dog" || type=="Dead Dog")
        {print( xmlDoc, tableRef, i, 0, 1, "Dog");}
    }break;
    case "cats":
        for (i=0; i<len; i++)
    {    
        type= value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;; 
        if (type =="Cat" || type=="Dead Cat")
        {print( xmlDoc, tableRef, i, 0, 1, "Cat");}
    }break;
    case "birds":
        for (i=0; i<len; i++)
    {   
        type= value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;; 
        if (type =="Bird")
        {print( xmlDoc, tableRef, i, 0, 1, "Bird");}
    }break;
    }
  }
//function to print the table on the screen.
//pop stands for populate, and checks if there's a need to populate the datalist or not. Ideally I should have included it only once, but there might be cases where I might need to re-populate it.
//sing stands for singular. If it's a singular type, i don't need to print the type in the table.
//specific_an gets the type name, in order to pass it through the getty images call.
function print(xmlDoc, tableRef, i, pop, sing, specific_an){

  var value, breed, an_id, an_type;


                value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
                newRow   = tableRef.insertRow(tableRef.rows.length);
                add_cell(value);
                if (pop == 1){ populate_datalist(value, "id_list");}
                newRow.id=value;

                
                value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
                add_cell(value);
                if (pop == 1){ populate_datalist(value, "name_list");}

                if(sing == 0)
                  {value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;;
                add_cell(value);
                an_type=value;
                if (pop == 1){ populate_datalist(value, "type_list");}
                }
                if(specific_an=="Dog"){an_type="Dog";}
                if(specific_an=="Cat"){an_type="Cat";}
                if(specific_an=="Bird"){an_type="Bird";}

                value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
                 add_cell(value);
                if (pop == 1){ populate_datalist(value, "gender_list");}

                value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
                add_cell(value);
                breed=value;
                if (pop == 1){ populate_datalist(value, "breed_list");}

                value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
                add_cell(value);
                if (pop == 1){populate_datalist(value, "color_list");}

                value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
                add_cell(value);

                breed= xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
    
        an_id=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
        breed = an_type + " " + breed;
        $("#"+an_id).bind('click', { param: breed }, getty);//jquery to bind the click event to each table row and pass an argument to the getty function.
}