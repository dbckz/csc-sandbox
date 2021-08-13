import React from "react"
import * as Survey from "survey-react"

export default class Sy extends React.Component {
  json = {
    showQuestionNumbers: "off",
    showCompletedPage: true,
    questions: [
      {
        type: "radiogroup",
        name: "q1",
        title:
          "Does your use case include any of the following: Fully automated decision-making, the data most relevant to developing the tool cannot be accessed",
        isRequired: true,
        colCount: 1,
        choices: ["Yes", "No"],
      },
      {
        type: "radiogroup",
        name: "q2",
        title:
          "Does your local authority have previous experience of developing and/or deploying similar tools? Is there good evidence of their effectiveness?",
        visibleIf: "{q1}='No'",
        isRequired: true,
        choices: [
          "No similar tools have been developed and deployed by the local authority previously",
          "Similar tools have been developed and deployed in the past, either in-house or by procuring a software provider, but with indeterminate or limited success",
          "Similar tools have been successfully developed and deployed in the past by procuring a software provider",
          "Yes, similar tools have been successfully developed and deployed in the past by in-house developers",
        ],
      },
      {
        type: "radiogroup",
        name: "four",
        title:
          "Does sensitive / personally identifiable information need to be included in the dataset that is shared, or could it be useful without it?",
        visibleIf: "{two}='Raw data'",
        isRequired: true,
        choices: [
          "Sensitive information needs to be included",
          "Data could be useful without sensitive information",
        ],
      },
      {
        type: "radiogroup",
        name: "five",
        title:
          "Is the party you are sharing data with performing computation / analysis on your behalf, or for their own means?",
        visibleIf: "{four}='Sensitive information needs to be included'",
        isRequired: true,
        choices: ["On my behalf", "For their own means"],
      },
      {
        type: "radiogroup",
        name: "six",
        title:
          "Is it in important that the computation / analysis is done with low latency?",
        visibleIf: "{five}='On my behalf'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
      {
        type: "radiogroup",
        name: "three",
        title:
          "Do you want to use their data to train a predictive model or perform more traditional data science/analysis?",
        visibleIf:
          "{one}='You want to leverage data held by other parties / users'",
        isRequired: true,
        choices: [
          "Train a predictive model",
          "Traditional data science/analysis",
        ],
      },
      {
        type: "radiogroup",
        name: "seven",
        title:
          "Could it be possible to run the training algorithm on the other parties'/users' servers/devices?",
        visibleIf: "{three}='Train a predictive model'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
      {
        type: "radiogroup",
        name: "eight",
        title:
          "Do you need to use sensitive/personally identifiable information in the training dataset?",
        visibleIf: "{seven}='No'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
    ],
    completedHtmlOnCondition: [
      {
        expression: "{q1} = 'Yes'",
        html: "This is very high risk - be very careful/don't do it!",
      },
    ],
    // navigateToUrlOnCondition: [
    //   {
    //       expression: "{six} = 'Yes'",
    //       url: "/he"
    //   }
    // ]
  }

  render() {
    return <Survey.Survey json={this.json} />
  }
}
