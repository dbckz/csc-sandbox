import React from "react"
import PropTypes from "prop-types"
import { useTable } from "react-table"
import Collapse from "./collapse"
import ReactHtmlParser from "react-html-parser"

function computeFullResults(surveyInputData, surveyOutputData) {
  var qaList = []
  var questions = {}
  for (var page in surveyInputData["pages"]) {
    // This can definitely be written more straightforwardly...
    for (var el in surveyInputData["pages"][page]["elements"]) {
      questions[surveyInputData["pages"][page]["elements"][el]["name"]] =
        surveyInputData["pages"][page]["elements"][el]
    }
  }

  var questionList = Object.keys(questions)

  for (var q in questionList) {
    if (
      questionList[q] in surveyOutputData &&
      surveyOutputData[questionList[q]] !== ""
    ) {
      if (questionList[q] === "question8_1") {
        var item = surveyOutputData[questionList[q]]
        var choices = questions["question8_1"]["choices"]
        var answer = ""
        for (var choice in choices) {
          if (choices[choice]["value"] === item) {
            answer = choices[choice]["text"]
          }
        }

        qaList.push({
          q: questions[questionList[q]]["title"],
          a: answer,
        })
      } else if (questionList[q] === "question0") {
        var item2 = surveyOutputData[questionList[q]]
        var choices2 = questions["question0"]["choices"]
        var answer2 = ""
        for (var choice2 in choices2) {
          if (choices2[choice2]["value"] === item2) {
            answer2 = choices2[choice2]["text"]
          }
        }

        qaList.push({
          q: questions[questionList[q]]["title"],
          a: answer2,
        })
      } else if (
        questionList[q] === "question9" ||
        questionList[q] === "question10"
      ) {
        var items = surveyOutputData[questionList[q]]
        choices = questions[questionList[q]]["choices"]
        answer = ""
        for (choice in choices) {
          for (item in items) {
            if (choices[choice]["value"] === items[item]) {
              answer = answer + " " + choices[choice]["text"]
            }
          }
        }

        qaList.push({
          q: questions[questionList[q]]["title"],
          a: answer,
        })
      } else {
        qaList.push({
          q: questions[questionList[q]]["title"],
          a:
            typeof surveyOutputData[questionList[q]] === "boolean"
              ? surveyOutputData[questionList[q]] === true
                ? "Yes"
                : "No"
              : surveyOutputData[questionList[q]].toString(),
        })
      }
    }
  }

  return qaList
}

