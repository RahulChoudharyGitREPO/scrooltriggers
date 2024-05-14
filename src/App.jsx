import DataFetcher from './Data'
import EventSubscriber from './EventSubscriber'
import DocumentTitleUpdater from './Document'
import './App.css'

function App() {

  return (
    <>
      <EventSubscriber />
      <DataFetcher />

      <DocumentTitleUpdater />


    </>
  )
}

export default App
