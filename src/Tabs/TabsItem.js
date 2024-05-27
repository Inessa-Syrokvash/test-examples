import './style.css'

const TabInfo = ( { tab, index, setActiveTab } ) => {
    return(
        <button className="btn_tab"
        value={index}
        onClick={() => setActiveTab(index)}>
            {tab}
        </button>
    )
}

export default TabInfo;