### Six advantages of Cloud 
1. Trade capital expense for variable expense
2. Benefit from massive economies of scale
3. Stop guessing about capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centers
6. Go global in minutes

### Entire advantage of Cloud
* Ability to use resources on demand
* Highly available insfrastructure

### Three types of cloud computing
1. IAAS
2. PAAS
3. SAAS

### Three types of cloud computing deployments
1. Public Cloud - AWS, Azure, GCP
2. Hybrid - Mixture of public & private
3. Private Cloud(Or On Premise) - You manage it, in your datacenter.
  * Openstack or Vmware

### Region, Availability Zone(AZ) & Edge Location
* Region-physical location in world
  * consists of 2 or more zones
* An AZ is one or more data centers
  * each w/ redundant power, networking and connectivity
  * housed in seperate facilities
  * Use multi-AZs
    * to increase availablity compared to just one zone
* Edge locations
  * endpoints for caching content

* Typically consists of: CloudFront, Amazon's CDN
  * ie. #Edge locations > # AZ zones > # regions

### Access AWS platform in three ways
1. Via console
2. Programmatically - Using command line
3. Using Software Developers Kit (SDK)
  * Use to call services from programming languages

### Successful upload = HTTP 200 code

### Auto Scaling
* Provision multiple EC2 instances behind a load balancer automatically 
depending on demand
* Does not update current resources unless you set UpdatePolicy
* Scales out and in - based on demand and workload
* Automatically balances EC2 instances across zones when you configure
multiple zones in Auto Scaling group settings
* Configure metric-based rules to add/remove instances from application
* Create new resources on demand / scheduled

### Scaling vs elasticity
* Easy to scale in and out for cost saving (elastic) hard to scale up then back down

### Horizontal Scaling
* Scale by adding more machines
  * increase in number of resources
  * ie. add more hard drives to storage or servers
* Great for building internet-scale apps

### Vertical Scaling
* Scale by adding more power to existing machine
  * ex. CPU, RAM
  * increases resource
* Stop an instance, resize it to a different type (ie. more RAM)
* Can reach a limit
* Costly, but easy to implement, good for short-term

### Common Ports
* Linux 
  * SSH
  * Port 22
* HTTP 
  * Port 80
* HTTPS 
  * Port 443
* Microsoft 
  * Port 3389
  * Remote Desktop Protocol

### Distributing Processing
* Use when processing large amounts of data that can't be handled by single compute
  resource in timely manner

### Loose Coupling
* Designed to reduce interdependencies
  * Change/failure in one component shouldn't affect other components

### Asynchronous Integration
* Form of loose coupling between services
* One component generates events and another consumes them

### Synchronous replication 
* Only acknowledges transaction after stored in primary location and replicas

### Asynchronous replication
* Decouples primary node from its replicas at the expense of introducing replication lag 
  * Changes on primary node are not immediately reflected on its replicas
* Used horizontally

### Quorum-based replication
*  Combines synchronous & asynchronous replication to overcome challenges of large-scale distributed database systems 

### Time To Live (TTL)
* DNS value: 86400 is 24 hours
* Always in Seconds
* keep low: 30 secs to 5 mins (good range)

### DMS
* Spot instance:
  * Project requires 90 hours of computing time
  * No deadline
  * Work can be stopped and restarted without adverse effect 
  * Cost effective
* Migrate an existing database to AWS

### EC2-AMIs
* Acts as template for root volume
* AMIs are Regional
* Can only launch into region from which it is stored
* AMIs can be copied between Regions
* AMIs can be shared privately with specific AWS Account Numbers
* Defaults
	* Newly created AMIs default to Private
* AMIs can be instance-store or EBS backed

### Lifecycle Management
* Automatically move objects from one storage to another
  * Helps reduce cost

### Geolocation Routing
* Directs traffic based on user's location

### Convertible Reserved Instance (RI)
* Change reserved instance with different configuration, Operating System,
and tenancy 
  * target must be of equal / higher value
* No limits on # exchanges 

### SNS
* SMS / Email notifications

### Global Insfrastructure
* Benefit: lower latency

### Current AWS Regions
* N. Virginia, Ohio, N. California, Oregon
* Mumbai, Seoul, Singapore, Sydney
* Tokyo, Osaka-Local, Central, Beijing
* Ningxia, Frankfurt, Ireland
* London, Paris, Stockholm, São Paulo

### Performance Efficiency Pillars
* Monitoring
* Selection
* Trade-offs
* Review

* When considering performance, use these design principles:
  * Serverless architecture
  * Advanced technologies
    * democratize advanced technologies

## Possible Exam Questions

### EBS
* Q: EC2 instances are types that can be optimized with EBS?
* A: Schedule snapshots of HDD based volumes for periods of low use

* Use EBS snapshots to secure data on EBS volumes

### RAID 0 
* Q: EBS volume type for specific task & increase performance of volume?
* A: Stripe volumes together in RAID 0 configuration

### EC2-Spread Placement Group (deployment)
* Q: How to: Deploy clustered application on a small number of EC2 instances.
  The application must be placed across multiple Availability Zones,
  have high speed, low latency communication between each of the nodes,
  and minimize the chance of underlying hardware failure
* A: deploy the EC2 servers in a Spread Placement Group

## Day before exam read:

*** https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf
