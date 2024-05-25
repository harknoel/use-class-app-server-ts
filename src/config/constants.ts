export const CLASS_INSTRUCTIONS = `
Step 1: Identify Classes
Generate the JSON output for the classes with attributes and methods based on the use cases.
`
export const CLASS_JSON_FORMAT = `
{
  "title": "<Title of the Diagram>",
  "classes": [
    {
      "name": "<Class Name>",
      "attributes": {
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>"
      },
      "methods": [
        "<method_name()>",
        "<method_name()>"
      ]
    },
    {
      "name": "<Class Name>",
      "attributes": {
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>"
      },
      "methods": [
        "<method_name()>",
        "<method_name()>"
      ]
    },
    {
      "name": "<Class Name>",
      "attributes": {
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>"
      }
    }
  ]
}
`
export const RELATIONSHIP_INSTRUCTIONS = `
Step 2: Define Relationships
Generate the JSON output for the relationships between the classes.
`
export const RELATIONSHIP_JSON_FORMAT = `
{
  "relationships": [
    {
      "from": "<Class Name>",
      "to": "<Class Name>",
      "type": "<relationship_type>",
      "multiplicity": {
        "from": "<multiplicity_from>",
        "to": "<multiplicity_to>"
      },
      "label": "<relationship_label>"
    },
    {
      "from": "<Class Name>",
      "to": "<Class Name>",
      "type": "<relationship_type>",
      "multiplicity": {
        "from": "<multiplicity_from>",
        "to": "<multiplicity_to>"
      },
      "label": "<relationship_label>"
    }
  ]
}

`
export const COMBINED_INSTRUCTIONS = `
Combine the JSON outputs from Step 1 (Identify Classes) and Step 2 (Define Relationships) into a single JSON object. The final JSON object should include both the "title", "classes", and "relationships" sections.
`
export const COMBINED_JSON_FORMAT = `
{
  "title": "<Title of the Diagram>",
  "classes": [
    {
      "name": "<Class Name>",
      "attributes": {
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>"
      },
      "methods": [
        "<method_name()>",
        "<method_name()>"
      ]
    },
    {
      "name": "<Class Name>",
      "attributes": {
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>"
      },
      "methods": [
        "<method_name()>",
        "<method_name()>"
      ]
    },
    {
      "name": "<Class Name>",
      "attributes": {
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>",
        "<attribute_name>": "<attribute_type>"
      }
    }
  ],
  "relationships": [
    {
      "from": "<Class Name>",
      "to": "<Class Name>",
      "type": "<relationship_type>",
      "multiplicity": {
        "from": "<multiplicity_from>",
        "to": "<multiplicity_to>"
      },
      "label": "<relationship_label>"
    },
    {
      "from": "<Class Name>",
      "to": "<Class Name>",
      "type": "<relationship_type>",
      "multiplicity": {
        "from": "<multiplicity_from>",
        "to": "<multiplicity_to>"
      },
      "label": "<relationship_label>"
    }
  ]
}
`
