function getHierarchicalData() {
  var data = {
    id: 1,
    name: "Q1",
    type: "QUESTION",
    description:
      "Does your use case include any of the following: fully automated decision-making?",
    children: [
      {
        id: 2,
        name: "A1",
        type: "ANSWER",
        description: "Yes",
        children: [
          {
            id: 3,
            name: "R1",
            type: "RESULT",
            description: "Chill out",
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: "A2",
        type: "ANSWER",
        description: "No",
        children: [
          {
            id: 5,
            name: "Q2",
            type: "QUESTION",
            description:
              "Does your local authority have previous experience of developing and deploying similar tools? Were they successful?",
            children: [
              {
                id: 6,
                name: "A1",
                type: "ANSWER",
                description:
                  "Yes, similar tools have been successfully developed and deployed in the past by in-house developers.",
                children: [],
              },
              {
                id: 7,
                name: "A2",
                type: "ANSWER",
                description:
                  "Similar tools have been successfully developed and deployed in the past by procuring a software provider.",
                children: [],
              },
              {
                id: 8,
                name: "A3",
                type: "ANSWER",
                description:
                  "No similar tools have been developed and deployed by the local authority previously OR Similar tools have been developed and deployed in the past, either in-house or by procuring a software provider, but with indeterminate or limited success.",
                children: [
                  {
                    id: 9,
                    name: "Q2",
                    type: "QUESTION",
                    description:
                      "Have similar tools been deployed  by other local authorities before? Is there good evidence of their effectiveness?",
                    children: [
                      {
                        id: 10,
                        name: "A1",
                        type: "ANSWER",
                        description:
                          "As far as you are aware, this is a completely novel tool, with no other LA deploying a similar tool before OR similar tools have been implemented in other LAs, but with no evidence of success, evidence of the tool leading to worse outcomes, or the tool causing significant operational problems or controversies that were difficult to mitigate if they could be at all.",
                        children: [],
                      },
                      {
                        id: 11,
                        name: "A2",
                        type: "ANSWER",
                        description:
                          "Similar tools have been implemented by other LAs, but with only limited evidence of success, or whilst causing some operational problems or controversies that required additional steps to mitigate OR similar tools have been implemented in another LA with demonstrable success, causing no significant operational problems or controversies.",
                        children: [],
                      },
                      {
                        id: 12,
                        name: "A3",
                        type: "ANSWER",
                        description:
                          "Similar tools have been implemented by multiple LAs with demonstrable success, causing no significant operational problems or controversies.",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  return data
}

export default getHierarchicalData
