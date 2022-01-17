import { PropTypes } from 'prop-types'
import s from './Section.module.scss'

const Section = ({ children }) => <div className={s.barStyles}>{children}</div>

Section.defaultProps = {
  children: null,
}

Section.propTypes = {
  children: PropTypes.node,
}

export default Section
