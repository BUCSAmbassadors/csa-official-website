# bucsawebdesign

BU CS Ambassador's Web (Re)Design Challenge

## The Challenge

Boston University's Computer Science Ambassadors Club hosted a web design competition to redesign their entire website!

## The Idea

The vision for the plan was to keep the userflow simple, yet engaging. Pulling from the existing Wordpress website for the student organization, I wanted to implement small UI details to better improve the user experience of the website. From student perspectives and testimonials to parallax and button/icon hover effects, I wanted to create a design that not only met the Boston University website standards, but stand out as a BU student organization.

### The Technology

This website is an HTML/SCSS/JS website that utilizes a Node.js/Express.js back-end for server-side processes. Be sure to download Node and npm ([found here](https://nodejs.org/en/)). Rellax.js was used for the parallax effect. Most of the mobile responsiveness of the website uses flexbox and the Contact Us page uses Grid CSS. Nodemailer is used for the contact form.

## The Design (and more Tech)

Colorful, mobile-responsive, and interactive! Assuming the page url is bucsambassadors.bu.edu, I've made a social media bar to allow users to share the link to their Facebook, Twitter, and email!

### Home Page

The home landing page was where a user's interests had to be captured in the first 5 seconds. Big, bold letters, a relatable background image that exemplifies the club's and the university's diversity initiative, a clear message, and a large CTA button were the first things to come to my mind that needed to be on the landing screen. This page then gets broken down into sections respective of the nav bar at the top of the screen, with Our Mission corresponding to the About Us page, Our Community showcases some of our Ambassadors, and Our Fellow CS Clubs shows some clubs from our Resources page.

At the bottom of this page is a mailing list that links to my test email's mailchimp. I assumed you all used (or will use) mailchimp for your mailing list service. This requires the following dependencies on a Node.js/Express.js server:

```terminal
npm install --save express body-parser request
```

To read stuff from the .env file, be sure to install the dotenv package.

```terminal
npm install dotenv
```

Be sure to check your Mailchimp's data center as well as list_id and API key. Instructions are found in the comments of contact.js (with a YouTube tutorial in the appropriate section).

### Mentor Page

This page is simply a way for users to learn a little bit more about the mentorship program. Given the limited information, I tried to market it as best as I could.

### About Us

Starting with a parallax hero page screaming "Get to Know Us!", this page is all about breaking down BU CS Ambassadors into what it truly is! There's the mission, some neat facts (which double-check because idk when BUCSA actually was founded), a section on "our... (culture, code, team, vibe)", and a list of past events! It's really a page to answer a user's questions of what is base-level of BUCSA.

### Ambassadors Page

This page served more as a directory. I utilized Storyset by Freepik for the graphics and had filler images for temporary use. Hovering over each Ambassador and Board member would pop them out, and clicking them would bring them to their LinkedIn profiles (it's linked to the LinkedIn website for now). I wanted to keep this page very similar to the original but add a bit more flair.

### Resources Page

This is really where things are stacked. I wanted to make sure as many requirements were hit as possible. To begin with, there is an Upcoming Events section, showcasing 3 top upcoming events. The graphics for these can be switched out with other Storyset by Freepik (specifically Rafiki using #FF0400 as the main color of choice) graphics. The Figma has their specific widths and heights if that is necessary (let me know if you need edit access rather than view access). Additionally, since the requirement didn't want an iframes calendar, I figured why not just let students add the Google Calendar to their own Google Calendar. It's as easy as that. Just make the whole calendar public. FYI, for the events, each one has an "Add to Calendar" button (with a neat hover over effect lol). Clicking this essentially adds the individual event to a user's calendar. To make sure it goes to the right event, be sure to publish an event on Google Calendar, copy and paste that html code into the resources.html page, and you should be all set.

The next section deals with jobs. I just outlined a quick list schema of Data Science, SWE, and UX/UI jobs that should be very simple to integrate once you guys find jobs to list. Adding (or removing) categories should be straightforward as well. Lastly, the Useful Links section is the "LinkTree"-like aspect of the website. Spanning the whole page, I took inspiration off of a lot of other pages I've seen that makes it look resourceful.

At the bottom in the LinkTree section, one of the links will bring the user to clubs.html, a list of all of the CS clubs from the Google Docs reference sheet.

### Contact Us Page

The contact page is really just a contact card using Grid CSS. You have your contact info on the left (top in mobile) and a contact us form on the right (bottom in mobile). This page uses Node.js and the Express.js framework. Since I use a form that will be submitted as a post request, I used body-parser as a Node.js body parsing middleware. I also used Express Handlebars as a template viewing engine temporarily until I decided to render all of my HTML on the server side. Also used was nodemailer to send the request.

*Note: be sure to install Node and npm if not done so already.

```terminal
npm install --save express body-parser ejs nodemailer router
```

Tutorial found [here](https://www.youtube.com/watch?v=nF9g1825mwk).

*Another Note: you will need to find your SMTP Server for your specific gmail. I used my test email. Definitely switch to BUCS Ambassador's. I just Googled "how to get smtp code from gmail". The video tutorial above talks about it.

### Footer

Each page (except the send.html page that renders after a POST call from submitting the Contact Us form) will have the footer, which should meet the BU website specifications.

### Figma File

Feel free to view the Figma prototype designs [here](https://www.figma.com/file/MnobzBu6fMPMuvJgLRbloh/BU-CS-Ambassadors-Web?node-id=0%3A1). This file contains our design choices, including headers 1-5 and paragraph fonts. Variables were created for the headers, paragraphs, and colors in "_variable.scss" and were applied to "_globals.scss". Icons of choice were from the Material Design Icons selection from Iconify. Graphics were pulled from Storyset by Freepik (specifically Rafiki using #FF0400 as the main color of choice).

## The Challenges

As a team of 3 (one developer + designer, two designers), it was pretty much a grind for myself (Andy - developer and designer). I hadn't worked with a lot of backend before, mostly frontend, so I was up for the challenges. It was pretty hard figuring out how to market BUCS Ambassadors as I am not a member nor got much from the competition details, but our team did our best with the resources we were given. Unfortunately, as I am just a one-man developing team and do a lot of front-end work, I was unable to implement a login service. My team's approach was more to focus on the UI aspect of the website. Looking through the list of desirables, I was able to have social media icons at the bottom in the footer of every page, implement SEO through alt tags and the head tags of each page, have a "calendar" in 

## The Specifics

If this website is chosen, a few configurations will have to make the website work. First of all, the website is running on localhost:3000 so make sure to host it on the actual BUCSA website when that's running. Furthermore, you will find sections in the contact.js file that requires BUCSA-specific information (including email username and password as well as mailchimp information).

If you happen to make a new page, you will have to add it to the node.js route path in contact.js in order for the server to render it on localhost:3000.

Other detail related things: upcoming events in the Resources page will have to be manually added in; same with jobs; pictures for the Ambassadors page will have to be collected because that was not provided; links to peoples' LinkedIns will have to be added into the ambassadors.html file.
