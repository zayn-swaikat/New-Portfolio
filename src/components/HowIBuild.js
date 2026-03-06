import '../styles/HowIBuild.css'

export default function HowIBuild() {
  const steps = [
    {
      title: "Understand the Idea",
      description:
        "Every project starts with logic. I break ideas down step by step using mind maps and focus on deeply understanding the user before writing a single line of code."
    },
    {
      title: "Design the Flow",
      description:
        "I visualize the structure, explore references, and shape UI and UX together. Clarity, hierarchy, and ease of use guide every decision."
    },
    {
      title: "Build Clean Structure",
      description:
        "Clean architecture and reusable components matter. I follow the DRY principle and write code that's scalable, maintainable, and collaboration-friendly."
    },
    {
      title: "Refine the Experience",
      description:
        "The difference between good and great lives in the details. Micro-interactions, polish, user feedback, and continuous refinement."
    }
  ];

  return (
    <section className="how-i-build" id="process">
      <div className='how-i-build-content'>
      <h2 className="section-title timeline-title">How I Build</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step" data-aos="fade-up">
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}