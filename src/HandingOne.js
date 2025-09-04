// import headStyle from './handingone.module.css';
import headStyle from'./handingOne.module.css';

function HandingOne () {
    return(
        <div className="wrapper">
         <h1>Heading1</h1>
         <button className={headStyle.headbtn}>Button-1</button>

        </div>
    )
}

export default HandingOne;