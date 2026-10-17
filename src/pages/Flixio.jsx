import "./project.css";

function Flixio() {
    return (
        <main className="project-page">
            <h1 className="project-header">Flixio</h1>
            <h2 className="project-description">June 2025</h2>
            <img 
                src="/images/flixio/mockup1.png" 
                alt="mockup of streaming service page" 
                className="project-image"
            />
            <p className="project-text">
                <strong className="project-text-strong">Flixio is an online streaming service</strong> designed to provide users with an easy and enjoyable way to browse and watch movies and TV shows. The platform features a clean, intuitive interface that makes discovering new content simple and fun.
            </p>
            <p className="project-text">
                The design focuses on a sleek, user-friendly experience, combining bold visuals with straightforward navigation. It includes features like search and filter options and detailed movie pages. Using modern CSS techniques like flexbox and grid, the layout is fully responsive and adapts smoothly to all screen sizes—from desktop to mobile. The goal was to create a look and feel that appeals to a wide audience while offering a seamless streaming experience.
            </p>
            <img 
                src="/images/flixio/mockup2.png" 
                alt="mockup of streaming service page" 
                className="project-image"
            />
             <img 
                src="/images/flixio/mockup3.png" 
                alt="mockup of streaming service page" 
                className="project-image"
            />
            <p className="project-text">
                <strong className="project-text-strong">From a development standpoint,</strong> Flixio was built using React, leveraging its component-based architecture for a modular and maintainable codebase. It uses asynchronous API calls to fetch up-to-date movie data, ensuring content stays fresh and relevant.
            </p>
            <p className="project-text">
                State management is handled efficiently using React’s hooks, which keeps the interface responsive and fast. Performance optimizations such as lazy loading and code splitting were implemented to improve load times and overall user experience. The app’s styling uses modern CSS techniques to ensure a responsive and polished look across all devices.
            </p>
            <img 
                src="/images/flixio/mockup4.png" 
                alt="mockup of streaming service page" 
                className="project-image"
            />
            <p className="project-link">
                View the live project here:
                <br />
                <a href="https://flixio-streaming.netlify.app/login" className="project-link-link">Flixio-streaming</a>
            </p>
        </main>
    );
}

export default Flixio