## Cloud Concepts And Technology

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

### Three types of cloud computing deployments
1. Public Cloud - AWS, Azure, GCP
2. Hybrid - Mixture of public & private
3. Private Cloud(Or On Premise) - You manage it, in your datacenter.
    Openstack or Vmware

### Understand difference between region, Availability zone(AZ) & Edge Location
1. Region-physical location in world, consists of 2 or more zones
2. An AZ is one or more discrete data centers, each w/ redundant power,
networking and connectivity, housed in seperate facilities
3. Edge locations are endpoints for AWS which are used for caching content.
Typically consists of: CloudFront, Amazon's CDN.
    ie. #Edge locations > # AZ zones > # regions

## Billing and Pricing

### Understand difference between support packages
    basic-free
    developer-$29/month (scales based on usage)
    business-$100/month("")
    enterprise-$15,000/month("")-TAM(technical account manager)

### Billing Alerts/ Billing Alarms 
Alerts automatically when level has been reached

### IAM is global
Identity Access Management 
Global, don't have to specify region
User or group created globally

### You can access AWS platform in three ways
1. Via console
2. Programmatically - Using command line
3. Using Software Developers Kit (SDK)

### Root Account
* Email address used to create AWS account
* Always has full admin access
* Don’t give these credentials away!
* Instead, create a user for each individual w/in organization
* Always secure root account using MFA

### Group 
A place to store users
    Users inherit all permissions group has
    Examples of groups:
      developers
      System administrators
      Human resources
      finance

### Set permissions
* Need to apply a policy to that group
* Policies consist of Java Script Object Notation (JSON)
* Referred to as key value pairs
* You have your key
* ex. {“name”: “A Cloud Guru”}

### How would you define a policy?
Define it using JSON
Inside of identity access management

### EC2 - compute based service, not serverless, it's a server!

### Use private key to connect EC2

### Security Groups - virtual firewalls in cloud. Need to open ports to use them. 

### Always design for failure - have one EC2 instance in each availability zone.

### Using Roles
    Roles more secure than access key ids
    Secret access keys - easier to manage
    Apply roles to EC2 instances 
    Changes take place immediately
    Universal
    No need to specify region, similar to users

### S3
#### What does a URL look like?
  It’s always S3, then the region, then .amazon.aws.com, then / and the bucket name
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
    For data that’s accessed less frequently, but requires rapid access when needed
    Lower fee than S3, but charged retrieval fee
3. S3 One One -IA
    Lower cost option for infrequently accessed data
    do not require the multiple Availability data resilience 
4. S3 - Intelligent Tiering
    Optimize costs by auto moving data to most cost-effective tier
5. S3 Glacier
    Very cheap
    Used for archival only
    Expedited, standard or bulk
    Standard retrieval time = 3-5 hours
6. S3 Glacier Deep Dive Archive
    Lowest cost storage class
    Retrieval time 12 hours

### S3 Charges
1. storage
2. requests
3. Storage management pricing
4. Data transfer pricing
5. Transfer acceleration

### S3 general
1. S3 is object-based
    ex. allows you to upload files
2. files can be 0 bytes - 5tb
3. unlimited storage
4. files are stored in buckets
5. s3 is a universal namespace
    names must be unique globally
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

### Buckets
    Names share a common name space
      Can’t have the same bucket name as someone else
    View buckets, you view them globally
      can have buckets in individual regions
    Can replicate bucket contents to another bucket automatically by using cross region replication
    Can change storage classes and encryption of objects on the fly

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
    put an object onto them
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
    Websites
5. RTMP
		Media Streaming
		* objects are cached for life of TTL(Time To Live)
		* You can clear cached objects, but you'll be charged

### EC2
    Virtual server in the cloud
    Reduces time required to obtain & boot new server instances to minutes,
    allowing you to quickly scale capacity, both up and down,
    as your computing requirements change

### EC2 Exam Tips
1. On Demand
Pay fixed rate by hour (or by sec) w/ no commitment
2. Reserved
Provides capacity reservation and offer significant discount on hourly charge for an instance 
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

