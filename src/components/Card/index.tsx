import { FC } from 'react'
import style from './Card.module.scss'

const Card: FC = ({ children }) => <div className={style.Card}>{children}</div>

export default Card
