### Cloud Concepts And Technology
### Six advantages of Cloud 
1. Trade capital expense for variable expense
2. Benefit from massive economies of scale
3. Stop guessing about capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centers
6. Go global in minutes

### Three types of cloud computing
1. IAAS
2. PAAS
3. SAAS

### 3 types of cloud computing deployments
1. Public Cloud - AWS, Azure, GCP
2. Hybrid - Mixture of public & private
3. Private Cloud(Or On Premise) - You manage it, in your datacenter.
Openstack or Vmware

### Understand difference between a region, an Availability zone(AZ) and an Edge Location
1. Region-physical location in world, consists of 2 or more zones
2. An AZ is one or more discrete data centers, each w/ redundant power,
networking and connectivity, housed in seperate facilities
3. Edge locations are endpoints for AWS which are used for caching content.
Typically consists of: CloudFront, Amazon's CDN.
ie. #Edge locations > # AZ zones > # regions

### Understand difference between support packages;
basic-free
developer-$29/month (scales based on usage)
business-$100/month("")
enterprise-$15,000/month("")-TAM(technical account manager)

### Billing Alerts/ Billing Alarms 
Alert you automatically when a certain level of AWS spend has
been reached. If you are learning AWS for the first time, you should turn it on so that you don't spend money without realizing it.

### IAM is global
IAM stands for Identity Access Management Management. It is global, you don't have to specify a 
region when dealing with an IAM. When you create a user or group, this is created globally.

### You can access AWS platform in 3 ways
1. Via console
2. Programmatically - Using command line
3. Using Software Developers Kit (SDK)

### Root Account
Is the email address used to set up AWS account
Always has full admin access
Don’t give these credentials away!
Instead, create a user for each individual w/in organization
Always secure root account using MFA

### Group 
A place to store users
1. Users inherit all permissions group has
2. Examples of groups:
developers, System administrators, Human resources, finance

### Set permissions
Need to apply a policy to that group
Policies consist of Java Script Object Notation (JSON)
  1. Referred to as key value pairs
  2. You have your key
  Such as name, then value
  ex. {“name”: “A Cloud Guru”}

### How would you define a policy?
Define it using JSON
Inside of identity access management

### EC2 - compute based service, not serverless, it's a server!

### Use private key to connect EC2

### Security Groups - virtual firewalls in cloud. Need to open ports to use them. 
Popular ports: SSH(22), HTTP(80), HTTPS(443), RDP(3389)

### Always design for failure, Have one EC2 instance in each availability zone.

### Using AWS Command Line
#### Interact with AWS in three ways
1. Using console
2. Using command Line Interface (CLI)
3. Using Software Development Kits (SDKs)

### Using Roles
#### Roles are more secure than using access key ids
#### Secret access keys are easier to manage
#### You can apply roles to EC2 instances anytime

#### Changes takes place immediately

### Roles are universal
### No need to specify region, similar to users

### S3
#### What does a URL look like?
  It’s always the region, then S3, then the region, then .amazon.aws.com, then / and the bucket name
  ex. Https://s3-eu-west1.amazonaws.com/acloudguru
*Successful upload = HTTP 200 code

### S3 Data Consistency Model
popular exam q
1. Read after write consistency for PUTS of new objects
2. Eventual Consistency for overwrite PUTS and Deletes 
Can take some time to propagate

### S3 Storage Tiers/ Classes
1. S3 Standard
99.99% availability,
Stored across multiple devices in multiple facilities,
Designed to sustain loss of 2 facilities concurrently
2. S3 - IA
Infrequently Accessed,
-For data that’s accessed less frequently, but requires rapid access when needed
-Lower fee than S3, but charged retrieval fee
3. S3 One One -IA
For when you want lower cost option for infrequently accessed data, but do not require the multiple Availability data resilience 
4. S3 - Intelligent Tiering
Optimize costs by auto moving data to most cost-effective tier
5. S3 Glacier
Very cheap
Used for archival only
Expedited, standard or bulk
Standard retrieval time = 3-5 hours
6. S3 Glacier Deep Dive Archive
Lowest cost storage class
where retrieval time of 12 hours is acceptable

