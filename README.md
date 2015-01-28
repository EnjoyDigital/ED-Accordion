ED Accordion
=========

This plugin creates a very basic accordion with option to show a single item or open multiple items.


###How to use

Include ED Accordion

```html
<script src="js/edAccordion.min.js"></script>
```

###Create your accordion

```html
<div class="accordion-list">
    <div class="accordion">
      <div class="heading">My accordion</div>
      <div class="content">Some content here</div>
    </div>
    <div class="accordion">
      <div class="heading">My accordion</div>
      <div class="content">Some content here</div>
    </div>
</div>
```

###Initialise the plugin

```html
<script>
$(function(){
	$('.accordion .heading').edAccordion();
});
</script>
```

###Options

<table>
	<tr>
		<td><strong>Option</strong></td>
		<td><strong>Default</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td>closeAll</td>
		<td>false</td>
		<td>When set to true only one accordion item can open at a time</td>
	</tr>
</table>
