import "./about.css";

function About() {
  return (
    <main className="about-page">
      <h1>About me</h1>

      <section className="about-content">
        <img
            src="/images/about/portrait.jpg"
            alt="Portrait of me"
            className="about-image"
        />
        <div className="about-text">
            <p>
                Hi!
                I'm a graphic designer and frontend developer who loves playing with colors, fonts, and exploring different design ideas. I like trying new things and learning more about what makes design great!
            </p>
            <p>
                I enjoy working with others just as much as working by myself. Right now, I’m focusing on getting better at motion graphics, branding, and feeling more confident in my own style.
            </p>
            <p>
                When I'm not designing, you’ll find me scuba diving, snowboarding, or doing fun crafts like knitting and crocheting. I really love the ocean and anything water-related!
            </p>
            <p className="about-text-red">
                If you'd like to work together or just say hi — feel free to contact me. I'd love to hear from you!
            </p> 
        </div>
       
      </section>
    </main>
  );
}

export default About;