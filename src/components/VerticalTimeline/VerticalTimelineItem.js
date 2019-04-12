import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import VisibilitySensor from "react-visibility-sensor"

class VerticalTimelineItem extends Component {
  constructor(props) {
    super(props)

    this.state = { visible: false }
  }

  onVisibilitySensorChange = isVisible => {
    if (isVisible) {
      this.setState({ visible: true })
    }
  }

  render() {
    const { id, children, dateText } = this.props
    const { visible } = this.state

    return (
      <li id={id} className="vertical-timeline-item">
        <VisibilitySensor
          partialVisibility={true}
          offset={{ bottom: 50 }}
          onChange={this.onVisibilitySensorChange}
        >
          <Fragment>
            <div className="vertical-timeline-item-time">
              <time
                className={`${visible ? "is-visible" : "is-hidden"}`}
                title={dateText}
              >
                {dateText}
              </time>
            </div>
            <div
              className={`vertical-timeline-item-body ${
                visible ? "is-visible" : "is-hidden"
              }`}
            >
              {children}
            </div>
          </Fragment>
        </VisibilitySensor>
      </li>
    )
  }
}

VerticalTimelineItem.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  dateText: PropTypes.string,
}

VerticalTimelineItem.defaultProps = {
  id: "",
  children: "",
  dateText: "",
}

export default VerticalTimelineItem
