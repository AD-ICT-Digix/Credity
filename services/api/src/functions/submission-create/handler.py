# | `submission-create` | Create a new submission | { email: string, body: string, expoId: uuid, type: 'check-in' | 'check-out' | uuid->entity::Form} |
import json
import os
import boto3

def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # create a submission containing the data from the event in the database
    response = table.put_item(
        Item={
            "expoId": event["expoId"],
            "email": event["email"],
            "body": event["body"],
            "type": event["type"], #check-in, check-out, or form id
        },
    )

    return event
    

