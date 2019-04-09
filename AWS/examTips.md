### How would you define a policy?
* Define it using JSON
* Inside of identity access management

### EC2 - compute based service, not serverless, it's a server!

### Use private key to connect EC2

### Security Groups 
* Virtual firewalls in cloud
* Need to open ports to use them
* By default block all inbound traffic
* Default NACL in VPC allows all inbound traffic
* Needed bc they protect instances w/ Subnet

### Always design for failure - have one EC2 instance in each availability zone.

### Using IAM Roles
    Roles more secure than access key ids
    Secret access keys - easier to manage
    Apply roles to EC2 instances 
    Changes take place immediately
    Universal-use across any region
    No need to specify region, similar to users
	  Users can explicitly switch roles to perform tasks
    MFA can be added to specific roles

### S3
* What does a URL look like?
  * It’s always S3, then the region, then .amazon.aws.com, then / and the bucket name
    ex. Https://s3-eu-west1.amazonaws.com/acloudguru

### Successful upload = HTTP 200 code

### S3 Data Consistency Model
* popular exam q
1. Read after write consistency for PUTS of new objects
2. Eventual Consistency for overwrite PUTS and Deletes 
    Can take some time to propagate

### CDN 
**Content Delivery Network 
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
      * example: Adobe flash

### EC2
* Virtual server in the cloud
  * Reduces time required to obtain & boot new server instances to minutes
    * quickly scale capacity, both up and down, to meet computing requirements

### EC2 categories
* On Demand
  * low-cost/flexibible. Pay by hour, no up-front payment or long-term commitment
  * Good for Short-term/spiky workloads that cannot be interrupted
  * Good for test/dev environments
  * No downtime

* Reserved
  * Apps with Steady-state/predictable useage
  * Able to make upfront payments to reduce costs
  * Often a 12-36 month timeframe
  * 1 or 3 year term

* Spot
  * Apps with flexible start/end times
  * Apps that are only feasible at low compute prices
  * Users with urgent computing needs for large amts of addt'l capacity
  * Instances have 120 seconds to shut down

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

* If spot instance is terminated by Amazon EC2, you'll be charged for partial usage
* If you terminate it yourself, you'll be charged for any hour in which the instance ran.

1. Elastic Compute Cloud (Amazon EC2)
2. Instance Types

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

### EBS
* *Virtual disk, attached to EC2 instance
    Elastic Block Store
    Exam q: less than 2000 IOPS? GP2
    Exam q: huge NoSQL database, a lot of IOPS? Provisioned IOPS SSD
      Not GP2

* Zones/regions:
	* Exist in specific AZ Zones NOT across multiple zones
  * stored in multiple physical locations at no addt'l charge
* Consists of:
  * SSD, General Purpose - GP2 (Up to 10,000 IOPS)
  * SSD, Provisioned IOPS - IO1 (More than 10,000 IOPS)
  * HDD, Throughput Optimized - ST1 - frequently accessed workloads
  * HDD, Cold - SC1 - less frequently accessed data
  * HDD, Magnetic - Standard - cheap, infrequently accessed storage

* Q: Thinking of moving an on-premise SQL Server cluster into AWS, 
  using EC2 instances rather than RDS? You need to recommend the most 
  suitable EBS volume type for the cluster to use, and pair it with a
  suitable EC2 instance type. You know that the throughput must be good,
  most important thing is to maintain a consistent level of IOPS under 
  normal load which can increase to a much higher level at busy times. 
  Which EC2 and EBS pairings?
* A: IOPS w/ EC2

### EBS Magnetic
* Throughput Optimized HDD(ST1)
  * Low cost HDD volume designed for frequently accessed,
  throughput-intensive workloads
* Cold HDD
  * Lowest cost HDD volume designed for less frequently accessed workloads
* Previous generation
* Can be a boot volume

### SSD
    General purpose SSD(GP2)
      Balances price and performance for wide variety of workloads 
    Provisioned IOPS SSD(IO1)
      Highest-performance SSD volume for mission-critical low-latency
      or high-throughput workloads

### Common Ports
Linux = SSH(Port 22)
Microsoft = Remote Desktop Protocol(Port 3389)
HTTP = Port 80
HTTPS = Port 443

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

* Know the different types offered by AWS, and how they are different at a general level
  • Classic ELB
  • Application Load Balancer
  • Network Load Balancer

* Most important part of LB: DNS name doesn't change 
  * It's not to a static IP address

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
	* SWAP file
  	* amount of disk storage space reserved on disk if computer runs out of ram	
			* Typical size is = size of total RAM
* Aurora - relational, high performance, scales well
    two key features:
      1. multi-AZ-for disaster recovery
      2. read replicas-for performance
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

