import json
import os
import boto3

# | `form-create` | Create a form | expoId, name |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # create a form containing the data from the event in the database 
    response = table.put_item(
        Item={
            "id": event["id"],
            "type": "FORM",
            "expoId": event["expoId"],
            "name": event["name"],
        }
    )
    
    return event
