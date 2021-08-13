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
        name: "q0",
        title: "This is very high risk - be very careful/don't do it!",
        visibleIf: "{q1}='Yes'",
        isRequired: false,
        choices: [],
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
        name: "q3",
        title:
          "Have similar tools been deployed by other local authorities before? Is there good evidence of their effectiveness?",
        visibleIf:
          "{q2}='No similar tools have been developed and deployed by the local authority previously' or {q2}='Similar tools have been developed and deployed in the past, either in-house or by procuring a software provider, but with indeterminate or limited success'",
        isRequired: true,
        choices: [
          "As far as you are aware, this is a completely novel tool, with no other LA deploying a similar tool before",
          "Similar tools have been implemented in other LAs, but with no evidence of success, evidence of the tool leading to worse outcomes, or the tool causing significant operational problems or controversies that were difficult to mitigate if they could be at all",
          "Similar tools have been implemented by other LAs, but with only limited evidence of success, or whilst causing some operational problems that required additional steps to mitigate",
          "Similar tools have been implemented in another LA with demonstrable success, causing no significant operational problems or controversies",
          "Similar tools have been implemented by multiple LAs with demonstrable success, causing no significant operational problems or controversies",
        ],
      },
      {
        type: "radiogroup",
        name: "q6",
        title: "SIGNPOST: MEASURING EFFECTIVENESS",
        visibleIf:
          "{q3}='As far as you are aware, this is a completely novel tool, with no other LA deploying a similar tool before' or {q3}='Similar tools have been implemented in other LAs, but with no evidence of success, evidence of the tool leading to worse outcomes, or the tool causing significant operational problems or controversies that were difficult to mitigate if they could be at all' or {q3}='Similar tools have been implemented by other LAs, but with only limited evidence of success, or whilst causing some operational problems that required additional steps to mitigate' or {q3}='Similar tools have been implemented in another LA with demonstrable success, causing no significant operational problems or controversies'",
        isRequired: false,
        choices: [],
      },
      {
        type: "radiogroup",
        name: "q4",
        title: "SIGNPOST: PROCUREMENT",
        visibleIf:
          "{q2}='Similar tools have been successfully developed and deployed in the past by procuring a software provider'",
        isRequired: false,
        choices: [],
      },
      {
        type: "radiogroup",
        name: "q5",
        title:
          "When similar tools have been deployed in the past, have they provoked any controversy, for example drawing criticism from the public, media, or civil society groups?",
        visibleIf:
          "{q2}='Similar tools have been successfully developed and deployed in the past by procuring a software provider' or {q2}='Yes, similar tools have been successfully developed and deployed in the past by in-house developers'",
        isRequired: true,
        choices: [
          "Yes, significant controversy that led to a large number of complaints and/or a high level of media attention",
          "Yes, minor controversy that led to a small number of complaints and/or a small level of media attention",
          "No, there has been interest but not criticism or controversy",
        ],
      },
      {
        type: "radiogroup",
        name: "q9",
        title:
          "SIGNPOST: transparency/engaging with affected stakeholders... (?)",
        visibleIf:
          "{q5}='Yes, significant controversy that led to a large number of complaints and/or a high level of media attention' or {q5}='Yes, minor controversy that led to a small number of complaints and/or a small level of media attention'",
        isRequired: false,
        choices: [],
      },

      {
        type: "radiogroup",
        name: "q7",
        title:
          "Do the intended users of the tool have experience using similar tools? If so, what was their experience of using those tools?",
        visibleIf:
          "{q5}='Yes, significant controversy that led to a large number of complaints and/or a high level of media attention' or {q5}='Yes, minor controversy that led to a small number of complaints and/or a small level of media attention' or {q5}='No, there has been interest but not criticism or controversy'",
        isRequired: true,
        choices: [
          "No previous experience using similar tools",
          "Yes, previous experience and training using similar tools. However, there is insufficient evidence as to whether users had a positive experience using those tools, or there is evidence that users had a negative experience (e.g. from survey results)",
          "Yes, previous experience and training using similar tools. There is evidence that the users had a somewhat positive experience using those tools",
          "Yes, previous experience and training using similar tools. There is evidence that the users had an overwhelmingly positive experience using those tools",
        ],
      },
      {
        type: "radiogroup",
        name: "q8",
        title: "SIGNPOST: CO-DESIGN",
        visibleIf:
          "{q7}='No previous experience using similar tools' or {q7}='Yes, previous experience and training using similar tools. However, there is insufficient evidence as to whether users had a positive experience using those tools, or there is evidence that users had a negative experience (e.g. from survey results)' or {q7}='Yes, previous experience and training using similar tools. There is evidence that the users had a somewhat positive experience using those tools'",
        isRequired: false,
        choices: [],
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
