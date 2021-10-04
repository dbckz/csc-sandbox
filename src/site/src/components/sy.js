import React from "react"
import * as Survey from "survey-react"

import "./sy.css"

export default class Sy extends React.Component {
  // json = {
  //   showQuestionNumbers: "off",
  //   showCompletedPage: true,
  //   questions: [
  //     {
  //       type: "radiogroup",
  //       name: "q1",
  //       title:
  //         "Does your use case include any of the following: Fully automated decision-making, the data most relevant to developing the tool cannot be accessed",
  //       isRequired: true,
  //       colCount: 1,
  //       choices: ["Yes", "No"],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q0",
  //       title: "This is very high risk - be very careful/don't do it!",
  //       visibleIf: "{q1}='Yes'",
  //       isRequired: false,
  //       choices: [],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q2",
  //       title:
  //         "Does your local authority have previous experience of developing and/or deploying similar tools? Is there good evidence of their effectiveness?",
  //       visibleIf: "{q1}='No'",
  //       isRequired: true,
  //       choices: [
  //         "No similar tools have been developed and deployed by the local authority previously",
  //         "Similar tools have been developed and deployed in the past, either in-house or by procuring a software provider, but with indeterminate or limited success",
  //         "Similar tools have been successfully developed and deployed in the past by procuring a software provider",
  //         "Yes, similar tools have been successfully developed and deployed in the past by in-house developers",
  //       ],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q3",
  //       title:
  //         "Have similar tools been deployed by other local authorities before? Is there good evidence of their effectiveness?",
  //       visibleIf:
  //         "{q2}='No similar tools have been developed and deployed by the local authority previously' or {q2}='Similar tools have been developed and deployed in the past, either in-house or by procuring a software provider, but with indeterminate or limited success'",
  //       isRequired: true,
  //       choices: [
  //         "As far as you are aware, this is a completely novel tool, with no other LA deploying a similar tool before",
  //         "Similar tools have been implemented in other LAs, but with no evidence of success, evidence of the tool leading to worse outcomes, or the tool causing significant operational problems or controversies that were difficult to mitigate if they could be at all",
  //         "Similar tools have been implemented by other LAs, but with only limited evidence of success, or whilst causing some operational problems that required additional steps to mitigate",
  //         "Similar tools have been implemented in another LA with demonstrable success, causing no significant operational problems or controversies",
  //         "Similar tools have been implemented by multiple LAs with demonstrable success, causing no significant operational problems or controversies",
  //       ],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q6",
  //       title: "SIGNPOST: MEASURING EFFECTIVENESS",
  //       visibleIf:
  //         "{q3}='As far as you are aware, this is a completely novel tool, with no other LA deploying a similar tool before' or {q3}='Similar tools have been implemented in other LAs, but with no evidence of success, evidence of the tool leading to worse outcomes, or the tool causing significant operational problems or controversies that were difficult to mitigate if they could be at all' or {q3}='Similar tools have been implemented by other LAs, but with only limited evidence of success, or whilst causing some operational problems that required additional steps to mitigate' or {q3}='Similar tools have been implemented in another LA with demonstrable success, causing no significant operational problems or controversies'",
  //       isRequired: false,
  //       choices: [],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q4",
  //       title: "SIGNPOST: PROCUREMENT",
  //       visibleIf:
  //         "{q2}='Similar tools have been successfully developed and deployed in the past by procuring a software provider'",
  //       isRequired: false,
  //       choices: [],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q5",
  //       title:
  //         "When similar tools have been deployed in the past, have they provoked any controversy, for example drawing criticism from the public, media, or civil society groups?",
  //       visibleIf:
  //         "{q2}='Similar tools have been successfully developed and deployed in the past by procuring a software provider' or {q2}='Yes, similar tools have been successfully developed and deployed in the past by in-house developers'",
  //       isRequired: true,
  //       choices: [
  //         "Yes, significant controversy that led to a large number of complaints and/or a high level of media attention",
  //         "Yes, minor controversy that led to a small number of complaints and/or a small level of media attention",
  //         "No, there has been interest but not criticism or controversy",
  //       ],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q9",
  //       title:
  //         "SIGNPOST: transparency/engaging with affected stakeholders... (?)",
  //       visibleIf:
  //         "{q5}='Yes, significant controversy that led to a large number of complaints and/or a high level of media attention' or {q5}='Yes, minor controversy that led to a small number of complaints and/or a small level of media attention'",
  //       isRequired: false,
  //       choices: [],
  //     },

