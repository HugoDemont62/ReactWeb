//Import

function Quote (props) {
    return (
        <>
            <div className="App-link">
                Texte: {props.text}
            </div>
            <div>
                Auteur: {props.author}
            </div>
            <br/>
        </>
    );
}

export default Quote