*Good to be aware of instance types, but details won't be on cert exam
*FIGHTDRMCPX
F - FPGA
I - IOPS
G - Graphics
H - High Disk Throughput
T - Cheap general purpose (think T2 Micro)
D - Density
R - RAM
M - Main choice for general purpose apps
C - Compute
P - Graphics(think Pics)
X - Extreme Memory
Fight DR MC PX!

### EBS
*virtual disk, attach to EC2 instance
    Elastic Block Store
    Exam q: less than 2000 IOPS? GP2
    Exam q: huge NoSQL database, a lot of IOPS? Provisioned IOPS SSD
      Not GP2

### SSD
    General purpose SSD(GP2)
      Balances price and performance for wide variety of workloads 
    Provisioned IOPS SSD(IO1)
      Highest-performance SSD volume for mission-critical low-latency
      or high-throughput workloads

### Magnetic
    Throughput Optimized HDD(ST1)
      Low cost HDD volume designed for frequently accessed,
      throughput-intensive workloads
    Cold HDD
      Lowest cost HDD volume designed for less frequently accessed workloads
    Magnetic
      Previous generation
      Can be a boot volume

### Common Ports
Linux=SSH(Port 22)
Microsoft=Remote Desktop Protocol(Port 3389)
HTTP=Port 80
HTTPS=Port 443

### Firewall
*Let everything in 0.0.0.0/0
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
2 key features:
    1. Multi-AZ-for distaster recovery
    2. Read replicas-for performance

### AWS Database Types
* RDS(SQL/OLTP)
    * SQL, MySQL, PostgreSQL, Oracle, Aurora, MariaDB
* DynamoDB(NoSQL)
* Red Shift OLAP
    for business or data warehousing
    fully-managed data warehouse in cloud
* Elasticache
    used to speed up performance of existing databases(frequent identical queries)
    memcached
    redis
* Aurora - relational, high performance, scales well
    two key features:
      1. multi-AZ-for disaster recovery
      2. read replicas-for performance
* DynamoDB
    Fast & flexible NoSQL database service for all applications that need 
    consistent, single-digit millisecond latency at any scale.
    (non-realtional), auto-scaling
* Data Warehousing
    used for business intelligence
    pulls in very large and complex data sets

### Autoscaling
Allows you to provision multiple EC2 instances behind a load balancer automatically 
depending on your demand.

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
* Quickly deploy & manage applications in AWS Cloud
  * automatically handles:
      * capacity provisioning
      * load balancing 
      * scaling
      * application
      * health monitoring

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
* 20 linked accounts only
* To add more visit https://aws-portal.amazon.com/gp/aws/html-forms-controller/contactus/aws-account-and-billing
* Billing Alerts:
  * When monitoring is enabled on paying account, billing data for linked accounts included
* You can still create billing alerts per individual account
* CloudTrail:
  * CloudTrail For auditing, cloudWatch is for performance.
  * Per AWS account and is enabled per region.
  * Can consolidate logs using an S3 bucket:
    * Turn on CloudTrail in paying account.
    * Create bucket policy that allows cross-account access.
    * Turn on CloudTrail in other accounts and use bucket in the paying account.

Consolidated Billing allows you to get volume discounts on all your accounts.

Unused reserved EC2 instances are applied across the group.

CloudTrail is on a per account and per region basis
* Can be grouped into single bucket belonging to the paying account

### AWS Quick Start
Way of deploying evironments quickly, using CloudFormation templates built by
AWS Solutions Architects who are experts in that particular technology.

### AWS Landing Zone 
Solution that helps customers more quickly set up secure, multi-account
AWS environment based on AWS best practices.

### AWS Simple Monthly Calculator
Used to calculate running costs on AWS on a per month basis.
Not a comparison tool.
https://calculator.s3.amazonaws.com/index.html
Examples:
1. More instances = higher monthly cost
2. Type: CPU, memory, & billing options effect cost changes
  - z1d.12xxlarge, 48CPU, 384GiB, billing:onDemand = $362,709.15/month.
  - c5d.large, 2CPU, 4GiB, billing:3yr up front = $1,539.57.

