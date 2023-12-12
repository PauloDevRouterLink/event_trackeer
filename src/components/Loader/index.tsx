import { FC } from 'react'
import styles from './Loader.module.scss'

export const Loader: FC = () => (
  <div className={styles.Container}>
    <div className={styles.Loader}></div>
  </div>
)
