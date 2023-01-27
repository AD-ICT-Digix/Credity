import json
import os
import boto3
import uuid
import datetime


def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    id = uuid.uuid4()

    body = json.loads(event.get('body'))

    print(body.get('input'))

    # Get current time in ISO 8601 format
    now = datetime.datetime.now().isoformat()

    # Create a new submission
    response = table.put_item(
        Item={
            "pk": f"SUBMISSION#{id}", # expoId is the expo's unique identifier
            "sk": f"SUBMISSION#{id}", # expoId is the expo's unique identifier
            "type": "SUBMISSION",
            "input": body.get('input'),
            "createdAt": now,
            "updatedAt": now,
        },
    )

    return {   
        "statusCode": 200,
        "body": json.dumps({
            "pk": f"SUBMISSION#{id}", # expoId is the expo's unique identifier
            "sk": f"SUBMISSION#{id}", # expoId is the expo's unique identifier
            "type": "SUBMISSION",
            "parent": body.get('expoId'),
            "input": body.get('input'),
            "createdAt": now,
            "updatedAt": now,
        }),
    }
    
