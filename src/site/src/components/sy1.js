import React from "react"
import * as Survey from "survey-react"

import "./sy.css"

export default class Sy1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isCompleted: false }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }

  onCompleteComponent() {
    this.setState({ isCompleted: true })
  }

  json = {
    showProgressBar: "top",
    progressBarType: "buttons",
    pages: [
      {
        name: "Novelty",
        elements: [
          {
            type: "checkbox",
            name: "question1",
            title:
              "Does your local authority have previous experience of deploying similar tools in the past?",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: "No similar tools have been deployed in the past.",
              },
              {
                value: "item2",
                text:
                  "You do not know if similar tools have been deployed in the past.",
              },
              {
                value: "item3",
                text:
                  "Similar tools have been deployed in the past, but there is little or no evidence that the tools were effective.",
              },
              {
                value: "item4",
                text:
                  "Similar tools have been deployed in the past, and there is evidence that they were ineffective or lead to negative outcomes.",
              },
              {
                value: "item5",
                text:
                  "Similar tools have been deployed in the past, but there is little knowledge of how decisions were made during the tool’s development and deployment due to a lack of documentation, and staff that worked on the tool having moved on.",
              },
            ],
          },
          {
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
            type: "checkbox",
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
    if (typeof window !== `undefined`) {
      Survey.StylesManager.applyTheme("modern")
    }

    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={this.json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null
    var onCompleteComponent = this.state.isCompleted ? (
      <div>
        Based on your responses to the triage questions, you should pay
        particular attention to the following key themes when developing and
        deployed your data analytics tool:
        <ul>
          <li>Data quality</li>
          <li>Governance and oversight</li>
        </ul>
        Record these in Box X on page Y of the guidance. You should read the
        corresponding explainers before continuing to the design phase.
      </div>
    ) : null
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    )

    // this.onCompleteComponent = this.state.isCompleted ? (
    //   <div>Here</div>
    // ) : null

    // return <Survey.Survey json={this.json} showCompletedPage={false} onComplete={this.onCompleteComponent} />
  }
}
