import React from "react"
import Output from "./output"
import * as Survey from "survey-react"

import "./sy.css"

export default class Sy2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isCompleted: false }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
    this.inputData = null
    this.outputData = null
  }

  onCompleteComponent(result) {
    this.outputData = result.data
    this.inputData = this.json
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
            type: "boolean",
            name: "question1",
            title:
              "Does your local authority have previous experience of deploying similar tools in the past?",
            isRequired: true,
          },
          {
            type: "comment",
            name: "question1_1",
            title:
              "Please provide details of similar tools previously deployed by the local authority.",
            visibleIf: "{question1}=true",
          },
          {
            type: "boolean",
            name: "question1_2",
            title: "Is there good evidence that those tools were effective?",
            isRequired: true,
            visibleIf: "{question1}=true",
          },
          {
            type: "comment",
            name: "question1_3",
            title:
              "Please describe what evidence there is for effectiveness of previously deployed tools.",
            visibleIf: "{question1}=true",
          },
          {
            type: "boolean",
            name: "question2",
            title:
              "Have similar tools been deployed by other local authorities in the past?",
            isRequired: true,
            visibleIf: "{question1}=false",
          },
          {
            type: "comment",
            name: "question2_1",
            title:
              "Please provide any details of similar tools previously deployed by other local authorities.",
            visibleIf: "{question2}=true",
          },
          {
            type: "boolean",
            name: "question2_2",
            title: "Is there good evidence that those tools were effective?",
            isRequired: true,
            visibleIf: "{question2}=true",
          },
          {
            type: "comment",
            name: "question2_3",
            title:
              "Please describe what evidence you are aware of for the effectiveness of similar tools deployed by other local authorities.",
            visibleIf: "{question2}=true",
          },
          {
            type: "boolean",
            name: "question3",
            title:
              "When similar tools have been deployed in the past, have they provoked any controversy, for example drawing criticism from the public, media, or civil society groups?",
            isRequired: true,
            visibleIf: "{question1}=true or {question2}=true",
          },
          {
            type: "comment",
            name: "question3_1",
            title: "Please provide details of any past controversies.",
            visibleIf: "{question1}=true or {question2}=true",
          },
        ],
        title: "Section 1: Novelty of the proposed solution",
      },
      {
        title: "Section 2: Users of the tool",
        name: "Users",
        elements: [
          {
            type: "boolean",
            name: "question4",
            title:
              "Do the intended users of the tool have experience using similar tools?",
            isRequired: true,
          },
          {
            type: "comment",
            name: "question4_1",
            title: "Describe their experience of using those tools.",
            visibleIf: "{question4}=true",
          },
        ],
      },
      {
        name: "Data and Tech",
        elements: [
          {
            type: "boolean",
            name: "question5",
            title:
              "Where similar tools have been deployed in the past, were they assessed for algorithmic bias?",
            isRequired: true,
          },
          {
            type: "boolean",
            name: "question5_1",
            title:
              "Did such an assessment indicate use of the tool adversely impacted or discriminated against certain groups?",
            isRequired: true,
            visibleIf: "{question5}=true",
          },
          {
            type: "comment",
            name: "question5_2",
            title:
              "Please provide any details of these assessments for bias, including...",
            visibleIf: "{question5}=true",
          },
          {
            type: "boolean",
            name: "question6",
            title:
              "Is it likely that certain groups would be over- or under-represented in the data used to develop the tool? For example, are there historical trends or practices that mean certain demographic groups are absent from the dataset, or, conversely, make up the majority of individuals in the dataset? You should also consider whether there are variables in the dataset that could be used as proxies for protected characteristics.",
            isRequired: true,
          },
          {
            type: "comment",
            name: "question6_1",
            title:
              "Please describe this over- or under-representation, and record any plans you have to create a more balanced dataset.",
            visibleIf: "{question6}=true",
          },
          {
            type: "boolean",
            name: "question7",
            title:
              "Do you have a good understanding of the quality of the data that will be used to develop the tool? This includes data held by the LA, and data provided by external partners.",
            isRequired: true,
          },
          {
            type: "boolean",
            name: "question7_1",
            title:
              "Are you confident that the data quality is sufficient for the tool to perform as expected?",
            visibleIf: "{question7}=true",
          },
          {
            type: "comment",
            name: "question7_2",
            title:
              "Please describe any outstanding concerns you have around data quality, and any steps you may take to improve it.",
            visibleIf: "{question7}=true",
          },
          {
            type: "boolean",
            name: "question8",
            title:
              "Will the data used by the tool include personal information about children or families?",
            isRequired: true,
          },
          {
            type: "radiogroup",
            name: "question8_1",
            title:
              "Which of the following best describes the intended volume of data that will be required to make the tool effective?",
            visibleIf: "{question8}=true",
            choices: [
              {
                value: "item1",
                text: "All/the majority of children or families in England.",
              },
              {
                value: "item2",
                text: "All children or families in the local authority.",
              },
              {
                value: "item3",
                text: "Children or families who are in the care system.",
              },
            ],
          },
        ],
        title: "Section 3: Data and technology for the proposed solution",
      },
      {
        name: "Impact",
        elements: [
          {
            type: "checkbox",
            name: "question9",
            title:
              "Which of the following groups will be directly affected by use of the tool? Select all that apply.",
            choices: [
              {
                value: "item1",
                text: "Children or families in the local authority.",
              },
              {
                value: "item2",
                text:
                  "Children or families that are in, or have previously been in, the care system.",
              },
              {
                value: "item3",
                text: "Local authority personnel.",
              },
            ],
          },
          {
            type: "comment",
            name: "question9_1",
            title: "Please describe how each of these groups will be impacted.",
          },
          {
            type: "checkbox",
            name: "question10",
            title: "Does your proposed use case include any of the following?",
            choices: [
              {
                value: "item1",
                text: "Fully automated decision-making",
              },
              {
                value: "item2",
                text:
                  "Making predictions about, or assigning a risk-score to, individual children or families",
              },
            ],
          },
        ],
        title: "Section 4: considering the impact of the proposed solution",
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
      <Output inputData={this.inputData} outputData={this.outputData} />
    ) : null

    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    )
  }
}
