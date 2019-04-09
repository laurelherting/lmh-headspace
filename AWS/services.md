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

