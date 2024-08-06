import React, { useState } from "react";
import { feedbackContext } from "./feedbackContext";

const StateFeedback = ({ children }) => {
  const [feedback, setFeedback] = useState("none");
  const [feedbackCode, setFeedbackCode] = useState("none");

  const setLoadingFeedback = () => {
    // console.log("setLoadingFeedback");
    setFeedback("loading");
  };

  const setErrorFeedback = () => {
    // console.log("setErrorFeedback");
    setFeedback("error");
  };

  const setDoneFeedback = () => {
    // console.log("setDoneFeedback");
    setFeedback("done");
  };

  const setLoadingCode = () => {
    // console.log("setLoadingFeedbackCode");
    setFeedbackCode("loading");
  };

  const setErrorCode = () => {
    // console.log("setErrorFeedbackCode");
    setFeedbackCode("error");
  };

  const setDoneCode = () => {
    // console.log("setDoneFeedbackCode");
    setFeedbackCode("done");
  };

  return (
    <feedbackContext.Provider
      value={{
        feedback,
        feedbackCode,
        setLoadingFeedback,
        setErrorFeedback,
        setDoneFeedback,
        setLoadingCode,
        setErrorCode,
        setDoneCode,
      }}>
      {children}
    </feedbackContext.Provider>
  );
};

export default StateFeedback;
