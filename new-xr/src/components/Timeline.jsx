//import './styles.css'; // Make sure to create and link this CSS file

const Timelines = ({id}) => {
  return (
    <>
      <section className="timelines-container" id={id}>
        <h2 className="section-title">TIMELINES</h2>
        
        {/* Initial Registration Phase */}
        <div className="phase phase-0">
          <div className="events">
            <div className="event">
              <p>Registration Starts</p>
              <p className="event-date">10th Sept, 24</p>
            </div>
            <div className="event">
              <p>Registration Closes</p>
              <p className="event-date">25th Sept, 24</p>
            </div>
          </div>
        </div>

        {/* Phase 1 */}
        <div className="phase phase-1">
          <h3 className="phase-title">Phase 1</h3>
          <div className="events">
            <div className="event">
              <p>Idea Submission Round</p>
              <p className="event-date">26th Sept, 24</p>
            </div>
            <div className="event">
              <p>Idea Submission Round <br></br>Ends</p>
              <p className="event-date">10th Oct, 24</p>
            </div>
            <div className="event">
              <p>Phase 1 Result Announcement</p>
              <p className="event-date">20th Oct, 24</p>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="phase phase-2">
          <h3 className="phase-title">Phase 2</h3>
          <div className="events">
            <div className="event">
              <p>Hackathon Round 1<br></br> Begins</p>
              <p className="event-date">25th Oct, 24</p>
            </div>
            <div className="event">
              <p>Hackathon Round 1<br></br> Ends</p>
              <p className="event-date">10th Dec, 24</p>
            </div>
            <div className="event">
              <p>Phase 2 Result Announcement</p>
              <p className="event-date">16th Dec, 24</p>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="phase phase-3">
          <h3 className="phase-title">Phase 3</h3>
          <div className="events">
            <div className="event">
              <p>Hackathon Finale Starts</p>
              <p className="event-date">20th Dec, 24</p>
            </div>
            <div className="event">
              <p>Hackathon Finale Ends</p>
              <p className="event-date">10th Jan, 25</p>
            </div>
            <div className="event">
              <p>Phase 3 Result Announcement</p>
              <p className="event-date">15th Jan, 25</p>
            </div>
          </div>
        </div>

        {/* Final Announcement */}
        <div className="final-announcement">
          <p>Presenting Winners at the WAVES 2025 Summit in Delhi on 5th Feb, 2025</p>
        </div>
      </section>
    </>
  );
};

export default Timelines;
