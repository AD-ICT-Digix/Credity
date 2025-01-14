import json
import os
import boto3
from boto3.dynamodb.conditions import Key, And

# | `form-get-one` | get a single form | expoId, formId |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    params = event.get('pathParameters')

    print(params)

    response = table.query(
        IndexName="TypeSkIndex",
        KeyConditionExpression=Key("type").eq("FORM") & Key("sk").begins_with(f"FORM#{params['formId']}"),
    )
    
    if response.get("Items") is None:
        return {
            "statusCode": 404,
            "body": "Not Found"
        }

    if len(response["Items"]) == 0:
        return {
            "statusCode": 404,
            "body": "Not Found"
        }

    return {
        "statusCode": 200,
        "body": json.dumps(response["Items"][0])
    }
