## Billing and Pricing

### AWS Organizations & Consolidated Billing
Linked accounts:
* 20 linked accounts only
* To add more: 
  * https://aws-portal.amazon.com/gp/aws/html-forms-controller/contactus/aws-account-and-billing
* Billing Alerts:
  * detailed monitoring and ELBs increase EC2 costs
  * When monitoring is enabled on paying account:
    * billing data for linked accounts included
* You can still create billing alerts per individual account

* CloudTrail:
  * Use to monitor all events in account
  * Per AWS account, enabled per region
  * Consolidate logs using S3 bucket:
    * Turn on in paying account
    * Create bucket policy that allows cross-account access
    * Turn on in other accounts
    * use bucket in paying account

* CloudWatch
  * for permormance
  * Auditing 
  * Monitors CPU utilization

* Consolidated Billing - get volume discounts on all your accounts.

* Unused reserved EC2 instances are applied across the group.

* Service Control Polcies are created in AWS Organizations

### Support Packages
    basic-free
    developer-$29/month (scales based on usage)
    business-$100/month("")
    enterprise-$15,000/month("")-TAM(technical account manager)

### Billing Alerts/ Billing Alarms 
  * Alerts automatically when level has been reached

### Reserved Instance Marketplace
* List Reserved Instances for sale 

### AWS Options
* AWS Option 1: All Amazon EC2 Reserved Instances
  * Option - 69% savings over the on-premises alternative
  * Purchase 3-Year Heavy Utilization Reserved Instances 
    * match the capacity in the on-premises option
    * get lowest hourly rate for EC2 and RDS DB Instances
* AWS Option 2: Mix of Amazon EC2 On-Demand Instances & Reserved Instances
  * Most cost-effective option & most flexible option
  * 3-Year Heavy Utilization Reserved Instances 
    * handles baseline traffic & leveraging 
    * On-Demand Instances for peaks
    * save 75% over the on- premises option
    * Significant savings driven 
    * highly efficient resource utilization
  * use resources only when you need them & shut them down after peak traffic subsides
    * Never pay for capacity when you don’t need it
    * Have lower total upfront cost ($6,200) 
    * than AWS option 1 ($15,500) 
    * on-premises option ($24,920)
* AWS Option 3: All Amazon EC2 On-Demand Instances
  * Choose all On-Demand Instances to run spiky web application
  * No upfront commitment & get significant savings (43%) over the on-premises alternative
  * Turn off instance w/out losing data & start up again at will
* Recommended Option for Spiky Web Applications: 
  * Mix of Reserved Instances and On-Demand Instances

### S3 Storage Tiers/ Classes
1. S3 Standard
    99.99% availability
    Stored across multiple devices in multiple facilities
    Designed to sustain loss of 2 facilities concurrently
2. S3-IA
    For data that’s accessed less frequently, but requires rapid access when needed
    Lower fee than S3, but charged retrieval fee
3. S3 One zone-IA
    Lower cost option for infrequently accessed data
    quickly accessible
    can be re-created
    Doesn't require multiple availability data resilience 
4. S3-Intelligent Tiering
    Optimize costs by auto moving data to most cost-effective tier
5. S3 Glacier
    Very cheap
    Used for archival only
    Expedited, standard or bulk
    Standard retrieval time = 3-5 hours
    Max single archive size: 40TB
    Can't import data via console
6. S3 Glacier Deep Dive Archive
    Lowest cost storage class
    Retrieval time 12 hours

### S3 Charges
1. storage
2. requests
3. Storage management pricing
4. Data transfer pricing
5. Transfer acceleration
6. Number & size of objects

* don't have to worry about IOPS

## Cost Calculators

### AWS Simple Monthly Calculator
* Used to calculate running costs on AWS per month
* Not a comparison tool.
* https://calculator.s3.amazonaws.com/index.html
Examples:
1. More instances = higher monthly cost
2. Type: CPU, memory, & billing options effect cost changes
  - z1d.12xxlarge, 48CPU, 384GiB, billing:onDemand = $362,709.15/month.
  - c5d.large, 2CPU, 4GiB, billing:3yr up front = $1,539.57.

### AWS TCO Calculator 
* Total Cost of Ownership
* Compare costs of running infrastructure on premise vs. AWS Cloud
* Generates reports to give C-level execs to case to move to the cloud
* https://aws.amazon.com/tco-calculator
* Network and storage incur costs
* These come up a lot! 
    Play with both calculators until comfortable with them
* Examples:
  * comparing physical servers - less savings compared to vm.
  when max out #s = 35% savings, $138,064,213.
  using lowest possible #s = 77%, $139,476.
  * comparing vm - greater savings with large outputs
  vm - when max out #s = 71% savings, $604,198,066.
  using lowest possible #s = 79%, $161,158.
