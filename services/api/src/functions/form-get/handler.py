import json
import os
import boto3

def main(event, context):
    # Get the DynamoDB resource
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(os.environ["TABLE_NAME"])

    # get one expo specified by the expoId and return it in the response body as json
    response = table.query(
        KeyConditionExpression=boto3.dynamodb.conditions.Key("expoId").eq(event["expoId"])
    )

    return {
        "statusCode": 200,
        "body": json.dumps(response["Items"])
    }
    
