# | `form-list` | list all expo forms | expoId |
import json
import os
import boto3

# | `form-get-one` | get a single form | expoId, formId |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # get one specific form belonging to the expo and return it in the response body as json 
    response = table.get_item(
        Key={
            "pk": f"FORM#{event['expoId']}",
            "sk": f"FORM#{event['formId']}"
        },
    )

    return {
        "statusCode": 200,
        "body": json.dumps(response["Form"])
    }
