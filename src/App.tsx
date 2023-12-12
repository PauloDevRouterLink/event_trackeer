import { RecoilRoot } from 'recoil'
import Card from './components/Card'
import Form from './components/Form'
import Calendar from './components/Calendar'
import ListEvents from './components/ListEvents'
import style from './App.module.scss'
import { Suspense } from 'react'
import { Loader } from './components/Loader'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loader />}>
        <div className={style.App}>
          <div>
            <Card>
              <Form />
            </Card>
            <hr />
            <Card>
              <ListEvents />
            </Card>
          </div>
          <div>
            <Calendar />
          </div>
        </div>
      </Suspense>
    </RecoilRoot>
  )
}

export default App
