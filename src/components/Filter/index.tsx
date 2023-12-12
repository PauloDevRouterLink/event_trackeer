import { FC, FormEvent, useState } from 'react'
import style from './Filtro.module.scss'
import { useSetRecoilState } from 'recoil'
import { FilterEventProps } from './FilterEventProps'
import { filteredEvent } from '../../state/atom'

const Filter: FC = () => {
  const [data, setData] = useState('')
  const setFilteredEvent = useSetRecoilState<FilterEventProps>(filteredEvent)

  const handleSendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const filter: FilterEventProps = {}

    if (data) {
      filter.date = new Date(data)
    } else {
      filter.date = null
    }

    setFilteredEvent(filter)
  }

  return (
    <form className={style.Filter} onSubmit={handleSendForm}>
      <h3 className={style.title}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={e => setData(e.target.value)}
        placeholder="Por data"
        value={data}
      />

      <button className={style.btn}>Filtrar</button>
    </form>
  )
}

export default Filter
