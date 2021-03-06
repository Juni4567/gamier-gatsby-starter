import React from "react";
import {
  Hero,
  Heading,
  Subhead,
  CallToAction,
  ScrollDownIndicator
} from "react-landing-page";
import Helmet from "react-helmet";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types";
import heroBg from "../../assets/img/hero-bg.jpg";
const HomePageTemplate = ({
  title,
  heading,
  servicesDescription,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <Hero
      className="hero-section"
      style={{ minHeight: `93vh` }}
      color="black"
      bg="#010101"
      bgOpacity="0.8"
      backgroundImage={heroBg}
    >
      <div className="columns" style={{ color: `#fff` }}>
        <div className="column is-10 is-offset-1">
          <h1 className="hero-title">{title}</h1>
          <Subhead className="hero-subtitle">{description}</Subhead>
          <CallToAction href="/contact" mt={3}>
            Get Started
          </CallToAction>
          <ScrollDownIndicator />
        </div>
      </div>
    </Hero>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div>
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{servicesDescription}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className="has-text-weight-semibold is-size-2">
                  Testimonials
                </h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  servicesDescription: PropTypes.string,
  offerings: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string,
    blurbs: PropTypes.array
  }),
  testimonials: PropTypes.array
};

export default HomePageTemplate;
