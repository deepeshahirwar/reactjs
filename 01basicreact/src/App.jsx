

function App() {
  return (
    <>
      <div className="conatainer">

        <div className="box">
          <h2>What is react ? </h2>
          <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.</p>
        </div>

        <div className="box">
          <h2> How does React Work? </h2>
          <p>React creates a VIRTUAL DOM in memory.
            Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
            React only changes what needs to be changed!</p>
        </div>

        <div className="box">
          <h2>Why react is introduce ?</h2>
          <p>ReactJS was created by Jordan Walke, a Facebook software engineer, in 2011. It was first used in Facebook's newsfeed, and was later released to the public in May 2013. ReactJS is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible.
            Facebook developed ReactJS to address the challenges of building complex user interfaces. Traditional web development frameworks were slow and difficult to maintain. ReactJS solves these problems by using a virtual DOM, which is a lightweight representation of the real DOM. The virtual DOM allows ReactJS to make changes to the user interface very quickly and efficiently.
            ReactJS is also very flexible. It can be used to build a wide variety of user interfaces, from simple static websites to complex dynamic applications. ReactJS is also easy to learn, making it a good choice for developers of all experience levels.</p>
        </div>

        <div className="box">
          <h2>Why react.js is so popular ?</h2>
          <ol>
            <li>Speed</li>
            <li>Flexibility</li>
            <li>Ease of use</li>
            <li>Community support</li>

          </ol>
        </div>

        <div className="box">
          <h2>History of ReactJS</h2>
          <p>
            ReactJS is a free and open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers and companies. React can be used to build single-page applications, mobile applications, and server-rendered applications.
            React was created by Jordan Walke, a software engineer at Facebook, in 2011. It was first used in production on Facebook's News Feed in 2011, and it was open-sourced in 2013.
            React quickly became popular among web developers because it is easy to learn and use, and it can be used to build fast and scalable applications. React is also declarative, which means that developers can describe what they want the UI to look like, and React will take care of the rest.
            React has been used to build many popular websites and applications, including Facebook, Instagram, WhatsApp, Airbnb, and Netflix.
          </p>
        </div> 

      </div> 

      <div className="button">  
        <a href="https://react.dev/"> Learn ReactJs</a>
        </div> 
        
    </>
  );
}

export default App