  //     {
  //       type: "radiogroup",
  //       name: "q7",
  //       title:
  //         "Do the intended users of the tool have experience using similar tools? If so, what was their experience of using those tools?",
  //       visibleIf:
  //         "{q5}='Yes, significant controversy that led to a large number of complaints and/or a high level of media attention' or {q5}='Yes, minor controversy that led to a small number of complaints and/or a small level of media attention' or {q5}='No, there has been interest but not criticism or controversy'",
  //       isRequired: true,
  //       choices: [
  //         "No previous experience using similar tools",
  //         "Yes, previous experience and training using similar tools. However, there is insufficient evidence as to whether users had a positive experience using those tools, or there is evidence that users had a negative experience (e.g. from survey results)",
  //         "Yes, previous experience and training using similar tools. There is evidence that the users had a somewhat positive experience using those tools",
  //         "Yes, previous experience and training using similar tools. There is evidence that the users had an overwhelmingly positive experience using those tools",
  //       ],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "q8",
  //       title: "SIGNPOST: CO-DESIGN",
  //       visibleIf:
  //         "{q7}='No previous experience using similar tools' or {q7}='Yes, previous experience and training using similar tools. However, there is insufficient evidence as to whether users had a positive experience using those tools, or there is evidence that users had a negative experience (e.g. from survey results)' or {q7}='Yes, previous experience and training using similar tools. There is evidence that the users had a somewhat positive experience using those tools'",
  //       isRequired: false,
  //       choices: [],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "three",
  //       title:
  //         "Do you want to use their data to train a predictive model or perform more traditional data science/analysis?",
  //       visibleIf:
  //         "{one}='You want to leverage data held by other parties / users'",
  //       isRequired: true,
  //       choices: [
  //         "Train a predictive model",
  //         "Traditional data science/analysis",
  //       ],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "seven",
  //       title:
  //         "Could it be possible to run the training algorithm on the other parties'/users' servers/devices?",
  //       visibleIf: "{three}='Train a predictive model'",
  //       isRequired: true,
  //       choices: ["Yes", "No"],
  //     },
  //     {
  //       type: "radiogroup",
  //       name: "eight",
  //       title:
  //         "Do you need to use sensitive/personally identifiable information in the training dataset?",
  //       visibleIf: "{seven}='No'",
  //       isRequired: true,
  //       choices: ["Yes", "No"],
  //     },
  //   ],
  //   completedHtmlOnCondition: [
  //     {
  //       expression: "{q1} = 'Yes'",
  //       html: "This is very high risk - be very careful/don't do it!",
  //     },
  //   ],
  //   // navigateToUrlOnCondition: [
  //   //   {
  //   //       expression: "{six} = 'Yes'",
  //   //       url: "/he"
  //   //   }
  //   // ]
  // }

