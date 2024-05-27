import './style.css';

const Content = ( {setIsOpen } ) => {
    return(
        <div className='modal_content'>
            <p>Modal Content</p>
            <button className='btn_modal' onClick={() => setIsOpen(false)}>Close Modal</button>
        </div>
    )
}

export default Content;