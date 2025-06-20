const About = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">About This App</h2>

      <p>
        <strong>ToDo List</strong> is a clean, simple productivity tool built with React. It helps you organize your daily tasks by letting you add, remove, and manage them efficiently.
      </p>

      <p>
        Whether you're managing personal errands, academic assignments, or work tasks, this app gives you a lightweight and intuitive way to stay on top of things.
      </p>

      <h4 className="mt-4">Features</h4>
      <ul>
        <li>Add and delete tasks instantly</li>
        <li>Automatic data saving with localStorage</li>
        <li>Simple and responsive design</li>
        <li>Clean code architecture using React hooks</li>
        <li>Plans to add user authentication</li>
      </ul>

      <h4 className="mt-4">Why I Built It</h4>
      <p>
        This app started as a personal project to strengthen my skills in React, JavaScript, and front-end architecture. It’s part of my journey into full-stack development and will continue to evolve with new features.
      </p>

      <h4 className="mt-4">About the Developer</h4>
      <p>
        Hi! I’m <strong>Mrunmayi Joshi</strong>, a passionate web developer exploring modern technologies like React and NodeJs.
      </p>

      <h5>Contact Me</h5>
      <ul>
        <li>Email: <a href="mailto:mrunmayijoshi16@gmail.com">mrunmayijoshi16@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/mrunmayijoshi16" target="_blank" rel="noreferrer">github.com/mrunmayijoshi16</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/joshimrunmayi" target="_blank" rel="noreferrer">linkedin.com/in/joshimrunmayi</a></li>
      </ul>
      
    </div>
  );
};

export default About;