  json = {
    showProgressBar: "top",
    progressBarType: "buttons",
    pages: [
      {
        name: "Novelty",
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            title:
              "Does your local authority have previous experience of deploying similar tools in the past?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text:
                  "Yes, similar tools have been deployed in the past, and there is good evidence that the tools were effective.",
              },
              {
                value: "item2",
                text:
                  "Yes, similar tools have been deployed in the past, but there is little evidence that the tools were effective.",
              },
              {
                value: "item3",
                text: "No similar tools have been deployed in the past.",
              },
              {
                value: "item4",
                text:
                  "You do not know if similar tools have been deployed in the past.",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question2",
            title:
              "Have similar tools been deployed by other local authorities in the past? Is there evidence they were effective?",
            isRequired: true,
            choices: [
              {
                value: "item2",
                text:
                  "Yes, similar tools have been implemented in other local authorities, but with limited evidence of their effectiveness, evidence of the tool leading to worse outcomes, or the tool causing significant operational problems or controversies.",
              },
              {
                value: "item3",
                text:
                  "Yes, similar tools have been implemented in other local authorities, but with no evidence of success, evidence of the tool leading to poor outcomes, or the tool causing significant operational problems or controversies.",
              },
              {
                value: "item1",
                text:
                  "No, as far as you are aware, this is a completely novel tool, with no other local authority deploying a similar tool before.",
              },
              {
                value: "item4",
                text:
                  "You do not know if similar tools have been deployed by other local authorities in the past.",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question4",
            title:
              "When similar tools have been deployed in the past, have they provoked any controversy, for example drawing criticism from the public, media, or civil society groups?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text:
                  "No. There may have been interest from these groups, but not criticism or controversy.",
              },
              {
                value: "item2",
                text:
                  "Yes, minor controversy that led to a small number of complaints and/or a small level of media attention.",
              },
              {
                value: "item3",
                text:
                  "Yes, significant controversy that led to a large number of complaints and/or a high level of media attention.",
              },
              {
                value: "item4",
                text:
                  "You do not know if previous deployments of such tools provoked controversy. ",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question5",
            title:
              "Do the intended users of the tool have experience using similar tools? If so, what was their experience of using those tools?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text:
                  "Yes, the intended users of the tool have previous experience and training using similar tools. There is evidence that the users had a positive experience using those tools.",
              },
              {
                value: "item2",
                text:
                  "Yes, the intended users of the tool have previous experience and training using similar tools. However, there is insufficient evidence as to whether users had a positive experience using those tools, or there is evidence that users had a negative experience (e.g. from survey results).",
              },
              {
                value: "item3",
                text:
                  "The intended users have no previous experience using similar tools.",
              },
              {
                value: "item4",
                text:
                  "You do not know if the intended users have experience using similar tools.",
              },
            ],
          },
        ],
        title: "Section 1: Novelty of the proposed solution",
      },
      {
        name: "Data and Tech",
        elements: [
          {
            type: "radiogroup",
            name: "question6",
            title:
              "Where similar tools have been deployed in the past, to what extent has algorithmic bias that could adversely impact certain groups been assessed?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text:
                  "You are not aware of similar tools for which bias has been assessed.",
              },
              {
                value: "item2",
                text:
                  "You are aware of similar tools which have been shown to lead to adverse outcomes for certain groups.",
              },
              {
                value: "item3",
                text:
                  "Rigorously assessed, with the tool shown to not adversely impact or discriminate against certain groups.",
              },
              {
                value: "item4",
                text:
                  "Rigorously assessed, and steps taken to mitigate identified biases so that the tool does not adversely impact or discriminate against certain groups. Information on the steps taken is available.",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question7",
            title:
              "Is it likely that certain groups could be over- or under-represented in the data used to develop the tool? For example, are there historical trends or practices that mean certain demographic groups are absent from the dataset, or, conversely, make up the majority of individuals in the dataset? You should also consider whether there are variables in the dataset that could be used as proxies for protected characteristics.",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: "Yes.",
              },
              {
                value: "item2",
                text: "Unsure.",
              },
              {
                value: "item3",
                text:
                  "Very confident that the dataset is appropriately balanced.",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question8",
            title:
              "Do you have a good understanding of the quality of the data that will be used to develop the tool? This includes data held by the LA, and data provided by external partners. If so, are you confident that the data quality is sufficient for the tool to perform as expected?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: "Data quality is not well understood.",
              },
              {
                value: "item2",
                text:
                  "Data quality is well understood, but is very poor. It may not be possible to improve the data quality enough even with significant data cleaning.",
              },
              {
                value: "item3",
                text:
                  "Data quality is well understood for the datasets being used to develop the tool, but a significant amount of data cleaning will be required in order for the tool to be performant.",
              },
              {
                value: "item4",
                text:
                  "Data quality is well understood for the datasets that will be used to develop the tool, and you have a high degree of confidence that it is of high enough quality for the tool to perform well with only minimal data cleaning.",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question9",
            title:
              "Which of these best describes the expected volume of data that will be required to make the tool effective?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: "All/most children in the UK.",
              },
              {
                value: "item2",
                text: "All children and families in the local authority.",
              },
              {
                value: "item3",
                text: "Children and families in the CSC system.",
              },
              {
                value: "item4",
                text: "No children/families data.",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question10",
            title:
              "How sensitive is the data required to develop and use the tool?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text:
                  "The data contains highly sensitive information about individuals. It could contain PII, including special category data, or any other data about individuals that the public could be likely to consider controversial.",
              },
              {
                value: "item2",
                text:
                  "The data contains highly sensitive information at an aggregate level.",
              },
              {
                value: "item3",
                text: "The data is not sensitive.",
              },
            ],
          },
        ],
        title: "Section 2: Data and technology for the proposed solution",
      },
      {
        name: "Impact",
        elements: [
          {
            type: "radiogroup",
            name: "question11",
            title:
              "What is the intended scope of individuals who could be directly affected by its use?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text:
                  "Children and/or families in the local (or combined) authority could be directly affected by its use.",
              },
              {
                value: "item2",
                text:
                  "Children and/or families that are in, or have previously been in, the CSC system could be directly affected by its use.",
              },
              {
                value: "item3",
                text:
                  "Only local authority personnel could be directly affected by its use. Decisions about children and/or families will not be directly affected by its use.",
              },
            ],
          },
          {
            type: "radiogroup",
            name: "question12",
            title:
              "Which of the following best describes how the tool sits alongside human decision-making?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text:
                  "The tool will provide a level of automation that could significantly affect human decision-making that is directly about individuals e.g. a PRM where the children/families with the highest risk score are automatically discussed by social worker teams, or where users are unable to challenge or reject the tool’s output.",
              },
              {
                value: "item2",
                text:
                  "The tool will provide a level of automation that could significantly affect human decision-making about certain groups or administrative tasks e.g. a model that predicts how funding and resource could be most effectively allocated.",
              },
              {
                value: "item3",
                text:
                  "The tool does not directly influence the decision-making process, but is purely informational.",
              },
            ],
          },
        ],
        title: "Section 3: considering the impact of the proposed solution",
      },
    ],
  }

  render() {
    Survey.StylesManager.applyTheme("modern")
    return <Survey.Survey json={this.json} />
  }
}
