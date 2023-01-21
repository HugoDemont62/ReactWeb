import style from './Quote.module.css';

function Quote (props) {
    return (
        <>
            <h4>{props.id}</h4>

            <div className={style.QuoteText}>
               {props.text}
            </div>
            <div>
                <i>Auteur:</i> {props.author}
            </div>
            <br/>
        </>
    );
}

export default Quote