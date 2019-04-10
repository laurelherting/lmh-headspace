## Billing and Pricing

### Support Packages
    basic-free
    developer-$29/month (scales based on usage)
    business-$100/month("")
    enterprise-$15,000/month("")-TAM(technical account manager)

### Billing Alerts/ Billing Alarms 
  * Alerts automatically when level has been reached

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
    Doesn't require multiple availability data resilience 
4. S3-Intelligent Tiering
    Optimize costs by auto moving data to most cost-effective tier
5. S3 Glacier
    Very cheap
    Used for archival only
    Expedited, standard or bulk
    Standard retrieval time = 3-5 hours
    Max single archive size: 40TB
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
* S3 is object-based
    ex. allows you to upload files
* files can be 0 bytes - 5tb
* unlimited storage
* files are stored in buckets
* S3 is a universal namespace
    names must be unique globally
    https://s3-eu-west-1.amazonaws.com/acloudguru
* Read after write consistency after PUTS of new objects
* Eventual consistency for overwrite PUTS and DELETES
* NOT suitable to install an operating system on
* Successful uploads generate HTTP 200 status code
* RDS Automated backups stored here

### S3 Tiers
1. S3
Durable, immediately available, frequently accessed
2. S3 - IA
Durable, immediately available, infrequently accessed
3. S3 One Zone - IA 
Even cheaper than IA, but only in 1 availability zone
4. Glacier
Achieved data, where you can wait 3-5 hours before accessing

* Q: Best AWS service to host a file in a location that's publicly
  accessible from anywhere
* A: S3

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

### S3
* Use bucket policies to make entire S3 buckets public
* Can use S3 to host STATIC websites
  * ex. As html
  * Websites that require database connections such as Wordpress etc can’t be hosted on S3

### S3 Scales automatically to meet demand
* Many enterprises will put static websites on S3 when they forsee large # requests 
  * ie. Movie preview

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

### AWS Storage Gateway
* AWS service - acts as a file system mounted on an S3 bucket

### Aurora
* compatible database read replicas 
  * MySQL and PostgreSQL

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

### EC2 - compute based service, not serverless, it's a server!

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

