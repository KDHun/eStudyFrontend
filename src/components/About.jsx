import React from "react";

const About = () => (
  <div className="card my-3 shadow-md">
    <h1 className="text-center info-tile card-header py-4">eClassroom</h1>
    <div className="card-body">
      <p>
        This app is a part of our 6th semester software engineering project. We created an
        e-classroom app where a teacher can post material and assignments. 
        The students can access the material and complete
        assignments, students can also ask questions in the discussion section
        and either teacher or student can answer them, then the student who
        asked the question can mark it as solved if his doubt is cleared.
      </p>
      <h5>Technologies we used -</h5>
      <h3>Django REST Framework</h3>
      <p>
        We used Django REST Framework for backend of our application, it's a web
        development framework made with python. It's inbuilt ORM, authentication
        and generics gave us a very fast and secure way to rapidly develop our
        backend. It uses token based authentication, with an inbuilt admin
        module to manage the whole application.
      </p>
      <h3>PostgreSQL</h3>
      <p>
        We used PostgreSQL as our database. PostgreSQL is an open source and one
        of the most famous database engines. And it works really well when
        combined with Django REST Framework.
      </p>
      <h3>React.js</h3>
      <p>
        We used React.js for the frontend part of the application. React is a
        very popular javascript library which allows the developer to create
        complex frontend applications very easily. We also use Redux to manage
        the state on our frontend application and react-router to manage the
        routes on client side because the application is an SPA (Single Page
        Application).
      </p>
    </div>
  </div>
);

export default About;