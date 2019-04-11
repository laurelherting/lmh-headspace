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

### Region, Availability Zone(AZ) & Edge Location
1. Region-physical location in world, consists of 2 or more zones
2. An AZ is one or more discrete data centers, each w/ redundant power,
networking and connectivity, housed in seperate facilities
3. Edge locations are endpoints for AWS which are used for caching content.
Typically consists of: CloudFront, Amazon's CDN.
    ie. #Edge locations > # AZ zones > # regions

### Access AWS platform in three ways
1. Via console
2. Programmatically - Using command line
3. Using Software Developers Kit (SDK)

### Successful upload = HTTP 200 code

### Auto Scaling
* Allows you to provision multiple EC2 instances behind a load balancer automatically 
depending on your demand.
* does not update current resources unless you set UpdatePolicy
* scale out and in based on demand and workload
* automatically balances EC2 instances across zones when you configure
multiple zones in Auto Scaling group settings

### Scaling vs elasticity
Easy to scale in and out for cost saving (elastic) hard to scale up then back down

### Day before exam read:
https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf

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

### Common Ports
Linux = SSH(Port 22)
Microsoft = Remote Desktop Protocol(Port 3389)
HTTP = Port 80
HTTPS = Port 443

