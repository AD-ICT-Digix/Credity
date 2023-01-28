import json
import os
import boto3
import uuid
import datetime

# | `expo-create` | Create a new expo | |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    id = uuid.uuid4()

    body = json.loads(event.get('body'))

    # Validate if the event body contains all the required fields
    if not body.get('title'):
        return {"statusCode": 400, "body": "Bad Request"}

    # Get current time in ISO 8601 format
    now = datetime.datetime.now().isoformat()
    userId = event.get('requestContext').get('authorizer').get('jwt').get('claims').get('sub')

    # Create a expo  in the database
    response = table.put_item(
        Item={
            "pk": f"EXPO#{id}", # expoId is the expo's unique identifier
			"sk": f"EXPO#{id}", # expoId is the expo's unique identifier 
			"type": "EXPO",
			"title": body.get('title'),
            "parent": userId,
            "createdAt": now,
            "updatedAt": now,
        },
    )

    return {
        "statusCode": 201,
        "body": json.dumps({
            "pk": f"EXPO#{id}", # expoId is the expo's unique identifier
			"sk": f"EXPO#{id}", # expoId is the expo's unique identifier 
			"type": "EXPO",
			"title": body.get('title'),
            "parent": userId,
            "createdAt": now,
            "updatedAt": now,
        }),
    }
