import React, { createContext, useContext, useState } from 'react';
import {displayModes} from "../utils/constants";

const DisplayModeContext = createContext(displayModes.scroll);

const DisplayModeProvider = ({ children }) => {
    const [displayMode, setDisplayMode] = useState(displayModes.scroll);

    const toggleDisplayMode = () => {
        setDisplayMode((prevDisplayMode) => {
            if (prevDisplayMode === displayModes.scroll) {
                return displayModes.default;
            } else {
                return displayModes.scroll;
            }
        });
    };

    return (
        <DisplayModeContext.Provider value={{ displayMode, toggleDisplayMode }}>
            {children}
        </DisplayModeContext.Provider>
    );
};

const useDisplayMode = () => {
    return useContext(DisplayModeContext);
};

export { DisplayModeProvider, useDisplayMode };