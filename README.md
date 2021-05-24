# bucsawebdesign

BU CS Ambassador's Web (Re)Design Challenge

## The Challenge

Boston University's Computer Science Ambassadors Club hosted a web design competition to redesign their entire website!

## The Idea

The vision for the plan was to keep the userflow simple, yet engaging. Pulling from the existing Wordpress website for the student organization, I wanted to implement small UI details to better improve the user experience of the website. From student perspectives and testimonials to parallax and button/icon hover effects, I wanted to create a design that not only met the Boston University website standards, but stand out as a BU student organization.

### The Technology

This website is an HTML/SCSS/JS website that utilizes a Node.js/Express.js back-end for server-side processes. Be sure to download Node and npm ([found here](https://nodejs.org/en/)). Rellax.js was used for the parallax effect. Most of the mobile responsiveness of the website uses flexbox and the Contact Us page uses Grid CSS. Nodemailer is used for the contact form.

## The Design (and more Tech)

### Home Page

The home landing page was where a user's interests had to be captured in the first 5 seconds. Big, bold letters, a relatable background image that exemplifies the club's and the university's diversity initiative, a clear message, and a large CTA button were the first things to come to my mind that needed to be on the landing screen. This page then gets broken down into sections respective of the nav bar at the top of the screen, with Our Mission corresponding to the About Us page, Our Community showcases some of our Ambassadors, and Our Fellow CS Clubs shows some clubs from our Resources page.

### Mentor Page

This page is simply a way for users to learn a little bit more about the mentorship program. Given the limited information, I tried to market it as best as I could.

### About Us

Insert Info.

### Ambassadors Page

This page served more as a directory. I utilized Storyset be Freepik for the graphics and had filler images for temporary use. Hovering over each Ambassador and Board member would pop them out, and clicking them would bring them to their LinkedIn profiles (it's linked to the LinkedIn website for now). I wanted to keep this page very similar to the original but add a bit more flair.

### Resources Page

Insert Info

### Contact Us Page

The contact page is really just a contact card using Grid CSS. You have your contact info on the left (top in mobile) and a contact us form on the right (bottom in mobile). This page uses Node.js and the Express.js framework. Since I use a form that will be submitted as a post request, I used body-parser as a Node.js body parsing middleware. I also used Express Handlebars as a template viewing engine. Also used was nodemailer to send the request.

*Note: be sure to install Node and npm if not done so already.

```terminal
npm install --save express body-parser express-handlebars nodemailer
```

Tutorial found [here](https://www.youtube.com/watch?v=nF9g1825mwk).

*Another Note: you will need to find your SMTP Server for your specific gmail. I used my test email. Definitely switch to BUCS Ambassador's. I just Googled "how to get smtp code from gmail". The video tutorial above talks about it.

### Figma File

Feel free to view the Figma prototype designs [here](https://www.figma.com/file/MnobzBu6fMPMuvJgLRbloh/BU-CS-Ambassadors-Web?node-id=0%3A1). This file contains our design choices, including headers 1-5 and paragraph fonts. Variables were created for the headers, paragraphs, and colors in "_variable.scss" and were applied to "_globals.scss".

## The Challenges

As a team of 3 (one developer + designer, two designers), it was pretty much a grind for myself (Andy - developer and designer). I hadn't worked with a lot of backend before, mostly frontend, so I was up for the challenges. It was pretty hard figuring out how to market BUCS Ambassadors as I am not a member nor got much from the competition details, but our team did our best with the resources we were given.
