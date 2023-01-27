import json
import os
import boto3
from boto3.dynamodb.conditions import Key, Attr

# | `form-get` | list all expo forms | expoId |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # Get expoId from path parameters
    expoId = event.get("pathParameters").get("expoId")

    # get all forms for expo
    response = table.query(
        IndexName="TypeParentIndex", KeyConditionExpression=Key("type").eq("FORM") & Key("parent").eq(expoId)
    )

    if response.get("Items") is None:
        return {"statusCode": 404, "body": "Not Found"}

    if len(response["Items"]) == 0:
        return {"statusCode": 404, "body": "Not Found"}

    return {"statusCode": 200, "body": json.dumps(response["Items"])}