### Auto Scaling
* Allows you to provision multiple EC2 instances behind a load balancer automatically 
depending on your demand.
* does not update current resources unless you set UpdatePolicy
* scale out and in based on demand and workload
* automatically balances EC2 instances across zones when you configure
multiple zones in Auto Scaling group settings

### Scaling vs elasticity
Easy to scale in and out for cost saving (elastic) hard to scale up then back down

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
1.EC2 *
2.Lightsail
3.ECR
4.ECS
5.EKS
6.Lambda *
7.Batch
8.Elastic Beanstalk

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

### AWS CloudFormation
Service that helps model and set up AWS recources
  * spend less time managing these resources, more time on Apps that run
in AWS.
  * Create template that describes all AWS recources you want 
(ex. EC2, Amazon RDS DB instances), and AWS CloudFormation takes
care of provisioning & configuring resources for you.
  * Don't need to individually create & configure AWS resources
& figure out what's dependent on what;
    * AWS CloudFormation handles all of that.

### Elastic Beanstalk and CloudFormation
Both are free, but the resources they provision (ex. EC2 instances)
are not free.
* Difference between the two:
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

### CloudTrail
* Used for auditing
* Logs delivered every 5 minutes
* Logs can be grouped into single file / bucket from multiple regions into single bucket
* Per account and per region basis

### CloudFront
* Like a CDN, serves to users based on their IP region
* Edge Locations
  * location where content will be cached
  * separate from AWS Region or AZ
* Origin of files
* Can be S3 Bucket, EC2 Instance, Elastic Load Balancer, or Route 53
* Distribution
  * collection of Edge Locations
* Uses a Time To Live (TTL) to limit lifecyle at Edge Location
* Supports an entire website:
  * dynamic, static, streaming, interactive content
* Requests automatically routed to nearest edge location
* Supports non-AWS origin server as well
* Edge locations can write / PUT an object
* Cache can be cleared but you are charged for the action

### CloudWatch
* What are CloudWatch Events?
  * answer: near real-time stream of system events describing changes in AWS resources
* Standard Monitoring = 5 Minutes (Free)
* Detailed Monitoring = 1 Minute (Pay Extra)
* Comes with Basic and Detailed Monitoring options

* Use Cases
  * create Dashboards
  * create Alarms - like for auto scaling
  * Events - respond to state changes in AWS resources
  * Logs - aggregate, monitor, store logs

* Q: AWS services to use if you'd like to be notified when
  you have crossed a billing threshold?
* A: budgets and cloudwatch

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
** * Read before exam: https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf

* free services:
    * Amazon VPC
    * Elastic Beanstalk
    * CloudFormation
    * Identity Access Management (IAM)
    * Auto Scaling
    * Opsworks
    * Consolidated Billing
        * have to pay for resources, like EC2 related to above services

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

### Best Practices with AWS Organizations
* Always enable multi-factor authentication on root account
* Always use strong, complex password on root account
* Paying account should be used for billing purposes only
* Don't deploy resources into paying account

## Security in the Cloud

### AWS Shared Responsibility Model
* Know inside & out going into exam to pass
  * Who's responsible for what with the cloud?
  * Remember this summary:
    * AWS Responsibility (OF the cloud):
    1.  Hardware/AWS Global Instrastructure
    Regions
    Availability Zones
    Edge Locations
    2.  Software
    Compute
    Storage
    Database
    Networking

  * Customer Responsibility (IN the cloud):
  * Client-side Data, Encryption & data integrity, authentication
    1. Server-side encryption 
    file system and/ or data
    2.  Networking traffic, Protection
    encryption
    integrity
    identity
    3.  Operating System, Network, & Firewall Configuration
    4.  Platform, Applications, Identity & Access Management 
    5.  Customer Data
 
#### Possible exam security q's: 
1. This Compliance certifications handles security AWS platform for credit card transactions? 
Answer: PCI DSS Level 1 cert
2. This Compliance guarantees AWS Platform has met standard for secure storage of US medical records
Answer: HIPAA 

* read Shared Responsibility Model before exam:
http://aws.amazon.com/compliance/shared-responsibility-model/

