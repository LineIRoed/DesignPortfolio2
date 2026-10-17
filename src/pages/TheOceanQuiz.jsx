function TheOceanQuiz() {
    return (
        <main className="project-page">
            <h1 className="project-header">The Ocean Quiz</h1>
            <h2 className="project-description">Desember 2024</h2>
            <img 
                src="/images/theOceanQuiz/mockupMobil3.png" 
                alt="mockup of quiz on phone screen" 
                className="project-image"
            />
            <p className="project-text">
                <strong className="project-text-strong">The Ocean Quiz</strong> is a fun and interactive game that tests your knowledge about the ocean and its amazing creatures. It’s designed to be simple and engaging, so you can learn cool facts while having a good time. The quiz features multiple-choice questions, instant scoring, and a clean, easy-to-use interface that works well on both computers and phones. The layout uses Flexbox and Grid to make sure everything fits nicely on any screen, giving it a fresh and friendly look.
            </p>
            <img 
                src="/images/theOceanQuiz/mockupMobil4.png" 
                alt="mockup of quiz on phone screen" 
                className="project-image"
            />
             <img 
                src="/images/theOceanQuiz/MockupPc4.png" 
                alt="mockup of quiz on pc screen" 
                className="project-image"
            />
            <p className="project-text">
                <strong className="project-text-strong">I built the quiz</strong> using plain JavaScript, HTML, and CSS. The JavaScript handles all the quiz logic and updates the page dynamically as you answer questions. The code is simple and easy to follow, which makes it easy to add more questions or new features later on. For styling, I used CSS Flexbox and Grid to create a flexible layout that adapts to different screen sizes, so the quiz looks great whether you’re on a phone or a desktop.
            </p>
            <img 
                src="/images/theOceanQuiz/mockupPc1.png" 
                alt="mockup of quiz on pc screen" 
                className="project-image"
            />
            <img 
                src="/images/theOceanQuiz/mockupPc2.png" 
                alt="mockup of quiz on pc screen" 
                className="project-image"
            />
            <p className="project-link">
                View the live project here:
                <br />
                <a href="https://thriving-queijadas-708cff.netlify.app" className="project-link-link">The Ocean Quiz</a>
            </p>
        </main>
    );
}

export default TheOceanQuiz