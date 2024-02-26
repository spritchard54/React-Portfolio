import "../styles/resumeStyle.css";

export default function Resume() {
  return (
    <div className="resumeBody">
      <h1>Resume</h1>
      <section className="resumeContent">
        <p className="contactDetails">
          Steven Pritchard Philadelphia, Pennsylvania • (570) 419-4077 •
          swpritchard54@gmail.com • linkedin.com/in/swpritchard
        </p>
        <h2>CAREER OBJECTIVE</h2>
        Steve is a detail-oriented professional with proven change management
        and customer success skills. Utilizing a data-driven and customer
        centric approach he aims to help organizations address the human factors
        affecting their ability to reach strategic objectives. Frequently
        described by his peers as someone who partners well with all
        stakeholders, he can be relied upon to integrate fully into the teams he
        is assigned to and to lead efforts towards achieving strategic company
        goals.
        <h3>EXPERIENCE</h3>
        <h4>Optimizely</h4>
        <p className="role">Customer Success Manager, Dec 2021 - Present</p>
        <ul className="task">
          <li className="task">
            Manage a $4.5MM book of business comprised of 50+ mid-market and
            enterprise accounts
          </li>
          <li className="task">
            Meet or exceed quarterly Gross Dollar Retention (GDR) and Net Dollar
            Retention(NDR), and revenue pipeline goals
          </li>
          <li className="task">
            Establish a trusted/strategic advisor relationship with assigned
            customers and drive continued value of solutions and services
            through regularly conducted check-ins
          </li>
          <li className="task">
            Educate customers on product updates and present roadmap for future
            enhancements
          </li>
          <li className="task">
            Work with customers to build and execute a success plan aligned to
            critical goals and key performance indicators for their digital
            experimentation program
          </li>
        </ul>
        <h4>Deloitte Consulting, LLP</h4>
        <p className="role">Consultant, Sep 2017 – Feb 2021</p>
        <ul className="task">
          <li className="task">
            Served as a strategic advisor on large scale
            technologyimplementations for Fortune 500 companies
          </li>
          <li className="task">
            Partnered with client leadership to develop organizational change
            management (OCM) strategy Assessed learning and change requirements
            of geographically dispersed and complex finance organizations based
            on long-term adoption needs in partnership with client counterparts
          </li>
          <li className="task">
            Designed, develop and implement comprehensive and engaging
            communications plans and learning paths to guide more than 1000
            stakeholders through the change journey
          </li>
          <li className="task">
            Evaluated results of stakeholder readiness surveys specific to my
            assigned work stream as well as others to identify risks and areas
            for improvement
          </li>
          <li className="task">
            Developed risk mitigation plans and keep senior leadership apprised
            of the status Researched and develop monthly commercial sales
            pipeline reporting across five industries and sixteen sectors
          </li>
        </ul>
        <p className="role">Solution Analyst, Sep 2015 – Aug 2017</p>
        <ul className="task">
          <li className="task">
            Created and executed learning and change management strategies
            Gathered and analyzed learning requirements for training materials
            Developed and delivered instructor-led and web-based training
            Partnered with functional and technical teams to provide end-to-end
            learning solutions with a focus on end-user and business needs
          </li>
        </ul>
        <p className="role">Solution Associate, Sep 2013 – Sep 2015 </p>
        <ul className="task">
          <li className="task">
            Designed and executed integration and system acceptance test scripts
          </li>
          <li className="task">
            {" "}
            Configured and reported overall defect status report
          </li>
        </ul>
        <h4>AT&T Mobility</h4>
        <p className="role">Retail Sales Consultant, Apr 2010 – May 2013</p>
        <ul className="task">
        <li className="task">
          Advised customers based on needs and current product marketing
        </li>
        <li className="task">
          Maintained customer engagement and an extraordinary customer
          experience
        </li>
        <li className="task">
          Provided end-to-end customer service throughout the sales cycle
        </li>
        </ul>

        <h3>EDUCATION</h3>
        <p>
          Indiana University of Pennsylvania Bachelor of Science –
          Communications Media
        </p>
        <p>
          University of Phoenix Associate of Arts – Information Technology, Web
          Design University of Pennsylvania
        </p>
        <p>
          (March 2024) Penn LPS Coding Bootcamp - Certificate, Full Stack Web
          Development
        </p>
        <h3>ADDITIONAL SKILLS</h3>
        <p>
          {" "}
          Strategy Development, Partnership Building, Stakeholder Research,
          Client Engagement, Portfolio Management, Strategic Direction,
          Education, Reporting, Policies and Procedures, Communication Writing
          and Development, Portfolio Management, Virtual/Remote Work and
          Delivery, Video Production{" "}
        </p>
      </section>
    </div>
  );
}
