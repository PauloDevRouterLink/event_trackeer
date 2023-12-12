import { FC } from 'react'
import { EventProps } from '../../types/Event'
import style from './Event.module.scss'
import EventCheckbox from './EventCheckbox'
import { useDeleteEvent } from '../../hooks/useDeleteEvent'

type EventCardProps = { event: EventProps }

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { deleteEventAction } = useDeleteEvent()

  const handleDeleteEvent = () => {
    deleteEventAction({ event })
  }

  const styles = [style.Event]

  if (event.completed) {
    styles.push(style.completed)
  }

  return (
    <div className={styles.join(' ')}>
      <EventCheckbox event={event} />
      <div>
        <h3 className={style.description}>
          {event.description} - {event.init.toLocaleDateString()}
        </h3>
      </div>
      <i className="far fa-times-circle fa-2x" onClick={handleDeleteEvent}></i>
    </div>
  )
}

export default EventCard
