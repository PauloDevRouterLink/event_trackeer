import { FC, FormEvent, useState } from 'react'
import { useAddEvent } from '../../hooks/useAddEvent'
import style from './Form.module.scss'

const Form: FC = () => {
  const { createEvent } = useAddEvent()

  const [description, setDescription] = useState('')
  const [dataInit, setDataInit] = useState('')
  const [hourInit, setHourInit] = useState('')
  const [dataEnd, setDataEnd] = useState('')
  const [hourEnd, setHourEnd] = useState('')

  const mountData = (data: string, hour: string) => {
    const dataString = data.slice(0, 10)
    return new Date(`${dataString}T${hour}`)
  }

  const handleCreateEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const events = {
        description,
        init: mountData(dataInit, hourInit),
        end: mountData(dataEnd, hourEnd),
        completed: false,
      }

      createEvent({ event: events })

      setDescription('')
      setDataInit('')
      setHourInit('')
      setDataEnd('')
      setHourEnd('')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <form className={style.Form} onSubmit={handleCreateEvent}>
      <h3 className={style.title}>Novo evento</h3>

      <label>Descrição</label>
      <input
        type="text"
        name="description"
        id="description"
        className={style.input}
        onChange={evento => setDescription(evento.target.value)}
        placeholder="Descrição"
        value={description}
        autoComplete="off"
        required
      />

      <label>Data de início</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="dataInit"
          className={style.input}
          onChange={evento => setDataInit(evento.target.value)}
          value={dataInit}
          required
        />
        <input
          type="time"
          name="hourInit"
          className={style.input}
          onChange={event => setHourInit(event.target.value)}
          value={hourInit}
          required
        />
      </div>

      <label>Data de término</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="dataEnd"
          className={style.input}
          onChange={event => setDataEnd(event.target.value)}
          value={dataEnd}
          required
        />
        <input
          type="time"
          name="hourEnd"
          className={style.input}
          onChange={event => setHourEnd(event.target.value)}
          value={hourEnd}
          required
        />
      </div>

      <button className={style.btn}>Salvar</button>
    </form>
  )
}

export default Form
