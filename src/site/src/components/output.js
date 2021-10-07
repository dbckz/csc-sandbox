import React from "react"
import PropTypes from "prop-types"
import { useTable } from "react-table"

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
  if (!surveyOutputData["question1_2"] || !surveyOutputData["question2_2"]) {
    bullets.push(
      "Where similar tools have been previously deployed, there is not good evidence that they were effective."
    )
  }
  if (surveyOutputData["question1_2"] || surveyOutputData["question2_2"]) {
    bullets.push(
      "Where similar tools have been previously deployed, there is good evidence that they were effective."
    )
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
      "The end user of the tool does not have experience using similar tools."
    )
  }
  if (surveyOutputData["question4"]) {
    bullets.push(
      "The end user of the tool has a good level of experience of using similar tools."
    )
  }

  // Not assessed for bias, or assessed for bias with adverse outcomes
  if (!surveyOutputData["question5"]) {
    bullets.push("Previous tools have not been assessed for algorithmic bias.")
  }

  if (surveyOutputData["question5"] && surveyOutputData["question5_1"]) {
    bullets.push(
      "There is evidence that the use of similar tools in the past has lead to adverse outcomes against specific groups."
    )
  }

  if (surveyOutputData["question5"] && !surveyOutputData["question5_1"]) {
    bullets.push(
      "Previous tools have been assessed for algorithmic bias, and have been shown to not adversely impact certain groups."
    )
  }

  // If dataset unbalanced
  if (surveyOutputData["question6"]) {
    bullets.push(
      "It is likely that the dataset is unbalanced, with certain groups over- or under-represented."
    )
  }
  if (!surveyOutputData["question6"]) {
    bullets.push(
      "You believe the datasets being used are well-balanced, being representative of the population under consideration."
    )
  }

  // If no knowledge of DQ, or DQ poor
  if (!surveyOutputData["question7"]) {
    bullets.push(
      "You do not have a good understanding of the quality of your data."
    )
  }
  if (!surveyOutputData["question7_1"]) {
    bullets.push("The quality of your data is poor.")
  }
  if (surveyOutputData["question7_1"]) {
    bullets.push(
      "An assessment of the quality of your data indicates that it is sufficient to build the proposed tool effectively."
    )
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
      bullets.push("The tool will perform fully-automated decision-making.")
    }
    if (surveyOutputData["question10"].includes("item2")) {
      bullets.push(
        "The tool will make predictions about, or assign a risk-score to, individual children or families."
      )
    }
  }

  return bullets
}

