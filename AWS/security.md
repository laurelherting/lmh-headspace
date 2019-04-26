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

### A security group - S3 
* what comes in and is allowed, automatically goes back out

### Network ACLs are stateful 
* To allow access on port 443: 
  add rules allowing 443 for both both inbound AND add outbound traffic

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

### IAM is global
* Identity Access Management 
* Global, don't have to specify region
* User or group created globally

### IAM Password Policy
* Create password Policy in Account Settings 
  * configure IAM Account password Policies

### Access AWS Management Console 
* via url
* https://AWSAccountID.signin.aws.amazon.com/console

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

### Set permissions
* Need to apply a policy to that group
* Policies consist of Java Script Object Notation (JSON)
* Referred to as key value pairs
* You have your key
* ex. {“name”: “A Cloud Guru”}

### Group 
* A place to store users
    Users inherit all permissions group has
    Examples of groups:
      developers
      System administrators
      Human resources
      finance

### Resource Tags
* group resources using assigned tags

### Security Groups 
* Virtual firewalls in cloud
* Need to open ports to use them
* By default block all inbound traffic
* Default NACL in VPC allows all inbound traffic
* Needed bc they protect instances w/ Subnet

### Always design for failure - have one EC2 instance in each availability zone.

### NACLs traffic rules & restrictions - apply to Subnets

### Using IAM Roles
    Roles more secure than access key ids
    Secret access keys - easier to manage
    Apply roles to EC2 instances 
    Changes take place immediately
    Universal-use across any region
    No need to specify region, similar to users
	  Users can explicitly switch roles to perform tasks
    MFA can be added to specific roles

### Firewall
*Let everything in 0.0.0.0/0
To let just one IP in X.X.X.X/32

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

* examples of security in cloud
  * AWS services used with content
  * country stored
 
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

### Windows Password*
* use key pair to decrypt pwd

### Trusted Advisor five Categories
* cost optimization
* security
* performance
* fault tolerance 
* service limits

### Access Advisor
* IAM - identify services used by user, group, role 
* use to locate unncessary permissions

### AWS Config
* generates historical configuration change records
  * used for auditing

### Server-Side Encryption 
* with auditing features:
	* uses AWS Key Management Service
    * Managed Keys - SSE-KMS

### AWS Artifact
* Gives on-demand access to security and compliance reports & agreements
* central resource for compliance-related information 

### VPC
* Only 1 Internet Gateway allowed per VPC

### AWS CloudHSM
* Deals with sensitive information
* helps generate and use encryption keys
* protects keys with single access to HSMs in VPC

### AWS Service Catalog
* create project portfolio
* choose how and who deploys

### Best Practices with AWS Organizations
* Always enable multi-factor authentication on root account
* Always use strong, complex password on root account
* Paying account should be used for billing purposes only
   * Don't deploy resources into paying account

### Network ACLs are stateful 
* To allow access on port 443: 
  * add rules allowing 443 for both both inbound AND add outbound traffic

### Successful upload = HTTP 200 code

### IAM
* Roles
  * more secure than storing access key / secret on individual EC2 Instances
  * Easier to manage
  * Can only be assigned at EC2 instance provision
  * Permissions changes to role happen immediately 
    * affect ones assigned to EC2 Instances
* Create policies:
  * JSON scripting
  * Import a managed policy*
  * visual editor

### IAM Federation
* AWS IAM Identify Federation 
* Use third-party identity providers to authenticate

### IAM Best Practices
http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

* Lock away your AWS account (root) access keys
* Create individual IAM users
* Use groups to assign permissions to IAM users
* Grant least privilege
* Give only needed access: 
  * Principal of least privilege
* Configure a strong password policy for your users
* Enable MFA for privileged users
* Use roles for applications that run on Amazon EC2 instances
* Delegate by using roles instead of by sharing credentials
* Rotate credentials regularly
* Remove unnecessary credentials
* Use policy conditions for extra security
* Monitor activity in your AWS account
* Video presentation about IAM best practices

### A security group - S3 
* what comes in and is allowed, automatically goes back out

### S3 - 11 9’s of durability
* standard storage class
* Glacier
* Infrequently Accessed

### Grant permissions on S3
* both at bucket and individually
  * use bucket policy and Access Control List

### AWS Concierge
* Qs about billing and overall account

### AWS Organizations 
* help consolidate multiple AWS accounts to centrally manage them

### Policies
* configure Policies in AWS Organizations 
* only certain actions can be performed for certain AWS accounts in OUs
* use to restrict actions

### IAM is global
* Identity Access Management 
* Global, don't have to specify region
* User or group created globally

### How would you define a policy?
* Define it using JSON
* Inside of identity access management

### AWS Shared Responsibility Model
* Security benefits:
  * Secure global infrastructure
  * meets compliance requirements
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
 
### AWS WAF & AWS Shield
* AWS WAF is a Web Application Firewall
  * designed to stop hackers
  * can go down to OSI layer 7
  * you can use web application firewall ACL
* AWS Shield Advanced 
  * offers automated application 
  * operates @ layer 7 traffic monitoring
  * advanced protection available
    * $3,000/ month
* AWS Shield is a DDOS mitigation service
  * free DDOS protection
  * turned on by default
  * designed to stop DDOS attacks

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

### EBS
* *Virtual disk, attached to EC2 instance
    Elastic Block Store

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

### What is high availability?
* Amazon RDS
* creates synchronously replicated standby instance in a different AZ

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

### AWS Compliance Certifications
* ISO 27001
* PCI DSS Level 1
* SOC 3

### Bastion Host
* limit access to Bastion host from corporate IP address
  * thus, protect instance from further malicious attacks from anywhere else

### Failover Routing
* Monitor site in US region using Health Checks
  * if they become unhealthy, create a secondary policy to failover to another region

### AWS Customer responsibility
* patch Windows OS
* implement password policies

### Versioning
* Prevents accidental deletion of objects

### AWS Security Qs
* Are uploads to S3 buckets public or private by default? 
  * private
* Do new AMIs created default to public or private?
  * private
* Make AMI available across regions?
  * copy AMI to other regions
* Do customers have any access to physical drives on ec2?
  * yes
* What are some of the delivery options for SNS?
  * HTTP and HTTPS subscription types

* Q: AWS service - run code without concern about provisioning underlying resources?
    * ie. virtual machines, databases
    * Answer: Lambda

### Possible exam security q's: 
1. This Compliance certifications handles security AWS platform for credit card transactions? 
Answer: PCI DSS Level 1 cert
2. This Compliance guarantees AWS Platform has met standard for secure storage of US medical records
Answer: HIPAA 
3. Compliance for data resiliency: never...
Answer: AWS never replicates auto stored s3 data across Regions 
4. Who retains complete control & ownership of your (data) region?
Answer: you do

* EBS Exam questions : 
  * less than 2000 IOPS? GP2
  * huge NoSQL database, a lot of IOPS? Provisioned IOPS SSD
  Not GP2

* read Shared Responsibility Model before exam:
http://aws.amazon.com/compliance/shared-responsibility-model/

