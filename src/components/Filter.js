import * as React from 'react';

function Filter({ value, onChange, onReset}) {
    return (
        <form>
            <label>Фильтр</label>
            <input value={value} onChange={onChange} type="text" />
            <button type="reset" onClick={onReset}>Сбросить</button>
        </form>
    );
}

export { Filter as default };
