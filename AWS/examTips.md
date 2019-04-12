### S3
* What does a URL look like?
  * It’s always S3, then the region, then .amazon.aws.com, then / and the bucket name
    ex. Https://s3-eu-west1.amazonaws.com/acloudguru

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

### AWS Quick Start
Way of deploying evironments quickly, using CloudFormation templates built by
AWS Solutions Architects who are experts in that particular technology.

### AWS Landing Zone 
Solution that helps customers more quickly set up secure, multi-account
AWS environment based on AWS best practices.

### What AWS resources are often used to create S3 applications?
* answer: dynamo db, s3, efs, etc
	* pg.7 white paper:
		*https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf

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

### Elastic-Transcoder
*  Use:
  * Media transcoder in the cloud - good for smartphones, etc
* Pricing:
  * Pay per minute, per resolution

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

### EBS
* Q: EC2 instances are types that can be optimized with EBS?
* A: Schedule snapshots of HDD based volumes for periods of low use

### RAID 0 
* Q: EBS volume type for specific task & increase performance of volume?
* A: Stripe volumes together in RAID 0 configuration

### Lifecycle Management
* automatically move objects from one storage to another
  * helps reduce cost

### Geolocation Routing
* directs traffic based on user's location

### Convertible Reserved Instance (RI)
* Change reserved instance with different configuration, Operating System,
and tenancy 
  * target must be of equal / higher value
* no limits on # exchanges 
