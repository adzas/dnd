import BattlefieldElementList from "./BattlefieldElementList";

function Battle(props) {
    const sectionClass = 'Battle' === props.activeStep ? 'battleContent' : 'd-none';
    const elementClass = 'Battle' === props.activeStep ? 'btn' : ''; //  transition-height

    return (
        <div className={sectionClass}>
            <div className='btn' style={{backgroundColor: 'var(--second-gray-color)'}}
                onClick={() => {props.changeVisible('PreparingToBattle')}}
            >
                Powrót
            </div>
            { null !== props.content ? props.content.map(item => (

                <BattlefieldElementList key={item.id} data={item} elementClass={elementClass} />
                
            )) : 'ściernisko' }
        </div>
    );
}

export default Battle;