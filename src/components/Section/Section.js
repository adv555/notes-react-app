import { PropTypes } from 'prop-types'
import s from './Section.module.scss'

const Section = ({ title, children }) => (
  <>
    <h2 className={s.title}>{title}</h2>
    <div className={s.barStyles}>{children}</div>
  </>
)

Section.defaultProps = {
  children: null,
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section
