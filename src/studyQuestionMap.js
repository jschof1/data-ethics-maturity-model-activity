const studyQuestionMap = {
    "Organisational governance and internal oversight": [
      {text: "Does the organization have a strategy or policy that includes ethical collection, use, and sharing of data?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Is data governance considered only a legal issue within the organization?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Are individual projects considering data ethics on an ad hoc basis?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Is there a coherent strategy for data ethics across the organization?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Are roles and responsibilities clearly defined for data ethics governance?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Is senior management involved in and supportive of data ethics initiatives?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Are there measurable targets for ethical data practices?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Is performance of key staff tied to ethical data practices?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Is data ethics embedded throughout the organization from the board down?", options: ["Yes", "No"], type: 'Optimising', score: null},
      {text: "Does the organization have an ethics committee or equivalent for data ethics decisions?", options: ["Yes", "No"], type: 'Optimising', score: null}
    ],
    "Skills and knowledge": [
      {text: "Is there awareness about the importance of data ethics across the organization?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Is any training or support provided to staff for data ethics?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Do teams or projects tailor their training around data ethics based on specific needs?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Does the organization rely on external expertise for ethical decision making?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Is there a budget allocated for basic data ethics training?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Do internal peer groups exist that share advice on ethical data practices?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Is data ethics training mandatory for all staff?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Is there a deeper understanding of data ethics among data practitioners?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Is professional development in data ethics a priority?", options: ["Yes", "No"], type: 'Optimising', score: null},
      {text: "Is the organization providing leadership in the market regarding data ethics?", options: ["Yes", "No"], type: 'Optimising', score: null}
    ],
    "Stakeholder and Staff Engagement": [
      {text: "Is there any communication plan for stakeholders and staff who might be impacted by data collection, use, and sharing?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Are communications around ethical data practices accessible and easy to understand?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Are communications tailored to the language and needs of impacted communities?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Is feedback from stakeholders used to inform internal processes?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Is there a documented approach for stakeholder engagement regarding data practices?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Is feedback actively used to inform the work of teams?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Is the policy for ethical data practices publicly accessible?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Is stakeholder engagement a routine process for all teams?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Does the organization proactively seek feedback on data trustworthiness?", options: ["Yes", "No"], type: 'Optimising', score: null},
      {text: "Are impacted communities actively involved in key decisions?", options: ["Yes", "No"], type: 'Optimising', score: null},
    ],
    "Data Management Risk Processes": [
      {text: "Are there any processes for identifying and assessing risks to individuals and communities from data practices?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Are risks only considered when they become problematic for the organization?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Are risk assessments done on an ad-hoc basis or systematically?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Are data ethics tools like Data Ethics Canvas or Consequence Scanning used in any projects?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Are there standardized processes for identifying and assessing risks?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Are risks prioritized based on their expected impact?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Do all projects follow a standardized risk identification and assessment process?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Are mitigation strategies in place for high-likelihood risks?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Is performance routinely assessed for reducing harm to individuals or communities?", options: ["Yes", "No"], type: 'Optimising', score: null},
      {text: "Are data ethics tools customized and validated for the organization specifically?", options: ["Yes", "No"], type: 'Optimising', score: null}
    ],
    "Funding and Procurement": [
      {text: "Is there any funding allocated for supporting ethical data practices?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Do procurement contracts include requirements around ethical data practices?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Are costs for ethical data practices included in budgets of individual projects?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Is ethical data practice considered during the procurement process?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Are long-term costs for ethical data practices included in project funding?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Are individual contracts tailored to cover ethical data practices?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Is there clarity on the cost-benefits of ethical data practices?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Are ethical data practices included in all contracts?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Is due diligence carried out on the ethical data practices of suppliers?", options: ["Yes", "No"], type: 'Optimising', score: null},
      {text: "Is information about the cost-benefits of ethical data practices published?", options: ["Yes", "No"], type: 'Optimising', score: null}
    ],
    "Legal Standing and Compliance": [
      {text: "Is there awareness of legislative or compliance requirements related to ethical data practices?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Is compliance considered a priority within the organization?", options: ["Yes", "No"], type: 'Initial', score: null},
      {text: "Is knowledge of legal and regulatory requirements limited to specific individuals?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Are compliance requirements followed in an ad-hoc manner?", options: ["Yes", "No"], type: 'Repeatable', score: null},
      {text: "Is there organizational guidance on compliance to avoid harm to individuals and communities?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Is this guidance adopted widely within the organization?", options: ["Yes", "No"], type: 'Defined', score: null},
      {text: "Are all teams using a standardized structure for checking compliance?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Does the organization engage proactively with regulators?", options: ["Yes", "No"], type: 'Managed', score: null},
      {text: "Does the organization share its approach to compliance?", options: ["Yes", "No"], type: 'Optimising', score: null},
      {text: "Are legal obligations routinely reassessed and updated to reflect evolving requirements?", options: ["Yes", "No"], type: 'Optimising', score: null}
    ]
    };

    export default studyQuestionMap;