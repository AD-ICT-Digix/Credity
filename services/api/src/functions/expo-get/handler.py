import json
import os
import boto3


def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # get a all expo's in the database belonging to the user who created them and return them in the response body as json
    response = table.query(
        KeyConditionExpression=boto3.dynamodb.conditions.Key("type").eq("EXPO")
    )

    return {
        "statusCode": 200,
        "body": json.dumps(response["Items"])
    }
