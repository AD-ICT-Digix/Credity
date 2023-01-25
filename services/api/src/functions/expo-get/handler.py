import json
import os
import boto3
from boto3.dynamodb.conditions import Key, Attr

# | `expo-get` | Get all expositions of this user | |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # get a all expo's in the database belonging to the user who created them and return them in the response body as json
    response = table.query(
        # get the expo's belonging to the user who created them
        KeyConditionExpression=Key("pk").eq(f"USER#{event['userId']}"),
        # get the expo's belonging to the user who created them
        FilterExpression=Attr("parent").eq("expo"),
    )

    return {
        "statusCode": 200,
        "body": json.dumps(response["Expositions"])
    }