* Reserved instance offering types  
  * Light
    * 42% savings 1-year
    * 56% 3-year
  * medium
    * 49% savings 1-year
    * 66% 3-year
  * heavy
    * 54% savings 1-year 
    * 71% 3-year

### Cost Explorer
* Gives historical cost - EC2 usage

### Billing & Pricing Summary
* Conclusion:
  While the number & types of services offered by AWS has increased dramatically, philosophy on
  pricing hasn't changed.
  -You pay as you go, pay for what you use, pay less as you use more,
  and pay even less when you reserve capacity. 
* Pricing:
	* Spot, On Demand, Reserved, Dedicated Hosts (.GOV)
* Spot instances:
	* you terminate, you pay for the hour
  * AWS termiantes, you get the hour for free

* free services:
    * Amazon VPC
    * Elastic Beanstalk
    * CloudFormation
    * Identity Access Management (IAM)
    * Auto Scaling
    * Opsworks
    * Consolidated Billing
    * Have to pay for resources, like EC2 related to above services

* VPC
  * Use IPSEC VPN to connect on-premise datacenters to VPC
  * Use VPC Peering to route traffic / data between aws accounts

* Tags:
  * Key Value Pairs attached to AWS Resources
  * Metadata (data about data)
  * Tags can sometimes be inherited

* Resource Groups:
  * apply automation to resources with specific tags
    * Region
    * Name
    * Health Checks

* group resources that share one or more tags
* ie. stopped all EC2 instances in the Stockholm region

* Resource Groups with AWS Systems manager controls and executes
  automation against entire fleets of EC2 instances

* Tag editor 
  * global service to discover resources & add tags
  * Newer regions may take some time to be compatible with tag editor

## Services

### S3 general
* uploaded file called: Object
  * S3 is object-based
    ex. allows you to upload files
* files can be 0 bytes - 5tb
* objects can be downloaded via url
* unlimited storage
* files are stored in buckets
* S3 is a universal namespace
  * names must be unique globally
  * https://s3-eu-west-1.amazonaws.com/acloudguru
* Read after write consistency after PUTS of new objects
* Eventual consistency for overwrite PUTS and DELETES
* NOT suitable to install an operating system on
* Successful uploads generate HTTP 200 status code
* RDS Automated backups stored here
* Use bucket policies to make entire S3 buckets public
* Can use S3 to host STATIC websites
  * ex. As html
  * Websites that require database connections such as Wordpress etc can’t be hosted on S3

### S3 Tiers
1. S3
Durable, immediately available, frequently accessed
2. S3 - IA
Durable, immediately available, infrequently accessed
3. S3 One Zone - IA 
Even cheaper than IA, but only in 1 availability zone
4. Glacier
Achieved data, where you can wait 3-5 hours before accessing

### Key fundamentals of S3
Key (name of object)
Value (data, made up of a sequence of bytes)
Version ID
Metadata
Subresources

### Buckets
    Names share a common name space
      Can’t have the same bucket name as someone else
    View buckets, you view them globally
    Can have buckets in individual regions
    Replicate contents to another bucket automatically via cross-region replication
    Change storage classes and encryption of objects at anytime

### S3 Scales automatically to meet demand
* Many enterprises will put static websites on S3 when they forsee large # requests 
  * ie. Movie preview

### S3 Data Consistency Model
1. Read after write consistency for PUTS of new objects
2. Eventual Consistency for overwrite PUTS and Deletes 
    Can take some time to propagate

### AWS Rekognition
* video and image

### RTMP
* Real-Time Messaging Protocol
* Adobe
* Use it to stream media files

### AWS Kinesis Video Stream
* securely stream video from connected devices
  * processing: analytics, machine learning, playback

### AWS Snowball
* Secure device
* Transfers large amounts of data in and out of cloud
* offers petabyte-scale data transport solution 
- uses devices designed secure to transfer large # data into and out of Cloud
- workaround for internet

### AWS Lambda
* Serverless
* run code without provisioning or managing servers

### AWS Athena
* Helps analyze data in s3 using SQL
* Serverless interactive query service

### AWS Storage Gateway
* AWS service - acts as a file system mounted on an S3 bucket

### EC2
* Virtual server in the cloud
  * Reduces time required to obtain & boot new server instances to minutes
    * quickly scale capacity, both up and down, to meet computing requirements

* Compute based service, not serverless, it's a server!

### EC2 categories
* On-Demand
  * low-cost/flexible. Pay by hour, no up-front payment or long-term commitment
  * Good for Short-term / spiky workloads
    * not interrupted
    * No downtime
  * Good for test/dev environments
  * No downtime

