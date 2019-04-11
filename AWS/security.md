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
 
### Possible exam security q's: 
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

### Windows Password*
* use key pair to decrypt pwd

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

### Best Practices with AWS Organizations
* Always enable multi-factor authentication on root account
* Always use strong, complex password on root account
* Paying account should be used for billing purposes only
* Don't deploy resources into paying account

### AWS Security Qs
* Are uploads to S3 buckets public or private by default? 
  * private
* Do new AMIs created default to public or private?
  * private
* Do customers have any access to physical drives on ec2?
  * yes
* What are some of the delivery options for SNS?
  * HTTP and HTTPS subscription types

### A security group - S3 
* what comes in and is allowed, automatically goes back out

### Network ACLs are stateful 
* To allow access on port 443: 
  add rules allowing 443 for both both inbound AND add outbound traffic

### Successful upload = HTTP 200 code

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

