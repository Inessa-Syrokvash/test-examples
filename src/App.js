import './App.css';
import { Accordion } from './Accordion/Accordion';
import { useEffect, useState } from 'react';
import Tabs from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Modal from './Modal/Modal';
import Content from './Modal/Content';
import LoaderPage from './Loader/LoaderPage';

function App() {
  /* Tabs */
  const [activeTab, setActiveTab] = useState(0);

 /* Modal */
  const [isOpen, setIsOpen] = useState(false);

  /* Loader */
  const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return() => clearTimeout(timer)
  }, [])

return(
  <div className='App'>

    {/* Accordion */}
    <div className='container'>
      <h2>Accordion</h2>
        <Accordion />
    </div>

    {/* Tabs */}
    <div className='container'>
      <h2>Tabs</h2>
      <Tabs setActiveTab={setActiveTab}/>
      {activeTab === 0 && <TabInfoOne />}
      {activeTab === 1 && <TabInfoTwo />}
      {activeTab === 2 && <TabInfoThree />}
    </div>

     {/* Modal */}
    <div className='container'>
      <h2>Modal</h2>
      <button className='btn_modal' onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && 
      <Modal setIsOpen={setIsOpen}>
        <Content setIsOpen={setIsOpen}/>
      </Modal>
      }
    </div>

     {/* Loader */}
    <div className='container'>
        {stateLoader && <LoaderPage />}
    </div>

  </div>
)
}

export default App;