### AWS TCO Calculator 
* Total Cost of Ownership
* Used to compare costs of running your infrastructure on premise vs. in AWS Cloud.
* It will generate reports that can you can give to your C-level execs to make a 
business case to move to the cloud.
* https://aws.amazon.com/tco-calculator
* These come up a lot! 
    Play with both calculators until you are comfortable with them.
* Examples:
  * comparing physical servers - less savings compared to vm.
  when max out #s = 35% savings, $138,064,213.
  using lowest possible #s = 77%, $139,476.
  * comparing vm - greater savings with large outputs
  vm - when max out #s = 71% savings, $604,198,066.
  using lowest possible #s = 79%, $161,158.

### Billing & Pricing Summary
Conclusion:
  While the number & types of services offered by AWS has increased dramatically, philosophy on
  pricing hasn't changed.
  -You pay as you go, pay for what you use, pay less as you use more,
  and pay even less when you reserve capacity. 

*Read before exam: https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf

Remember free services:
  Amazon VPC
  Elastic Beanstalk
  CloudFormation
  Identity Access Management (IAM)
  Auto Scaling
  Opsworks
  Consolidated Billing
    But you do have to pay for resources, like EC2 related to above services

Tags:
Key Value Pairs attached to AWS Resources
Metadata (data about data)
Tags can sometimes be inherited

Resource Groups:
Make it easy to group your resources using the tags that are assigned to them.
You can group resources that share one or more tags.
  Region
  Name
  Health Checks

Resource Groups: apply automation to resources with specific tags
* ie. stopped all EC2 instances in the Stockholm region.

Resource Groups in combination with AWS Systems manager allow you to control and execute
automation against entire fleets of EC2 instances, all at the push of a button.

Tag editor is a global service that allows us to discover resources and to add tags
to them, too.
Newer regions may take some time to be compatible with tag editor.

### Best Practices with AWS Organizations
* Always enable multi-factor authentication on root account
* Always use strong, complex password on root account
* Paying account should be used for billing purposes only
* Don't deploy resources into paying account

## Security in the Cloud

### AWS Shared Responsibility Model
Know inside & out going into exam to pass
    Who's responsible for what with the cloud?
    Remember this summary:

      AWS Responsibility (OF the cloud):
        1. Hardware/AWS Global Instrastructure
          Regions
          Availability Zones
          Edge Locations
        2. Software
          Compute
          Storage
          Database
          Networking

Customer Responsibility (IN the cloud):
* Client-side Data, Encryption & data integrity, authentication
  * Server-side encryption 
      * file system and/ or data
  * Networking traffic, Protection
      * encryption, integrity, identity
  * Operating System, Network, & Firewall Configuration
  * Platform, Applications, Identity & Access Management 
  * Customer Data
 
#### Possible exam q's: 
* Which of the following Compliance certifications attests to
the security of the AWS platform regarding credit card transactions? 
  * *Answer: A PCI DSS Level 1 certification attests to the security
of the AWS platform regarding credit card transactions
* Which of the following Compliance guarantees attests to the fact that the AWS Platform has met the standard required for the secure storage of medical records in the US? 
  *** * Answer: HIPAA 

* read Shared Responsibility Model before exam:
http://aws.amazon.com/compliance/shared-responsibility-model/

### AWS WAF & AWS Shield
* AWS WAF is a Web Application Firewall
  * designed to stop hackers
  * can go down to OSI layer 7
* AWS Shield Advanced 
  * offers automated application 
  * operates @ layer 7 traffic monitoring
* AWS Shield is a DDOS mitigation service
  * designed to stop DDOS attacks
  * turned on by default
  * advanced protection available
    * $3,000/ month

