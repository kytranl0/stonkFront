# CloudFormation Stack

## Introduction
Use CloudFormation to provision infrastructure in AWS for an Angular app. We will upload our Angular application to a S3 bucket which will be hosted by CloudFront. 

### Prerequisites
* [Configured AWS CLI v.2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
* [Amazon Route53 Domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) 
* [Validated certificate for AWS Domain](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) 

### CloudFormation Template Description
Create an AWS CloudFront distribution backed by an AWS S3 bucket origin. 
Create AWS Route 53 alias records and route it to CloudFront distribution.

### Deploy the stack
Run aws cloudformation deploy --template-file template.yaml --stack-name stonkfrontwebapp --parameter-overrides file://acm-arn-config.json



