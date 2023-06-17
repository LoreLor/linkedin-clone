import {FiberManualRecord, Info} from '@mui/icons-material';
import './Widgets.css';

const Widgets = () => {

    const newArticle = (heading, subtitle) => {
        return (
          <div className="widgets__article">
            <div className="widgets__articleLeft">
              <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
            </div>
          </div>
        )
    }


  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle('Practicando React','Linkedin-Fake')}
      {newArticle('Busqueda Laboral','Desarrollo')}
    </div>
  )
}

export default Widgets
