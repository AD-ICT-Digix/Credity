import json
import os
import boto3

def main(event, context):
	# Get the DynamoDB resource
	dynamodb = boto3.resource("dynamodb")
	table = dynamodb.Table(os.environ["TABLE_NAME"])

	# Delete a expo  in the database
	response = table.delete_item(
		Key={
			"pk": f"EXPO#{event['expoId']}", # expoId is the expo's unique identifier
			"sk": f"EXPO#{event['expoId']}", # expoId is the expo's unique identifier 
		},
	)

	return event
	