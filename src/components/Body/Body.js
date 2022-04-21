import "./Body.scss";
import React from "react";
import Divider from "@mui/material/Divider";
var FontAwesome = require("react-fontawesome");

function Body() {
  return (
    <>
      <section className="body">
        <section>
          <h1 className="body_header">
            <FontAwesome
              id="icon"
              name="icon"
              className="fa-light fa-user-secret"
              size="lg"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />
            Career Profile
          </h1>
          <Divider />
          <p className="body_para">
            I'm transitioning into the tech industry with a decade of skill and
            experience as a professional musician. I'm looking for new
            challenges and growth opportunities in tech and particularly enjoy
            building full stack applications. I'm a disciplined student of
            anything I study and enjoy learning new technologies, as evidenced
            by my recent diploma from BrainStation. My background in music has
            formed my ability to work in a team and quickly learn new things. I
            believe these skills will make me successful in my transition into a
            developer role and function well in a team.
          </p>
        </section>
        <section className="education">
          <h1 className="education_header">
            <FontAwesome
              id="icon"
              className="fa-solid fa-graduation-cap"
              size="1x"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />
            Education
          </h1>
          <Divider />
          <article className="education_container">
            <div className="education_container-one">
              <h2 className="education_container-subject">
                Web Development (Dip)
              </h2>
              <h3 className="education_container-school">Brainstation</h3>
            </div>
            <div className="education_container-two">
              <h3 className="education_container-year">2021</h3>
            </div>
          </article>
          <article className="education_container">
            <div className="education_container-one">
              <h2 className="education_container-subject">
                Music Performance (BMus)
              </h2>
              <h3 className="education_container-school">Humber College</h3>
            </div>
            <div className="education_container-two">
              <h3 className="education_container-year">2006 - 2010</h3>
            </div>
          </article>
        </section>
        <section className="experience">
          <h1 className="experience_header">
            <FontAwesome
              id="icon"
              className="fa-solid fa-briefcase"
              size="1x"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            />
            Experience
          </h1>
          <Divider />
          <article className="experience_container">
            <div className="experience_container-one">
              <h2 className="experience_container-position">ESL Trainer</h2>
              <h3 className="experience_container-company">
                ABCE Language School
              </h3>
            </div>
            <div className="experience_container-two">
              <h3 className="experience_container-year">2020 - Present</h3>
            </div>
          </article>
          <article className="experience_container">
            <div className="experience_container-one">
              <h2 className="experience_container-position">Musician</h2>
              <h3 className="experience_container-company">
                Lime Entertainment
              </h3>
            </div>
            <div className="experience_container-two">
              <h3 className="experience_container-year">2016 - Present</h3>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default Body;
