import './checkbox.css';

function Checkbox({
                      checkboxState,
                      updateTimerState
}) {
    return (
        <label className="checkbox-container">
            <input
                type="checkbox"
                checked={checkboxState}
                onClick={updateTimerState}
            />
            <span></span>
        </label>
    );
}

export default Checkbox;
