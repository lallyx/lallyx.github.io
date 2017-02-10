# Challenge #4 - Data display and research 
challenge content

## Why XML
Since it has been specified that github would have been the preferrable mean of deploying and sharing the project, I had to exclude an SQL database, mainly because I wasn't going to have a server with a database initiated on it.
In other projects I got used to create a relational database with the data I had been given, write an HTML inteface and access the data with PHP+MySQL.

Give the impossibility to use the above mentioned languages, I decided to take on this challenge and learn how to access a relevant amount of data in a different way.
I had no knowledge on XML parsing prior this challenge, so I have studied and learned how the file structure works, the Javascript methods to be used, along with the cons and pros of choosing XML over JSON.
I've learned what has been used in this project on w3school-->

The actual print/loading/search speed across all the data confirms that, for this challenge, an XML file is more than capable of handling an acceptable timeline.

## UI - Why Materialize
I chose materialize.css for the following reasons:
- I already knew how to implement the barebones of it because I had used it in on a personal project (attached to my application form);
- It's easy and flexible enough. It allowed me to setup relatively fast a fully responsive page without a lot of tweaking. However, you will notice in the code's comments that I needed to do some adjustments.
- It requires very few 3rd parties inclusions, allowing me to keep the project as slim and fast as possible.
- It has built in material design, which I find simple and straightforward.

## The menu - Why has it been copy-pasted on all the pages
I had initially thought of creating a separate menu file and include with a php-->include().
However, having moved to a "full client-side" development, I've had to try with the Jquery approach, which didn't fulfill my speed expectations, rendering the page with a bit of delay which I found unacceptable. I therefore moved to every single page to make it load straightaway.

## The sections
The index(home), is the core of the challenge task.
It prints the whole datalist and gives the user the possibility to search for a specific animal in all the possible combinations of the displayed fields.
The only exception is the ID, which works on its own.
I've decided to take the ID out of the research scope because in a "real-world" case I belive an admin would look for an ID straight away.

The sections marked with animals icon redirect the user to a page which displays the whole dataset of that specific animal.
I have included this functionality just to show the functionality implemented in the print function. 
All these pages do not include the research functionality, as it they've been implemented only for showcasing purposes.

## The images
Animal images are gathered directly from a call to getty images.
Before taking on this project I had never workded with image search APIs.
Over all the APIs present on the internet, I've decided to move on with Getty because I found it to be simplest.
The algorithm sends a request to getty with the animal type and breed and prints out the first image received.