* Reserved
  * Apps with Steady-state/predictable useage
  * Able to make upfront payments to reduce costs
  * Often a 12-36 month timeframe
  * 1 or 3 year term

  * Reserved EC2 instance classes 
    * Convertible 
    * Standard
* Spot
  * Apps with flexible start/end times
  * Apps that are only feasible at low compute prices
  * Users with urgent computing needs for large amts of addt'l capacity
  * Instances have 120 seconds to shut down

* Use EC2 to create Linux server to run app to
  * use to create Linux server

*Good to be aware of instance types, but details won't be on cert exam
*FIGHTDRMCPX
F - FPGA
I - IOPS, NoSQL DBs, Data Warehousing
G - Graphics, Video Encoding/Machine Learning/3D App Streaming
H - High Disk Throughput
T - Cheap general purpose (think T2 Micro), Web Servers/Small DBs
D - Density, Fileservers, Data Warehousing, Hadoop
R - RAM, Memory intensive Apps/DBs
M - Main choice for general purpose apps
C - Compute, CPU Intensive Apps/DBs
P - Graphics(think Pics)
X - Extreme Memory
Fight DR MC PX!

### Route53 
* Domain Name Service 
    * phonebook
* resolve domain names to IP Addresses.
* Amazon DNS Service = Route53
* global
  * like: IAM & S3
* use it to: 
  * direct traffic world-wide
  * register domain name

### CloudSearch
* Quickly add search capabilities to website / application

### Lightsail
* Charged per hour at plan rate as long as an instance is started or in stopped state
* good if you just need virtual private servers
  * includes everything to launch quickly

### Elastic Beanstalk 
* Quickly deploy & manage applications in AWS Cloud
  * automatically handles:
    * capacity provisioning
    * load balancing 
    * scaling
    * application
    * health monitoring

### Elastic Beanstalk and CloudFormation
Both are free, but the resources they provision (ex. EC2 instances)
are not free.
* Difference between the two:
1. Elastic Beanstalk is limited in what it can provision and is not 
programmable.
2. CloudFormation can provision almost any AWS service & is completely
programmable

### EMR
* Web service:
  * makes it easy to process large amounts of data efficiently
  * use to process large data sets

* Principles of sound cloud design:
  * Assume *everything* will fail
  * Disposable resources, Infrastructure as code, Scalability.

### RDS
* key features:
    1. Multi-AZ-for distaster recovery
    2. Read replicas-for performance
    * configure read replicas to reduce excess read traffic
* retention for auto RDS backups
  * 1 - 35 days
 
### Disaster Recovery
* Warm standby - lowest downtime

### Elasticity
* divert traffic to instances:
  * based on demand
  * with least load

### AWS Database Types
* RDS(SQL/OLTP)
    * SQL, MySQL, PostgreSQL, Oracle, Aurora, MariaDB
* DynamoDB(NoSQL)
  * scales automatically
  * high scalability
  * high availability
  * use with no complex transactions
  * fully-managed
* Redshift OLAP
    for business or data warehousing
    fully-managed data warehouse in cloud
  * cluster runs 24/7 - prolonged periods - keep costs low...
    * purchase reserved-node offerings
  * petabytes
* Elasticache
    used to speed up performance of existing databases(frequent identical queries)
    memcached
    redis
	* SWAP file
  	* amount of disk storage space reserved on disk if computer runs out of ram	
			* Typical size is = size of total RAM
* Aurora - relational, high performance, scales well
  * two key features:
    1. multi-AZ-for disaster recovery
    2. read replicas-for performance
  * AWS's RDS SQL Database engine
  * compatible database read replicas 
  * MySQL and PostgreSQL

* DynamoDB
    Fast & flexible NoSQL database service for all applications that need 
    consistent, single-digit millisecond latency at any scale.
    (non-realtional), auto-scaling
	Read / Write Capacity
	Set per Table
	Can be changed at any time - it's an ASYNC operation
	Allocated on a per second basis
	* Facts: 
	Spread across 3 geographically distinct data centers
	400KB item size limit

* Data Warehousing
    used for business intelligence
    pulls in very large and complex data sets

* AWS Managed Service
  * up to 5X faster than traditional MySQL database
  * provision to make controlled changes to infrastructure

* Redshift and DyanmoDB are fully managed

### AWS CloudFormation
Service that helps model and set up AWS recources
  * spend less time managing these resources, more time on Apps that run
in AWS.
  * Create template that describes all AWS recources you want 
(ex. EC2, Amazon RDS DB instances), and AWS CloudFormation takes
    * template file format: YAML and JSON
care of provisioning & configuring resources for you.
  * Don't need to individually create & configure AWS resources
& figure out what's dependent on what;
    * AWS CloudFormation handles all of that.

