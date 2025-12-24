import './MessageSection.css'

const MessageSection = () => {
  return (
    <section className="message-section">
      <div className="message-container">
        <div className="message-card">
          <h2 className="message-title">Merry Christmas, Yana!</h2>
          <div className="message-content">
            <p className="message-text">
              This Christmas, I just wanted to do something special for you. Thank you for being there for me and for giving me comfort, especially when I really needed it. This year was honestly very hard for me, but having you around made things feel lighter, and somehow more hopeful.
            </p>
            <p className="message-text">
              I'm choosing to give my love and trust to you, and I hope you can do the same. I'm looking forward to the future, and I really hope it's something I get to share with you. I know everything happened so fast, but I just want you to know that my feelings are real. I love you.
            </p>
            <p className="message-text">
              Let's support each other and try our best to make this work.
            </p>
            <p className="message-text signature">
              With all my love,<br />
              <span className="signature-name">Raph ❤️</span>
            </p>
            <p className="message-text ps">
              Note: Nagseselos talaga ako na may iba kang ka-date &gt;.&lt;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection
