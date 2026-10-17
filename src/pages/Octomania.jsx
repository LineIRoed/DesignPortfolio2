import "./project.css";

function Octomania() {
    return (
        <main className="project-page">
            <h1 className="project-header">Octomania</h1>
            <h2 className="project-description">May 2024</h2>
            <img 
                src="/images/octomania/octomania-img1.jpg" 
                alt="Photo of book cover" 
                className="project-image"
            />
            <img 
                src="/images/octomania/octomania-img2.jpg" 
                alt="Photo of open book ufolded" 
                className="project-image"
            />
            <p className="project-text">
                <strong className="project-text-strong">Welcome to the world of Octomainia.</strong> A book about octopuses where we take a deep dive into everything that makes these creatures so cool.
            </p>
            <p className="project-text">
                My interest in octopuses started the very first time I saw one while scuba diving. It was swimming through the water like it owned the place, then suddenly just plopped down and stared at me with those huge, curious eyes. I couldn’t believe how weird, smart, and kind of alien it seemed. Right away I thought, Okay, there’s definitely more going on behind those eyes. I needed to know more.
            </p>
            <p className="project-text">
                That’s how Octomania was born—a book full of all the things I learned while trying to answer the millions of questions that moment left me with. And I made it not just for me, but for anyone else who’s ever looked at an octopus and thought, What’s going on in there?
            </p>
            <img 
                src="/images/octomania/octomania-img3.jpg" 
                alt="Photo of open book ufolded" 
                className="project-image"
            />
            <img 
                src="/images/octomania/octomania-img4.jpg" 
                alt="Photo of open book ufolded"
                className="project-image" 
            />
            <p className="project-text">
                <strong className="project-text-strong">The life of an octopus</strong> is a circular journey. They’re born, they live, they mate, and then they die. I wanted the book to reflect that cycle as closely as possible. That’s why each chapter focuses on a different stage of an octopus’s life, arranged in the order it actually happens.
            </p>
            <p className="project-text">
                I also wanted the book itself to feel like the octopus—strange, colorful, and full of surprises. It’s a handmade, screen-printed, octagon-shaped book with textured pages that invite you to touch and explore. I designed my own pictograms and fonts to give it a one-of-a-kind visual language, and the pages fold out to reveal hidden layers—just like the octopus, the deeper you go, the more fascinating things you will find.
            </p>
            <p className="project-text">
                 Octomania was created for a teenage audience. I wanted to connect with people who might feel a little alien themselves sometimes, and show them that, like the octopus, figuring out who you are is all about exploring, experimenting, and embracing the weird along the way.
            </p>           
            <video 
                src="/images/octomania/octomania-film.mp4" 
                controls
                className="project-video"
                >
                Nettleseren din støtter ikke videoavspilling.
            </video>
        </main>
    );
}

export default Octomania