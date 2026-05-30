export default function Contact() {
  return (
    <section
      className="block contact"
      id="contact"
      data-screen-label="Contact"
    >
      <div
        className="blob b1"
        data-parallax="0.1"
        style={{ top: "auto", bottom: "-160px", right: "10%" }}
      ></div>
      <div className="wrap contact-inner">
        <div className="eyebrow reveal">
          Let&apos;s build something that ranks
        </div>
        <h2 className="reveal" data-d="1">
          Let&apos;s
          <br />
          <span className="accent">talk.</span>
        </h2>
        <p className="lead reveal" data-d="1">
          Got a product that deserves more of the right traffic? I&apos;m open
          to roles, freelance projects and consultations. Tell me what
          you&apos;re growing.
        </p>
        <a
          href="mailto:hello@bisola.work"
          className="mailto reveal"
          data-d="2"
        >
          hello@bisola.work
        </a>
        <div className="contact-socials reveal" data-d="2">
          <a href="#" className="btn btn-ghost">
            LinkedIn ↗
          </a>
          <a href="#" className="btn btn-ghost">
            X / Twitter ↗
          </a>
          <a href="mailto:hello@bisola.work" className="btn btn-primary">
            Email me ↗
          </a>
        </div>
        <div
          className="placeholder-note"
          style={{ justifyContent: "center", marginTop: "30px" }}
        >
          Replace email &amp; social links with real handles.
        </div>
      </div>
    </section>
  );
}
