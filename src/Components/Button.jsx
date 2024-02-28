import React from 'react' ;
function ButtonComponent ({onClick, buttonText}) {
    return (
        <button onClick={onClick}>{buttonText}</button>
    );
}

export default ButtonComponent