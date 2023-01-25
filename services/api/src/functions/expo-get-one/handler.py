import json
import os
import boto3

# | `expo-get` | Get a single expo | |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # get a expo  in the database
    response = table.get_item(
        Item={
			"pk": f"EXPO#{event['expoId']}", # expoId is the expo's unique identifier
			"sk": f"EXPO#{event['expoId']}", # expoId is the expo's unique identifier
        },
    )

    return event