### AWS Inspector & AWS Trusted Advisor
    AWS Inspector:
      Inspects EC2 instances for vulnurabilities
    AWS Trusted Advisor:
      Inspects your AWS Account as a whole (not just EC2)
    Does more than security checks:
      Cost Optimization
      Performance
      Fault Tolerance
    AWS CloudTrail:
      Increases visibility into user & resource activity
      Records AWS Management Console actions & API calls
    Identifies which user and accounts were accessed and source IP address from which the calls were made

### What is horizontal scaling?
* increase in number of resources
  * ie. add more hard drives to storage or servers
  * great for building internet-scale apps

### What is vertical scaling?
  * increase of individual resource
  * Stop an instance, resize it to a different type (ie. more RAM)
  * Can reach a limit
  * costly, but easy to implement, good for short-term

### What AWS resources are often used to create sss applications?
* answer: dynamo db, s3, efs, etc
	* pg.7 white paper:
		*https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf

### Load Balancing cards (additional)
* what is bootstrapping on ec2?
  * Start w/ a default configuration, then execute automated bootstapping actions
      * scripts that install software or copy data to bring that resource to a 
        particular state
* what is a userdata script in ec2?
* what is an AMI?
* what AWS services support using containers?
  * pg. 11 above whitepaper
* what is infrastructure as code?
* What AWS service allows you to use Infrastructure as Code?

### AWS Deck of cards
* Are uploads to s3 buckets public or private by default?
* Do new AMIs created default to public or private?
* Do customers have any access to physical drives on ec2?
* What are some of the delivery options for sns?

### Possible Q
* p. 13 of above whitepaper
  * AWS Elastic Beanstalk: You can use this service to deploy and scaleweb applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.17Developers can simply upload their application code,and the service automatically handles all the details, such as resource provisioning, load balancing, auto scaling, and monitoring.
* Q: What language is not supported by Elastic Beanstalk? 
  A. Java B. PHP C. Ruby D. Nodejs E. Go F. Rust
  * flashcard:
  What major language / frameworks are supported by Elastic Beanstalk?
• Java
• .NET
• PHP
• Node.js
• Python
• Ruby
• Go
• Docker

### Cloudwatch
* What are CloudWatch Events?
  * answer: near real-time stream of system events describing changes in AWS resources

### What is high availability?

### A security group is sss 
* what comes in and is allowed, automatically goes back out

### Network ACLs are stateful 
* If you want to allow access on port 443, you have to add a rule allowing 443 inbound AND add a rule allowing 443 outbound

### Know the diff between an s3 bucket url and an s3 static hosted website address
What does a URL look like?

It's always S3, then the region, then .amazon.aws.com, then / and the bucket name ex. Https://s3-eu-west1.amazonaws.com/acloudguru *Successful upload = HTTP 200 code

### EBS
* You can only attach an EBS volume to 1 EC2 instance 
* An EBS volume cannot be shared with two instances at the same time

### Elastic Load Balancers
* Know the different types offered by AWS, and how they are different at a general level
  • Classic ELB
  • Application Load Balancer
  • Network Load Balancer

* The most important part of an LB is that it's a DNS name that doesn't change 
  * It's not to a static IP address

### Stateless Applications
* What is a stateless application?
  * users/services interact w/ app they interact to form a session
    * session - unique data that exists between requests while they use the app
* Doesn't need info of previous interactions 
* Doesn't store session information
* Provides same response to any end user
* Can scale horizontally 
  * any available compute resources can service any request

### Distribute Load to Multiple Nodes
* use push or pull method
  * push: use ELB to distribute workloads
    * ELB routes incoming application requests across multiple EC2 instances
  * pull: asynchronous, event-driven workloads
    * tasks need to be performed/data that needs to be processed 
        * stored as messages 

### Stateless Components
* Don't store anything that needs to exist for more than a single request in local
* Use AWS Step Functions to centrally store execution history & make workloads stateless

### Stateful Components
* layers that won't turn into stateless components

### Implement Session Affinity
* For HTTP & HTTPS traffic, use sticky session feature of an Application Load Balancer to bind 
a user's session to a specific instance

### Distributing Processing
* Use when processing large amounts of data that can't be handled by a single compute
  resource in a timely manner


