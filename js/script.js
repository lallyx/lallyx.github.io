$(function(){
      $("#menu").load("menu.html"); 
    });

function trigg_ent(evt){
if (evt.keyCode === 13) 
  {fire();}
}

function empty_table()
{
  var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
  tableRef.innerHTML = "";

}
function add_cell(value)
{
  newCell  = newRow.insertCell(-1);
  newText  = document.createTextNode(value);
  newCell.appendChild(newText);
};
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

function search_by_single(xmlDoc, item, len, type)
        {   var check;
            var n;
            var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

            for (i=0; i<len; i++)
            {
  
            check = xmlDoc.getElementsByTagName(item)[i].childNodes[0].nodeValue;;
              n=check.includes(type);

              if (n==true)
                {
                value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
                newRow   = tableRef.insertRow(tableRef.rows.length);
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
                 add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
                add_cell(value);
              }
            }
        };

        function search_by_double(xmlDoc, item1, item2, len, type1, type2)
        {   
            var check1, check2;
            var n1, n2;
            var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

            for (i=0; i<len; i++)
            {
  
            check1 = xmlDoc.getElementsByTagName(item1)[i].childNodes[0].nodeValue;;
            check2 = xmlDoc.getElementsByTagName(item2)[i].childNodes[0].nodeValue;;

              n1=check1.includes(type1);
              n2=check2.includes(type2);

              if (n1==true && n2 ==true)
                {
                value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
                newRow   = tableRef.insertRow(tableRef.rows.length);
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
                 add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
                add_cell(value);
              }
            }
        };

        function search_by_triple(xmlDoc, item1, item2, item3, len, type1, type2, type3)
        {   
            var check1, check2, check3;
            var n1, n2, n3;
            var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

            for (i=0; i<len; i++)
            {
  
            check1 = xmlDoc.getElementsByTagName(item1)[i].childNodes[0].nodeValue;;
            check2 = xmlDoc.getElementsByTagName(item2)[i].childNodes[0].nodeValue;;
            check3 = xmlDoc.getElementsByTagName(item3)[i].childNodes[0].nodeValue;;

              n1=check1.includes(type1);
              n2=check2.includes(type2);
              n3=check3.includes(type3);

              if (n1==true && n2==true && n3== true)
                {
                value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
                newRow   = tableRef.insertRow(tableRef.rows.length);
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
                 add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
                add_cell(value);
              }
            }
          };

             function search_by_four(xmlDoc, item1, item2, item3, item4, len, type1, type2, type3, type4)
            {  
             
            var check1, check2, check3, check4;
            var n1, n2, n3, n4;
            var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

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
                {
                value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
                newRow   = tableRef.insertRow(tableRef.rows.length);
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
                 add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
                add_cell(value);
              }
            }
        };
         function search_by_five(xmlDoc, item1, item2, item3, item4, item5, len, type1, type2, type3, type4, type5)
            { 
            var check1, check2, check3, check4, check5;
            var n1, n2, n3, n4, n5;
            var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

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
                value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
                newRow   = tableRef.insertRow(tableRef.rows.length);
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
                 add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
                add_cell(value);

                value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
                add_cell(value);
              }
            }
        };

      function search_init(xml)
      {
        empty_table();
        var item, item1, item2, item3, item4, item5;
        var id, name, type, gender, breed, color;
        if (!document.getElementById("search_type"))
           {type="HIDDEN"}
          else{type = document.getElementById("search_type").value;}

        if (!document.getElementById("search_id"))
           {id="HIDDEN"}
          else{id = document.getElementById("search_id").value;}

        if (!document.getElementById("search_name"))
           {name="HIDDEN"}
          else{name = document.getElementById("search_name").value;}

        if (!document.getElementById("search_gender"))
           {gender="HIDDEN"}
          else{gender = document.getElementById("search_gender").value;}
        
        if (!document.getElementById("search_breed"))
           {breed="HIDDEN"}
          else{breed = document.getElementById("search_breed").value;}
        if (!document.getElementById("search_color"))
           {color="HIDDEN"}
          else{color = document.getElementById("search_color").value;}

        var xmlDoc = xml.responseXML;
        var len = xmlDoc.getElementsByTagName("Animal_ID").length;

        //Single Search Cases

        if (name =="" && type == "" && gender =="" && breed =="" && color =="")
        { item = "Animal_ID"; search_by_single(xmlDoc, item, len, id); return;} // search by Animal ID
        if (id =="" && type == "" && gender =="" && breed =="" && color =="")
        {item = "Animal_Name";search_by_single(xmlDoc, item, len, name);return;} //search by Animal Name
        if ( name =="" && gender =="" && breed =="" && color =="")
        {item = "animal_type"; search_by_single(xmlDoc, item, len, type);return;} //search by Animal Type
        if ( name =="" && type =="" && breed =="" && color =="")
        {item = "Animal_Gender";search_by_single(xmlDoc, item, len, gender);return;} // search by Animal Gender
        if ( name =="" && type =="" && gender =="" && color =="")
        {item = "Animal_Breed"; search_by_single(xmlDoc, item, len, breed);return;} // search by Animal Breed
        if ( name =="" && type =="" && gender =="" && breed =="")
        {item = "Animal_Color";search_by_single(xmlDoc, item, len, color);return;} // saerch by Animal Color


        //Search Cases by 5 items
          if ( name !=="" && type!=="" && gender!=="" && breed !== "" && color!=="")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Breed"; item5="Animal_Color"; 
          search_by_five(xmlDoc, item1, item2, item3, item4, item5, len, name, type, gender, breed, color);
          return;
          }
        //Search Cases by 4 items
        //search by Name, Type, Gender and Breed
        if ( name !=="" && type!=="" && gender!=="" && breed !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Breed"; 
          search_by_four(xmlDoc, item1, item2, item3, item4, len, name, type, gender, breed);
          return;
          }
          //search by Name, Type, Gender and Color
          if ( name !=="" && type!=="" && gender!=="" && color !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Color"; 
          search_by_four(xmlDoc, item1, item2, item3, item4, len, name, type, gender, color);
          return;
          } 
          // Search by type, gender, breed, color
          if ( breed !=="" && type!=="" && gender!=="" && color !== "")
          {item1="Animal_Breed"; item2="animal_type"; item3="Animal_Gender"; item4="Animal_Color"; 
          search_by_four(xmlDoc, item1, item2, item3, item4, len, breed, type, gender, color);
          return;
          }
          // Search by type, gender, breed, color
          if ( breed !=="" && name!=="" && gender!=="" && color !== "")
          {item1="Animal_Breed"; item2="Animal_Name"; item3="Animal_Gender"; item4="Animal_Color"; 
          search_by_four(xmlDoc, item1, item2, item3, item4, len, breed, name, gender, color);
          return;
          }  

        //Double Search Cases
        //search by Type and Gender
        if (name =="" && breed =="" && color =="")
          {item1="animal_type"; item2="Animal_Gender"; 
          search_by_double(xmlDoc, item1, item2, len, type, gender);return;} 

          //search by Type and Breed
        if (name =="" && gender =="" && color =="")
          {item1="animal_type"; item2="Animal_Breed"; 
          search_by_double(xmlDoc, item1, item2, len, type, breed);return;} 

          //search by Type and Color
        if (name =="" && gender =="" && breed =="")
          {item1="animal_type"; item2="Animal_Color"; 
          search_by_double(xmlDoc, item1, item2, len, type, color);return;} 

          //search by Name and type
        if (gender =="" && breed =="" && color =="")
          {item1="Animal_Name"; item2="animal_type"; 
          search_by_double(xmlDoc, item1, item2, len, name, type);return;}

          //search by Name and Color
          if (gender =="" && breed =="" && type =="")
          {item1="Animal_Name"; 
          item2="Animal_Color"; 
          search_by_double(xmlDoc, item1, item2, len, name, color);return;} 

          //search by Name and Breed
          if (gender =="" && type =="" && color =="")
          {item1="Animal_Name"; item2="Animal_Breed"; 
          search_by_double(xmlDoc, item1, item2, len, name, breed);return;} 
          
          // Search by Name and Gender
          if (type =="" && breed =="" && color =="")
          {item1="Animal_Name"; item2="Animal_Gender"; 
          search_by_double(xmlDoc, item1, item2, len, name, gender);return;} 
          
          // Search by Gender and Breed
          if (type =="" && name =="" && color =="")
          {item1="Animal_Breed"; item2="Animal_Gender"; 
          search_by_double(xmlDoc, item1, item2, len, breed, gender);return;} 
          
          // Search by Color and Gender
          if (type =="" && breed =="" && name =="")
          {item1="Animal_Color"; item2="Animal_Gender"; 
          search_by_double(xmlDoc, item1, item2, len, color, gender);return;} 

          // Triple Search Cases
           //search by Name, Type and Gender
        if ( name !=="" && type !== "" && gender !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Gender"; 
          search_by_triple(xmlDoc, item1, item2, item3, len, name, type, gender);return;}
          //search by Name, Type and Breed
        if ( name !=="" && type !== "" && breed !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Breed"; 
          search_by_triple(xmlDoc, item1, item2, item3, len, name, type, breed);return;} 

          //search by Name, Type and Color
        if ( name !=="" && type !== "" && color !== "")
          {item1="Animal_Name"; item2="animal_type"; item3="Animal_Color"; 
          search_by_triple(xmlDoc, item1, item2, item3, len, name, type, color);return;} 

          //search by Name, Gender and Breed
        if ( name !=="" && gender !== "" && breed !== "")
          {item1="Animal_Name"; item2="Animal_Gender"; item3="Animal_Breed"; 
          search_by_triple(xmlDoc, item1, item2, item3, len, name, gender, breed);return;} 

          //search by Name, Gender and Color
        if ( name !=="" && gender !== "" && color !== "")
          {item1="Animal_Name"; item2="Animal_Gender"; item3="Animal_Color"; 
          search_by_triple(xmlDoc, item1, item2, item3, len, name, gender, color);return;} 

          //search by Name, Breed and Color
        if ( name !=="" && breed !== "" && color !== "")
          {item1="Animal_Name"; item2="Animal_Breed"; item3="Animal_Color"; 
          search_by_triple(xmlDoc, item1, item2, item3, len, name, breed, color);return;} 
          //search by Type, Gender and Breed
        if ( type !=="" && gender !== "" && breed !== "")
          {item1="animal_type"; item2="Animal_Gender"; item3="Animal_Breed"; 
          search_by_triple(xmlDoc, item1, item2, item3, len, type, gender, breed);return;} 
         
          
    }; 


  function populate_datalist(value, listname)
{ 
        var z;
        z = document.createElement("option");
        z.setAttribute("value", value);
        y = document.getElementById(listname);
        len = y.options.length;
        for (i=0; i<len; i++)
        {
          
          if (y.options[i].value == value)
          {
            return;
          }
        }
        document.getElementById(listname).appendChild(z);
}

