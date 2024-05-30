export const CLASS_INSTRUCTION = `
Instructions:
1. Class Identification: For each actor and significant noun in the use cases, identify the corresponding classes.
2. Define Attributes: Based on the use cases, define relevant attributes for each class.
3. Define Methods: Define methods for each class corresponding to the use cases.
4. Establish Relationships: Create associations between classes to reflect interactions in the use cases.
5. Use Clear Naming Conventions: Use clear and consistent naming for attributes, methods, and relationships.

ENSURE THAT THE OUTPUT MUST ONLY BE A JSON. THERE'S NO NEED OF EXPLAINATION. DO NOT FORMAT IT TO A JSON JUST OUTPUT THE JSON TEXT ONLY.
Use the JSON format and output raw the JSON only:
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
