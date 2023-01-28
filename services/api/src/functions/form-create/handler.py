import json
import os
import boto3
import uuid
import datetime

# | `form-create` | Create a form | expoId, name |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    id = uuid.uuid4()

    body = json.loads(event.get('body'))

    # Get current time in ISO 8601 format
    now = datetime.datetime.now().isoformat()

    # Create a expo  in the database
    response = table.put_item(
        Item={
            "pk": f"FORM#{id}", # expoId is the expo's unique identifier
            "sk": f"FORM#{id}", # expoId is the expo's unique identifier
            "type": "FORM",
            "name": body.get('name'),
            "parent": body.get('expoId'),
            "createdAt": now,
            "updatedAt": now,
        },
    )

    return {   
        "statusCode": 200,
        "body": json.dumps({
            "pk": f"FORM#{id}", # expoId is the expo's unique identifier
            "sk": f"FORM#{id}", # expoId is the expo's unique identifier
            "type": "FORM",
            "name": body.get('name'),
            "parent": body.get('expoId'),
            "createdAt": now,
            "updatedAt": now,
        }),
    }
    