function computePreamble(surveyOutputData) {
  const bullets = []

  if (!surveyOutputData["question1"] && !surveyOutputData["question2"]) {
    bullets.push(
      "Similar tools have not been deployed before in your local authority. Furthermore, you are not aware of similar tools being deployed by other LAs."
    )
  }
  if (!surveyOutputData["question1"] && surveyOutputData["question2"]) {
    bullets.push(
      "Similar tools have not been deployed before in your local authority, but have been by other LAs."
    )
  }

  if ("question1_2" in surveyOutputData) {
    if (!surveyOutputData["question1_2"]) {
      bullets.push(
        "Where similar tools have been previously deployed, there is not good evidence that they were effective."
      )
    }
    if (surveyOutputData["question1_2"]) {
      bullets.push(
        "Where similar tools have been previously deployed, there is good evidence that they were effective."
      )
    }
  }

  if ("question2_2" in surveyOutputData) {
    if (!surveyOutputData["question2_2"]) {
      bullets.push(
        "Where similar tools have been previously deployed, there is not good evidence that they were effective."
      )
    }
    if (surveyOutputData["question2_2"]) {
      bullets.push(
        "Where similar tools have been previously deployed, there is good evidence that they were effective."
      )
    }
  }

  if (surveyOutputData["question3"]) {
    bullets.push(
      "Where similar tools have been deployed previously, they have proved controversial, provoking criticism from the public, press, academics, or civil society groups."
    )
  }
  if (!surveyOutputData["question3"]) {
    bullets.push(
      "Where similar tools have been deployed previously, they have not provoked any controversy or criticism."
    )
  }
  if (!surveyOutputData["question4"]) {
    bullets.push(
      "The end users of the tool does not have experience using similar tools."
    )
  }
  if (surveyOutputData["question4"]) {
    bullets.push(
      "The end users of the tool has a good level of experience of using similar tools."
    )
  }

  // Not assessed for bias, or assessed for bias with adverse outcomes
  if (!surveyOutputData["question5"]) {
    bullets.push("Previous tools have not been assessed for algorithmic bias.")
  }

  if ("question5_1" in surveyOutputData) {
    if (surveyOutputData["question5_1"]) {
      bullets.push(
        "There is evidence that the use of similar tools in the past has lead to adverse outcomes against specific groups."
      )
    }
    if (!surveyOutputData["question5_1"]) {
      bullets.push(
        "Previous tools have been assessed for algorithmic bias, and have been shown to not adversely impact certain groups."
      )
    }
  }

  // If dataset unbalanced
  // if (surveyOutputData["question6"]) {
  //   bullets.push(
  //     "It is likely that the dataset is unbalanced, with certain groups over- or under-represented."
  //   )
  // }
  // if (!surveyOutputData["question6"]) {
  //   bullets.push(
  //     "You believe the datasets being used are well-balanced, being representative of the population under consideration."
  //   )
  // }

  // If no knowledge of DQ, or DQ poor
  if (!surveyOutputData["question7"]) {
    bullets.push(
      "You do not have a good understanding of the quality of your data."
    )
  }

  if ("question7_1" in surveyOutputData) {
    if (!surveyOutputData["question7_1"]) {
      bullets.push("The quality of your data is poor.")
    }
    if (surveyOutputData["question7_1"]) {
      bullets.push(
        "An assessment of the quality of your data indicates that it is sufficient to build the proposed tool effectively."
      )
    }
  }

  // If using personal info about children/families
  if (surveyOutputData["question8"]) {
    bullets.push(
      "The tool uses personal information about children or families."
    )
  }
  if (!surveyOutputData["question8"]) {
    bullets.push(
      "The tool does not use personal information about children or families."
    )
  }

  // If children/families directly impacted
  if ("question9" in surveyOutputData) {
    if (
      surveyOutputData["question9"].includes("item1") ||
      surveyOutputData["question9"].includes("item2")
    ) {
      bullets.push(
        "Children or families will be directly impacted by the tool."
      )
    }
  }
  if ("question9" in surveyOutputData) {
    if (surveyOutputData["question9"].includes("item3")) {
      bullets.push(
        "Local authority personnel will be directly impacted by the tool."
      )
    }
  }

  // If one of the high risk use cases
  if ("question10" in surveyOutputData) {
    if (surveyOutputData["question10"].includes("item1")) {
      bullets.push(
        "Tool makes decisions with little opportunity for professional oversight."
      )
    }
    if (surveyOutputData["question10"].includes("item2")) {
      bullets.push(
        "The tool will make predictions about individual children or families."
      )
    }
  }

  return bullets
}

