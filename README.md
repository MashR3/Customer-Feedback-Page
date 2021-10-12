
# Customer Feedback Page

By [Michael Ash](michaelash17@gmail.com)

[MashR3.github.io](https://github.com/MashR3)

## Instructions

1. Navigate to [repo](https://github.com/MashR3/Customer-Feedback-Page)
2. Clone locally using
   `git clone git@github.com:MashR3/Customer-Feedback-Page.git`
3. Install dependencies using `npm install`
4. Run tests using `npm test`
5. Start your server using `npm start`
6. Navigate to app in [browser](http://localhost:3000)
7. Enjoy!

## Discussion

I used the following technologies: HTML, CSS, React, TypeScript, Jest, and Enzyme.
I used [create-react-app](https://goo.gl/26jfy4)
to generate the scaffolding for this app.

Charts built using [recharts](https://github.com/recharts/recharts)
Star rating using [react-star-ratings](https://github.com/ekeric13/react-star-ratings)

## Requirements and Description

This web application allows a customer to enter a review for a mock product. On the page there is a review form for the user to enter their name, email address, a rating between 1 - 5, and an optional comment. For purposes, name, email, and rating are requirements to being able to submit a review. Upon successful submission, the form is cleared, the comment appears at the top of the comment feed (latest comment first), and the two graphs update to reflect the information in the user's review. 

The first chart is a bar chat displaying the different star ratings on the y-axis, with the total number of reviews that match that rating on the x-axis. The second chart is a line graph showing how many reviews have been left on each month over the year of 2021. This is to show a potential trend in purchases in different months/seasons of the year. 

If unsuccessful submission, the comment remains, with inbuilt form validation displaying the error message to direct the customer towards creating an acceptable message. These messages range from informing the user the field cannot be left blank, or providing information on properly structured email addresses.

## Other Points

Unit Testing and Component Testing included. 

Work has been done to optimise the web page for smaller screens, with responsive components converting to full-width at smaller screens, and the layout adjusting to stack all content in a single column (a 2 - column, 1-column layout on large screens).

Work has also been done with accessibility in mind, having hidden radio buttons keyboard focusable, and screen-readers connected to the 5-star rating displayed for those not visually-impaired.

## Future Work

* During component testing, realised that it is difficult to test recharts charts, and svg in general. More work needed to test the charts are rendering visually.

* Running Lighthouse on the web page in an incognito window highlights performance issues, as it scores in the medium 50 - 89 range. Future work includes finding ways to optimise performance, possibly looking into lazy load for the comments section at the bottom of the page, and for other slow to render elements.

* Input validation: Currently basic pre-set form validation. Libraries such as Formik, or creating custom input patterns and error message handling (models, customised messages) would help to ensure a stronger standard and guide for customers to enter properly structured feedback, as well as limiting Name to A-Z characters only, and profanity checks, etc.

* Data Capture: Form to be extended to collect more data, to use for more trend/charting. Information such as 'Purchase Date', 'Purpose: (Personal, gift, etc)' and other metrics could be useful.

* Screen responsiveness and breakpoint work: Could be expanded for even larger screens. Right now, there are two breakpoints.

* Non-static Line graph data: Currently, all the data is for the current year. Being able to select a range over which to visualise the trends would be much more useful. Create a more reusable component.

* Automation Testing

* More products, expand website.

* Sentiment analysis: Could provide supporting data on how positive a review trends, and can be used to highlight recurring words/phrases from the review data for quick visualisation to a customer/business owner.