function print_table(xml, type) 
{
    var i=0;
    var newRow, newCell, newText, value;
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

    var xmlDoc = xml.responseXML;
    
    var tutto = xmlDoc.getElementsByTagName("Animal_ID").length;

    var id_list = document.getElementById('id_list');

    switch (type) {
    case "all":
        for (i=0; i<tutto; i++)
    {
        value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
        newRow   = tableRef.insertRow(tableRef.rows.length);
        newCell  = newRow.insertCell(0);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        populate_datalist(value, "id_list");
        newRow.id=value;

        value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        populate_datalist(value, "name_list");

        value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        populate_datalist(value, "type_list");

        value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        populate_datalist(value, "gender_list");

        value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        populate_datalist(value, "breed_list");
        
        value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        populate_datalist(value, "color_list");

        value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
    }
        break;
    case "dogs":
        print_data(xmlDoc, tutto, tableRef,"Dog");

        break;
    case "cats":
        print_data(xmlDoc, tutto, tableRef,"Cat");

        break;
    case "birds":
        print_data(xmlDoc, tutto, tableRef,"Bird");
        
        break;}
    }

function print_data(xmlDoc,length, tableRef, type)
{
  var value, newRow, newText;
  switch (type) {
    case "Bird":
    for (i=0; i<length; i++)
    {   
        type= value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;; 
        if (type =="Bird")
        {
        value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
        newRow   = tableRef.insertRow(tableRef.rows.length);
    
        value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
       

        value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        
        value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        
        
        value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);

        value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
      }
    }break;
    case "Dog":
    for (i=0; i<length; i++)
    {   
        type= value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;; 
        if (type =="Dog" || type=="Dead Dog")
        {
        value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
        newRow   = tableRef.insertRow(tableRef.rows.length);
    
        value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
       

        value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        
        value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        
        
        value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);

        value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
      }
    }break;
case "Cat":
    for (i=0; i<length; i++)
    {   
        type= value=xmlDoc.getElementsByTagName("animal_type")[i].childNodes[0].nodeValue;; 
        if (type =="Cat" || type=="Dead Cat")
        {
        value=xmlDoc.getElementsByTagName("Animal_ID")[i].childNodes[0].nodeValue;;
        newRow   = tableRef.insertRow(tableRef.rows.length);
    
        value=xmlDoc.getElementsByTagName("Animal_Name")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
       

        value=xmlDoc.getElementsByTagName("Animal_Gender")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        
        value=xmlDoc.getElementsByTagName("Animal_Breed")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
        
        
        value=xmlDoc.getElementsByTagName("Animal_Color")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);

        value=xmlDoc.getElementsByTagName("Address")[i].childNodes[0].nodeValue;;
        newCell  = newRow.insertCell(-1);
        newText  = document.createTextNode(value);
        newCell.appendChild(newText);
      }
    }break;


  }
  
}
