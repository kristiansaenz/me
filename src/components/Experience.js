import React, { Component } from "react";
import ColoredLine from "../components/ColoredLine";

class Experience extends Component {
  render() {
    return (
      <div id="ExperienceSection">
        <section class="section is-medium">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-three-quarters">
                <h1 class="title">Experience</h1>
                <ColoredLine />
                <div class="columns is-centered">
                  <div class="column is-half">
                    <div class="box" id="exp1">
                      <div class="content">
                        <artical class="media">
                          <p>
                            <strong>Volunteer</strong> <medium>Workaway</medium>
                            <br />
                            <small>March 2019 - May 2019</small>
                            <br />
                            Volunteered for a month in Interlaken, Switzerland
                            and a month in Stranny, Czechia to learn about
                            sustainable living practices, network, and learn
                            about different cultures.
                          </p>
                        </artical>
                      </div>
                    </div>
                    <div class="box" id="exp2">
                      <div class="content">
                        <artical class="media">
                          <p>
                            <strong>Software Developer & Integrator III</strong>{" "}
                            <medium>USAA</medium>
                            <br />
                            <small>Sept. 2017 – March 2019</small>
                            <br />
                            <ul>
                              <li>
                                Helped team fix priority defects in USAA legacy
                                code / deliver new features
                              </li>
                              <li>
                                Helped team build Product Admin Tool for USAA
                                internal business owners to manage Reg-Z
                                products
                              </li>
                              <li>
                                Worked on USAA transformation from legacy code
                                to new web technology stack Docker
                              </li>
                            </ul>
                          </p>
                        </artical>
                      </div>
                    </div>
                    <div class="box" id="exp3">
                      <div class="content">
                        <artical class="media">
                          <p>
                            <strong>IT Intern</strong> <medium>USAA</medium>
                            <br />
                            <small>May 2016 – August 2016</small>
                            <br />
                            Worked on a team of five intern developers for the
                            summer fixing defects in backlog of MI team in USAA
                            bank credit card.
                          </p>
                        </artical>
                      </div>
                    </div>
                    <div class="box" id="exp4">
                      <div class="content">
                        <artical class="media">
                          <p>
                            <strong>TAMUCC Undergraduate Researcher</strong>{" "}
                            <medium>iCORE</medium>
                            <br />
                            <small>2015 – 2017</small>
                            <br />
                            <ul>
                              <li>
                                Worked in leardership role as Secretary of iCORE
                                team
                              </li>
                              <li>
                                Collaborated with developers iCORE to learn
                                about and develop applications with new
                                technologies
                              </li>
                              <li>
                                Focused on UAV flying with wearable tech and
                                created a program to fly drone with MYO armband
                                using Node.js along with Oculus camera to view
                                drone lens
                              </li>
                              <li>
                                Attended many tech conferences which allowed me
                                to network and learn
                              </li>
                            </ul>
                          </p>
                        </artical>
                      </div>
                    </div>
                    <div class="box" id="exp5">
                      <div class="content">
                        <artical class="media">
                          <p>
                            <strong>Team Lead</strong>{" "}
                            <medium>Tamucc UAS Summer Institute</medium>
                            <br />
                            <small>Summer 2015</small>
                            <br />
                            Worked for two weeks being a team leader of five
                            high school students. I taught them an intro to
                            javascript and by the end of the summer program,
                            they were able to fly/program an autonomous drone in
                            a race against their peers.
                          </p>
                        </artical>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Experience;
