import json
import os
import boto3
import uuid
import datetime


def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # Generate a unique ID for the submission
    id = uuid.uuid4()

    # Get body parameters
    body = json.loads(event.get('body'))

    # Get current time in ISO 8601 format
    now = datetime.datetime.now().isoformat()

    # Create a new submission
    table.put_item(
        Item={
            "pk": f"SUBMISSION#{id}",
            "sk": f"SUBMISSION#{id}",
            "type": "SUBMISSION",
            "expoId": body.get('expoId'),
            "parent": body.get('formId'),
            "input": body.get('input'),
            "createdAt": now,
            "updatedAt": now,
        }
    )
    

    return {   
        "statusCode": 200,
        "body": json.dumps({
            "pk": f"SUBMISSION#{id}", 
            "sk": f"SUBMISSION#{id}", 
            "type": "SUBMISSION",
            "expoId": body.get('expoId'),
            "parent": body.get('formId'),
            "input": body.get('input'),
            "createdAt": now,
            "updatedAt": now,
        }),
    }
    
