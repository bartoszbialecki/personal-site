import React from "react"
import PropTypes from "prop-types"

const VerticalTimeline = ({ children }) => (
  <ul className="vertical-timeline">{children}</ul>
)

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default VerticalTimeline