function computeData(surveyInputData, surveyOutputData) {
  const data_to_return = []

  const theme_map = {
    bias: {
      key_theme: "Mitigating bias",
      explainer_link: "https://gov.uk/cdei/csc/mitigating-bias",
      rationale: "",
      flagged: false,
    },
    co_design: {
      key_theme: "Co-design",
      explainer_link: "https://gov.uk/cdei/csc/co-design",
      rationale: "",
      flagged: false,
    },
    data_quality: {
      key_theme: "Data quality",
      explainer_link: "https://gov.uk/cdei/csc/data-quality",
      rationale: "",
      flagged: false,
    },
    data_use: {
      key_theme: "Data use and sharing",
      explainer_link: "https://gov.uk/cdei/csc/data-use-and-sharing",
      rationale: "",
      flagged: false,
    },
    evaluation: {
      key_theme: "Testing and evaluation",
      explainer_link: "https://gov.uk/cdei/csc/evaluation",
      rationale: "",
      flagged: false,
    },
    governance: {
      key_theme: "Governance and oversight",
      explainer_link: "https://gov.uk/cdei/csc/governance-and-oversight",
      rationale: "",
      flagged: false,
    },
    legal: {
      key_theme: "Legal",
      explainer_link: "https://gov.uk/cdei/csc/legal",
      rationale: "",
      flagged: false,
    },
    procurement: {
      key_theme: "Procurement",
      explainer_link: "https://gov.uk/cdei/csc/procurement",
      rationale: "",
      flagged: false,
    },
    public_engagement: {
      key_theme: "Public communications",
      explainer_link: "https://gov.uk/cdei/csc/public-communications",
      rationale: "",
      flagged: false,
    },
  }

  function flagTheme(theme, rationale) {
    var j = theme_map[theme]
    j["flagged"] = true
    if (j["rationale"] === "") {
      j["rationale"] = rationale
    } else {
      j["rationale"] = j["rationale"] + " " + rationale
    }
    return j // probs don't need a return?
  }

  // Logic here for highlighting particular themes

  // Similar tools not deployed by any LA before - flag everything
  if (!surveyOutputData["question1"] && !surveyOutputData["question2"]) {
    flagTheme("bias", "Never deployed.")
    flagTheme("co_design", "Never deployed.")
    flagTheme("data_quality", "Never deployed.")
    flagTheme("data_use", "Never deployed.")
    flagTheme("evaluation", "Never deployed.")
    flagTheme("governance", "Never deployed.")
    flagTheme("legal", "Never deployed.")
    flagTheme("procurement", "Never deployed.")
    flagTheme("public_engagement", "Never deployed.")
  }

  // Previously deployed tools not effective
  if (!surveyOutputData["question1_2"]) {
    flagTheme("evaluation", "Previous tools not effective.")
  }

  if ("question2_2" in surveyOutputData) {
    if (!surveyOutputData["question2_2"]) {
      if (!surveyOutputData["question1_2"]) {
        flagTheme("evaluation", "Previous tools not effective.")
      }
    }
  }

  // Past controversy
  if (surveyOutputData["question3"]) {
    flagTheme("public_engagement", "Past controversy.")
    flagTheme("governance", "Past controversy.")
  }

  // Users have no previous experience
  if (!surveyOutputData["question4"]) {
    flagTheme("co_design", "Users have no experience.")
  }

  // Not assessed for bias, or assessed for bias with adverse outcomes
  if (!surveyOutputData["question5"]) {
    flagTheme("bias", "No previous assessment for bias.")
  }

  if ("question5_1" in surveyOutputData) {
    if (surveyOutputData["question5_1"]) {
      flagTheme(
        "bias",
        "Previous tools shown to lead to adverse outcomes for certain groups."
      )
    }
  }

  // If dataset unbalanced
  // if (surveyOutputData["question6"]) {
  //   flagTheme("bias", "Dataset unbalanced.")
  //   flagTheme("data_quality", "Dataset unbalanced.")
  // }

  // If no knowledge of DQ, or DQ poor
  if (!surveyOutputData["question7"]) {
    flagTheme("data_quality", "No knowledge of data quality.")
  }

  if ("question7_1" in surveyOutputData) {
    if (!surveyOutputData["question7_1"]) {
      flagTheme("data_quality", "Data quality known to be poor.")
    }
  }

  // If using personal info about children/families
  if (surveyOutputData["question8"]) {
    flagTheme("data_use", "Using personal information about children/families.")
    flagTheme("legal", "Using personal information about children/families.")
  }

  // If children/families directly impacted
  if ("question9" in surveyOutputData) {
    if (
      surveyOutputData["question9"].includes("item1") ||
      surveyOutputData["question9"].includes("item2")
    ) {
      flagTheme("co_design", "Children/families directly impacted.")
      flagTheme("public_engagement", "Children/families directly impacted.")
    }
  }

  // If one of the high risk use cases
  if ("question10" in surveyOutputData) {
    if (surveyOutputData["question10"].includes("item1")) {
      flagTheme(
        "bias",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "co_design",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "data_quality",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "data_use",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "evaluation",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "governance",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "legal",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "procurement",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "public_engagement",
        "Tool makes decisions with little opportunity for professional oversight - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
    }
    if (surveyOutputData["question10"].includes("item2")) {
      flagTheme(
        "bias",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "co_design",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "data_quality",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "data_use",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "evaluation",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "governance",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "legal",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "procurement",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
      flagTheme(
        "public_engagement",
        "Tool makes predicts about individual children or families - this may be particularly risky, so warrants a rigorous approach to ethics and governance."
      )
    }
  }

  for (var key in theme_map) {
    data_to_return.push(theme_map[key])
  }
  return data_to_return
}

export default function Output(props) {
  const data = computeData(props.inputData, props.outputData)

  function addTick(isFlagged) {
    if (isFlagged) {
      return (
        <span role="img" aria-label="tick">
          &#x2705;
        </span>
      )
    }
    return ""
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "Key theme",
        accessor: "key_theme",
        disableFilters: true,
      },
      {
        Header: "Flagged for particular attention?",
        // accessor: "flagged",
        Cell: ({ row }) => addTick(row.original.flagged),
        disableFilters: true,
      },
      {
        Header: "Rationale",
        accessor: "rationale",
        disableFilters: true,
        // textAlign: "justify",
      },
      {
        Header: "Link to explainer",
        Cell: ({ row }) => (
          <a href={row.original.explainer_link}>
            {row.original.explainer_link}
          </a>
        ),
        disableFilters: true,
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <div>
      <p>
        Thank you for completing the triage process. Here is a summary of your
        responses:
      </p>
      <ul>
        {computePreamble(props.outputData).map(x => {
          return <li>{x}</li>
        })}
      </ul>
      <Collapse label="Click to see your responses in full">
        {/* {JSON.stringify(props.outputData, null, 3)} */}
        <ol>
          {computeFullResults(props.inputData, props.outputData).map(x => {
            return (
              <li>
                <p>{ReactHtmlParser(x["q"])}</p>
                <p>{x["a"]}</p>
              </li>
            )
          })}
        </ol>
      </Collapse>
      <p>
        The table below lists the key themes covered by the guidance. Certain
        themes have been flagged for particular attention based on your answers
        to the triage questions. A rationale is provided for why these themes
        have been flagged. Though the key themes that have been flagged may
        require particular attention, it is important that all the themes above
        are appropriately considered as you design, develop, test, and deploy
        your data analytics tool. Additional optional questions/advice are given
        in subsequent sections of the guidance for each theme, which you should
        consider if the triage process has flagged that theme for particular
        attention.
      </p>

      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps({
                          style: {
                            "text-align": cell.column.textAlign
                              ? cell.column.textAlign
                              : "center",
                            "font-size": cell.column.fontSize
                              ? cell.column.fontSize
                              : "",
                          },
                        })}
                      >
                        {cell.render("Cell")}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div></div>
      </div>

      <p>
        Before proceeding to the next stage of the guidance you should:
        <ul>
          <li>Record the results of the triage.</li>
          <li>
            Review your answers to the triage questions to understand if there
            are particular aspects of your proposed solution which you may need
            to reconsider, or establish mechanisms for appropriately mitigating
            the risks or challenges they may pose.
          </li>
          <li>
            For each key theme that has been flagged, read the corresponding
            explainer document to ensure you have a good understanding of this
            topic before you begin to design and develop the tool.
          </li>
        </ul>
      </p>

      {/* <pre>
        {JSON.stringify(props.inputData, null, 3)}
        <br />
        {JSON.stringify(props.outputData, null, 3)}
      </pre> */}
    </div>
  )
}

Output.propTypes = {
  inputData: PropTypes.object,
  outputData: PropTypes.object,
}
