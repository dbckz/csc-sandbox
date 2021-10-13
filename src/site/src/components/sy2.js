import React from "react"
import Output from "./output"
import showdown from "showdown"
import * as Survey from "survey-react"

import "./sy.css"

export default class Sy2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isCompleted: false }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
    this.onMarkdown = this.onMarkdown.bind(this)
    this.inputData = null
    this.outputData = null
  }

  onCompleteComponent(result) {
    this.outputData = result.data
    this.inputData = this.json
    this.setState({ isCompleted: true })
  }

  converter = new showdown.Converter()

  onMarkdown(survey, options) {
    var str = this.converter.makeHtml(options.text)
    //remove root paragraphs <p></p>
    str = str.substring(3)
    str = str.substring(0, str.length - 4)
    //set html
    options.html = str
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
              "Does your local authority have experience of deploying tools using this type of data analytics in the past?",
            isRequired: true,
          },
          {
            type: "comment",
            name: "question1_1",
            title:
              'Provide details of those tools. Consider:<br /><ul style="padding-left:50px"}><li>When were they developed and deployed?</li><li>What problem did they aim to address?</li><li>Who were the end users of the tools?</li></ul>',
            visibleIf: "{question1}=true",
          },
          {
            type: "boolean",
            name: "question1_2",
            title: "Is there good evidence the tools were effective?",
            isRequired: true,
            visibleIf: "{question1}=true",
          },
          {
            type: "comment",
            name: "question1_3",
            title:
              'Describe what evidence there is for or against the effectiveness of previously deployed tools. Consider:<br /><ul style="padding-left:50px"}><li>Were the tools accurate?</li><li>Did they improve outcomes for children and families?</li><li>What testing and evaluation were they subject to?</li><li>What were the results of testing?</li></ul>',
            visibleIf: "{question1}=true",
          },
          {
            type: "boolean",
            name: "question2",
            title:
              "Are you aware of other local authorities that have used this type of data analytics to tackle the problem you have prioritised?",
            isRequired: true,
            visibleIf: "{question1}=false",
          },
          {
            type: "comment",
            name: "question2_1",
            title:
              'Provide details of such tools deployed by other local authorities. Consider:<br /><ul style="padding-left:50px"}><li>When were they developed and deployed?</li><li>What problem did they aim to address?</li><li>Who were the end users of the tools?</li></ul>',
            visibleIf: "{question2}=true",
          },
          {
            type: "boolean",
            name: "question2_2",
            title: "Is there good evidence the tools were effective?",
            isRequired: true,
            visibleIf: "{question2}=true",
          },
          {
            type: "comment",
            name: "question2_3",
            title:
              'Describe what evidence you are aware of for or against the effectiveness of those tools deployed by other local authorities. Consider:<br /><ul style="padding-left:50px"}><li>Were the tools accurate?</li><li>Did they improve outcomes for children and families?</li><li>What testing and evaluation were they subject to?</li><li>What were the results of testing?</li></ul>',
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
            title:
              'Provide details of any past controversies. Consider:<br /><ul style="padding-left:50px"}><li>What about the tool and its use made it particularly controversial?</li><li>What could you have done differently to avoid or mitigate these controversies?</li></ul>',
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
            title:
              'Describe their experience of using those tools. Consider:<br /><ul style="padding-left:50px"}><li>Was there broad uptake and use of these tools amongst their intended users?</li><li>What did users like about using the tools?</li><li>What did users find frustrating about using the tools?</li><li>Are those tools still being used today? If not, why not?</li></ul>',
            visibleIf: "{question4}=true",
          },
        ],
      },
      {
        name: "Data",
        elements: [
          {
            type: "boolean",
            name: "question5",
            title:
              "Where tools using this type of data analytics to tackle the problem you have prioritised have been deployed in the past, were they assessed for algorithmic bias?",
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
              'Describe any details of these assessments for bias. Consider:<br /><ul style="padding-left:50px"}><li>What tests were carried out to evaluate algorithmic bias?</li><li>What groups were adversely impacted by the tool?</li><li>Were any interventions made to mitigate bias? Were they effective?</li></ul>',
            visibleIf: "{question5}=true",
          },
          {
            type: "comment",
            name: "question5_3",
            title:
              "Provide details of any complaints or controversies reported in the media that related to previously deployed tools causing bias or discriminatory outcomes.",
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
                value: "item4",
                text:
                  "Children and families who receive support from the local authority, e.g. Supporting Families, free school meals, housing.",
              },
              {
                value: "item3",
                text: "Children or families who are in the care system.",
              },
            ],
          },
        ],
        title: "Section 3: Use of data in the proposed solution",
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
                text: "Fully automated decision-making.",
              },
              {
                value: "item2",
                text:
                  "Making predictions about, or assigning a risk-score to, individual children or families.",
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
        onTextMarkdown={this.onMarkdown}
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