### AWS WAF & AWS Shield
* AWS WAF is a Web Application Firewall
  * designed to stop hackers
  * can go down to OSI layer 7
  * you can use web application firewall ACL
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
        example: automated service scans to improve security, reduces costs
    Does more than security checks:
      Cost Optimization
      Performance
      Fault Tolerance
    AWS CloudTrail:
      Increases visibility into user & resource activity
      Records AWS Management Console actions & API calls
      Identifies user and accounts were accessed and source IP address calls were made from

    Cost Optimization
      design:
        Transparently attribute expenditure
        Use managed services to reduce cost of ownership
        Trade capital expense for operating expense
        Benefit from economies of scale
        Stop spending money on data center operations
      definition:
        Matched supply and demand: auto scaling, lambda
        Cost-effective resources: ec2 reserved instances, AWS Trust Advisor
        Expenditure awareness: CloudWatch Alarms, SNS
        Optimizing over time: AWS Blog, AWS Trusted Advisor 
      best practices:
        optimally align supply with demand
        Autoscaling, Lambda
        CloudWatch helps to keep track of demand

    CloudWatch Alarm states:
      OK
      alarm
      Insufficient_Data

  * Q: AWS service - run code without concern about provisioning underlying resources?
    * ie. virtual machines, databases
    * Answer: Lambda

### What is horizontal scaling?
* scale by adding more machines
  * increase in number of resources
  * ie. add more hard drives to storage or servers
* great for building internet-scale apps

### What is vertical scaling?
* Scale by adding more power to existing machine
  * ex. CPU, RAM
  * increase of individual resource
* Stop an instance, resize it to a different type (ie. more RAM)
* Can reach a limit
* Costly, but easy to implement, good for short-term

### What AWS resources are often used to create S3 applications?
* answer: dynamo db, s3, efs, etc
	* pg.7 white paper:
		*https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf

### Load Balancing cards (additional)
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

### AWS Security Whitepaper
* Use Key Pairs to:
	* connect SSH EC2 instances
	* create signed URLs w/ CloudFront

* Use X.509 Certificate (PKI) to:
  * public key infrastructure - PKI
	* Digitally sign SOAP requests to AWS APIs
	* Use SSL server cert w/ LB to support HTTPS

* If credentials are lost/forgotten, they cannot be recovered/re-downloaded
	* have to create new

* AWS Supports multiple concurrant keys so you can swap regularly

* Passwords
	* max 128 chars

### AWS Deck of cards
* Are uploads to S3 buckets public or private by default? 
  * private
* Do new AMIs created default to public or private?
  * private
* Do customers have any access to physical drives on ec2?
  * yes
* What are some of the delivery options for SNS?
  * HTTP and HTTPS subscription types

###	Possible Questions:
* p. 13 of above whitepaper
  * Question: Use this service to deploy and scale web applications and services developed
  with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as:
  Apache, Nginx, Passenger, and IIS.17Developers can simply upload their application code, 
  and the service automatically handles all the details, such as: resource provisioning, 
  load balancing, auto scaling, and monitoring.
   Answer: Elastic Beanstalk
* Q: What language is not supported by Elastic Beanstalk? 
  A. Java B. PHP C. Ruby D. Nodejs E. Go F. Rust
   Answer: Rust
* Q: What major language / frameworks are supported by Elastic Beanstalk?
  * Answer:
• Java
• .NET
• PHP
• Node.js
• Python
• Ruby
• Go
• Docker

### What is high availability?
* Amazon RDS
* creates synchronously replicated standby instance in a different AZ

### A security group - S3 
* what comes in and is allowed, automatically goes back out

### Network ACLs are stateful 
* To allow access on port 443: 
  add rules allowing 443 for both both inbound AND add outbound traffic

### Know the difference between S3 bucket url and S3 static hosted website address
* What does a URL look like?
  * It's always S3, then the region, then .amazon.aws.com, then / and the bucket name
    * ex. Https://s3-eu-west1.amazonaws.com/acloudguru *
  
### Successful upload = HTTP 200 code

### EBS
* You can only attach an EBS volume to 1 EC2 instance 
* An EBS volume cannot be shared with two instances at the same time

### Stateless Applications
* What is a stateless application?
  * an application program that doesn't save client data from one session to the next
    * a session constains unique data that exists between requests while they use app
* Doesn't need info of previous interactions 
* Doesn't store session information
* Provides same response to any end user
* Can scale horizontally 
  * any available compute resource can service any request

### Distribute Load to Multiple Nodes
* use push or pull method
  * push: use ELB to distribute workloads
    * ELB routes incoming application requests across multiple EC2 instances
  * configure Network ELB with Static Elastic IP address
  * pull: asynchronous, event-driven workloads
    * tasks need to be performed 
    * data that needs to be processed 
    * stored as messages 

### Stateless Components
* Don't store anything that needs to exist for more than a single request in local
* Use AWS Step Functions to centrally store execution history & make workloads stateless

### Stateful Components
* layers that won't turn into stateless components

### Implement Session Affinity
* aka sticky session
* For HTTP & HTTPS traffic:
  * use Load Balancer to bind 
  user's session to specific instance

### Distributing Processing
* Use when processing large amounts of data that can't be handled by single compute
  resource in timely manner

### Loose Coupling
* designed to reduce interdependencies
  * change/failure in one component shouldn't affect other components