### Amazon SQS
* Amazon Simple Queue service
* use to store messages as they travel between apps or microservices
* https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/Welcome.html

### Workspaces
* Deploy virtual desktop infrastructure in cloud

### Load Balancing
* What is bootstrapping on ec2?
  * Start w/ a default configuration, then execute automated bootstapping actions
  * scripts that install software or copy data to bring resource to particular state
  * userdata scripts in ec2
* What is a Golden Image?
  * snapshot of a particular state of that resource
    * results in faster start times 
    * removes dependencies to configuration services/3rd party repositories
* What is an AMI?
  * Amazon Machine Image
  * provides information required to launch an instance
  * similar to VM templates
* What AWS services support using containers?
  * AWS Elastic Beanstalk
  * Amazon Elastic Container Service (Amazon ECS)
  * AWS Fargate
    * run containers w/out servers or clusters
  * ie. build golden Docker images & use ECS Container Registry to manage them
* What is Infrastructure as Code?
  * known as IaC 
* What AWS service allows you to use Infrastructure as Code?
  * CloudFormation
    * model and provision cloud infrastructure resources
* You are charged $$ for ELBs
* Classic Load Balancer
  * Layer 4 routing (TCP)
* Application Load Balancer
  * Layer 7 routing
  * has Target Groups
* Stops sending traffic to failed instance

### Best practices standards
* AWS Managed Service complies with ITIL

### Difference between S3 bucket url and S3 static hosted website address
* What does a URL look like?
  * It's always S3, then the region, then .amazon.aws.com, then / and the bucket name
    * ex. Https://s3-eu-west1.amazonaws.com/acloudguru *
  
### AWS Quick Start
Way of deploying evironments quickly, using CloudFormation templates built by
AWS Solutions Architects who are experts in that particular technology.

### AWS Landing Zone 
Solution that helps customers more quickly set up secure, multi-account
AWS environment based on AWS best practices.

### Elastic-Transcoder
*  Use:
  * Media transcoder in the cloud - good for smartphones, etc
* Pricing:
  * Pay per minute, per resolution

### AWS DeepLens
* Wireless-enabled video camera & dev platform
* Use to develop vision apps
* Deep learning model
* Lets you use AI 

### AWS X-Ray
* Debug distributed apps to troubleshoot root performance problems

### AWS Alias Record
* Map an Alias record to a Zone Apex
* Map one DNS name to another 
  * like CNAME

###	Possible Questions:
* p. 13 of whitepaper
  * Question: Use this service to deploy and scale web applications and services developed
  with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as:
  Apache, Nginx, Passenger, and IIS.17Developers can simply upload their application code, 
  and the service automatically handles all the details, such as: resource provisioning, 
  load balancing, auto scaling, and monitoring.
  * Answer: Elastic Beanstalk
* Q: What language is not supported by Elastic Beanstalk? 
  A. Java B. PHP C. Ruby D. Nodejs E. Go F. Rust
  * Answer: Rust
* Q: Quickly deploy using: Java and .NET
  Choices: EC2, Elastic Beanstalk, or SQS?
  * Answer: Elastic Beanstalk
  * Programming languages / frameworks list Elastic Beanstalk works with:
  * Java
  * .NET
  *  PHP
  * • Node.js
  * • Python
  * • Ruby
  * • Go
  * • Docker
* Q: EC2 hosting: most cost effective?
  * 60 day run
  * Answer: use On-Demand instance type

### What AWS resources are often used to create S3 applications?
* answer: dynamo db, s3, efs, etc
	* pg.7 white paper:
		*https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf

* Q: Best AWS service to host a file in a location that's publicly
  accessible from anywhere
* A: S3

** * Read before exam: https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf

* What does an s3 URL look like?
  * It’s always S3, then the region, then .amazon.aws.com, then / and the bucket name
    ex. Https://s3-eu-west1.amazonaws.com/laurelherting

### EC2 Exam Tips
1. On Demand
* Pay fixed rate by hour (or by sec) w/ no commitment
2. Reserved
* Provides capacity reservation & discounts on hourly charge 
1 or 3 year terms 
3. Spot
* bid price you want for instance capacity
* greater savings for flex start/end times
4. Dedicated Hosts 
* Physical EC2 server dedicated for use
* reduce costs - use existing server-bound software licenses

* Spot instance terminated by Amazon - charged for partial usage
* You terminate - charged for any hour instance ran

* Price / hour charge for several Spot instances
  * Spot Price

1. EC2 = Elastic Compute Cloud

### Name all Compute Services
1.EC2 *
2.Lightsail
3.ECR
4.ECS
5.EKS
6.Lambda *
7.Batch
8.Elastic Beanstalk
