# | `form-list` | list all expo forms | expoId |
import json
import os
import boto3

def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # list all expo forms and return them in the response body 
    response = table.query(
        KeyConditionExpression=boto3.dynamodb.conditions.Key("expoId").eq(event["expoId"])
    )

    return {
        "statusCode": 200,
        "body": json.dumps(response["Items"])
    }
