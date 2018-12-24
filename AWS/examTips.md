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
1. Public
2. Hybrid
3. Private cloud

### Know the difference between
1. Regions
2. Availability zones
3. Edge locations 

### IAM is global

###AWS Access Type
1. Programmatic
2. management

### Policies (exam q's)
#### How would you define a policy?
#### Define it using JSON
Inside of identity access management

### You can access AWS platform in 3 ways
#### Via console
Programmatically
#### Using command line
Using Software Developers Kit (SDK)

### Root Account
#### Is email address used to set up account
#### Always has full admin access
#### Don’t give these credentials away!
#### Instead, create a user for each individual w/in organization
#### Always secure root account using MFA

### Group 
#### Place to store users
    1. Users inherit all permissions group has
    2. Examples of groups
        1. developers
        2. System administrators
        3. Human resources
        4. finance

### Set permissions
1. Need to apply a policy to that group
2. Policies consist of Java Script Object Notation (JSON)
    1. Referred to as key value pairs
    2. You have your key
        1. Such as name, then value
            1. ex. {“name”: “A Cloud Guru”}

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
### Can take some time to propagate

### S3 Storage Tiers/ Classes
1. S3 Standard
### 99.99% availability 
Stored across multiple devices in multiple facilities
Designed to sustain loss of 2 facilities concurrently
S3 - IA
    1. Infrequently Accessed
    2. For data that’s accessed less frequently, but requires rapid access when needed
        ### Lower fee than S3, but charged retrieval fee
S3 One One -IA
    1. want lower cost option for infrequently accessed data, but do not require the multiple Availability data resilience 
Glacier
    1. Very cheap
    2. Used for archival only
    3. Expedited, standard or bulk
    4. Standard retrieval time = 3-5 hours

### S3 Charges
1. storage
2. requests
3. Storage management pricing
4. Data transfer pricing
5. Transfer acceleration

### S3 Exam tips
1. S3 is object-based
    ### ex. Allows you to upload files
2. Files can be 0 Bytes - 5TB
3. Unlimited storage
4. Files are stored in buckets
5. S3 is a universal namespace
    ### Names must be unique globally
6. Read after write consistency after PUTS of new objects
7. Eventual consistency for overwrite PUTS and DELETES

### S3 Tiers
1. S3
    ## Durable, immediately available, frequently accessed
2. S3 - IA
    ## Durable, immediately available, infrequently accessed
3. S3 One Zone - IA 
    ## Even cheaper than IA, but only in 1 availability zone
4. Glacier
    ## Achieved data, where you can wait 3-5 hours before accessing

### Core fundamentals of S3
1.Key (name)
2.Value (data)
3.Version ID
4.Metadata
5.Subresources

### ACL
#### Torrent
6. Object-based storage only (for files)
7. NOT suitable to install an operating system on
8. Successful uploads generate HTTP 200 Status code
9. Read S3 FAQs before taking exam
  *It comes up a lot!!!

### Buckets
1. Names share a common name space
2. Can’t have the same bucket name as someone else
3. When you view buckets, you view them globally
    #### But you can have buckets in individual regions
4. Can replicate bucket contents to another bucket automatically by using cross region replication
5. Can change storage classes and encryption of objects on the fly

### S3
#### Can use bucket policies to make entire S3 buckets public
#### Can use S3 to host STATIC websites
    1. ex. As html
    2. Websites that require database connections such as Wordpress etc can’t be hosted on S3
#### S3 Scales automatically to meet demand
    1. Many enterprises will put static websites on S3 when they think there is going to be a large # of requests 
     ex. Movie preview

### CDN 
** Content Delivery Network 
1. Edge location
    1. Location where content will be cached
        1. Seperate to an AWS Region/AZ
2. Origin
    1. Origin of all files that the CDN will distribute
        1. Can either be 
            1. S3 Bucket
            2.  EC2 Instance
            3. Elastic Load Balancer
            4. Route53
3. Distribution
    1. Name given the CDN which consists of collection of Edge locations
4. Web Distribution
    1. Typically used for websites

### EC2
*virtual server in the cloud
1. Elastic Compute Cloud (Amazon EC2)
2. Instance Types
    1. FIGHTDRMCPX
        1. F - FPGA
        2. I - IOPS
        3. G - Graphics
        4. H - High Disk Throughput
        5. T - cheap general purpose (think T2 Micro)
        6. D - Density
        7. R - RAM
        8. M - main choice for general purpose apps
        9. C - Compute
        10. P - Graphics(think Pics)
        11. X - Extreme Memory
    2. Fight DR MC PX!

### EBS
*virtual disk, attach to EC2 instance
1. Elastic Block Store
2. Exam q: less than 2000 IOPS, want GP2
3. Exam q: really big NoSQL database, gonna use a lot of IOPS
    1. Go for Provisioned IOPS SSD
        1. Not GP2
4. Exam tips
    1. On Demand
        1. Allows you to pay a fixed rate by hour (or by sec) w/ no commitment
    2. Reserved
        1. Provides a capacity reservation and offer significant discount on hourly charge for an instance 
            1. 1 or 3 year terms 
    3. Spot
        1. Enables you to bid whatever price you want for instance copacity
            1. Providing for greater savings if your apps have flex start/end times
    4. Dedicated hosts 
        1. Physical EC2 server dedicated for use
        2. Can help reduce costs by allowing you to use your existing server-bound software licenses

### SSD
1. General purpose SSD
    1. Balances price and performance for a wide variety of workloads 
2. Provisioned IOPS SSD
    1. Highest-performance SSD volume for mission-critical low-latency or high-throughput workloads

### Magnetic
1. Throughput Optimized HDD
    1. Low cost HDD volume designed for frequently accessed, throughput-intensive workloads
2. Cold HDD
    1. Lowest cost HDD volume designed for less frequently accessed workloads
3. Magnetic
    1. Previous generation
    2. Can be a boot volume

### Elastic Load Balancers
Three types
1. Application
layer 7 (make intelligent decisions)
2. Network 
extreme performance / static IP Addresses
3. Classic
test & Dev, keep costs low

### RDS
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

Redshift
fully-managed data warehouse in cloud

### Route53 
Amazon DNS Service = Route53
-global, similar to IAm & S3
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

