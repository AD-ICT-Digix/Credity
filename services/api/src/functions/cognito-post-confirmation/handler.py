import json
import os
import boto3


def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # Create a new user in the database
    response = table.put_item(
        Item={
            "pk": f"USER#{event['userName']}",
            "sk": f"USER#{event['userName']}",
            "type": "USER",
            "email": event["request"]["userAttributes"]["email"],
        },
    )

    # Return the event for further processing by AWS Cognito
    return event
