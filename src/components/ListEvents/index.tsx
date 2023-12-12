import { FC } from 'react'
import EventCard from '../EventCard'
import Filter from '../Filter'
import style from './ListEvents.module.scss'
import { useGetListEvent } from '../../hooks/useGetListEvent'

const ListEvents: FC = () => {
  const events = useGetListEvent()

  return (
    <section>
      <Filter />
      <div className={style.Scroll}>
        {events.map(evento => (
          <EventCard event={evento} key={evento.id} />
        ))}
      </div>
    </section>
  )
}

export default ListEvents
