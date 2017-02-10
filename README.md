# Challenge #4 - Data display and research 
Create a catalogue (like encyclopedia) of data on adoptable pets (name, description, location,etc.) where one can browse and search the dataset. You can start with this dataset, modify it, oruse another dataset with similar fields.

1. Example search queries you'll want to be able to handle:
- all dogs
- by pet's name
- female cats with tabby colouring

2. Add search autocomplete

3. Bonus points for making it responsive and work well on small screens (phone, tablets)and with touch interactions.

4. Extra bonus points if you add animal images to the catalogue.

## Why XML
Since it has been specified that github would have been the preferrable mean of deploying and sharing the project, I had to exclude an SQL database, mainly because I wasn't going to have a server with a database initiated on it.
In other projects I got used to create a relational database , write an HTML inteface and access the data with PHP+SQL.

Given the impossibility to use the above mentioned languages, I decided to take on this challenge and learn how to access a relevant amount of data in a different way.
I had no knowledge on XML parsing prior this challenge, so I have studied and learned how the file structure works, the Javascript methods to be used, along with the cons and pros of choosing XML over JSON.
I've learned what has been used in this project on w3school-->

The actual print/loading/search speed across all the data confirms that, for this challenge, an XML file is more than capable of handling an acceptable timeline.

## UI - Why Materialize
I've chosen materialize.css for the following reasons:
- I already knew how to implement the barebones of it because I had used it in on a personal project (attached to my application form);
- It's simple and flexible. It allowed me to setup relatively fast a fully responsive page without a lot of tweaking.
  However, you will notice in the code's comments that I needed to do some adjustments;
- It requires very few 3rd parties inclusions, allowing me to keep the project as slim and fast as possible;
- It has built in material design styles and icons;

## The menu - Why has it been copy-pasted on all the pages
I had initially thought of creating a separate menu file and include it everywhere with a php-->include().
However, having moved to a "full client-side" development, I've had to try with the Jquery approach, which didn't fulfill my speed expectations, rendering the page with a bit of delay which I found unacceptable. 
I therefore moved it to every single page to make it load straightaway.

## The sections
The index is the core of the challenge task.
It prints the whole dataset and gives the user the possibility to search for a specific animal in all the possible combinations of the displayed fields.
The only exception is the ID, which works on its own.
I've decided to take the ID out of the research scope because in a "real-world" case I believe an admin would look for an ID straight away, without filtering for other fields, since the ID would be unique.

The sections marked with animal icons redirect the user to a page which displays the whole dataset of that specific animal.
I have included this functionality just to show the different usage of the "print_table" function. 
All these pages do not include the research functionality, as they've been created only for showcasing purposes.

## The images
Animal images are gathered directly from a call to getty images.
Before taking on this project I had never worked with image search APIs.
Over all the APIs on the internet, I've decided to move on with Getty because I found it to be simplest, in terms of inclusion and research query.
Moreover, the API key provided unlimited queries, leaving a huge testing window.
The algorithm sends a request to getty with the animal type and breed and prints out a random image within the first 10 returned by the call.

#The functions:

##Images
###getty(event)
Event is the parameter bound in the function to generate the "onclick" event on each <tr>, when printing the table (function print)
It consists of Type + Breed

The function checks also checks if getty has returned an image or not. If it hasn't, it displays an alert.

##Search

###fire()
First step of the research query, "fired" on each request. 
It checks the connection to the xml file and passes it through the second step of the research function.

###search_init(xml)
gets the xml file as the only argument.
Declares all the variables related to the search fields and passes them through the final research step, depending on the combinations of the filled in fields.
All the cases have been commented in the scripts.js file.

###search_query(xmlDoc, src_type, item1, item2, item3, item4, item5, len, type1, type2, type3, type4, type5)
Single function to handle all the possible combinations of items to be searched against the XML file.
src_type defines the number of input fields which have been filled in. This goes through the switch cases.
len defines the length of the cycle to be performed.
Depending on the arguments passed to it, it filters the XML file and calls the print function accordingly.

##Print
###print_table(xml, type) 
Function used to define which table to print on every instance/page
The type variable is used on the html page to define which page to print.
if the type are dogs, cats or birds, the print function gets the parameter for the animal, preventing it to pring the type and populating the datalist.
function print_table(xml, type) 

###print(xmlDoc, tableRef, i, pop, sing, specific_an)
Function to print the table on the screen.
Pop stands for populate, and checks if there's a need to populate the datalist or not. Ideally I should have included it only once, but there might be cases where I might need to re-populate it.
Sing stands for singular. If it's a singular type, i don't need to print the type in the table.
Specific_an gets the type name, in order to pass it through the getty images call.

##Misc
###trigg_ent(evt)
Checks if the user has pressed the enter key.
If it has been pressed, fires the first step of the research query --> fire()

###populate_datalist(value, listname)
Function to populate the datalist, used to fill in the autocomplete.
This function has been created because the datalist needs to be populated only once and I wanted to use only one function to print the table.

###add_cell(value)
Function added just to avoid typing the cell+append code each time.

###empty_table()
Function to empty the table displayed in the page whenever a new research is done.