### Asynchronous Integration
* form of loose coupling between services
* one component generates events and another consumes them

### Synchronous replication 
* only acknowledges transaction after its been stored in both primary location
  and its replicas

### Asynchronous replication
* decouples primary node from its replicas at the expense of introducing replication lag 
  * changes on primary node are not immediately reflected on its replicas
* used horizontally

### Quorum-based replication
*  combines synchronous & asynchronous replication to overcome challenges of large-scale distributed database systems 

### EC2-AMIs
* Acts as template for root volume
* AMIs are Regional
* Can only launch into region from which it is stored
* AMIs can be copied between Regions
* AMIs can be shared privately with specific AWS Account Numbers
* Defaults
	* Newly created AMIs default to Private
* AMIs can be instance-store or EBS backed

### Time To Live (TTL)
* DNS value: 86400 is 24 hours
* Always in Seconds
* keep low: 30 secs to 5 mins (good range)

### IAM
* Roles
  * more secure than storing access key / secret on individual EC2 Instances
  * Easier to manage
  * Can only be assigned at EC2 instance provision
  * Permissions changes to role happen immediately 
    * affect ones assigned to EC2 Instances

### IAM Best Practices
http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

* Lock away your AWS account (root) access keys
* Create individual IAM users
* Use groups to assign permissions to IAM users
* Grant least privilege
* Configure a strong password policy for your users
* Enable MFA for privileged users
* Use roles for applications that run on Amazon EC2 instances
* Delegate by using roles instead of by sharing credentials
* Rotate credentials regularly
* Remove unnecessary credentials
* Use policy conditions for extra security
* Monitor activity in your AWS account
* Video presentation about IAM best practices

### Elastic-Transcoder
*  Use:
  * Media transcoder in the cloud - good for smartphones, etc
* Pricing:
  * Pay per minute, per resolution

### EMR
* Web service:
  * makes it easy to process large amounts of data efficiently
  * specifically designed to assist in processing large data sets
* Principles of sound cloud design:
  * Assume *everything* will fail
  * Disposable resources, Infrastructure as code, Scalability.

### DMS
* spot instance:
  * project requires 90 hours of computing time
  * no deadline
  * work can be stopped and restarted without adverse effect 
  * cost effective
* migrate an existing database to AWS

### EC2-Spread Placement Group (deployment)
* Q: How to: Deploy clustered application on a small number of EC2 instances.
  The application must be placed across multiple Availability Zones,
  have high speed, low latency communication between each of the nodes,
  and minimize the chance of underlying hardware failure
* A: deploy the EC2 servers in a Spread Placement Group

### AWS Storage Gateway
* AWS service - acts as a file system mounted on an S3 bucket

### EBS
* Q: EC2 instances are types that can be optimized with EBS?
* A: Schedule snapshots of HDD based volumes for periods of low use

### RAID 0 
* Q: EBS volume type for specific task & increase performance of volume?
* A: Stripe volumes together in RAID 0 configuration

### AWS Rekognition
* video and image

### AWS Snowball
* Secure device
* Transfers large amounts of data in and out of cloud
* offers petabyte-scale data transport solution 
- uses devices designed secure to transfer large # data into and out of Cloud
- workaround for internet

### AWS Athena
* Serverless interactive query service

### Windows Password*
* use key pair to decrypt pwd

### Lifecycle Management
* automatically move objects from one storage to another
  * helps reduce cost

### Grant permissions on S3
* both at bucket and individually
  * use bucket policy and Access Control List

### AWS Concierge
* Qs about billing and overall account

### Aurora
* compatible database read replicas 
  * MySQL and PostgreSQL

### Geolocation Routing
* directs traffic based on user's location

### AWS Organizations 
* help consolidate multiple AWS accounts to centrally manage them

### Policies
* configure Policies in AWS Organizations 
* only certain actions can be performed for certain AWS accounts in OUs
* use to restrict actions

### Trusted Advisor five Categories
* cost optimization
* security
* performance
* fault tolerance 
* service limits

### AWS Config
* generates historical configuration change records
  * used for auditing

### Server-Side Encryption 
* with auditing features:
	* uses AWS Key Management Service
    * Managed Keys - SSE-KMS

### VPC
* Only 1 Internet Gateway allowed per VPC

### AWS Service Catalog
* create project portfolio
* choose how and who deploys

### Convertible Reserved Instance (RI)
* Change reserved instance with different configuration, Operating System,
and tenancy 
  * target must be of equal / higher value
* no limits on # exchanges 

### IAM is global
* Identity Access Management 
* Global, don't have to specify region
* User or group created globally

### You can access AWS platform in three ways
1. Via console
2. Programmatically - Using command line
3. Using Software Developers Kit (SDK)
