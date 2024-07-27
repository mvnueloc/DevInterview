import React, { useState } from 'react';
import { feedbackContext } from './feedbackContext';

const StateFeedback = ({ children }) => {
    const [feedback, setFeedback] = useState("none");

    const setLoadingFeedback = () => {
        console.log("setLoadingFeedback");
        setFeedback("loading");
    }

    const setErrorFeedback = () => {
        console.log("setErrorFeedback");
        setFeedback("error");
    }

    const setDoneFeedback = () => {
        console.log("setDoneFeedback");
        setFeedback("done");
    }

    const getFeedback = () => {
        return feedback;
    }

    return (
        <feedbackContext.Provider value = {{
            feedback,
            setLoadingFeedback,
            setErrorFeedback,
            setDoneFeedback
        }}>
            { children }
        </feedbackContext.Provider>
    );
}

export default StateFeedback;