function computeData(surveyInputData, surveyOutputData) {
  const data_to_return = []

  const theme_map = {
    bias: {
      key_theme: "Bias",
      explainer_link: "https://gov.uk/cdei/csc/bias",
      rationale: "TODO",
    },
    co_design: {
      key_theme: "Co-design",
      explainer_link: "https://gov.uk/cdei/csc/co-design",
      rationale: "TODO",
    },
    data_quality: {
      key_theme: "Data quality",
      explainer_link: "https://gov.uk/cdei/csc/data-quality",
      rationale: "TODO",
    },
    data_use: {
      key_theme: "Data use and sharing",
      explainer_link: "https://gov.uk/cdei/csc/data-use-and-sharing",
      rationale: "TODO",
    },
    evaluation: {
      key_theme: "Testing and evaluation",
      explainer_link: "https://gov.uk/cdei/csc/evaluation",
      rationale: "TODO",
    },
    governance: {
      key_theme: "Governance and oversight",
      explainer_link: "https://gov.uk/cdei/csc/governance-and-oversight",
      rationale: "TODO",
    },
    legal: {
      key_theme: "Legal",
      explainer_link: "https://gov.uk/cdei/csc/legal",
      rationale: "TODO",
    },
    procurement: {
      key_theme: "Procurement",
      explainer_link: "https://gov.uk/cdei/csc/procurement",
      rationale: "TODO",
    },
    public_engagement: {
      key_theme: "Public engagement",
      explainer_link: "https://gov.uk/cdei/csc/public-engagement",
      rationale: "TODO",
    },
    training: {
      key_theme: "Training and upskilling",
      explainer_link: "https://gov.uk/cdei/csc/training-and-upskilling",
      rationale: "TODO",
    },
  }

  // Logic here for highlighting particular themes

  // Similar tools not deployed by any LA before - flag everything
  if (!surveyOutputData["question1"] && !surveyOutputData["question2"]) {
    data_to_return.push(theme_map["bias"])
    data_to_return.push(theme_map["co_design"])
    data_to_return.push(theme_map["data_quality"])
    data_to_return.push(theme_map["data_use"])
    data_to_return.push(theme_map["evaluation"])
    data_to_return.push(theme_map["governance"])
    data_to_return.push(theme_map["legal"])
    data_to_return.push(theme_map["procurement"])
    data_to_return.push(theme_map["public_engagement"])
    data_to_return.push(theme_map["training"])
  }

  // Previously deployed tools not effective
  if (!surveyOutputData["question1_2"] || !surveyOutputData["question2_2"]) {
    data_to_return.push(theme_map["evaluation"])
  }

  // Past controversy
  if (surveyOutputData["question3"]) {
    data_to_return.push(theme_map["public_engagement"])
    data_to_return.push(theme_map["governance"])
  }

  // Users have no previous experience
  if (!surveyOutputData["question4"]) {
    data_to_return.push(theme_map["co_design"])
    data_to_return.push(theme_map["training"])
  }

  // Not assessed for bias, or assessed for bias with adverse outcomes
  if (!surveyOutputData["question5"] || surveyOutputData["question5_1"]) {
    data_to_return.push(theme_map["bias"])
  }

  // If dataset unbalanced
  if (surveyOutputData["question6"]) {
    data_to_return.push(theme_map["bias"])
    data_to_return.push(theme_map["data_quality"])
  }

  // If no knowledge of DQ, or DQ poor
  if (!surveyOutputData["question7"] || !surveyOutputData["question7_1"]) {
    data_to_return.push(theme_map["data_quality"])
  }

  // If using personal info about children/families
  if (surveyOutputData["question8"]) {
    data_to_return.push(theme_map["data_use"])
    data_to_return.push(theme_map["legal"])
  }

  // If children/families directly impacted
  if ("question9" in surveyOutputData) {
    if (
      surveyOutputData["question9"].includes("item1") ||
      surveyOutputData["question9"].includes("item2")
    ) {
      data_to_return.push(theme_map["co_design"])
      data_to_return.push(theme_map["public_engagement"])
    }
  }

  // If one of the high risk use cases
  if ("question10" in surveyOutputData) {
    if (
      surveyOutputData["question10"].includes("item1") ||
      surveyOutputData["question10"].includes("item2")
    ) {
      data_to_return.push(theme_map["bias"])
      data_to_return.push(theme_map["co_design"])
      data_to_return.push(theme_map["data_quality"])
      data_to_return.push(theme_map["data_use"])
      data_to_return.push(theme_map["evaluation"])
      data_to_return.push(theme_map["governance"])
      data_to_return.push(theme_map["legal"])
      data_to_return.push(theme_map["procurement"])
      data_to_return.push(theme_map["public_engagement"])
      data_to_return.push(theme_map["training"])
    }
  }

  return data_to_return
}

export default function Output(props) {
  const data = computeData(props.inputData, props.outputData)

  const columns = React.useMemo(
    () => [
      {
        Header: "Key theme",
        accessor: "key_theme",
        disableFilters: true,
      },
      {
        Header: "Rationale",
        accessor: "rationale",
        disableFilters: true,
        textAlign: "justify",
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
      Thank you for completing the triage process. Your answers are available in
      full <a href="https://fake">here</a>. In summary:
      <ul>
        {computePreamble(props.outputData).map(x => {
          return <li>{x}</li>
        })}
      </ul>
      The table below lists the key themes covered by the guidance. Certain
      themes have been flagged for particular attention based on your answers to
      the triage questions. A rationale is provided for why these themes have
      been flagged.
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
      Add something here about next steps: reconsidering the approach, DPIA,
      reading the explainers, considering the additional questions in the
      guidance.
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
