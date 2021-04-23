# CloudFormation Stack

## Introduction
Use CloudFormation to provision infrastructure in AWS. We will upload our Angular application to a S3 bucket which will be hosted by CloudFront. 

### Prerequisites
* [Configured AWS CLI v.2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
* [Amazon Route53 Domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) 
* [Validated certificate from AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) 

### CloudFormation Template Description
Create
  1. AWS S3 bucket with policy
  2. An AWS CloudFront distribution backed by an AWS S3 bucket origin. 
  3. AWS Route 53 alias records and route it to CloudFront distribution.

### Before Deploying Your Stack
Add your validated certificate's arn to `acm-arn-config.json`

### Deploy Your Stack 
Run `aws cloudformation deploy --template-file template.yaml --stack-name stonkfrontwebapp --parameter-overrides file://acm-arn-config.json`

### Deploy Your Angular app to a S3 Bucket
Run ```aws cloudformation describe-stacks --stack-name stonkfrontwebapp --query "Stacks[0].Outputs[?OutputKey==`DistributionId` || OutputKey==`AppBucket`].OutputValue"```

In `package.json`, replace `{AppBucket}` and `{DistributionId}` with your stack output. 

Run `npm run deploy`

### Note
While executing `npm run deploy`, two AWS commands will execute:
* `aws s3 sync` - Syncs directories and S3 prefixes. Recursively copies new and updated files from the source directory to the destination. 
* `aws cloudfront create-invalidation` -Invalidate the file from edge caches. The next time a viewer requests the file, CloudFront returns to the origin to fetch the latest version of the file.

If you would like to revert or delete all resources created by CloudFormation in AWS. You can run
`aws cloudformation delete-stack --stack-name stonkfrontwebapp`

Courtesy to https://github.com/ibliskavka/aws-angular-stack-starter
