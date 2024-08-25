import './switch.css';

function Switch({toggle}) {
    const handleSwitch = (value) => {
        if (value.target.name === 'input'){
            toggle();
        }
    }

    return (
        <label className="switch" onClick={handleSwitch}>
            <input type="checkbox" name={'input'}></input>
            <span className="slider"></span>
        </label>
    );
}

export default Switch;
