import json
import os
import boto3

# | `expo-delete` | Delete a expo | id |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    params = event.get('pathParameters')

    # delete expo 
    response = table.delete_item(
        Key={
            "pk": f"EXPO#{params.get('expoId')}",
            "sk": f"EXPO#{params.get('expoId')}"
        }
    )

    return {
        "statusCode": 200,
        "body": json.dumps({
            "id": params.get('expoId'),
        }),
    }

    
