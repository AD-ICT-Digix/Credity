# TODO: create form-get function

import json
import os
import boto3
from boto3.dynamodb.conditions import Key, Attr

# | `form-get` | list all expo forms | expoId |
def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # get all forms data belonging to the expo and return them in the response body as json 
    response = table.query(
        KeyConditionExpression=Key("pk").eq(f"FORM#{event['expoId']}"),
        FilterExpression=Attr("parent").eq(event["parent"]),
    )

    return {
        "statusCode": 200,
        "body": json.dumps(response["Forms"])
    }
    
