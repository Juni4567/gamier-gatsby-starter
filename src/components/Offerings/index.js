import React from "react";
import PropTypes from "prop-types";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div
        key={item.image}
        className="column is-4"
        style={{ borderRadius: "5px" }}
      >
        <section className="section service-module has-text-centered">
          <div className="">
            <img className="module-image" alt={item.heading} src={item.image} />
          </div>
          <h3 className="module-title">{item.heading}</h3>
          <p className="module-content">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Offerings;
