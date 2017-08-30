# emailSystem
Uses node-mailer to auto-generate an email when a contact form is submitted

# 1)	What is the purpose of creating a layout .jade?
This will be the common layout of the whole application –we can use this to put the code which is common for all the pages of the application

# 2)	What would the Basic jade template look like
It will have the same tags but without the <> signs – it will use the indents for looking at tags
So when it does that we have to be careful in indenting the code html doctype-html-body-head title-body-h1 will be the basic keywords

# 3)	How do you include layout in the index.jade
-you have to say “extends layout ” on the top of the page and after that say “block content” in the next line so that you can start typing the rest of the code in the file
Note : Make sure that you set the indents correctly or else the text will not render properly –What is the purpose of creating layout.jade file ?

This file will be inherited from the other files so that the common code will appear by just saying –“extends layout”

# 4)	What would be the best way to include styles in this project?
Just create a public folder in the root and add stylesheets folder and then grab all the required style sheets in to that folder

# 5)	How would get bootstrap to act on the website?
One possible way to do is to download the zip and extract and look for the bootstrap.css file –and paste it in the folder  named stylesheets which you have created above
# 6)	How would you tell the app js file that the folder named –public is actually static
App.use(express.static(path.join(__dirname,’public’)));

# 7)	What would you suggest if you happen to work with jade while including the bootstrap?
Change what needs to be changed in bootstrap using html syntax and convert it to JADE syntax using an online converter

# 8)	What will you do to  make sure that the Email Submission (button Click event ) will trigger an event at the app.js file?
Console.log a string to the app.post function written in the app.js file
We  have to make sure that the path that we set is correct in the app.js file and contact us file .

# 9)	What is the setting you might need to change inorder to get the app connected and working with gmail authentication you have added in to the application
We have to allow access for less secure apps in google 

We need to go to google.com/settings/security/lesssecureapps and we have to turn on the option to access to less secure apps

# 10)	What are the errors you have found and what fixes have you done during the development of this project
https://stackoverflow.com/questions/45707235/nodejs-error-when-submitting-email-using-nodemailer/45710189#45710189 