### S3 Charges
1. storage
2. requests
3. Storage management pricing
4. Data transfer pricing
5. Transfer acceleration

### S3 exam tips
1. s3 is object-based
    ### ex. allows you to upload files
2. files can be 0 bytes - 5tb
3. unlimited storage
4. files are stored in buckets
5. s3 is a universal namespace
    ### names must be unique globally
    https://s3-eu-west-1.amazonaws.com/acloudguru
6. Read after write consistency after PUTS of new objects
7. Eventual consistency for overwrite PUTS and DELETES
8. NOT suitable to install an operating system on
9. Successful uploads generate HTTP 200 Status code

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

### ACL
Torrent,
Object-based storage only (for files)
NOT suitable to install an operating system on
Successful uploads generate HTTP 200 Status code
Read S3 FAQs before taking exam
  *It comes up a lot!!!

### Buckets
1. Names share a common name space
2. Can’t have the same bucket name as someone else
3. When you view buckets, you view them globally
But you can have buckets in individual regions
4. Can replicate bucket contents to another bucket automatically by using cross region replication
5. Can change storage classes and encryption of objects on the fly

### S3
Use bucket policies to make entire S3 buckets public
Can use S3 to host STATIC websites
1. ex. As html
2. Websites that require database connections such as Wordpress etc can’t be hosted on S3

### S3 Scales automatically to meet demand
Many enterprises will put static websites on S3 when they think there is going
to be a large # of requests 
ie. Movie preview

### CDN 
** Content Delivery Network 
1. Edge location
Not just read-only, can write to them too
i1. put an object ontot them
Location where content will be cached
Seperate to an AWS Region/AZ
2. Origin
Origin of all files that the CDN will distribute
Can either be:
S3 Bucket
EC2 Instance
Elastic Load Balancer
Route53
3. Distribution
Name given the CDN which consists of collection of Edge locations
4. Web Distribution
Typically used for websites
5. RTMP
Media Streaming
* objects are cached for life of TTL(Time To Live)
* You can clear cached objects, but you'll be charged

### EC2
*Virtual server in the cloud
Reduces time required to obtain & boot new server instances to minutes,
allowing you to quickly scale capacity, both up and down,
as your computing requirements change

EC2 Exam Tips
1. On Demand
Allows you to pay a fixed rate by hour (or by sec) w/ no commitment
2. Reserved
Provides a capacity reservation and offer significant discount on hourly charge for an instance 
1 or 3 year terms 
3. Spot
Enables you to bid whatever price you want for instance capacity
Providing for greater savings if your apps have flex start/end times
4. Dedicated hosts 
Physical EC2 server dedicated for use
Can help reduce costs by allowing you to use your existing server-bound software licenses

* If spot instance is termanated by Amazon EC2, you will be charged for partial usage,
but if you terminate it yourself, you'll be charged for any hour in which the instance ran.

1. Elastic Compute Cloud (Amazon EC2)
2. Instance Types
*FIGHTDRMCPX
F - FPGA
I - IOPS
G - Graphics
H - High Disk Throughput
T - cheap general purpose (think T2 Micro)
D - Density
R - RAM
M - main choice for general purpose apps
C - Compute
P - Graphics(think Pics)
X - Extreme Memory
Fight DR MC PX!

### EBS
*virtual disk, attach to EC2 instance
1. Elastic Block Store
2. Exam q: less than 2000 IOPS, want GP2
3. Exam q: really big NoSQL database, gonna use a lot of IOPS
Go for Provisioned IOPS SSD
Not GP2

### SSD
1. General purpose SSD(GP2)
Balances price and performance for a wide variety of workloads 
2. Provisioned IOPS SSD(IO1)
Highest-performance SSD volume for mission-critical low-latency or high-throughput workloads

