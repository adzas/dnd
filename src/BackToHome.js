
function BackToHome(props) {
    const myClass = ('Home' === props.activeStep || 'Battle' === props.activeStep) ? 'd-none' : 'btn';

    return (
        <div className={myClass} style={{backgroundColor: 'var(--second-gray-color)'}}
            onClick={() => {props.changeVisible('Home')}}
        >
            Powrót
        </div>
    )
}

export default BackToHome;