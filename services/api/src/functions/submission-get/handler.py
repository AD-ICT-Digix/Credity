import json
import os
import boto3
from boto3.dynamodb.conditions import Key, Attr


def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    #  Get all submissions of this expo: { expo: uuid->entity::Expo, parent: 'check-in' | 'check-out' | uuid->entity:å:Form}
    response = table.query(
        KeyConditionExpression=Key("pk").eq(f"SUBMISSION#{event['expoId']}"),
        FilterExpression=Attr("parent").eq(event["parent"]),
    )

    return {"statusCode": 200, "body": json.dumps(response["Submissions"])}