### Magnetic
1. Throughput Optimized HDD(ST1)
Low cost HDD volume designed for frequently accessed, throughput-intensive workloads
2. Cold HDD
Lowest cost HDD volume designed for less frequently accessed workloads
3. Magnetic
Previous generation
Can be a boot volume

### Common Ports
Linux=SSH(Port 22)
Microsoft=Remote Desktop Protocol(Port 3389)
HTTP=Port 80
HTTPS=Port 443

### Firewall
Let everything in 0.0.0.0/0
To let just one IP in X.X.X.X/32


### Elastic Load Balancers
Three types
1. Application
layer 7 (make intelligent decisions)
2. Network 
extreme performance / static IP Addresses
3. Classic
test & Dev, keep costs low
### RDS
Has 2 key features
1. Multi-AZ-for distaster recovery
2. Read replicas-for performance

### AWS Database Types
RDS(SQL/OLTP)
SQL, MySQL, PostgreSQL, Oracle, Aurora, MariaDB
DynamoDB(NoSQL)
Red Shift OLAP
-for business or data warehousing
-fully-managed data warehouse in cloud
Elasticache
-used to speed up performance of existing databases(frequent identical queries)
-memcached
-redis

Aurora - relational, high performance, scales well
*two key features
1. multi-AZ-for disaster recovery
2. read replicas-for performance

DynamoDB
Fast & flexible NoSQL database service for all applications that need 
consistent, single-digit millisecond latency at any scale.
(non-realtional), auto-scaling

Data Warehousing
used for business intelligence
pulls in very large and complex data sets

### Graph databases
scalability
high availability

### Autoscaling
Allows you to provision multiple EC2 instances behind a load balancer automatically 
depending on your demand.

### Route53 
(Domain Name Service) like a phonebook,
process computers use to resolve domain names to IP Addresses.
Amazon DNS Service = Route53
-global, similar to IAM & S3
-use it to: 
1.direct traffic world-wide
2.to register domain name

### Name all Compute Services
1.EC2
2.Lightsail
3.ECR
4.ECS
5.EKS
6.Lambda
7.Batch
8.Elastic Beanstalk

### Elastic Beanstalk 
*You can quickly deploy & manage applications in AWS Cloud
without worrying about infrastructure that runs those apps.
Upload App, Elastic Beanstalk automatically handles the details 
of capacity provisioning, load balancing, scaling, and application
health monitoring.

### AWS CloudFormation
Service that helps model and set up AWS recources
-spend less time managing these resources, more time on Apps that run
in AWS.
-Create template that describes all AWS recources you want 
(ex. EC2, Amazon RDS DB instances), and AWS CloudFormation takes
care of provisioning & configuring resources for you.
-Don't need to individually create & configure AWS resources
& figure out what's dependent on what;
AWS CloudFormation handles all of that.

### Elastic Beanstalk and CloudFormation
-Both are free, but the resources they provision (ex. EC2 instances)
are not free.
-Difference between the two:
1. Elastic Beanstalk is limited in what it can provision and is not 
programmable.
2. CloudFormation can provision almost any AWS service & is completely
programmable

### Day before exam read:
https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf

### AWS Organization & Consolidated Billing
Linked accounts:
-20 linked accounts only
-To add more visit https://aws-portal.amazon.com/gp/aws/html-forms-controller/contactus/aws-account-and-billing
Billing Alerts:
-When monitoring is enabled on paying account, billing data for all 
linked accounts is included.
-You can still create billing alerts per individual account.
CloudTrail:
-Per AWS account and is enabled per region.
-Can consolidate logs using an S3 bucket:
  1. Turn on CloudTrail in paying account.
  2. Create bucket policy that allows cross-account access.
  3. Turn on CloudTrail in other accounts and use bucket in the paying account.

Consolidated Billing allows you to get volume discounts on all your accounts.

Unused reserved instances for EC2 are applied across the group.

CloudTrail is on a per account and per region basis, but can be aggregated into single
bucket belonging to the paying account.

