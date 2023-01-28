import json
import os
import boto3
from boto3.dynamodb.conditions import Key, And

def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    params = event["pathParameters"]

    response = table.query(
        IndexName="TypeParentIndex",
        KeyConditionExpression=Key("type").eq("SUBMISSION") & Key("parent").begins_with(params["formId"]),
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
        "body": json.dumps(response["Items"])
    }
