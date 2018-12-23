### FORM ELEMENT
wraps elements that go inside
Example #1, post - server, front end code
<form action=“index.html” method=“post”></form>

### INPUT ELEMENT
person can type in his/her name-input element 
Example #1, name, email, pwd
<h1>Sign Up</h1>
<input type=“text” id=“name” “user_name”>
<input type=“email” id=“email” “user_email”>
<input type=“password” id=“password”=“password”>

### TEXT AREA ELEMENT
area for text,
Example #1, bio
<textarea id=“bio” name=“user_bio”></textarea>

### BUTTON ELEMENT
Example #1, submit button
<button>Submit Comment</button>
Example #2, 
<button type=“submit”>Submit Comment</button>

### LABEL ELEMENT
Example #1, label for name
<label for=“name”>Name:</label>
Example #2, label comment
<label for="comment"> comment: </label>
Example #3, label email
<label for="email"> Email: </label>

### FIELDSETS & LEGENDS
grouping
Example #1, group and number, basic info
<fieldset>
     <legend><Span class=“number”>1</span> Your basic info</legend> 
</fieldset>
Example #2, number 2, your profile
<fieldset>
     <legend><Span class=“number”>2</span> Your profile</legend> 
</fieldset>

### SELECT MENUS
select element, option value, 
Example #1, 
<option value=’frontend_developer”>Front-End developer</option>
<option value=’php_developer”>PHP developer</option>
<option value=’python_developer”>Python developer</option>
Example #2, opt group, wrap info inside <optgroup>
<optgroup> label=“Mobile”></optgroup>

### RADIO BUTTONS
const RadioButton = () => (
  <div align="center">
    <input type="radio" name="group1" value="Hot"/>
  </div>
);

### CHECKBOXES
When group of predefined options where user can select multiple items, use checkboxes
Example #1, checkbox, labeled: development, design, & Business.
<label>Interests:</label>
<input type=“checkbox” id=“development” value=“interest_development” name=“user_interest”><label class=“light” for=“development”>Development</label>


<input type=“checkbox” id=“design” value=“interest_design” name=“user_interest”><label class=“light” for=“design”>Design</label>


<input type=“checkbox” id=“business” value=“interest_business” name=“user_interest”><label class=“light” for=“business”>Business</label>
