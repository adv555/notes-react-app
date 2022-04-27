import s from './Section.module.scss'

interface SectionProps {
  title?: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <>
    <h2 className={s.title}>{title}</h2>
    <div className={s.barStyles}>{children}</div>
  </>
)

export default Section
